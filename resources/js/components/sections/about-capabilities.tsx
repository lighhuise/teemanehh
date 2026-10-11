import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';
import { Target, ShieldCheck, Truck, Building2 } from 'lucide-react';
// @ts-ignore
import imgHeavy1 from '@/../images/heavy-haulage-01.webp';

export default function AboutCapabilities() {
    return (
        <section className="py-20 md:py-32 bg-muted/40 border-y border-border">
            <Wrapper>
                <SectionHeading title="Our Core Capabilities" label="Why we lead the sector" align="center" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-20">
                    {/* Bento Box 1: Large Wide */}
                    <div className="md:col-span-2 bg-background/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-border shadow-xl hover:shadow-2xl transition-all group">
                        <div className="w-16 h-16 bg-linear-to-br from-primary/20 to-primary/5 text-primary flex items-center justify-center rounded-xl mb-8 group-hover:-translate-y-2 transition-transform shadow-sm">
                            <Truck className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tight mb-4">State-of-the-Art Fleet</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                            Our modern fleet includes multi-axle modular trailers, heavy-duty prime movers, and specialised lowbeds explicitly designed and configured to handle staggering payload capacities over challenging terrains.
                        </p>
                    </div>

                    {/* Bento Box 2: Tall Accent */}
                    <div className="bg-linear-to-br from-primary to-primary/80 text-primary-foreground rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-primary/40 transition-all group relative overflow-hidden flex flex-col justify-end min-h-[350px]">
                        {/* Industrial Hazard Texture */}
                        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(-45deg,transparent,transparent_8px,#000_8px,#000_16px)]"></div>

                        <div className="relative z-10 mt-auto">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md flex items-center justify-center rounded-xl mb-6 group-hover:-translate-y-2 transition-transform border border-white/30">
                                <ShieldCheck className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-white drop-shadow-md">Zero Incidents</h3>
                            <p className="text-white/90 leading-relaxed font-medium">
                                Stringent protocols and meticulous route clearing guarantee the safe delivery of high-stakes transports.
                            </p>
                        </div>
                    </div>

                    {/* Bento Box 3: Square */}
                    <div className="bg-background/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-border shadow-xl hover:shadow-2xl transition-all group">
                        <div className="w-16 h-16 bg-linear-to-br from-primary/20 to-primary/5 text-primary flex items-center justify-center rounded-xl mb-8 group-hover:-translate-y-2 transition-transform shadow-sm">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Precision Planning</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Every abnormal route is surveyed, simulated, and heavily escorted by our expert logistics personnel.
                        </p>
                    </div>

                    {/* Bento Box 4: Large Hybrid */}
                    <div className="md:col-span-2 bg-background/80 backdrop-blur-xl rounded-3xl p-8 border border-border shadow-xl hover:shadow-2xl transition-all flex flex-col md:flex-row gap-8 items-center group">
                        <div className="w-full md:w-2/5 aspect-4/3 md:aspect-square rounded-2xl overflow-hidden border border-white/5">
                            <img src={imgHeavy1} alt="Turnkey Solutions" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        </div>
                        <div className="flex-1 space-y-4 md:pl-4">
                            <div className="w-16 h-16 bg-linear-to-br from-primary/20 to-primary/5 text-primary flex items-center justify-center rounded-xl mb-4 group-hover:-translate-y-2 transition-transform shadow-sm">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black uppercase tracking-tight">Turnkey Solutions</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Entrusted by South Africa's most established industrial, mining, and construction companies as their sole provider for complex logistical operations and heavy hauling.
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
