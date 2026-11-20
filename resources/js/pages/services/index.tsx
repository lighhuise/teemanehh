import React from 'react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import PageHeader from '@/components/ui/misc/page-header';
import {Service, ServiceCard} from '@/components/service-card';
import {cn} from '@/lib/utils';
import LogoMark from "@/components/ui/misc/logo-mark";

import { responsiveImages } from '@/lib/responsive-images';
import ScrollDivider from "@/components/scroll-divider";

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
                    <span className="inline-flex items-center uppercase font-heading">
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
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1">
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

            <div className="bg-background selection:bg-primary selection:text-white relative overflow-x-clip">
                <div aria-hidden="true" className="absolute top-30 right-0 pointer-events-none opacity-10 translate-x-1/2 mix-blend-luminosity">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-180 h-180 rounded-full blur-[80px] bg-primary/40 pointer-events-none" />
                    <LogoMark className="w-64 md:w-96 h-auto" />
                </div>
                <section className="relative py-16 sm:py-24 lg:py-28 bg-background">
                    <Wrapper>
                        <div className={cn("grid gap-6 relative z-10", isFourCol ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3")}>
                            {services.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    sizes={
                                        isFourCol
                                            ? "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 23vw"
                                            : "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 31vw"
                                    }
                                />
                            ))}
                        </div>
                    </Wrapper>
                </section>
            </div>
        </AppLayout>
    );
}
