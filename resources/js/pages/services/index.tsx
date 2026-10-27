import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/ui/misc/page-header';
import { cn } from '@/lib/utils';
import Divider1 from "@/components/ui/divider-1";

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

            <div className="bg-background selection:bg-primary selection:text-white pb-28 md:pb-36">
                <section className="relative py-20 md:py-28 bg-background overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none opacity-30" />
                        <svg className="absolute inset-0 w-full h-full text-primary/15" viewBox="0 0 1200 800" fill="none" stroke="currentColor" strokeWidth="1.2" preserveAspectRatio="none">
                            <path d="M0,160 Q320,100 600,220 T1200,140" />
                            <path d="M0,300 Q260,220 560,340 T1200,260" />
                            <path d="M0,600 Q290,520 590,620 T1200,530" />
                        </svg>
                        <div className="absolute top-8 left-8 flex items-center gap-2 font-mono text-[10px] tracking-wider text-muted-foreground/50 uppercase select-none">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
                            <span>ROUTE TOPO ELEVATION // SADC TRANSIT CORRIDOR</span>
                        </div>
                    </div>
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
                <Divider1/>
            </div>
        </AppLayout>
    );
}
