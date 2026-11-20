import Wrapper from '@/components/ui/misc/wrapper';
import { FloatingStatCard } from '@/components/ui/misc/floating-stat-card';
import SectionHeading from '@/components/ui/misc/section-heading';

export default function AboutManifesto() {
    return (
        <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden bg-background">
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-primary/5 blur-[120px] rounded-full" />
                {/* Rotating Azimuth Telemetry Compass */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] sm:w-[700px] sm:h-[700px] md:w-[850px] md:h-[850px] opacity-20 dark:opacity-15 pointer-events-none">
                    <svg className="w-full h-full text-primary animate-[spin_60s_linear_infinite] motion-reduce:animate-none" viewBox="0 0 600 600" fill="none" stroke="currentColor">
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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary/40 animate-ping motion-reduce:animate-none" />
                </div>
            </div>

            <Wrapper>
                <div className="relative z-10">
                    <SectionHeading
                        label="Our Mission"
                        title={
                            <>
                                Moving the impossible <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-sky-500 pr-1">
                                    across borders.
                                </span>
                            </>
                        }
                        align="center"
                    >
                        Teemane Heavy Haulage is not just a transport company — we are specialised logistics engineers. From massive mining infrastructure to sensitive industrial components, we plan, route, and execute the movement of Africa&apos;s most challenging abnormal loads.
                    </SectionHeading>
                </div>

                {/* Embedded YouTube Video */}
                <div className="mt-12 sm:mt-16 lg:mt-20 pb-8 lg:pb-0 relative z-10 max-w-5xl mx-auto">
                    <div className="w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl bg-black relative">
                        <iframe
                            className="w-full h-full border-0"
                            src="https://www.youtube-nocookie.com/embed/vtxOjKiEqB4?rel=0&modestbranding=1"
                            title="Teemane Heavy Haulage Fleet & Operations Video"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                    <FloatingStatCard value="250T+" label="Max Payload Capacity" position="bottom-left" delay={0.5} />
                </div>
            </Wrapper>
        </section>
    );
}
