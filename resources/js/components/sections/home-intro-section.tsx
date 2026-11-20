import Wrapper from "@/components/ui/misc/wrapper";
import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FloatingStatCard } from "@/components/ui/misc/floating-stat-card";
import SectionHeading from "@/components/ui/misc/section-heading";
import ResponsiveImage from "@/components/ui/misc/responsive-image";
import { responsiveImages } from "@/lib/responsive-images";

const highlights = [
    { value: '250T+', label: 'Payload Capacity' },
    { value: 'SADC', label: 'Regional Corridors' },
    { value: '24/7', label: 'Live Operations' },
];

export function HomeIntroSection() {
    return (
        <section className="py-16 sm:py-24 lg:py-28 bg-background">
            <Wrapper>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="space-y-8">
                        <SectionHeading
                            label="Who We Are"
                            title={
                                <>
                                    THE ONLY NAME <br />
                                    <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500">
                                        TRUSTED TO PERFORM
                                    </span>
                                </>
                            }
                            align="left"
                        >
                            <div className="space-y-4">
                                <p>
                                    Established in 2012, Teemane Heavy Haulage prides itself on countless victories across South Africa's most demanding worksites. From high-stakes logistics to complex routing operations, we have redefined what's possible in abnormal load transport.
                                </p>
                                <p>
                                    Backed by a state-of-the-art fleet of multi-axle modular trailers, high-capacity prime movers, and over 100 years of combined management experience, we bring the precise engineering, control, and capability required to deliver certainty in high-risk environments.
                                </p>
                            </div>
                        </SectionHeading>

                        {/* Compact Performance Pillars */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-1">
                            {highlights.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-xl border border-border bg-card px-3.5 py-3 sm:px-4 sm:py-3.5 shadow-xs"
                                >
                                    <div className="text-lg sm:text-2xl font-heading font-black tracking-tight text-primary">
                                        {item.value}
                                    </div>
                                    <div className="text-[11px] sm:text-xs font-semibold text-muted-foreground mt-0.5 leading-snug">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-1">
                            <Link
                                href="/about-us"
                                prefetch="hover"
                                className={buttonVariants({ size: "xl" })}
                            >
                                <span>Our Story</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative pb-8 lg:pb-0">
                        <div className="aspect-4/3 sm:aspect-3/2 lg:aspect-4/3 xl:aspect-square rounded-2xl overflow-hidden border border-border shadow-xl bg-muted">
                            <ResponsiveImage
                                source={responsiveImages.heavyHaulage01}
                                sizes="(max-width: 1023px) calc(100vw - 2rem), 46vw"
                                alt="Teemane Heavy Haulage abnormal convoy staging with escort vehicles"
                                className="w-full h-full object-cover object-[52%_52%] hover:scale-105 transition-transform duration-700 motion-reduce:transition-none motion-reduce:hover:scale-100"
                            />
                        </div>

                        <FloatingStatCard
                            value="100+"
                            label="Years Combined Experience"
                            position="bottom-right"
                        />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
