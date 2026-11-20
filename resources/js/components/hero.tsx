import Wrapper from "@/components/ui/misc/wrapper";
import {Link} from "@inertiajs/react";
import {ArrowRight, Clock, MapPin, ShieldCheck} from "lucide-react";
import ResponsiveImage from "@/components/ui/misc/responsive-image";
import {responsiveImages} from "@/lib/responsive-images";
import {buttonVariants} from "@/components/ui/button";

export default function Hero() {
    return (
        <section aria-label="Introduction" className="relative">
            <div className="relative flex flex-col justify-end z-0 min-h-0 lg:min-h-[88vh] overflow-hidden bg-background lg:bg-[#020817] transition-colors duration-300">
                {/* Image Container - dedicated top section below fixed navbar on mobile & tablet, full-bleed background on desktop */}
                <div className="relative mt-16 sm:mt-20 lg:mt-0 w-full aspect-4/3 sm:aspect-16/9 md:aspect-2/1 lg:aspect-auto lg:absolute lg:inset-0 bg-background lg:bg-[#020817] origin-top overflow-hidden [mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)] lg:[mask-image:none] [-webkit-mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)] lg:[-webkit-mask-image:none]">
                    <ResponsiveImage
                        source={responsiveImages.heavyHaulage02}
                        sizes="100vw"
                        priority
                        alt="Teemane Heavy Haulage abnormal load convoy transporting a Komatsu excavator"
                        className="w-full h-full contrast-115 object-cover object-[43%_46%] sm:object-[46%_46%] lg:object-[45%_42%] lg:absolute lg:top-[-15%] lg:h-[130%] lg:left-0"
                    />
                    {/* Multi-stop gradient scrim for guaranteed typography legibility over imagery */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-linear-to-t from-black/70  to-transparent to-30%"
                    />
                </div>

                {/* Content Container - flows naturally under image on mobile & tablet, overlays image on desktop */}
                <div className="relative z-10 w-full">
                    <Wrapper className="pt-6 sm:pt-8 lg:pt-44 pb-12 sm:pb-16 lg:pb-16">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
                            {/* Left: Eyebrow, Heading and Description */}
                            <div className="max-w-xl sm:max-w-2xl lg:max-w-xl text-left space-y-4">
                                {/*<span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full border bg-primary/10 text-primary border-primary/20 lg:bg-sky-500/15 lg:text-sky-300 lg:border-sky-400/30 lg:backdrop-blur-md">*/}
                                {/*    <span aria-hidden="true" className="size-1.5 rounded-full bg-primary lg:bg-sky-400" />*/}
                                {/*    Est. 2012 • South Africa &amp; SADC*/}
                                {/*</span>*/}

                                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter text-foreground lg:text-white leading-[1.04] drop-shadow-none lg:drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]">
                                    Moving the{' '}
                                    <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 lg:from-sky-400 lg:to-blue-400 pr-1">
                                        Impossible
                                    </span>
                                </h1>

                                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground lg:text-slate-200 font-normal leading-relaxed drop-shadow-none lg:drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
                                    South Africa's most trusted heavy haulage experts. We engineer abnormal loads, oversized machinery transport, and turnkey cross-border logistics with zero compromise.
                                </p>
                            </div>

                            {/* Right: Trust Badges and CTA Buttons */}
                            <div className="flex flex-col lg:items-end gap-4 shrink-0 pt-1 lg:pt-0">
                                {/* Trust Badges */}
                                <div className="flex flex-wrap items-center lg:justify-end gap-2 sm:gap-2.5 text-xs font-semibold">
                                    <div className="flex items-center gap-1.5 bg-muted/80 text-foreground border border-border lg:bg-[#000d1e]/75 lg:text-slate-100 lg:border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xs">
                                        <ShieldCheck className="w-3.5 h-3.5 text-primary lg:text-sky-400 shrink-0" />
                                        <span>Fully Insured</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-muted/80 text-foreground border border-border lg:bg-[#000d1e]/75 lg:text-slate-100 lg:border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xs">
                                        <MapPin className="w-3.5 h-3.5 text-primary lg:text-sky-400 shrink-0" />
                                        <span>Nationwide &amp; SADC</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-muted/80 text-foreground border border-border lg:bg-[#000d1e]/75 lg:text-slate-100 lg:border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xs">
                                        <Clock className="w-3.5 h-3.5 text-primary lg:text-sky-400 shrink-0" />
                                        <span>24/7 Dispatch</span>
                                    </div>
                                </div>

                                {/* Call to action buttons */}
                                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center lg:justify-end gap-3 pt-1">
                                    <Link
                                        href="/contact-us"
                                        prefetch="hover"
                                        className={buttonVariants({ size: 'lg', className: 'px-7' })}
                                    >
                                        <span>Request A Quote</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href="/services"
                                        prefetch="hover"
                                        className={buttonVariants({
                                            variant: 'outline',
                                            size: 'lg',
                                            className:
                                                'px-7 lg:border-white/25 lg:bg-[#000d1e]/55 lg:hover:bg-[#000d1e]/80 lg:hover:border-white/40 lg:text-white lg:hover:text-white lg:backdrop-blur-md',
                                        })}
                                    >
                                        <span>View Fleet &amp; Services</span>
                                        <ArrowRight className="w-4 h-4" />
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
