import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import { ArrowLeft, Play, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '@/components/ui/misc/section-heading';
import { FloatingStatCard } from '@/components/ui/misc/floating-stat-card';
import { StackedImage } from '@/components/ui/misc/stacked-image';
import ResponsiveImage from '@/components/ui/misc/responsive-image';
import { buttonVariants } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface RichTextBlock  { type: 'rich_text';  data: { content: string; max_width?: string; darker_background?: boolean } }
interface ImageBlock     { type: 'image';      data: { image: string; image_url: string; caption?: string; alt?: string; darker_background?: boolean } }
interface GalleryBlock   { type: 'gallery';    data: { images: string[]; image_urls: string[]; caption?: string; darker_background?: boolean; heading?: string; subheading?: string; description?: string; } }
interface VideoBlock     { type: 'video';      data: { url: string; caption?: string; darker_background?: boolean; heading?: string; subheading?: string; description?: string; } }
interface CtaBlock       { type: 'cta';        data: { heading: string; text?: string; button_label: string; button_url: string; darker_background?: boolean } }
interface MediaTextBlock { type: 'media_text'; data: { heading?: string; subheading?: string; content?: string; button_label?: string; button_url?: string; images: string[]; image_urls?: string[]; image_position: 'left' | 'right'; stat_card_value?: string; stat_card_label?: string; darker_background?: boolean; } }

type ContentBlock = RichTextBlock | ImageBlock | GalleryBlock | VideoBlock | CtaBlock | MediaTextBlock;

interface Service {
    id: number;
    title: string;
    slug: string;
    short_description: string | null;
    description: string | null;
    featured_image_url: string | null;
    featured_image_srcset?: string | null;
    content_blocks: ContentBlock[];
}

// ─── Video Embed Helper ───────────────────────────────────────────────────────

function getEmbedUrl(url: string): string | null {
    try {
        const u = new URL(url);
        if (u.hostname.includes('youtube.com') || u.hostname.includes('youtu.be')) {
            const id = u.searchParams.get('v') ?? u.pathname.split('/').pop();
            return `https://www.youtube.com/embed/${id}`;
        }
        if (u.hostname.includes('vimeo.com')) {
            const id = u.pathname.split('/').pop();
            return `https://player.vimeo.com/video/${id}`;
        }
    } catch {
        // invalid URL
    }
    return null;
}

// ─── Block Renderers ──────────────────────────────────────────────────────────

function RichTextRenderer({ data }: { data: RichTextBlock['data'] }) {
    const maxWidthClass = data.max_width || 'max-w-none';
    return (
        <div
            className={`prose prose-neutral dark:prose-invert mx-auto ${maxWidthClass}
                       prose-headings:font-black prose-headings:tracking-[0.35px] prose-headings:uppercase prose-headings:text-foreground prose-headings:leading-[1.1]
                       prose-h1:text-4xl lg:prose-h1:text-5xl
                       prose-h2:text-4xl lg:prose-h2:text-5xl
                       prose-h3:text-2xl lg:prose-h3:text-3xl
                       prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed
                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                       prose-blockquote:border-primary prose-blockquote:text-muted-foreground`}
            dangerouslySetInnerHTML={{ __html: data.content }}
        />
    );
}

function ImageRenderer({ data }: { data: ImageBlock['data'] }) {
    return (
        <figure className="overflow-hidden">
            <div className="aspect-16/10 sm:aspect-16/9 max-h-[75vh] w-full overflow-hidden rounded-xl border border-border/50 bg-muted">
                <ResponsiveImage
                    source={data.image_url}
                    alt={data.alt || data.caption || 'Teemane Heavy Haulage project photography'}
                    className="w-full h-full object-cover object-center"
                />
            </div>
            {data.caption && (
                <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                    {data.caption}
                </figcaption>
            )}
        </figure>
    );
}

function GalleryRenderer({ data }: { data: GalleryBlock['data'] }) {
    const [lightbox, setLightbox] = useState<number | null>(null);
    const urls = data.image_urls ?? [];

    const slides = urls.map(url => ({ src: url }));

    return (
        <div className="space-y-12">
            {(data.heading || data.subheading || data.description) && (
                <SectionHeading align="left" label={data.subheading} title={data.heading}>
                    {data.description && <p className="whitespace-pre-wrap">{data.description}</p>}
                </SectionHeading>
            )}
            <figure>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {urls.map((url, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => setLightbox(i)}
                        aria-label={`Open ${data.heading || 'gallery'} image ${i + 1} in lightbox`}
                        className="cursor-pointer aspect-4/3 sm:aspect-square overflow-hidden rounded-xl bg-muted border border-border/50 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        <ResponsiveImage
                            source={url}
                            alt={`${data.heading || 'Project gallery'} image ${i + 1}`}
                            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        />
                    </button>
                ))}
            </div>
            {data.caption && (
                <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                    {data.caption}
                </figcaption>
            )}

            {/* Lightbox */}
            <Lightbox
                open={lightbox !== null}
                close={() => setLightbox(null)}
                index={lightbox ?? 0}
                slides={slides}
            />
        </figure>
        </div>
    );
}

function VideoRenderer({ data }: { data: VideoBlock['data'] }) {
    const embedUrl = getEmbedUrl(data.url);

    return (
        <div className="space-y-12">
            {(data.heading || data.subheading || data.description) && (
                <SectionHeading align="left" label={data.subheading} title={data.heading}>
                    {data.description && <p className="whitespace-pre-wrap">{data.description}</p>}
                </SectionHeading>
            )}
            <figure>
                {embedUrl ? (
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                    <iframe
                        src={embedUrl}
                        title={data.caption ?? 'Video'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    />
                </div>
            ) : (
                <a
                    href={data.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-primary hover:underline"
                >
                    <Play className="w-5 h-5" />
                    {data.caption ?? data.url}
                </a>
            )}
            {data.caption && embedUrl && (
                <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                    {data.caption}
                </figcaption>
            )}
        </figure>
        </div>
    );
}

function CtaRenderer({ data }: { data: CtaBlock['data'] }) {
    const isExternal = data.button_url.startsWith('http');

    return (
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-foreground mb-2">
                    {data.heading}
                </h3>
                {data.text && (
                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{data.text}</p>
                )}
            </div>
            {isExternal ? (
                <a
                    href={data.button_url}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({ size: 'xl', className: 'shrink-0' })}
                >
                    <span>{data.button_label}</span>
                    <ArrowRight className="w-4 h-4" />
                </a>
            ) : (
                <Link
                    href={data.button_url}
                    prefetch="hover"
                    className={buttonVariants({ size: 'xl', className: 'shrink-0' })}
                >
                    <span>{data.button_label}</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>
            )}
        </div>
    );
}

function MediaTextRenderer({ data }: { data: MediaTextBlock['data'] }) {
    const isImageLeft = data.image_position === 'left';
    const urls = data.image_urls ?? [];
    const hasMultiple = urls.length > 1;

    return (
        <div className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center ${isImageLeft ? 'md:flex-row-reverse' : ''}`}>
            {/* Text Content */}
            <div className="flex-1 min-w-0 w-full space-y-6">
                {(data.heading || data.subheading) && (
                    <SectionHeading align={`left`} label={data.subheading} title={data.heading}/>
                )}
                {data.content && (
                    <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground
                                    prose-headings:font-black prose-headings:tracking-[0.35px] prose-headings:uppercase prose-headings:text-foreground prose-headings:leading-[1.1]
                                    prose-h1:text-4xl lg:prose-h1:text-5xl
                                    prose-h2:text-4xl lg:prose-h2:text-5xl
                                    prose-h3:text-2xl lg:prose-h3:text-3xl
                                    prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed
                                    prose-a:text-primary hover:prose-a:underline" dangerouslySetInnerHTML={{ __html: data.content }} />
                )}
                {data.button_label && data.button_url && (
                    data.button_url.startsWith('http') ? (
                        <a
                            href={data.button_url}
                            target="_blank"
                            rel="noreferrer"
                            className={buttonVariants({ size: 'xl' })}
                        >
                            <span>{data.button_label}</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    ) : (
                        <Link
                            href={data.button_url}
                            prefetch="hover"
                            className={buttonVariants({ size: 'xl' })}
                        >
                            <span>{data.button_label}</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    )
                )}
            </div>

            {/* Media Content */}
            <div className="flex-1 min-w-0 w-full aspect-4/3 sm:aspect-16/10 md:aspect-auto md:h-112 lg:h-125 relative group">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl relative bg-muted border border-border/50">
                    {hasMultiple ? (
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            loop={true}
                            className="w-full h-full"
                            style={{
                                '--swiper-theme-color': 'var(--primary)',
                                '--swiper-navigation-size': '24px',
                                '--swiper-navigation-color': 'white',
                                '--swiper-pagination-color': 'var(--primary)',
                                '--swiper-pagination-bullet-inactive-color': 'rgba(255, 255, 255, 0.7)',
                                '--swiper-pagination-bullet-inactive-opacity': '1',
                            } as React.CSSProperties}
                        >
                            {urls.map((url, i) => (
                                <SwiperSlide key={i}>
                                    <ResponsiveImage
                                        source={url}
                                        alt={`${data.heading || 'Service showcase'} slide ${i + 1}`}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : urls.length === 1 ? (
                        <ResponsiveImage
                            source={urls[0]}
                            alt={data.heading || 'Service showcase image'}
                            className="w-full h-full object-cover object-center"
                        />
                    ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                            <span className="text-muted-foreground text-sm uppercase tracking-widest">No Image</span>
                        </div>
                    )}
                </div>

                {data.stat_card_value && data.stat_card_label && (
                    <FloatingStatCard
                        value={data.stat_card_value}
                        label={data.stat_card_label}
                        position={isImageLeft ? 'bottom-right' : 'bottom-left'}
                    />
                )}
            </div>
        </div>
    );
}

function ContentBlock({ block }: { block: ContentBlock }) {
    switch (block.type) {
        case 'rich_text': return <RichTextRenderer data={block.data} />;
        case 'image':     return <ImageRenderer data={block.data} />;
        case 'gallery':   return <GalleryRenderer data={block.data} />;
        case 'video':     return <VideoRenderer data={block.data} />;
        case 'cta':       return <CtaRenderer data={block.data} />;
        case 'media_text':return <MediaTextRenderer data={block.data} />;
        default:          return null;
    }
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero({ service }: { service: Service }) {
    return (
        <section className="relative border-b border-border bg-background overflow-hidden isolate pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-28">
            <div aria-hidden="true" className="page-header-radial absolute inset-0 pointer-events-none select-none -z-10" />

            <Wrapper className="relative z-10">
                <div className={`grid grid-cols-1 ${service.featured_image_url ? 'lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16' : ''} items-center`}>
                    <div className={service.featured_image_url ? 'lg:col-span-5' : 'max-w-3xl'}>
                        <Link
                            href="/services"
                            prefetch="hover"
                            className="cursor-pointer inline-flex items-center text-xs font-black tracking-[0.18em] uppercase text-muted-foreground hover:text-primary mb-6 sm:mb-8 transition-colors gap-2"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Services
                        </Link>
                        <SectionHeading
                            label="Service Profile"
                            title={service.title}
                            align="left"
                            className="mb-0"
                        >
                            {service.description && (
                                <div
                                    className="prose prose-sm sm:prose lg:prose-lg max-w-none dark:prose-invert text-muted-foreground"
                                    dangerouslySetInnerHTML={{ __html: service.description }}
                                />
                            )}
                        </SectionHeading>
                    </div>

                    {service.featured_image_url && (
                        <div className="lg:col-span-7 flex justify-center lg:justify-end">
                            <StackedImage
                                src={service.featured_image_url}
                                srcSet={service.featured_image_srcset || undefined}
                                sizes="(max-width: 1023px) calc(100vw - 2.5rem), 54vw"
                                priority
                                alt={service.title}
                            />
                        </div>
                    )}
                </div>
            </Wrapper>
        </section>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Show({ service }: { service: Service }) {
    const hasBlocks = service.content_blocks && service.content_blocks.length > 0;

    return (
        <AppLayout
            title={service.title}
            description={service.short_description || service.description?.substring(0, 160)}
            image={service.featured_image_url || undefined}
        >
            <Hero service={service} />

            {/* Content Blocks */}
            {hasBlocks && (
                <div className="flex flex-col">
                    {service.content_blocks.map((block, i) => {
                        const isDark = block.data.darker_background;

                        return (
                            <div key={i} className={`w-full py-16 md:py-24 ${isDark ? 'bg-muted border-y border-border' : ''}`}>
                                <Wrapper>
                                    <ContentBlock block={block} />
                                </Wrapper>
                            </div>
                        );
                    })}
                </div>
            )}
        </AppLayout>
    );
}
