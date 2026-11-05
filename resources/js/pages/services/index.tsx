import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/ui/misc/page-header';
import { cn } from '@/lib/utils';

import LogoMark from "@/components/ui/misc/logo-mark";

interface ServiceContentBlock {
    type: string;
    data?: {
        image?: string;
        images?: string[];
        [key: string]: unknown;
    };
}

interface Service {
    id: number;
    title: string;
    slug: string;
    short_description: string | null;
    description: string | null;
    image: string | null;
    featured_image_url?: string | null;
    content_blocks?: ServiceContentBlock[] | null;
}

function getServiceImageUrl(service: Service): string | null {
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

export default function Index({ services }: { services: Service[] }) {
    return (
        <AppLayout title="Services">
            <PageHeader
                title={<>SPECIALISED TRANSPORT <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1 pb-1">SOLUTIONS</span></>}
                description="We understand that every heavy haulage project demands precision, reliability and rigorous planning. Our capabilities provide the flexibility and strength needed to tackle the most demanding abnormal loads."
            />

            <div className="bg-background selection:bg-primary selection:text-white relative">
                <div aria-hidden="true" className="absolute top-30 right-0 pointer-events-none opacity-10 md:opacity-[0.1] translate-x-1/2  mix-blend-luminosity">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-180 h-180 rounded-full blur-[80px] bg-primary/50  pointer-events-none" />
                    <LogoMark className="w-64 md:w-96 h-auto" />

                </div>
                <section className="relative py-20 md:py-28 bg-background overflow-hidden">

                    <Wrapper>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative z-10">
                            {services.map((service) => {
                                const imageUrl = getServiceImageUrl(service);
                                const summary = service.short_description || (service.description ? service.description.replace(/<[^>]*>?/gm, "").substring(0, 110) + "..." : "");

                                return (
                                    <article
                                        key={service.id}
                                        className="group bg-card border border-border hover:border-primary/50 rounded-xl overflow-hidden transition-all duration-200 flex flex-row items-stretch"
                                    >
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="block relative w-28 sm:w-36 shrink-0 bg-muted overflow-hidden border-r border-border"
                                            tabIndex={-1}
                                            aria-hidden="true"
                                        >
                                            {imageUrl ? (
                                                <img
                                                    src={imageUrl}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-[10px] uppercase font-bold text-muted-foreground p-2 text-center">
                                                    Spec Asset
                                                </div>
                                            )}
                                        </Link>
                                        <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 min-w-0">
                                            <div className="space-y-1">
                                                <span className="inline-block text-[10px] font-black uppercase tracking-wider text-primary">
                                                    Specialised Heavy Transport
                                                </span>
                                                <h2 className="text-sm sm:text-base font-heading font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors truncate">
                                                    <Link href={`/services/${service.slug}`} className="hover:underline">
                                                        {service.title}
                                                    </Link>
                                                </h2>
                                                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                                                    {summary}
                                                </p>
                                            </div>
                                            <div className="pt-2 flex items-center justify-end border-t border-border/40 mt-2">
                                                <Link
                                                    href={`/services/${service.slug}`}
                                                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-all"
                                                >
                                                    <span>Learn More</span>
                                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </Wrapper>
                </section>

            </div>
        </AppLayout>
    );
}
