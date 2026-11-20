import type {CSSProperties} from 'react';
import {Link} from '@inertiajs/react';
import {ArrowRight} from 'lucide-react';
import {cn} from '@/lib/utils';
import ResponsiveImage from '@/components/ui/misc/responsive-image';
import {responsiveImages} from '@/lib/responsive-images';
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
    sizes = '(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 31vw',
    className,
}: ServiceCardProps) {
    const resolvedUrl = getServiceImageUrl(service);
    const imageSource = resolvedUrl || responsiveImages.heavyHaulage01;
    const imageSrcSet = resolvedUrl ? (service.featured_image_srcset || undefined) : undefined;

    return (
        <SpotlightCard
            theme="dark"
            spotlightColor="var(--spotlight-color)"
            intensity={0.1}
            spotlightSize={200}
            softness={0.7}
            shape="circle"
            borderGlow={0.85}
            proximity={160}
            smoothing={0.5}
            grain={0}
            ambient={false}
            flare
            className={cn(
                "group p-0! rounded-2xl! shadow-xs! hover:shadow-xl! transition-all duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
                className
            )}
            style={{
                '--spotlight-card-surface': 'var(--card)',
                '--spotlight-card-border': 'var(--border)',
            } as CSSProperties}
        >
            <Link
                href={`/services/${service.slug}`}
                className="cursor-pointer flex flex-col justify-between h-full"
            >
                {/* Service Thumbnail Image */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-muted border-b border-border/50">
                    <ResponsiveImage
                        source={imageSource}
                        srcSet={imageSrcSet}
                        sizes={sizes}
                        alt={service.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-20 group-hover:opacity-0 transition-opacity duration-300" />
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col justify-between flex-1">
                    <div className="space-y-2.5">
                        <h3 className="text-lg font-heading font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                            {service.short_description}
                        </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Link>
        </SpotlightCard>
    );
}
