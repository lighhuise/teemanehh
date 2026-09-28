import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/ui/misc/page-header';
import { ServiceCard } from '@/components/service-card';

export default function Index({ services }: { services: any[] }) {
    return (
        <AppLayout title="Services">
            <PageHeader 
                title={<>SPECIALISED TRANSPORT <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-300">SOLUTIONS</span></>}
                description="We understand that every heavy haulage project demands precision, reliability and rigorous planning. Our capabilities provide the flexibility and strength needed to tackle the most demanding abnormal loads."
            />

            <div className="bg-background selection:bg-primary selection:text-white pb-24">
                <section className="py-24 bg-background">
                    <Wrapper>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, idx) => (
                                <ServiceCard key={service.id} service={service} index={idx} />
                            ))}
                        </div>
                    </Wrapper>
                </section>
            </div>
        </AppLayout>
    );
}
