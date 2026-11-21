import Wrapper from '@/components/ui/misc/wrapper';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { FloatingStatCard } from '@/components/ui/misc/floating-stat-card';
import SectionHeading from '@/components/ui/misc/section-heading';
import ResponsiveImage from '@/components/ui/misc/responsive-image';
import { responsiveImages } from '@/lib/responsive-images';

const highlights = [
    { value: '250T+', label: 'Payload Capacity' },
    { value: 'SADC', label: 'Regional Corridors' },
    { value: '24/7', label: 'Live Operations' },
];

export function HomeIntroSection() {
    return (
        <section className="capabilities-glass-stage relative overflow-hidden py-16 sm:py-24 lg:py-28">
            <div aria-hidden="true" className="capabilities-stage-dots pointer-events-none absolute inset-0" />
            <div
                aria-hidden="true"
                className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px opacity-45"
            />
            <div
                aria-hidden="true"
                className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-45"
            />

            <Wrapper className="relative z-10">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-8">
                        <SectionHeading
                            label="Who We Are"
                            title={
                                <>
                                    THE ONLY NAME <br />
                                    <span className="bg-linear-to-r from-primary to-sky-500 bg-clip-text text-transparent">
                                        TRUSTED TO PERFORM
                                    </span>
                                </>
                            }
                            align="left"
                        >
                            <div className="space-y-4">
                                <p>
                                    Established in 2012, Teemane Heavy Haulage prides itself on countless victories across South Africa&apos;s most demanding worksites. From high-stakes logistics to complex routing operations, we have redefined what&apos;s possible in abnormal load transport.
                                </p>
                                <p>
                                    Backed by a state-of-the-art fleet of multi-axle modular trailers, high-capacity prime movers, and over 100 years of combined management experience, we bring the precise engineering, control, and capability required to deliver certainty in high-risk environments.
                                </p>
                            </div>
                        </SectionHeading>

                        {/* Compact Frosted Glass Performance Pillars */}
                        <div className="grid grid-cols-3 gap-3 pt-1 sm:gap-4">
                            {highlights.map((item) => (
                                <div
                                    key={item.label}
                                    className="bento-glass-card relative overflow-hidden rounded-xl px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 sm:px-4 sm:py-3.5"
                                >
                                    <div
                                        aria-hidden="true"
                                        className="bento-glass-card-flare pointer-events-none absolute inset-0"
                                    />
                                    <div
                                        aria-hidden="true"
                                        className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-75"
                                    />
                                    <div className="relative z-10">
                                        <div className="font-heading text-lg font-black tracking-tight text-primary sm:text-2xl dark:text-sky-300">
                                            {item.value}
                                        </div>
                                        <div className="mt-0.5 text-[11px] leading-snug font-semibold text-muted-foreground sm:text-xs">
                                            {item.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-1">
                            <Link
                                href="/about-us"
                                prefetch="hover"
                                className="emergency-cta-glass group relative inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-xl px-8 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <span
                                    aria-hidden="true"
                                    className="emergency-cta-glass-flare pointer-events-none absolute inset-0"
                                />
                                <span className="relative z-10">Our Story</span>
                                <ArrowRight className="relative z-10 h-4 w-4 text-sky-200 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative pb-8 lg:pb-0">
                        <div className="bento-glass-card relative rounded-3xl p-1.5 sm:p-2">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/85 to-transparent dark:via-sky-200/60"
                            />
                            <div className="aspect-4/3 overflow-hidden rounded-2xl border border-sky-400/25 bg-muted shadow-lg sm:aspect-3/2 lg:aspect-4/3 xl:aspect-square">
                                <ResponsiveImage
                                    source={responsiveImages.heavyHaulage01}
                                    sizes="(max-width: 1023px) calc(100vw - 2rem), 46vw"
                                    alt="Teemane Heavy Haulage abnormal convoy staging with escort vehicles"
                                    className="h-full w-full object-cover object-[52%_52%] transition-transform duration-700 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
                                />
                            </div>
                        </div>

                        <FloatingStatCard
                            value="100+"
                            label="Years Combined Experience"
                            position="bottom-right"
                            glass="realglass"
                        />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
