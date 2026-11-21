import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '@/components/ui/misc/section-heading';
import { FloatingStatCard } from '@/components/ui/misc/floating-stat-card';
import { StackedImage } from '@/components/ui/misc/stacked-image';
import ResponsiveImage from '@/components/ui/misc/responsive-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// ─── Types ────────────────────────────────────────────────────────────────────

interface RichTextBlock {
    type: 'rich_text';
    data: { content: string; max_width?: string; darker_background?: boolean };
}
interface ImageBlock {
    type: 'image';
    data: { image: string; image_url: string; caption?: string; alt?: string; darker_background?: boolean };
}
interface GalleryBlock {
    type: 'gallery';
    data: {
        images: string[];
        image_urls: string[];
        caption?: string;
        darker_background?: boolean;
        heading?: string;
        subheading?: string;
        description?: string;
    };
}
interface VideoBlock {
    type: 'video';
    data: {
        url: string;
        caption?: string;
        darker_background?: boolean;
        heading?: string;
        subheading?: string;
        description?: string;
    };
}
interface CtaBlock {
    type: 'cta';
    data: { heading: string; text?: string; button_label: string; button_url: string; darker_background?: boolean };
}
interface MediaTextBlock {
    type: 'media_text';
    data: {
        heading?: string;
        subheading?: string;
        content?: string;
        button_label?: string;
        button_url?: string;
        images: string[];
        image_urls?: string[];
        image_position: 'left' | 'right';
        stat_card_value?: string;
        stat_card_label?: string;
        darker_background?: boolean;
    };
}

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
            className={`prose prose-neutral mx-auto dark:prose-invert ${maxWidthClass}
                       prose-headings:leading-[1.1] prose-headings:font-black prose-headings:tracking-[0.35px] prose-headings:text-foreground prose-headings:uppercase
                       prose-h1:text-4xl lg:prose-h1:text-5xl
                       prose-h2:text-4xl lg:prose-h2:text-5xl
                       prose-h3:text-2xl lg:prose-h3:text-3xl
                       prose-p:text-lg prose-p:leading-relaxed prose-p:text-muted-foreground
                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                       prose-blockquote:border-primary prose-blockquote:text-muted-foreground`}
            dangerouslySetInnerHTML={{ __html: data.content }}
        />
    );
}

function ImageRenderer({ data }: { data: ImageBlock['data'] }) {
    return (
        <figure className="overflow-hidden">
            <div className="bento-glass-card relative rounded-3xl p-1.5 sm:p-2">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/85 to-transparent dark:via-sky-200/60"
                />
                <div className="aspect-16/10 max-h-[75vh] w-full overflow-hidden rounded-2xl border border-sky-400/25 bg-muted sm:aspect-16/9">
                    <ResponsiveImage
                        source={data.image_url}
                        alt={data.alt || data.caption || 'Teemane Heavy Haulage project photography'}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            </div>
            {data.caption && (
                <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
                    {data.caption}
                </figcaption>
            )}
        </figure>
    );
}

function GalleryRenderer({ data }: { data: GalleryBlock['data'] }) {
    const [lightbox, setLightbox] = useState<number | null>(null);
    const urls = data.image_urls ?? [];

    const slides = urls.map((url) => ({ src: url }));

    return (
        <div className="space-y-12">
            {(data.heading || data.subheading || data.description) && (
                <SectionHeading align="left" label={data.subheading} title={data.heading}>
                    {data.description && <p className="whitespace-pre-wrap">{data.description}</p>}
                </SectionHeading>
            )}
            <figure>
                <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {urls.map((url, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setLightbox(i)}
                            aria-label={`Open ${data.heading || 'gallery'} image ${i + 1} in lightbox`}
                            className="bento-glass-card group relative aspect-4/3 cursor-pointer overflow-hidden rounded-2xl p-1 transition-all duration-300 hover:-translate-y-0.5 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none sm:aspect-square"
                        >
                            <div className="relative h-full w-full overflow-hidden rounded-xl border border-sky-400/20 bg-muted">
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/80 to-transparent"
                                />
                                <ResponsiveImage
                                    source={url}
                                    alt={`${data.heading || 'Project gallery'} image ${i + 1}`}
                                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                />
                            </div>
                        </button>
                    ))}
                </div>
                {data.caption && (
                    <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
                        {data.caption}
                    </figcaption>
                )}

                {/* Lightbox */}
                <Lightbox open={lightbox !== null} close={() => setLightbox(null)} index={lightbox ?? 0} slides={slides} />
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
                    <div className="bento-glass-card relative rounded-3xl p-1.5 sm:p-2">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/85 to-transparent dark:via-sky-200/60"
                        />
                        <div className="relative aspect-video overflow-hidden rounded-2xl border border-sky-400/25 bg-black">
                            <iframe
                                src={embedUrl}
                                title={data.caption ?? 'Video'}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 h-full w-full"
                            />
                        </div>
                    </div>
                ) : (
                    <a
                        href={data.url}
                        target="_blank"
                        rel="noreferrer"
                        className="bento-glass-card inline-flex items-center gap-3 rounded-xl px-5 py-3 text-sm font-bold text-primary transition-all duration-200 hover:-translate-y-0.5 dark:text-sky-300"
                    >
                        <Play className="h-5 w-5" />
                        <span>{data.caption ?? data.url}</span>
                    </a>
                )}
                {data.caption && embedUrl && (
                    <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
                        {data.caption}
                    </figcaption>
                )}
            </figure>
        </div>
    );
}

function CtaRenderer({ data }: { data: CtaBlock['data'] }) {
    const isExternal = data.button_url.startsWith('http');
    const buttonClasses =
        'emergency-cta-glass group relative inline-flex h-12 shrink-0 items-center justify-center gap-2.5 overflow-hidden rounded-xl px-8 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-0.5';

    return (
        <div className="scroll-divider-surface relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-sky-400/35 p-8 text-white shadow-2xl md:flex-row md:items-center md:p-12">
            <div aria-hidden="true" className="footer-corona pointer-events-none absolute inset-0" />
            <div aria-hidden="true" className="footer-dots pointer-events-none absolute inset-0" />
            <div aria-hidden="true" className="nav-canopy-hazard pointer-events-none absolute inset-x-0 top-0 h-1.5" />
            <div aria-hidden="true" className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px" />
            <div
                aria-hidden="true"
                className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-85"
            />

            <div className="relative z-10 flex-1">
                <h3 className="mb-2 font-heading text-2xl font-black tracking-tight text-white uppercase sm:text-3xl">
                    {data.heading}
                </h3>
                {data.text && <p className="text-base leading-relaxed text-sky-100/80 sm:text-lg">{data.text}</p>}
            </div>

            {isExternal ? (
                <a href={data.button_url} target="_blank" rel="noreferrer" className={buttonClasses}>
                    <span aria-hidden="true" className="emergency-cta-glass-flare pointer-events-none absolute inset-0" />
                    <span className="relative z-10">{data.button_label}</span>
                    <ArrowRight className="relative z-10 h-4 w-4 text-sky-200 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            ) : (
                <Link href={data.button_url} prefetch="hover" className={buttonClasses}>
                    <span aria-hidden="true" className="emergency-cta-glass-flare pointer-events-none absolute inset-0" />
                    <span className="relative z-10">{data.button_label}</span>
                    <ArrowRight className="relative z-10 h-4 w-4 text-sky-200 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            )}
        </div>
    );
}

function MediaTextRenderer({ data }: { data: MediaTextBlock['data'] }) {
    const isImageLeft = data.image_position === 'left';
    const urls = data.image_urls ?? [];
    const hasMultiple = urls.length > 1;
    const buttonClasses =
        'emergency-cta-glass group relative inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-xl px-8 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-0.5';

    return (
        <div
            className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 ${isImageLeft ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Text Content */}
            <div className="w-full min-w-0 flex-1 space-y-6">
                {(data.heading || data.subheading) && (
                    <SectionHeading align="left" label={data.subheading} title={data.heading} />
                )}
                {data.content && (
                    <div
                        className="prose prose-neutral max-w-none text-muted-foreground dark:prose-invert
                                   prose-headings:leading-[1.1] prose-headings:font-black prose-headings:tracking-[0.35px] prose-headings:text-foreground prose-headings:uppercase
                                   prose-h1:text-4xl lg:prose-h1:text-5xl
                                   prose-h2:text-4xl lg:prose-h2:text-5xl
                                   prose-h3:text-2xl lg:prose-h3:text-3xl
                                   prose-p:text-lg prose-p:leading-relaxed prose-p:text-muted-foreground
                                   prose-a:text-primary hover:prose-a:underline"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                    />
                )}
                {data.button_label &&
                    data.button_url &&
                    (data.button_url.startsWith('http') ? (
                        <a href={data.button_url} target="_blank" rel="noreferrer" className={buttonClasses}>
                            <span
                                aria-hidden="true"
                                className="emergency-cta-glass-flare pointer-events-none absolute inset-0"
                            />
                            <span className="relative z-10">{data.button_label}</span>
                            <ArrowRight className="relative z-10 h-4 w-4 text-sky-200 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    ) : (
                        <Link href={data.button_url} prefetch="hover" className={buttonClasses}>
                            <span
                                aria-hidden="true"
                                className="emergency-cta-glass-flare pointer-events-none absolute inset-0"
                            />
                            <span className="relative z-10">{data.button_label}</span>
                            <ArrowRight className="relative z-10 h-4 w-4 text-sky-200 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    ))}
            </div>

            {/* Media Content — Frosted Glass Display Bezel */}
            <div className="group relative w-full min-w-0 flex-1 pb-8 md:pb-0">
                <div className="bento-glass-card relative rounded-3xl p-1.5 sm:p-2">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/85 to-transparent dark:via-sky-200/60"
                    />
                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-sky-400/25 bg-muted shadow-lg sm:aspect-16/10 md:aspect-auto md:h-112 lg:h-125">
                        {hasMultiple ? (
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation
                                pagination={{ clickable: true }}
                                loop={true}
                                className="h-full w-full"
                                style={
                                    {
                                        '--swiper-theme-color': '#38bdf8',
                                        '--swiper-navigation-size': '24px',
                                        '--swiper-navigation-color': '#e0f2fe',
                                        '--swiper-pagination-color': '#38bdf8',
                                        '--swiper-pagination-bullet-inactive-color': 'rgba(255, 255, 255, 0.7)',
                                        '--swiper-pagination-bullet-inactive-opacity': '1',
                                    } as React.CSSProperties
                                }
                            >
                                {urls.map((url, i) => (
                                    <SwiperSlide key={i}>
                                        <ResponsiveImage
                                            source={url}
                                            alt={`${data.heading || 'Service showcase'} slide ${i + 1}`}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : urls.length === 1 ? (
                            <ResponsiveImage
                                source={urls[0]}
                                alt={data.heading || 'Service showcase image'}
                                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center bg-muted">
                                <span className="text-sm tracking-widest text-muted-foreground uppercase">
                                    No Image
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {data.stat_card_value && data.stat_card_label && (
                    <FloatingStatCard
                        value={data.stat_card_value}
                        label={data.stat_card_label}
                        position={isImageLeft ? 'bottom-right' : 'bottom-left'}
                        glass="realglass"
                    />
                )}
            </div>
        </div>
    );
}

function ContentBlock({ block }: { block: ContentBlock }) {
    switch (block.type) {
        case 'rich_text':
            return <RichTextRenderer data={block.data} />;
        case 'image':
            return <ImageRenderer data={block.data} />;
        case 'gallery':
            return <GalleryRenderer data={block.data} />;
        case 'video':
            return <VideoRenderer data={block.data} />;
        case 'cta':
            return <CtaRenderer data={block.data} />;
        case 'media_text':
            return <MediaTextRenderer data={block.data} />;
        default:
            return null;
    }
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero({ service }: { service: Service }) {
    return (
        <section className="capabilities-glass-stage relative isolate overflow-hidden border-b border-sky-500/15 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28">
            <div aria-hidden="true" className="capabilities-stage-dots pointer-events-none absolute inset-0" />
            <div
                aria-hidden="true"
                className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-50"
            />

            <Wrapper className="relative z-10">
                <div
                    className={`grid grid-cols-1 items-center ${service.featured_image_url ? 'gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16' : ''}`}
                >
                    <div className={service.featured_image_url ? 'lg:col-span-5' : 'max-w-3xl'}>
                        <Link
                            href="/services"
                            prefetch="hover"
                            className="bento-glass-card group relative mb-6 inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-full px-4 py-2 text-xs font-black tracking-[0.18em] text-foreground uppercase transition-all duration-300 hover:-translate-y-0.5 hover:text-primary sm:mb-8 dark:hover:text-sky-200"
                        >
                            <span
                                aria-hidden="true"
                                className="bento-glass-card-flare pointer-events-none absolute inset-0"
                            />
                            <ArrowLeft className="relative z-10 h-3.5 w-3.5 text-primary transition-transform duration-200 group-hover:-translate-x-0.5 dark:text-sky-300" />
                            <span className="relative z-10">Back to Services</span>
                        </Link>

                        <SectionHeading label="Service Profile" title={service.title} align="left" className="mb-0">
                            {service.description && (
                                <div
                                    className="prose prose-sm max-w-none text-muted-foreground sm:prose lg:prose-lg dark:prose-invert"
                                    dangerouslySetInnerHTML={{ __html: service.description }}
                                />
                            )}
                        </SectionHeading>
                    </div>

                    {service.featured_image_url && (
                        <div className="flex justify-center lg:col-span-7 lg:justify-end">
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
                            <div
                                key={i}
                                className={
                                    isDark
                                        ? 'capabilities-glass-stage relative w-full overflow-x-clip border-y border-sky-500/15 py-16 md:py-24'
                                        : 'relative w-full overflow-x-clip bg-background py-16 md:py-24'
                                }
                            >
                                {isDark && (
                                    <>
                                        <div
                                            aria-hidden="true"
                                            className="capabilities-stage-dots pointer-events-none absolute inset-0"
                                        />
                                        <div
                                            aria-hidden="true"
                                            className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px opacity-45"
                                        />
                                        <div
                                            aria-hidden="true"
                                            className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-45"
                                        />
                                    </>
                                )}
                                <Wrapper className="relative z-10">
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
