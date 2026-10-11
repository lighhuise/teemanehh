import Wrapper from '@/components/ui/misc/wrapper';
import { Trophy, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DarkCta() {
    return (
        <section className="py-24 md:py-32 bg-background text-foreground relative overflow-hidden border-y border-border">
            {/* Ambient Corner Lights */}
            <div className="absolute top-0 left-0 w-125 h-125 bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-150 h-150 bg-sky-500/10 blur-[130px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>

            <Wrapper className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
                    <div className="lg:col-span-7 space-y-8">
                        <h2 className="text-4xl md:text-5xl text-balance font-black uppercase tracking-tighter text-foreground leading-[1.1]">
                            100+ Years of <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1 pb-1">Combined Expertise.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            Our management team brings an unparalleled depth of knowledge and capability required to deliver certainty in high-risk environments. We don't just move cargo we mitigate risk, overcome infrastructure challenges, and ensure flawless execution.
                        </p>
                        <ul className="space-y-5 pt-4">
                            {[
                                "Expert Route Surveying & Engineering",
                                "Abnormal Load Permits & specialised Escorting",
                                "Comprehensive End-to-End Project Management",
                                "Rigging & Heavy Lifting Coordination"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="text-primary w-5 h-5" />
                                    </div>
                                    <span className="text-lg font-bold text-foreground tracking-wide uppercase">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Card */}
                    <div className="lg:col-span-5 relative">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full"></div>

                        <div className="relative bg-card/80 backdrop-blur-2xl rounded-3xl p-10 md:p-12 border border-border shadow-xl text-center">
                            <Trophy className="w-16 h-16 text-primary mx-auto mb-6 drop-shadow-sm" />
                            <h3 className="text-3xl font-black uppercase tracking-tight text-foreground mb-4">Ready for your next project?</h3>
                            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">Let us engineer the optimal transport solution for your oversized and abnormal machinery.</p>
                            <a href="/contact-us" className="inline-flex w-full justify-center items-center gap-3 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 px-8 py-5 rounded-xl font-black tracking-widest uppercase text-sm">
                                Request a Quote <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
