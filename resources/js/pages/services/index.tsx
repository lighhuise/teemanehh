import React from 'react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import PageHeader from '@/components/ui/misc/page-header';
import { Service, ServiceCard } from '@/components/service-card';
import { cn } from '@/lib/utils';
import LogoMark from '@/components/ui/misc/logo-mark';
import { responsiveImages } from '@/lib/responsive-images';
import ScrollDivider from '@/components/scroll-divider';

function renderServiceTickerRow(items: Service[]) {
    return (
        <>
            {items.map((service, idx) => (
                <React.Fragment key={service.id ?? service.slug ?? idx}>
                    {idx > 0 && (
                        <>
                            &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        </>
                    )}
                    <span className="inline-flex items-center font-heading uppercase">
                        {service.title}
                    </span>
                </React.Fragment>
            ))}
        </>
    );
}

export default function Index({ services }: { services: Service[] }) {
    const isFourCol = services?.length === 4 || (services?.length && services.length % 4 === 0);
    const midpoint = Math.ceil((services?.length || 0) / 2);
    const firstRowServices = services?.slice(0, midpoint) ?? [];
    const secondRowServices = services?.length > 1 ? services.slice(midpoint) : firstRowServices;

    return (
        <AppLayout title="Services">
            <PageHeader
                label="Fleet & Capabilities"
                title={
                    <>
                        SPECIALISED TRANSPORT{' '}
                        <span className="bg-linear-to-r from-primary to-sky-500 bg-clip-text pr-1 text-transparent">
                            SOLUTIONS
                        </span>
                    </>
                }
                description="We understand that every heavy haulage project demands precision, reliability and rigorous planning. Our capabilities provide the flexibility and strength needed to tackle the most demanding abnormal loads."
                image={responsiveImages.servicesHeader}
                imageAlt="Teemane Heavy Haulage MAN prime mover fleet lined up for abnormal transport"
                imageClassName="object-center"
            />
            {services?.length > 0 && (
                <ScrollDivider
                    texts={[
                        renderServiceTickerRow(firstRowServices),
                        renderServiceTickerRow(secondRowServices),
                    ]}
                />
            )}

            <section className="capabilities-glass-stage relative isolate overflow-x-clip border-y border-sky-500/15 py-16 selection:bg-primary selection:text-white sm:py-24 lg:py-28">
                {/* Ambient CAD Dot Matrix & Hairlines for Glass Refraction */}
                <div aria-hidden="true" className="capabilities-stage-dots pointer-events-none absolute inset-0" />
                <div
                    aria-hidden="true"
                    className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px opacity-50"
                />
                <div
                    aria-hidden="true"
                    className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-45"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-30 right-0 translate-x-1/2 opacity-[0.07] mix-blend-luminosity"
                >
                    <div className="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-180 w-180 rounded-full bg-primary/40 blur-[80px]" />
                    <LogoMark className="h-auto w-64 text-primary md:w-96 dark:text-sky-400" />
                </div>

                <Wrapper className="relative z-10">
                    <div
                        className={cn(
                            'grid gap-6',
                            isFourCol ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3',
                        )}
                    >
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                index={index}
                                sizes={
                                    isFourCol
                                        ? '(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 23vw'
                                        : '(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 31vw'
                                }
                            />
                        ))}
                    </div>
                </Wrapper>
            </section>
        </AppLayout>
    );
}
