import Wrapper from '@/components/ui/misc/wrapper';
import { FloatingStatCard } from '@/components/ui/misc/floating-stat-card';
// @ts-ignore
import imgHeavy2 from '@/../images/heavy-haulage-02.webp';

export default function AboutManifesto() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <Wrapper>
                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-foreground leading-[1.1]">
                        Moving the impossible <br/>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-sky-500 pr-1 pb-1">across borders.</span>
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Teemane Heavy Haulage is not just a transport company we are specialised logistics engineers. From massive mining infrastructure to sensitive industrial components, we plan, route, and execute the movement of Africa's most challenging abnormal loads.
                    </p>
                </div>

                <div className="mt-16 md:mt-24 relative z-10">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-100 md:h-150 group">
                        <img src={imgHeavy2} alt="Heavy Haulage Operation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent mix-blend-multiply"></div>
                    </div>
                    <FloatingStatCard value="250T+" label="Max Payload Capacity" position="bottom-left" delay={0.5} />
                </div>
            </Wrapper>
        </section>
    );
}
