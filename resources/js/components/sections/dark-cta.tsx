import type { CSSProperties } from 'react';
import { Link } from '@inertiajs/react';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';
import { ArrowRight, CheckCircle2, Trophy } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';

const capabilities = [
    'Expert Route Surveying & Engineering',
    'Abnormal Load Permits & Specialised Escorting',
    'Comprehensive End-to-End Project Management',
    'Multi-Axle Modular Transport & SADC Logistics',
];

export default function DarkCta() {
    return (
        <section className="capabilities-glass-stage relative isolate overflow-hidden border-y border-sky-500/15 py-16 text-foreground sm:py-24 lg:py-28">
            <div aria-hidden="true" className="capabilities-stage-dots pointer-events-none absolute inset-0" />
            <div
                aria-hidden="true"
                className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px opacity-50"
            />
            <div
                aria-hidden="true"
                className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-45"
            />

            <Wrapper className="relative z-10">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
                    <div className="space-y-8 lg:col-span-7">
                        <SectionHeading
                            label="Proven Leadership"
                            title={
                                <>
                                    100+ Years of{' '}
                                    <span className="bg-linear-to-r from-primary to-sky-500 bg-clip-text text-transparent">
                                        Combined Expertise.
                                    </span>
                                </>
                            }
                            align="left"
                        >
                            With over a century of collective industry experience, our leadership team delivers the technical rigor and practical know-how needed to master Africa&apos;s toughest transport routes. We engineer every transit, eliminate risk, and deliver certainty from start to finish.
                        </SectionHeading>

                        <ul className="grid grid-cols-1 gap-3.5 pt-2 sm:grid-cols-2">
                            {capabilities.map((item) => (
                                <li key={item}>
                                    <SpotlightCard
                                        theme="dark"
                                        spotlightColor="#38bdf8"
                                        intensity={0.14}
                                        spotlightSize={160}
                                        softness={0.7}
                                        shape="circle"
                                        borderGlow={0.85}
                                        proximity={160}
                                        smoothing={0.5}
                                        grain={0}
                                        ambient={false}
                                        flare
                                        className="bento-glass-card relative flex h-full items-start gap-3.5 overflow-hidden rounded-xl! p-4! transition-all duration-300 hover:-translate-y-0.5"
                                        style={
                                            {
                                                '--spotlight-card-surface': 'transparent',
                                                '--spotlight-card-border': 'rgba(56, 189, 248, 0.22)',
                                            } as CSSProperties
                                        }
                                    >
                                        <div
                                            aria-hidden="true"
                                            className="bento-glass-card-flare pointer-events-none absolute inset-0"
                                        />
                                        <div
                                            aria-hidden="true"
                                            className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-75"
                                        />
                                        <div className="bento-glass-icon relative z-10 mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg text-primary dark:text-sky-300">
                                            <CheckCircle2 className="h-4 w-4" />
                                        </div>
                                        <span className="relative z-10 font-heading text-sm leading-snug font-black tracking-tight text-foreground uppercase">
                                            {item}
                                        </span>
                                    </SpotlightCard>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Elevated Signature Dark Steel Brand Plinth CTA Card */}
                    <div className="relative lg:col-span-5">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-4 rounded-full bg-primary/15 blur-3xl"
                        />

                        <SpotlightCard
                            theme="dark"
                            spotlightColor="#38bdf8"
                            intensity={0.18}
                            spotlightSize={220}
                            softness={0.7}
                            shape="circle"
                            borderGlow={0.9}
                            proximity={180}
                            smoothing={0.5}
                            grain={0}
                            ambient={false}
                            flare
                            className="scroll-divider-surface relative overflow-hidden rounded-3xl! border border-sky-400/35 p-8! text-center text-white shadow-2xl! sm:p-10! md:p-12!"
                            style={
                                {
                                    '--spotlight-card-surface': 'transparent',
                                    '--spotlight-card-border': 'rgba(125, 211, 252, 0.35)',
                                } as CSSProperties
                            }
                        >
                            <div aria-hidden="true" className="footer-corona pointer-events-none absolute inset-0" />
                            <div aria-hidden="true" className="footer-dots pointer-events-none absolute inset-0" />
                            <div
                                aria-hidden="true"
                                className="nav-canopy-hazard pointer-events-none absolute inset-x-0 top-0 h-1.5"
                            />
                            <div
                                aria-hidden="true"
                                className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px"
                            />
                            <div
                                aria-hidden="true"
                                className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-85"
                            />

                            <div className="relative z-10">
                                <div className="emergency-cta-pill mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl text-sky-300 shadow-[0_10px_28px_-6px_rgba(0,100,190,0.6)]">
                                    <Trophy className="h-8 w-8" />
                                </div>
                                <h3 className="mb-4 font-heading text-2xl font-black tracking-tight text-white uppercase sm:text-3xl">
                                    Ready for your next project?
                                </h3>
                                <p className="mb-8 text-base leading-relaxed text-sky-100/80 sm:text-lg">
                                    Let us engineer the optimal transport solution for your oversized and abnormal cargo needs.
                                </p>
                                <Link
                                    href="/contact-us"
                                    prefetch="hover"
                                    className="emergency-cta-glass group relative inline-flex h-12 w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl px-7 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="emergency-cta-glass-flare pointer-events-none absolute inset-0"
                                    />
                                    <span className="relative z-10">Request a Quote</span>
                                    <ArrowRight className="relative z-10 h-5 w-5 text-sky-200 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
