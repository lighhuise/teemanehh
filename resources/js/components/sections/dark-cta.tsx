import type { CSSProperties } from 'react';
import { Link } from '@inertiajs/react';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';
import { buttonVariants } from '@/components/ui/button';
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
        <section className="py-16 sm:py-24 lg:py-28 isolate bg-muted/40 text-foreground relative overflow-hidden border-y border-border">
            <Wrapper className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
                    <div className="lg:col-span-7 space-y-8">
                        <SectionHeading
                            label="Proven Leadership"
                            title={
                                <>
                                    100+ Years of{' '}
                                    <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/75">
                                        Combined Expertise.
                                    </span>
                                </>
                            }
                            align="left"
                        >
                            With over a century of collective industry experience, our leadership team delivers the technical rigor and practical know-how needed to master Africa's toughest transport routes. We engineer every transit, eliminate risk, and deliver certainty from start to finish.
                        </SectionHeading>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                            {capabilities.map((item) => (
                                <li key={item}>
                                    <SpotlightCard
                                        theme="dark"
                                        spotlightColor="var(--spotlight-color)"
                                        intensity={0.2}
                                        spotlightSize={160}
                                        softness={0.7}
                                        shape="circle"
                                        borderGlow={0.85}
                                        proximity={160}
                                        smoothing={0.5}
                                        grain={0}
                                        ambient={false}
                                        flare
                                        className="h-full rounded-xl! p-4! flex items-start gap-3.5 shadow-xs!"
                                        style={{
                                            '--spotlight-card-surface': 'var(--card)',
                                            '--spotlight-card-border': 'var(--border)',
                                        } as CSSProperties}
                                    >
                                        <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-heading font-black text-foreground tracking-tight uppercase leading-snug">
                                            {item}
                                        </span>
                                    </SpotlightCard>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Elevated CTA Card */}
                    <div className="lg:col-span-5 relative">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-4 bg-primary/10 blur-3xl rounded-full"
                        />

                        <SpotlightCard
                            theme="dark"
                            spotlightColor="var(--spotlight-color)"
                            intensity={0.2}
                            spotlightSize={160}
                            softness={0.7}
                            shape="circle"
                            borderGlow={0.85}
                            proximity={160}
                            smoothing={0.5}
                            grain={0}
                            ambient={false}
                            flare
                            className="text-card-foreground rounded-3xl! p-8! sm:p-10! md:p-12! shadow-xl! text-center"
                            style={{
                                '--spotlight-card-surface': 'var(--card)',
                                '--spotlight-card-border': 'var(--border)',
                            } as CSSProperties}
                        >
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_13px,color-mix(in_oklch,var(--primary)_7%,transparent)_13px,color-mix(in_oklch,var(--primary)_7%,transparent)_14px)] mask-[radial-gradient(ellipse_at_top_right,black_15%,transparent_75%)]"
                            />
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
                            />
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -top-24 -right-24 size-60 rounded-full bg-primary/12 blur-3xl"
                            />

                            <div className="relative z-10">
                                <div className="size-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mx-auto mb-6 shadow-xs">
                                    <Trophy className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-card-foreground mb-4">
                                    Ready for your next project?
                                </h3>
                                <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
                                    Let us engineer the optimal transport solution for your oversized and abnormal cargo needs.
                                </p>
                                <Link
                                    href="/contact-us"
                                    prefetch="hover"
                                    className={buttonVariants({ size: 'xl', className: 'w-full' })}
                                >
                                    <span>Request a Quote</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
