import Wrapper from '@/components/ui/misc/wrapper';
import { FloatingStatCard } from '@/components/ui/misc/floating-stat-card';
import SectionHeading from '@/components/ui/misc/section-heading';

export default function AboutManifesto() {
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

            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                {/* Rotating Azimuth Telemetry Compass */}
                <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 opacity-20 sm:h-[700px] sm:w-[700px] md:h-[850px] md:w-[850px] dark:opacity-15">
                    <svg
                        className="h-full w-full animate-[spin_60s_linear_infinite] text-primary motion-reduce:animate-none dark:text-sky-400"
                        viewBox="0 0 600 600"
                        fill="none"
                        stroke="currentColor"
                    >
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
                    <div className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-primary/40 motion-reduce:animate-none dark:bg-sky-400/50" />
                </div>
            </div>

            <Wrapper>
                <div className="relative z-10">
                    <SectionHeading
                        label="Our Mission"
                        title={
                            <>
                                Moving the impossible <br />
                                <span className="bg-linear-to-r from-primary to-sky-500 bg-clip-text pr-1 text-transparent">
                                    across borders.
                                </span>
                            </>
                        }
                        align="center"
                    >
                        Teemane Heavy Haulage is not just a transport company — we are specialised logistics engineers. From massive mining infrastructure to sensitive industrial components, we plan, route, and execute the movement of Africa&apos;s most challenging abnormal loads.
                    </SectionHeading>
                </div>

                {/* Embedded YouTube Video inside Frosted Glass Display Bezel */}
                <div className="relative z-10 mx-auto mt-12 max-w-5xl pb-8 sm:mt-16 lg:mt-20 lg:pb-0">
                    <div className="bento-glass-card relative rounded-3xl p-1.5 sm:p-2">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/85 to-transparent dark:via-sky-200/60"
                        />
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-sky-400/25 bg-black shadow-2xl">
                            <iframe
                                className="h-full w-full border-0"
                                src="https://www.youtube-nocookie.com/embed/vtxOjKiEqB4?rel=0&modestbranding=1"
                                title="Teemane Heavy Haulage Fleet & Operations Video"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <FloatingStatCard
                        value="250T+"
                        label="Max Payload Capacity"
                        position="bottom-left"
                        delay={0.5}
                        glass="realglass"
                    />
                </div>
            </Wrapper>
        </section>
    );
}
