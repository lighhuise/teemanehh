import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/ui/misc/page-header';
import { cn } from '@/lib/utils';

interface Service {
    id: number;
    title: string;
    slug: string;
    short_description: string | null;
    description: string | null;
    image: string | null;
    featured_image_url?: string | null;
}

export default function Index({ services }: { services: Service[] }) {
    return (
        <AppLayout title="Services">
            <PageHeader
                title={<>SPECIALISED TRANSPORT <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1 pb-1">SOLUTIONS</span></>}
                description="We understand that every heavy haulage project demands precision, reliability and rigorous planning. Our capabilities provide the flexibility and strength needed to tackle the most demanding abnormal loads."
            />

            <div className="bg-background selection:bg-primary selection:text-white pb-28 md:pb-36">
                <section className="py-20 md:py-28 bg-background">
                    <Wrapper>
                        <div className="flex flex-col gap-20 sm:gap-28 lg:gap-36">
                            {services.map((service, idx) => {
                                const isEven = idx % 2 === 0;
                                const imageUrl = service.featured_image_url || service.image;
                                const skewClass = isEven ? 'skew-x-0 lg:-skew-x-6' : 'skew-x-0 lg:skew-x-6';
                                const unskewClass = isEven ? 'skew-x-0 lg:skew-x-6' : 'skew-x-0 lg:-skew-x-6';

                                return (
                                    <article
                                        key={service.id}
                                        className="grid grid-cols-1 lg:grid-cols-12 items-center"
                                    >
                                        {/* Text Card */}
                                        <div
                                            className={cn(
                                                "relative z-20 lg:row-start-1",
                                                "-mt-4 sm:-mt-6 lg:mt-0",
                                                isEven
                                                    ? "lg:col-span-6 lg:col-start-1 lg:-mr-6 xl:-mr-8 order-2 lg:order-1"
                                                    : "lg:col-span-6 lg:col-start-7 lg:-ml-6 xl:-ml-8 order-2 lg:order-2"
                                            )}
                                        >
                                            <div className="relative group/card bg-card/95 dark:bg-card/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-border/80 shadow-2xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between h-full min-h-[320px]">
                                                {/* Ambient subtle glow */}
                                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-3xl rounded-full pointer-events-none -z-10" />

                                                <div className="space-y-6">
                                                    <div className="flex items-center justify-between gap-4">
                                                        <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-black text-xs tracking-widest uppercase border border-primary/20">
                                                            0{idx + 1} &bull; Capability
                                                        </span>
                                                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                                            Specialised Transport
                                                        </span>
                                                    </div>

                                                    <h2 className="text-2xl sm:text-3xl lg:text-3xl font-heading font-black uppercase tracking-tighter text-foreground group-hover/card:text-primary transition-colors leading-[1.15]">
                                                        <Link href={`/services/${service.slug}`} className="hover:underline">
                                                            {service.title}
                                                        </Link>
                                                    </h2>

                                                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                                        {service.short_description || (service.description ? service.description.replace(/<[^>]*>?/gm, '').substring(0, 180) + '...' : '')}
                                                    </p>
                                                </div>

                                                <div className="pt-8 mt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                                                    <Link
                                                        href={`/services/${service.slug}`}
                                                        className="inline-flex items-center gap-3 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold tracking-widest uppercase text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group/btn"
                                                    >
                                                        Explore Capabilities
                                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                                                    </Link>

                                                    <Link
                                                        href={`/services/${service.slug}`}
                                                        className="text-xs font-bold text-muted-foreground hover:text-primary uppercase tracking-widest transition-colors hidden sm:inline-flex items-center gap-1"
                                                    >
                                                        View Details &rarr;
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Skewed Rounded-Block Image */}
                                        <div
                                            className={cn(
                                                "relative z-10 w-full lg:row-start-1",
                                                isEven
                                                    ? "lg:col-span-6 lg:col-start-7 order-1 lg:order-2"
                                                    : "lg:col-span-6 lg:col-start-1 order-1 lg:order-1"
                                            )}
                                        >
                                            <Link
                                                href={`/services/${service.slug}`}
                                                className="group block relative w-full pr-2 pb-2 sm:pr-3 sm:pb-3 lg:pr-5 lg:pb-5 focus:outline-none focus:ring-2 focus:ring-primary rounded-3xl"
                                            >
                                                {/* Skewed Background Accent Layer with Industrial Hazard Stripes */}
                                                <div
                                                    aria-hidden="true"
                                                    className={cn(
                                                        "absolute inset-0 rounded-3xl bg-linear-to-br from-primary to-primary/80 border border-primary-foreground/20 shadow-xl shadow-primary/20 overflow-hidden translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 lg:translate-x-5 lg:translate-y-5 transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-3 sm:group-hover:translate-x-4 sm:group-hover:translate-y-4 lg:group-hover:translate-x-6 lg:group-hover:translate-y-6",
                                                        skewClass
                                                    )}
                                                >
                                                    <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#000_4px,#000_8px)]" />
                                                </div>

                                                {/* Skewed Main Image Block */}
                                                <div
                                                    className={cn(
                                                        "relative z-10 scale-105  rounded-3xl overflow-hidden border-2 border-border/80 shadow-2xl aspect-16/10 bg-muted",
                                                        skewClass
                                                    )}
                                                >
                                                    {imageUrl ? (
                                                        <img
                                                            src={imageUrl}
                                                            alt={service.title}
                                                            className={cn(
                                                                "w-full h-full object-cover  group-hover:scale-110 sm:group-hover:scale-115 lg:group-hover:scale-135 transition-transform duration-700 ease-out",
                                                                unskewClass
                                                            )}
                                                        />
                                                    ) : (
                                                        <div
                                                            className={cn(
                                                                "w-full h-full flex items-center justify-center bg-muted text-muted-foreground",
                                                                unskewClass
                                                            )}
                                                        >
                                                            <span className="text-sm uppercase tracking-widest font-bold">No Image</span>
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                                                    {/* Floating Index Tag */}
                                                    <div
                                                        className={cn(
                                                            "absolute top-4 left-4 z-20",
                                                            unskewClass
                                                        )}
                                                    >
                                                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-[11px] font-black uppercase tracking-widest text-white shadow-lg">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                            0{idx + 1}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
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
