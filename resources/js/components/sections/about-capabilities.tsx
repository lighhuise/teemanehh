import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';
import {Building2, ShieldCheck, Target, Truck} from 'lucide-react';
import ResponsiveImage from '@/components/ui/misc/responsive-image';
import {responsiveImages} from '@/lib/responsive-images';

export default function             AboutCapabilities() {
    return (
        <section className="py-16 sm:py-24 lg:py-28 bg-muted/40 border-y border-border">
            <Wrapper>
                <SectionHeading
                    title={
                        <>
                            Our Core{' '}
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500">
                                Capabilities
                            </span>
                        </>
                    }
                    label="Why we lead the sector"
                    align="center"
                >
                    Built on modern modular equipment, strict HSE governance, and decades of hands-on heavy transport leadership.
                </SectionHeading>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16">
                    {/* Bento Box 1: Large Wide */}
                    <div className="md:col-span-2 bg-card rounded-2xl p-7 sm:p-10 border border-border shadow-sm hover:shadow-lg hover:border-primary/35 transition-all duration-200 group">
                        <div className="size-14 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center rounded-xl mb-6">
                            <Truck className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-foreground mb-3">
                            State-of-the-Art Fleet
                        </h3>
                        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
                            Our modern fleet includes multi-axle modular trailers, heavy-duty prime movers, and specialised lowbeds explicitly designed and configured to handle staggering payload capacities over challenging terrains.
                        </p>
                    </div>

                    {/* Bento Box 2: Tall Navy Accent */}
                    <div className="bg-linear-to-br from-[#000d1e] via-[#011835] to-[#001027] text-white rounded-2xl p-7 sm:p-10 border border-primary/35 shadow-xl relative overflow-hidden flex flex-col justify-end min-h-[280px] md:min-h-[340px]">
                        {/* Subtle Industrial Stripe */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(-45deg,transparent,transparent_8px,#fff_8px,#fff_16px)]"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute -top-20 -right-20 size-52 rounded-full bg-primary/35 blur-3xl pointer-events-none"
                        />

                        <div className="relative z-10 mt-auto">
                            <div className="size-14 bg-sky-500/15 backdrop-blur-md flex items-center justify-center rounded-xl mb-6 border border-sky-400/30 text-sky-400">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight mb-3 text-white">
                                Zero Incidents
                            </h3>
                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                Stringent protocols, certified load supervisors, and meticulous route clearing guarantee the safe delivery of high-stakes transports.
                            </p>
                        </div>
                    </div>

                    {/* Bento Box 3: Square */}
                    <div className="bg-card rounded-2xl p-7 sm:p-10 border border-border shadow-sm hover:shadow-lg hover:border-primary/35 transition-all duration-200 group">
                        <div className="size-14 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center rounded-xl mb-6">
                            <Target className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-foreground mb-3">
                            Precision Planning
                        </h3>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            Every abnormal route is surveyed, simulated, and heavily escorted by our expert logistics personnel.
                        </p>
                    </div>

                    {/* Bento Box 4: Large Hybrid */}
                    <div className="md:col-span-2 bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm hover:shadow-lg hover:border-primary/35 transition-all duration-200 flex flex-col md:flex-row gap-6 sm:gap-8 items-center group">
                        <div className="w-full md:w-2/5 aspect-4/3 sm:aspect-3/2 md:aspect-square rounded-xl overflow-hidden border border-border/60 bg-muted">
                            <ResponsiveImage
                                source={responsiveImages.heavyHaulage01}
                                sizes="(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) 36vw, 24vw"
                                alt="Turnkey heavy haulage convoy staging on site"
                                className="w-full h-full object-cover object-[52%_52%] group-hover:scale-105 transition-transform duration-700 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                            />
                        </div>
                        <div className="flex-1 space-y-3 sm:space-y-4 md:pl-2">
                            <div className="size-14 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center rounded-xl">
                                <Building2 className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-foreground">
                                Turnkey Solutions
                            </h3>
                            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                                Entrusted by South Africa&apos;s most established industrial, mining, and construction companies as their sole provider for complex logistical operations and heavy hauling.
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
