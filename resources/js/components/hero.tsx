import CutoutBox from "@/components/ui/misc/cutout-box";
import Wrapper from "@/components/ui/misc/wrapper";
import { Link } from "@inertiajs/react";
import { ArrowRight, ShieldCheck, MapPin, Clock } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
// @ts-ignore
import heroBgImage from "@/../images/heavy-haulage-02.webp";

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth < 640;
        }
        return false;
    });

    useEffect(() => {
        const media = window.matchMedia("(max-width: 639px)");
        const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        setIsMobile(media.matches);
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
            <CutoutBox
                position="bottom"
                className="relative flex flex-col justify-end z-0 drop-shadow-lg min-h-[46vh] sm:min-h-[65vh] lg:min-h-[85vh] overflow-hidden"
            >
                {/* Background Image Container - animated for parallax on larger screens */}
                <motion.div
                    className="absolute inset-0 bg-slate-950 origin-top"
                    style={{ y: isMobile ? undefined : yImage }}
                >
                    <img
                        src={heroBgImage}
                        alt="Teemane Heavy Haulage"
                        // Balanced sizing and focal point on convoy across all viewports
                        className="absolute top-0 left-0 w-full h-full sm:top-[-10%] sm:h-[120%] lg:top-[-20%] lg:h-[140%] object-cover object-[43%_center] sm:object-center"
                    />
                    {/* Gradient overlays to darken bottom-left for text readability while leaving image visible */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent sm:via-slate-950/30 sm:to-black/10" />
                    {/*<div className="absolute inset-0 bg-linear-to-r from-slate-950/70 via-slate-950/20 to-transparent" />*/}
                </motion.div>

                {/* Content Container - animated for parallax */}
                <motion.div
                    className="relative z-10 w-full"
                    style={{ y: yText, opacity: opacityText }}
                >
                    <Wrapper className="pb-8 sm:pb-14 lg:pb-16 pt-24 sm:pt-36 lg:pt-40">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
                            {/* Left: Heading and Description */}
                            <div className="max-w-xl text-left space-y-3">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black uppercase tracking-tighter text-white leading-[1.1] drop-shadow-xl">
                                    Moving the <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 drop-shadow-sm pr-1 pb-1">Impossible</span>
                                </h1>
                                <p className="text-sm sm:text-base lg:text-lg text-slate-200/90 font-medium leading-relaxed drop-shadow-md">
                                    South Africa's most trusted heavy haulage experts. We specialize in abnormal loads, oversized machinery, and complex transport logistics.
                                </p>
                            </div>

                            {/* Right: Trust Badges and CTA Buttons */}
                            <div className="hidden md:flex flex-col lg:items-end gap-4 shrink-0">
                                {/* Trust Badges */}
                                <div className="flex flex-wrap items-center lg:justify-end gap-2 sm:gap-3 text-xs font-semibold text-slate-200">
                                    <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-sm">
                                        <ShieldCheck className="w-3.5 h-3.5 text-sky-400"/> Fully Insured
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-sm">
                                        <MapPin className="w-3.5 h-3.5 text-sky-400"/> Nationwide Routes
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-sm">
                                        <Clock className="w-3.5 h-3.5 text-sky-400"/> 24/7 Response
                                    </div>
                                </div>

                                {/* Call to action buttons */}
                                <div className="flex flex-wrap items-center lg:justify-end gap-3 pt-1">
                                    <Link
                                        href="/contact-us"
                                        className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold tracking-widest uppercase px-6 py-3 rounded-lg text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        Request A Quote
                                    </Link>
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold tracking-widest uppercase px-6 py-3 rounded-lg text-xs sm:text-sm backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        View Fleet & Services
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </motion.div>
            </CutoutBox>
        </div>
    );
}
