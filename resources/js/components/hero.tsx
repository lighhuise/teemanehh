import Wrapper from '@/components/ui/misc/wrapper';
import { Link } from '@inertiajs/react';
import { ArrowRight, Clock, MapPin, ShieldCheck } from 'lucide-react';
import ResponsiveImage from '@/components/ui/misc/responsive-image';
import { responsiveImages } from '@/lib/responsive-images';

const trustBadges = [
    { icon: ShieldCheck, label: 'Fully Insured' },
    { icon: MapPin, label: 'Nationwide & SADC' },
    { icon: Clock, label: '24/7 Dispatch' },
] as const;

export default function Hero() {
    return (
        <section aria-label="Introduction" className="relative">
            <div className="capabilities-glass-stage relative z-0 flex min-h-0 flex-col justify-end overflow-hidden transition-colors duration-300 lg:min-h-[88vh] lg:bg-[#020817] lg:bg-none">
                {/* Ambient CAD dots on mobile/tablet where text flows below the photo */}
                <div
                    aria-hidden="true"
                    className="capabilities-stage-dots pointer-events-none absolute inset-0 lg:hidden"
                />

                {/* Image Container - dedicated top section below fixed navbar on mobile & tablet, full-bleed background on desktop */}
                <div className="relative mt-16 aspect-4/3 w-full origin-top overflow-hidden bg-background [mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)] sm:mt-20 sm:aspect-16/9 md:aspect-2/1 lg:absolute lg:inset-0 lg:mt-0 lg:aspect-auto lg:bg-[#020817] lg:[mask-image:none] lg:[-webkit-mask-image:none]">
                    <ResponsiveImage
                        source={responsiveImages.heavyHaulage02}
                        sizes="100vw"
                        priority
                        alt="Teemane Heavy Haulage abnormal load convoy transporting a Komatsu excavator"
                        className="h-full w-full object-cover object-[43%_46%] contrast-115 sm:object-[46%_46%] lg:absolute lg:top-[-15%] lg:left-0 lg:h-[130%] lg:object-[45%_42%]"
                    />
                    {/* Multi-stop gradient scrim for guaranteed typography legibility over imagery */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-linear-to-t from-[#000c1d]/80 via-[#000c1d]/25 to-transparent lg:from-[#000c1d]/85 lg:via-[#000c1d]/20 lg:to-transparent"
                    />
                </div>

                {/* Content Container - flows naturally under image on mobile & tablet, overlays image on desktop */}
                <div className="relative z-10 w-full">
                    <Wrapper className="pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-44 lg:pb-16">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
                            {/* Left: Heading and Description */}
                            <div className="max-w-xl space-y-4 text-left sm:max-w-2xl lg:max-w-xl">
                                <h1 className="font-heading text-3xl leading-[1.04] font-black tracking-tighter text-foreground uppercase drop-shadow-none sm:text-5xl lg:text-6xl lg:text-white lg:drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]">
                                    Moving the{' '}
                                    <span className="bg-linear-to-r from-primary to-sky-500 bg-clip-text pr-1 text-transparent lg:from-sky-300 lg:to-blue-400">
                                        Impossible
                                    </span>
                                </h1>

                                <p className="text-sm leading-relaxed font-normal text-muted-foreground drop-shadow-none sm:text-base lg:text-lg lg:text-sky-50/90 lg:drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
                                    South Africa&apos;s most trusted heavy haulage experts. We engineer abnormal loads, oversized machinery transport, and turnkey cross-border logistics with zero compromise.
                                </p>
                            </div>

                            {/* Right: Optical Glass Trust Badges and CTA Buttons */}
                            <div className="flex shrink-0 flex-col gap-4 pt-1 lg:items-end lg:pt-0">
                                {/* Trust Badges */}
                                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold sm:gap-2.5 lg:justify-end">
                                    {trustBadges.map(({ icon: Icon, label }) => (
                                        <div
                                            key={label}
                                            className="bento-glass-card hero-glass-pill relative flex items-center gap-1.5 overflow-hidden rounded-full px-3.5 py-1.5 text-foreground shadow-xs lg:text-sky-50"
                                        >
                                            <Icon className="h-3.5 w-3.5 shrink-0 text-primary lg:text-sky-300" />
                                            <span>{label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Call to action buttons */}
                                <div className="flex flex-col flex-wrap items-stretch gap-3 pt-1 sm:flex-row sm:items-center lg:justify-end">
                                    <Link
                                        href="/contact-us"
                                        prefetch="hover"
                                        className="emergency-cta-glass group relative inline-flex h-11 items-center justify-center gap-2.5 overflow-hidden rounded-xl px-7 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="emergency-cta-glass-flare pointer-events-none absolute inset-0"
                                        />
                                        <span className="relative z-10">Request A Quote</span>
                                        <ArrowRight className="relative z-10 h-4 w-4 text-sky-200 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                    <Link
                                        href="/services"
                                        prefetch="hover"
                                        className="bento-glass-card hero-glass-secondary group relative inline-flex h-11 items-center justify-center gap-2.5 overflow-hidden rounded-xl px-7 text-sm font-bold tracking-wider text-foreground uppercase transition-all duration-300 hover:-translate-y-0.5 lg:text-white"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="bento-glass-card-flare pointer-events-none absolute inset-0 lg:hidden"
                                        />
                                        <span className="relative z-10">View Fleet &amp; Services</span>
                                        <ArrowRight className="relative z-10 h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1 lg:text-sky-300" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            </div>
        </section>
    );
}
