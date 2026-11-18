import Wrapper from "@/components/ui/misc/wrapper";
import {Link} from "@inertiajs/react";
import {ArrowRight, Clock, MapPin, ShieldCheck} from "lucide-react";
import {useScroll, useTransform} from "framer-motion";
import {useEffect, useRef, useState} from "react";
// @ts-ignore
import heroBgImage from "@/../images/heavy-haulage-02.webp";

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const [isMobileOrTablet, setIsMobileOrTablet] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth < 1024;
        }
        return false;
    });

    useEffect(() => {
        const media = window.matchMedia("(max-width: 1023px)");
        const onChange = (e: MediaQueryListEvent) => setIsMobileOrTablet(e.matches);
        setIsMobileOrTablet(media.matches);
        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, []);

    // Image moves slightly down as we scroll down (slower than scroll) on desktop
    const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    // Text moves down faster than image, creating depth
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    // Fade out text slightly as it scrolls away
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <div ref={ref}>
            <div

                className="relative flex flex-col justify-end z-0 drop-shadow-lg min-h-0 lg:min-h-[85vh] overflow-hidden bg-background lg:bg-slate-950 transition-colors duration-300"
            >
                {/* Image Container - dedicated top section on mobile & tablet, full-bleed parallax background on desktop */}
                <div
                    className="relative w-full aspect-16/10 sm:aspect-16/9 md:aspect-21/9 lg:aspect-auto lg:absolute lg:inset-0 bg-background lg:bg-slate-950 origin-top overflow-hidden pt-16  lg:pt-0 [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] lg:[mask-image:none] [-webkit-mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] lg:[-webkit-mask-image:none]"

                >
                    <img
                        src={heroBgImage}
                        alt="Teemane Heavy Haulage"
                        // Balanced sizing and focal point on convoy across all viewports
                        className="w-full contrast-125 h-full object-cover object-[43%_center] sm:object-center lg:absolute lg:top-[-20%] lg:h-[140%] lg:left-0"
                    />
                    {/* Gradient overlay to ensure visual depth and seamless transition */}
                    <div className="absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent lg:from-slate-950/40 lg:via-slate-950/20 lg:to-transparent" />
                </div>

                {/* Content Container - flows naturally under image on mobile & tablet, overlays image on desktop */}
                <div
                    className="relative z-10 w-full"

                >
                    <Wrapper className="pt-6 sm:pt-8 lg:pt-40 pb-14 sm:pb-16 lg:pb-16">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 lg:gap-12">
                            {/* Left: Heading and Description */}
                            <div className="max-w-xl sm:max-w-2xl lg:max-w-xl text-left space-y-3 sm:space-y-4">
                                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black uppercase tracking-tighter text-foreground lg:text-white leading-[1.1] drop-shadow-none lg:drop-shadow-[0_3px_4px_rgba(0,0,0,0.85)]">
                                    Moving the <span className="text-primary drop-shadow-sm pr-1 pb-1">Impossible</span>
                                </h1>
                                <p className="text-sm sm:text-base lg:text-lg text-foreground/80 lg:text-slate-100 font-medium leading-relaxed drop-shadow-none lg:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                    South Africa's most trusted heavy haulage experts. We specialize in abnormal loads, oversized machinery, and complex transport logistics.
                                </p>
                            </div>

                            {/* Right: Trust Badges and CTA Buttons */}
                            <div className="flex flex-col lg:items-end gap-4 shrink-0 pt-2 lg:pt-0">
                                {/* Trust Badges */}
                                <div className="flex flex-wrap items-center lg:justify-end gap-2 sm:gap-3 text-xs font-semibold text-foreground/90 lg:text-slate-200">
                                    <div className="flex items-center gap-1.5 bg-muted/60 text-foreground border border-border lg:bg-slate-950/70 lg:text-slate-200 lg:border-white/15 px-3 py-1.5 rounded-full backdrop-blur-md shadow-xs lg:shadow-md">
                                        <ShieldCheck className="w-3.5 h-3.5 text-primary lg:text-sky-400"/> Fully Insured
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-muted/60 text-foreground border border-border lg:bg-slate-950/70 lg:text-slate-200 lg:border-white/15 px-3 py-1.5 rounded-full backdrop-blur-md shadow-xs lg:shadow-md">
                                        <MapPin className="w-3.5 h-3.5 text-primary lg:text-sky-400"/> Nationwide Routes
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-muted/60 text-foreground border border-border lg:bg-slate-950/70 lg:text-slate-200 lg:border-white/15 px-3 py-1.5 rounded-full backdrop-blur-md shadow-xs lg:shadow-md">
                                        <Clock className="w-3.5 h-3.5 text-primary lg:text-sky-400"/> 24/7 Response
                                    </div>
                                </div>

                                {/* Call to action buttons */}
                                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center lg:justify-end gap-3 pt-1">
                                    <Link
                                        href="/contact-us"
                                        className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold tracking-widest uppercase px-6 py-3 rounded-lg text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        Request A Quote
                                    </Link>
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center justify-center gap-2 bg-background hover:bg-muted text-foreground border border-border lg:border-white/25 lg:bg-slate-950/40 lg:hover:bg-slate-900/60 lg:text-white font-bold tracking-widest uppercase px-6 py-3 rounded-lg text-xs sm:text-sm backdrop-blur-md shadow-xs lg:shadow-md hover:shadow-md lg:hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        View Fleet & Services
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            </div>
        </div>
    );
}
