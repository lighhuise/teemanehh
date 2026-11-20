import type {CSSProperties} from 'react';
import {AlertTriangle, PhoneCall} from 'lucide-react';
import Wrapper from './ui/misc/wrapper';
import LogoMark from '@/components/ui/misc/logo-mark';
import SpotlightCard from '@/components/SpotlightCard';

export default function EmergencyCta() {
    return (
        <section className="py-16 sm:py-24 relative overflow-x-clip isolate bg-background">
            <Wrapper>
                <SpotlightCard
                    theme="dark"
                    spotlightColor="var(--primary)"
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
                    className="p-0! rounded-3xl! bg-linear-to-br from-[#000d1e] via-[#011835] to-[#001027] text-white shadow-2xl!"
                    style={{
                        '--spotlight-card-surface': '#000d1e',
                        '--spotlight-card-border': 'rgba(0, 100, 190, 0.35)',
                    } as CSSProperties}
                >
                    {/* Subtle Watermark */}
                    <div
                        aria-hidden="true"
                        className="absolute top-0 right-0 pointer-events-none opacity-[0.07] translate-x-1/3 -translate-y-1/6"
                    >
                        <LogoMark className="w-72 md:w-104 h-auto text-white" />
                    </div>

                    {/* Ambient Glows */}
                    <div
                        aria-hidden="true"
                        className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/25 blur-[90px] pointer-events-none"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-sky-500/15 blur-[90px] pointer-events-none"
                    />

                    <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
                        <div className="flex-1 space-y-5 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-sky-500/15 border border-sky-400/30 px-4 py-1.5 rounded-full text-sky-300 shadow-xs">
                                <AlertTriangle className="w-4 h-4 text-sky-400 shrink-0" />
                                <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em]">
                                    24/7 Rapid Response
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black uppercase tracking-tighter text-white leading-[1.08]">
                                Emergencies Don&apos;t Wait For{' '}
                                <br className="hidden lg:block" />
                                <span className="bg-clip-text text-transparent bg-linear-to-r from-sky-400 to-blue-400 pr-1">
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
                                className="cursor-pointer group overflow-clip isolate relative flex items-center justify-center gap-5 bg-linear-to-r from-primary to-sky-600 text-white hover:from-primary/90 hover:to-sky-500 transition-all duration-200 px-6 sm:px-8 py-5 sm:py-6 rounded-2xl w-full sm:w-auto shadow-xl shadow-primary/30 hover:shadow-2xl motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#000d1e]"
                            >
                                <div className="bg-white/15 p-3.5 sm:p-4 rounded-xl border border-white/20 transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none">
                                    <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <div className="text-left">
                                    <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-sky-100/90 mb-0.5">
                                        Direct Dispatch Line
                                    </span>
                                    <span className="block text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-white whitespace-nowrap">
                                        086 188 8004
                                    </span>
                                </div>
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 -z-10 opacity-10 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#000_4px,#000_8px)]"
                                />
                            </a>
                        </div>
                    </div>
                </SpotlightCard>
            </Wrapper>
        </section>
    );
}
