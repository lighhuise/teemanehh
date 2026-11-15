import Wrapper from "@/components/ui/misc/wrapper";
import SectionHeading from "@/components/ui/misc/section-heading";
import { Link } from "@inertiajs/react";
import { buttonVariants } from "@/components/ui/button";
import { ServiceCard, Service } from "@/components/service-card";
import { cn } from "@/lib/utils";

export function HomeServicesSection({ services }: { services: Service[] }) {
    const isFourCol = services?.length === 4 || (services?.length && services.length % 4 === 0);

    return (
        <section className="py-24 bg-muted/30 border-y border-border relative">
            <Wrapper>
                <SectionHeading
                    label="Our Capabilities"
                    title="ENGINEERED FOR THE EXTRAORDINARY"
                    align="center"
                    className="mb-16"
                >
                    When the scale is extraordinary, experience makes the difference. Our specialised abnormal transport solutions offer the engineered precision, modular capacity, and proven expertise needed to move oversized cargo across South Africa and the SADC region.
                </SectionHeading>

                <div className={cn("grid gap-6", isFourCol ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3")}>
                    {(services || []).map((service) => (
                        <ServiceCard key={service.id} service={service} />
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
