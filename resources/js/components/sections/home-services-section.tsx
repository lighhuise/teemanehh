import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { Service, ServiceCard } from '@/components/service-card';
import { cn } from '@/lib/utils';

export function HomeServicesSection({ services }: { services: Service[] }) {
    const isFourCol = services?.length === 4 || (services?.length && services.length % 4 === 0);

    return (
        <section className="capabilities-glass-stage relative isolate overflow-clip border-y border-sky-500/15 py-16 sm:py-24 lg:py-28">
            {/* Ambient CAD Dot Matrix for Glass Refraction */}
            <div aria-hidden="true" className="capabilities-stage-dots pointer-events-none absolute inset-0" />
            <div
                aria-hidden="true"
                className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px opacity-50"
            />
            <div
                aria-hidden="true"
                className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-40"
            />

            <Wrapper className="relative z-10">
                <SectionHeading
                    label="Our Capabilities"
                    title={
                        <>
                            ENGINEERED FOR THE{' '}
                            <span className="bg-linear-to-r from-primary to-sky-500 bg-clip-text text-transparent">
                                EXTRAORDINARY
                            </span>
                        </>
                    }
                    align="center"
                    className="mb-12 sm:mb-16"
                >
                    When the scale is extraordinary, experience makes the difference. Our specialised abnormal transport solutions offer the engineered precision, modular capacity, and proven expertise needed to move oversized cargo across South Africa and the SADC region.
                </SectionHeading>

                <div
                    className={cn(
                        'grid gap-6',
                        isFourCol ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3',
                    )}
                >
                    {(services || []).map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                            sizes={
                                isFourCol
                                    ? '(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 23vw'
                                    : '(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 31vw'
                            }
                        />
                    ))}
                </div>

                <div className="mt-12 text-center sm:mt-16">
                    <Link
                        href="/services"
                        prefetch="hover"
                        className="bento-glass-card group relative inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-xl px-10 text-sm font-bold uppercase tracking-wider text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary dark:hover:text-sky-200"
                    >
                        <span
                            aria-hidden="true"
                            className="bento-glass-card-flare pointer-events-none absolute inset-0"
                        />
                        <span
                            aria-hidden="true"
                            className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-75"
                        />
                        <span className="relative z-10">View All Services</span>
                        <ArrowRight className="relative z-10 h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1 dark:text-sky-300" />
                    </Link>
                </div>
            </Wrapper>
        </section>
    );
}
