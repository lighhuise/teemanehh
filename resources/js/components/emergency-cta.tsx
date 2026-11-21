import type {CSSProperties} from 'react';
import {AlertTriangle, PhoneCall} from 'lucide-react';
import Wrapper from './ui/misc/wrapper';
import LogoMark from '@/components/ui/misc/logo-mark';
import SpotlightCard from '@/components/SpotlightCard';
import TextLoop from "@/components/TextLoop";

export default function EmergencyCta() {
    return (
        <section className="py-16 sm:py-24 relative overflow-x-clip isolate bg-background">
            <TextLoop
                className={`absolute! top-0`}
                text="Emergencies ✦ 24/7 Rapid Response"
                shape="wave"
                speed={40}
                direction="reverse"
                separator="✦"
                curviness={12}
                tilt={2}
                fontSize={46}
                fontWeight={800}
                letterSpacing={3.5}
                uppercase
                ribbon
                ribbonColor="var(--primary)"
                ribbonWidth={86}
                edgeFade={0}
                cross={true}
                crossAngle={16}
                draggable={false}
                scrollBoost={0}
                outline={false}
                pauseOnHover
                outlineWidth={1.5}
            />
            <Wrapper>
                <SpotlightCard
                    theme="dark"
                    spotlightColor="#38bdf8"
                    intensity={0.2}
                    spotlightSize={320}
                    softness={0.7}
                    shape="circle"
                    borderGlow={0.85}
                    proximity={160}
                    smoothing={0.5}
                    grain={0}
                    ambient={false}
                    flare
                    className="scroll-divider-surface p-0! rounded-3xl! text-white shadow-2xl!"
                    style={{
                        '--spotlight-card-surface': 'transparent',
                        '--spotlight-card-border': 'rgba(56, 189, 248, 0.28)',
                    } as CSSProperties}
                >
                    {/* Atmospheric top-edge radial light flare, precision dot grid & canopy trim */}
                    <div aria-hidden="true" className="footer-corona pointer-events-none absolute inset-0" />
                    <div aria-hidden="true" className="footer-dots pointer-events-none absolute inset-0" />
                    <div aria-hidden="true" className="nav-canopy-hazard pointer-events-none absolute inset-x-0 top-0 h-1.5" />
                    <div aria-hidden="true" className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px" />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent"
                    />

                    {/* Subtle Watermark */}
                    <div
                        aria-hidden="true"
                        className="absolute top-0 right-0 pointer-events-none opacity-[0.07] translate-x-1/3 -translate-y-1/6"
                    >
                        <LogoMark className="w-72 md:w-104 h-auto text-white" />
                    </div>

                    <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
                        <div className="flex-1 space-y-5 text-center lg:text-left">
                            <div className="emergency-cta-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sky-200">
                                <AlertTriangle className="w-4 h-4 text-sky-400 shrink-0" />
                                <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em]">
                                    24/7 Rapid Response
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black uppercase tracking-tighter text-white leading-[1.08]">
                                Emergencies Don&apos;t Wait For{' '}
                                <br className="hidden lg:block" />
                                <span className="text-sky-400">
                                    Business Hours.
                                </span>
                            </h2>

                            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Unexpected equipment failures and critical incidents demand immediate action. Our specialised rapid-response teams are on standby 24/7 to provide urgent heavy haulage and transport solutions, minimising your downtime.
                            </p>
                        </div>

                        <div className="shrink-0 w-full sm:w-auto">
                            <a
                                href="tel:0861888004"
                                className="emergency-cta-glass cursor-pointer group overflow-hidden isolate relative flex items-center justify-center gap-5 text-white transition-all duration-200 px-6 sm:px-8 py-5 sm:py-6 rounded-2xl w-full sm:w-auto active:translate-y-px motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#000c1d]"
                            >
                                <div aria-hidden="true" className="emergency-cta-glass-flare pointer-events-none absolute inset-0" />
                                <div aria-hidden="true" className="nav-logo-plinth-dots pointer-events-none absolute inset-0" />
                                <div aria-hidden="true" className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px" />

                                <div className="relative z-10 bg-white/15 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-sky-200/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none">
                                    <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <div className="relative z-10 text-left">
                                    <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-sky-100/90 mb-0.5">
                                        Direct Dispatch Line
                                    </span>
                                    <span className="block text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-white whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,12,32,0.45)]">
                                        086 188 8004
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </SpotlightCard>
            </Wrapper>
        </section>
    );
}
