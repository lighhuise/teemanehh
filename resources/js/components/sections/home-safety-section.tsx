import Wrapper from "@/components/ui/misc/wrapper";
import { Link } from "@inertiajs/react";
import { ArrowRight, Compass, FileCheck2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FloatingStatCard } from "@/components/ui/misc/floating-stat-card";
import SectionHeading from "@/components/ui/misc/section-heading";
import ResponsiveImage from "@/components/ui/misc/responsive-image";
import { responsiveImages } from "@/lib/responsive-images";

export function HomeSafetySection() {
    return (
        <section className="py-16 sm:py-24 lg:py-28 bg-background">
            <Wrapper>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="relative pb-8 lg:pb-0 order-2 lg:order-1">
                        <div className="aspect-4/3 sm:aspect-3/2 lg:aspect-4/3 xl:aspect-square rounded-2xl overflow-hidden border border-border shadow-xl bg-muted">
                            <ResponsiveImage
                                source={responsiveImages.heavyHaulage03}
                                sizes="(max-width: 1023px) calc(100vw - 2rem), 46vw"
                                alt="Teemane Heavy Haulage push-pull convoy navigating a mountain pass safely"
                                className="w-full h-full object-cover object-[58%_46%] hover:scale-105 transition-transform duration-700 motion-reduce:transition-none motion-reduce:hover:scale-100"
                            />
                        </div>

                        <FloatingStatCard
                            value="500+"
                            label="Projects Completed"
                            position="bottom-left"
                        />
                    </div>

                    <div className="space-y-8 order-1 lg:order-2">
                        <SectionHeading
                            label="Where Excellence Begins"
                            title={
                                <>
                                    SAFETY STARTS <br />
                                    <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500">
                                        BEFORE THE LIFT
                                    </span>
                                </>
                            }
                            align="left"
                        >
                            <div className="space-y-4">
                                <p>
                                    With services available for both short- and long-term hire and backed by prompt, professional support, THH oversees every stage from initial consultation and detailed site inspections to full project execution.
                                </p>
                                <p>
                                    For specialised projects, we incorporate advanced lift studies and CAD drawings, allowing us to anticipate challenges and engineer safe, efficient solutions before operations begin.
                                </p>
                            </div>
                        </SectionHeading>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3.5 rounded-xl border border-border bg-card p-4 shadow-xs">
                                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <Compass className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-heading font-black uppercase tracking-tight text-foreground">
                                        CAD &amp; Route Studies
                                    </h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                                        Swept-path simulations, bridge clearances, and engineered load distribution.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3.5 rounded-xl border border-border bg-card p-4 shadow-xs">
                                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <FileCheck2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-heading font-black uppercase tracking-tight text-foreground">
                                        Full Statutory Permits
                                    </h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                                        Abnormal permits, traffic escorts, and audit-ready HSE documentation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-1">
                            <Link
                                prefetch="hover"
                                href="/contact-us"
                                className={buttonVariants({ size: "xl" })}
                            >
                                <span>Start a Project</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                prefetch="hover"
                                href="/about-us"
                                className={buttonVariants({ variant: "outline", size: "xl" })}
                            >
                                <span>Our Approach</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
