import Wrapper from '@/components/ui/misc/wrapper';
import { Link } from '@inertiajs/react';
import { ArrowRight, Compass, FileCheck2 } from 'lucide-react';
import { FloatingStatCard } from '@/components/ui/misc/floating-stat-card';
import SectionHeading from '@/components/ui/misc/section-heading';
import ResponsiveImage from '@/components/ui/misc/responsive-image';
import { responsiveImages } from '@/lib/responsive-images';

export function HomeSafetySection() {
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
                    <div className="relative order-2 pb-8 lg:order-1 lg:pb-0">
                        <div className="bento-glass-card relative rounded-3xl p-1.5 sm:p-2">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/85 to-transparent dark:via-sky-200/60"
                            />
                            <div className="aspect-4/3 overflow-hidden rounded-2xl border border-sky-400/25 bg-muted shadow-lg sm:aspect-3/2 lg:aspect-4/3 xl:aspect-square">
                                <ResponsiveImage
                                    source={responsiveImages.heavyHaulage03}
                                    sizes="(max-width: 1023px) calc(100vw - 2rem), 46vw"
                                    alt="Teemane Heavy Haulage push-pull convoy navigating a mountain pass safely"
                                    className="h-full w-full object-cover object-[58%_46%] transition-transform duration-700 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
                                />
                            </div>
                        </div>

                        <FloatingStatCard
                            value="500+"
                            label="Projects Completed"
                            position="bottom-left"
                            glass="realglass"
                        />
                    </div>

                    <div className="order-1 space-y-8 lg:order-2">
                        <SectionHeading
                            label="Where Excellence Begins"
                            title={
                                <>
                                    SAFETY STARTS <br />
                                    <span className="bg-linear-to-r from-primary to-sky-500 bg-clip-text text-transparent">
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

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="bento-glass-card relative flex items-start gap-3.5 overflow-hidden rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5">
                                <div
                                    aria-hidden="true"
                                    className="bento-glass-card-flare pointer-events-none absolute inset-0"
                                />
                                <div
                                    aria-hidden="true"
                                    className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-75"
                                />
                                <div className="bento-glass-icon relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl text-primary dark:text-sky-300">
                                    <Compass className="h-5 w-5" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-heading text-sm font-black tracking-tight text-foreground uppercase">
                                        CAD &amp; Route Studies
                                    </h3>
                                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                                        Swept-path simulations, bridge clearances, and engineered load distribution.
                                    </p>
                                </div>
                            </div>

                            <div className="bento-glass-card relative flex items-start gap-3.5 overflow-hidden rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5">
                                <div
                                    aria-hidden="true"
                                    className="bento-glass-card-flare pointer-events-none absolute inset-0"
                                />
                                <div
                                    aria-hidden="true"
                                    className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-75"
                                />
                                <div className="bento-glass-icon relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl text-primary dark:text-sky-300">
                                    <FileCheck2 className="h-5 w-5" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-heading text-sm font-black tracking-tight text-foreground uppercase">
                                        Full Statutory Permits
                                    </h3>
                                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                                        Abnormal permits, traffic escorts, and audit-ready HSE documentation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col flex-wrap items-stretch gap-3 pt-1 sm:flex-row sm:items-center">
                            <Link
                                prefetch="hover"
                                href="/contact-us"
                                className="emergency-cta-glass group relative inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-xl px-8 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <span
                                    aria-hidden="true"
                                    className="emergency-cta-glass-flare pointer-events-none absolute inset-0"
                                />
                                <span className="relative z-10">Start a Project</span>
                                <ArrowRight className="relative z-10 h-4 w-4 text-sky-200 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                            <Link
                                prefetch="hover"
                                href="/about-us"
                                className="bento-glass-card group relative inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-xl px-8 text-sm font-bold tracking-wider text-foreground uppercase transition-all duration-300 hover:-translate-y-0.5 hover:text-primary dark:hover:text-sky-200"
                            >
                                <span
                                    aria-hidden="true"
                                    className="bento-glass-card-flare pointer-events-none absolute inset-0"
                                />
                                <span className="relative z-10">Our Approach</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
