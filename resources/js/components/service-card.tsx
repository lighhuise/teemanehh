import type { CSSProperties } from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import ResponsiveImage from '@/components/ui/misc/responsive-image';
import { responsiveImages } from '@/lib/responsive-images';
import SpotlightCard from '@/components/SpotlightCard';

export interface ServiceContentBlock {
    type: string;
    data?: {
        image?: string;
        images?: string[];
        [key: string]: unknown;
    };
}

export interface Service {
    id: number;
    title: string;
    slug: string;
    short_description: string | null;
    description?: string | null;
    image?: string | null;
    featured_image_url?: string | null;
    featured_image_thumb_url?: string | null;
    featured_image_srcset?: string | null;
    content_blocks?: ServiceContentBlock[] | null;
}

export interface ServiceCardProps {
    service: Service;
    index?: number;
    sizes?: string;
    className?: string;
}

export function getServiceImageUrl(service: Service): string | null {
    let rawUrl = service.featured_image_thumb_url || service.featured_image_url || service.image;

    if (!rawUrl && Array.isArray(service.content_blocks)) {
        for (const block of service.content_blocks) {
            if (block.type === 'image' && block.data?.image) {
                rawUrl = block.data.image;
                break;
            }
            if ((block.type === 'media_text' || block.type === 'gallery') && block.data?.images?.[0]) {
                rawUrl = block.data.images[0];
                break;
            }
        }
    }

    if (!rawUrl) {
        return null;
    }

    if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://') || rawUrl.startsWith('/')) {
        return rawUrl;
    }

    return `/storage/${rawUrl}`;
}

export function ServiceCard({
    service,
    index,
    sizes = '(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 31vw',
    className,
}: ServiceCardProps) {
    const resolvedUrl = getServiceImageUrl(service);
    const imageSource = resolvedUrl || responsiveImages.heavyHaulage01;
    const imageSrcSet = resolvedUrl ? service.featured_image_srcset || undefined : undefined;

    return (
        <SpotlightCard
            theme="dark"
            spotlightColor="#38bdf8"
            intensity={0.14}
            spotlightSize={220}
            softness={0.7}
            shape="circle"
            borderGlow={0.85}
            proximity={160}
            smoothing={0.5}
            grain={0}
            ambient={false}
            flare
            className={cn(
                'bento-glass-card group relative rounded-2xl! p-0! transition-all duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0',
                className,
            )}
            style={
                {
                    '--spotlight-card-surface': 'transparent',
                    '--spotlight-card-border': 'rgba(56, 189, 248, 0.22)',
                } as CSSProperties
            }
        >
            <div aria-hidden="true" className="bento-glass-card-flare pointer-events-none absolute inset-0 z-0" />
            <div
                aria-hidden="true"
                className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 z-20 w-px opacity-75"
            />

            <Link
                href={`/services/${service.slug}`}
                className="relative z-10 flex h-full cursor-pointer flex-col justify-between"
            >
                {/* Service Thumbnail Image */}
                <div className="relative aspect-16/10 w-full overflow-hidden border-b border-sky-500/20 bg-muted">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/80 to-transparent"
                    />
                    <ResponsiveImage
                        source={imageSource}
                        srcSet={imageSrcSet}
                        sizes={sizes}
                        alt={service.title}
                        className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#000c1d]/55 via-transparent to-transparent opacity-45 transition-opacity duration-300 group-hover:opacity-20" />

                    {typeof index === 'number' && (
                        <span className="globe-hud-glass pointer-events-none absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.62rem] font-bold tracking-[0.18em] text-sky-100">
                            <span className="size-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    )}
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="space-y-2.5">
                        <h3 className="line-clamp-2 font-heading text-lg font-black uppercase tracking-tight text-foreground transition-colors group-hover:text-primary dark:group-hover:text-sky-200">
                            {service.title}
                        </h3>
                        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                            {service.short_description}
                        </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-sky-500/15 pt-4 text-xs font-bold uppercase tracking-wider text-primary dark:text-sky-300">
                        <span>Learn More</span>
                        <span className="bento-glass-icon flex size-7 items-center justify-center rounded-lg transition-transform duration-300 group-hover:translate-x-0.5">
                            <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                    </div>
                </div>
            </Link>
        </SpotlightCard>
    );
}
