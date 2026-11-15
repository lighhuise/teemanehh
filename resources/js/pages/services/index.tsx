import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import PageHeader from '@/components/ui/misc/page-header';
import { ServiceCard, Service } from '@/components/service-card';
import { cn } from '@/lib/utils';
import LogoMark from "@/components/ui/misc/logo-mark";

export default function Index({ services }: { services: Service[] }) {
    const isFourCol = services?.length === 4 || (services?.length && services.length % 4 === 0);

    return (
        <AppLayout title="Services">
            <PageHeader
                title={<>SPECIALISED TRANSPORT <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1 pb-1">SOLUTIONS</span></>}
                description="We understand that every heavy haulage project demands precision, reliability and rigorous planning. Our capabilities provide the flexibility and strength needed to tackle the most demanding abnormal loads."
            />

            <div className="bg-background selection:bg-primary selection:text-white relative">
                <div aria-hidden="true" className="absolute top-30 right-0 pointer-events-none opacity-10 md:opacity-[0.1] translate-x-1/2 mix-blend-luminosity">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-180 h-180 rounded-full blur-[80px] bg-primary/50 pointer-events-none" />
                    <LogoMark className="w-64 md:w-96 h-auto" />
                </div>
                <section className="relative py-20 md:py-28 bg-background overflow-clip">
                    <Wrapper>
                        <div className={cn("grid gap-6 relative z-10", isFourCol ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3")}>
                            {services.map((service) => (
                                <ServiceCard key={service.id} service={service} />
                            ))}
                        </div>
                    </Wrapper>
                </section>
            </div>
        </AppLayout>
    );
}
