import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';
import { Building2, ShieldCheck, Target, Truck } from 'lucide-react';
import ResponsiveImage from '@/components/ui/misc/responsive-image';
import { responsiveImages } from '@/lib/responsive-images';

export default function AboutCapabilities() {
    return (
        <section className="capabilities-glass-stage relative overflow-hidden border-y border-sky-500/15 py-16 sm:py-24 lg:py-28">
            {/* Ambient CAD Dot Matrix for Glass Refraction */}
            <div aria-hidden="true" className="capabilities-stage-dots pointer-events-none absolute inset-0" />
            <div
                aria-hidden="true"
                className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px opacity-50"
            />
            <div
                aria-hidden="true"
                className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-40"
            />

            <Wrapper className="relative z-10">
                <SectionHeading
                    title={
                        <>
                            Our Core{' '}
                            <span className="bg-linear-to-r from-primary to-sky-500 bg-clip-text text-transparent">
                                Capabilities
                            </span>
                        </>
                    }
                    label="Why we lead the sector"
                    align="center"
                >
                    Built on modern modular equipment, strict HSE governance, and decades of hands-on heavy transport leadership.
                </SectionHeading>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3">
                    {/* Bento Box 1: Large Wide Frosted Glass */}
                    <div className="bento-glass-card group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5 sm:p-10 md:col-span-2">
                        <div aria-hidden="true" className="bento-glass-card-flare pointer-events-none absolute inset-0" />
                        <div
                            aria-hidden="true"
                            className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-75"
                        />

                        <div className="relative z-10">
                            <div className="bento-glass-icon mb-6 flex size-14 items-center justify-center rounded-xl text-primary dark:text-sky-300">
                                <Truck className="h-7 w-7" />
                            </div>
                            <h3 className="mb-3 font-heading text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl">
                                State-of-the-Art Fleet
                            </h3>
                            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                                Our modern fleet includes multi-axle modular trailers, heavy-duty prime movers, and specialised lowbeds explicitly designed and configured to handle staggering payload capacities over challenging terrains.
                            </p>
                        </div>
                    </div>

                    {/* Bento Box 2: Signature Dark Steel Brand Plinth Anchor */}
                    <div className="scroll-divider-surface group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl border border-sky-400/35 p-7 text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300/60 sm:p-10 md:min-h-[340px]">
                        {/* Top Corona Light Flare & Micro-Dot Matrix */}
                        <div aria-hidden="true" className="footer-corona pointer-events-none absolute inset-0" />
                        <div aria-hidden="true" className="nav-logo-plinth-dots pointer-events-none absolute inset-0 opacity-30" />
                        <div aria-hidden="true" className="nav-canopy-hazard pointer-events-none absolute inset-x-0 top-0 h-1.5" />
                        <div aria-hidden="true" className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px" />
                        <div aria-hidden="true" className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-85" />

                        <div className="relative z-10 mt-auto">
                            <div className="emergency-cta-pill mb-6 flex size-14 items-center justify-center rounded-xl text-sky-300 shadow-[0_8px_24px_-6px_rgba(0,100,190,0.55)]">
                                <ShieldCheck className="h-7 w-7" />
                            </div>
                            <h3 className="mb-3 font-heading text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                                Zero Incidents
                            </h3>
                            <p className="text-sm leading-relaxed text-sky-100/80 sm:text-base">
                                Stringent protocols, certified load supervisors, and meticulous route clearing guarantee the safe delivery of high-stakes transports.
                            </p>
                        </div>
                    </div>

                    {/* Bento Box 3: Square Frosted Glass */}
                    <div className="bento-glass-card group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5 sm:p-10">
                        <div aria-hidden="true" className="bento-glass-card-flare pointer-events-none absolute inset-0" />
                        <div
                            aria-hidden="true"
                            className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-75"
                        />

                        <div className="relative z-10">
                            <div className="bento-glass-icon mb-6 flex size-14 items-center justify-center rounded-xl text-primary dark:text-sky-300">
                                <Target className="h-7 w-7" />
                            </div>
                            <h3 className="mb-3 font-heading text-2xl font-black uppercase tracking-tight text-foreground">
                                Precision Planning
                            </h3>
                            <p className="text-base leading-relaxed text-muted-foreground">
                                Every abnormal route is surveyed, simulated, and heavily escorted by our expert logistics personnel.
                            </p>
                        </div>
                    </div>

                    {/* Bento Box 4: Large Hybrid Frosted Glass */}
                    <div className="bento-glass-card group relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 sm:gap-8 sm:p-8 md:col-span-2 md:flex-row">
                        <div aria-hidden="true" className="bento-glass-card-flare pointer-events-none absolute inset-0" />
                        <div
                            aria-hidden="true"
                            className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-75"
                        />

                        <div className="relative z-10 aspect-4/3 w-full overflow-hidden rounded-xl border border-sky-400/35 bg-muted shadow-md sm:aspect-3/2 md:aspect-square md:w-2/5 dark:border-sky-300/25">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/80 to-transparent"
                            />
                            <ResponsiveImage
                                source={responsiveImages.heavyHaulage01}
                                sizes="(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) 36vw, 24vw"
                                alt="Turnkey heavy haulage convoy staging on site"
                                className="h-full w-full object-cover object-[52%_52%] transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                            />
                        </div>

                        <div className="relative z-10 flex-1 space-y-3 sm:space-y-4 md:pl-2">
                            <div className="bento-glass-icon flex size-14 items-center justify-center rounded-xl text-primary dark:text-sky-300">
                                <Building2 className="h-7 w-7" />
                            </div>
                            <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl">
                                Turnkey Solutions
                            </h3>
                            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                                Entrusted by South Africa&apos;s most established industrial, mining, and construction companies as their sole provider for complex logistical operations and heavy hauling.
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
