import Wrapper from '@/components/ui/misc/wrapper';
import { FloatingStatCard } from '@/components/ui/misc/floating-stat-card';
// @ts-ignore
import imgHeavy2 from '@/../images/lineup.webp';

export default function AboutManifesto() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-primary/5 blur-[120px] rounded-full"></div>
                {/* Rotating Azimuth Telemetry Compass */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[650px] md:w-[850px] md:h-[850px] opacity-25 dark:opacity-20 pointer-events-none">
                    <svg className="w-full h-full text-primary animate-[spin_60s_linear_infinite]" viewBox="0 0 600 600" fill="none" stroke="currentColor">
                        <circle cx="300" cy="300" r="280" strokeWidth="1" strokeDasharray="4 8" />
                        <circle cx="300" cy="300" r="240" strokeWidth="1.5" />
                        <circle cx="300" cy="300" r="200" strokeWidth="0.75" strokeDasharray="1 5" />
                        <circle cx="300" cy="300" r="140" strokeWidth="1" strokeDasharray="12 12" />
                        <line x1="300" y1="20" x2="300" y2="40" strokeWidth="2" />
                        <line x1="300" y1="560" x2="300" y2="580" strokeWidth="2" />
                        <line x1="20" y1="300" x2="40" y2="300" strokeWidth="2" />
                        <line x1="560" y1="300" x2="580" y2="300" strokeWidth="2" />
                        <line x1="102" y1="102" x2="116" y2="116" strokeWidth="1.5" />
                        <line x1="484" y1="102" x2="498" y2="116" strokeWidth="1.5" />
                        <line x1="102" y1="498" x2="116" y2="484" strokeWidth="1.5" />
                        <line x1="484" y1="498" x2="498" y2="484" strokeWidth="1.5" />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary/40 animate-ping" />
                </div>
            </div>

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
