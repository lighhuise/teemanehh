import Wrapper from "@/components/ui/misc/wrapper";
import SectionHeading from "@/components/ui/misc/section-heading";
import { Link } from "@inertiajs/react";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/service-card";

export function HomeServicesSection({ services }: { services: any[] }) {
    return (
        <section className="py-24 bg-muted/30 border-y border-border relative">
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50" aria-hidden="true">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-125 bg-sky-500/10 rounded-full blur-3xl pointer-events-none opacity-30" />
                <svg className="absolute inset-0 w-full h-full text-primary/15" viewBox="0 0 1200 800" fill="none" stroke="currentColor" strokeWidth="1.2" preserveAspectRatio="none">
                    <path d="M0,160 Q320,100 600,220 T1200,140" />
                    <path d="M0,300 Q260,220 560,340 T1200,260" />
                    <path d="M0,600 Q290,520 590,620 T1200,530" />
                </svg>
            </div>
            <Wrapper>
                <SectionHeading
                    label="Our Capabilities"
                    title="ENGINEERED FOR THE EXTRAORDINARY"
                    align="center"
                    className="mb-16"
                >
                    When the scale is extraordinary, experience makes the difference. Our specialised abnormal transport solutions offer the engineered precision, modular capacity, and proven expertise needed to move oversized cargo across South Africa and the SADC region.
                </SectionHeading>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(services || []).map((service, idx) => (
                        <ServiceCard key={service.id} service={service} index={idx} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/services" className={buttonVariants({ variant: "secondary", size: "lg", className: "uppercase tracking-widest font-bold px-10 h-14 border-2" })}>
                        View All Services
                    </Link>
                </div>
            </Wrapper>
        </section>
    );
}
