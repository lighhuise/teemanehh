import Wrapper from "@/components/ui/misc/wrapper";
import SectionHeading from "@/components/ui/misc/section-heading";
import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Service, ServiceCard } from "@/components/service-card";
import { cn } from "@/lib/utils";

export function HomeServicesSection({ services }: { services: Service[] }) {
    const isFourCol = services?.length === 4 || (services?.length && services.length % 4 === 0);

    return (
        <section className="py-16 sm:py-24 lg:py-28 bg-muted/40 border-y isolate border-border relative overflow-clip">
            <Wrapper>
                <SectionHeading
                    label="Our Capabilities"
                    title={
                        <>
                            ENGINEERED FOR THE{' '}
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500">
                                EXTRAORDINARY
                            </span>
                        </>
                    }
                    align="center"
                    className="mb-12 sm:mb-16"
                >
                    When the scale is extraordinary, experience makes the difference. Our specialised abnormal transport solutions offer the engineered precision, modular capacity, and proven expertise needed to move oversized cargo across South Africa and the SADC region.
                </SectionHeading>

                <div className={cn("grid gap-6", isFourCol ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3")}>
                    {(services || []).map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            sizes={
                                isFourCol
                                    ? "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 23vw"
                                    : "(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 31vw"
                            }
                        />
                    ))}
                </div>

                <div className="mt-12 sm:mt-16 text-center">
                    <Link
                        href="/services"
                        prefetch="hover"
                        className={buttonVariants({ variant: "outline", size: "xl", className: "px-10" })}
                    >
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </Wrapper>
        </section>
    );
}
