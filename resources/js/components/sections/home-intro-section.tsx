import Wrapper from "@/components/ui/misc/wrapper";
import { Link } from "@inertiajs/react";
import { buttonVariants } from "@/components/ui/button";
import { FloatingStatCard } from "@/components/ui/misc/floating-stat-card";
// @ts-ignore
import imgCompanyIntro from "@/../images/heavy-haulage-01.webp";
import SectionHeading from "@/components/ui/misc/section-heading";

export function HomeIntroSection() {
    return (
        <section className="py-24 bg-background">
            <Wrapper>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <SectionHeading 
                            label="Who We Are" 
                            title={<>THE ONLY NAME <br />TRUSTED TO PERFORM</>}
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
                        <div className="pt-2">
                            <Link href="/about-us" className={buttonVariants({ size: "lg", className: "uppercase tracking-widest font-bold px-8 h-14" })}>
                                Our Story
                            </Link>
                        </div>
                    </div>
                    <div className="relative pb-6 lg:pb-0 drop-shadow-lg drop-shadow-black/30">
                        <div className="aspect-square rounded-xl overflow-hidden border border-border shadow-lg">
                            <img
                                src={imgCompanyIntro}
                                alt="Teemane Heavy Haulage on site"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
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
