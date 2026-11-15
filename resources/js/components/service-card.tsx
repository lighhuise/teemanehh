import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
// @ts-ignore
import defaultServiceImage from '@/../images/heavy-haulage-01.webp';

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
    content_blocks?: ServiceContentBlock[] | null;
}

export interface ServiceCardProps {
    service: Service;
    index?: number;
    className?: string;
}

export function getServiceImageUrl(service: Service): string | null {
    let rawUrl = service.featured_image_url || service.image;

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

export function ServiceCard({ service, className }: ServiceCardProps) {
    const imageUrl = getServiceImageUrl(service) || defaultServiceImage;

    return (
        <Link
            href={`/services/${service.slug}`}
            className={cn(
                "group relative bg-card flex flex-col justify-between overflow-hidden rounded-2xl border border-border shadow-xs hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                className
            )}
        >
            {/* Service Thumbnail Image */}
            <div className="relative aspect-16/10 w-full overflow-hidden bg-muted border-b border-border/50">
                <img
                    src={imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
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
    );
}
