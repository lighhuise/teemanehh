import Wrapper from "@/components/ui/misc/wrapper";
import {motion, useScroll, useTransform} from "framer-motion";
import {useEffect, useRef, useState} from "react";
// @ts-ignore
import heroBgImage from "@/../images/heavy-haulage-02.webp";
import {Link} from "@inertiajs/react";

export default function Her2o() {
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
                <motion.div
                    className="relative w-full aspect-16/10 sm:aspect-16/9 md:aspect-21/9 lg:aspect-auto lg:absolute lg:inset-0 bg-background lg:bg-slate-950 origin-top overflow-hidden pt-16 sm:pt-32 lg:pt-0 [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] lg:[mask-image:none] [-webkit-mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] lg:[-webkit-mask-image:none]"
                    style={{ y: isMobileOrTablet ? undefined : yImage }}
                >
                    <img
                        src={heroBgImage}
                        alt="Teemane Heavy Haulage"
                        // Balanced sizing and focal point on convoy across all viewports
                        className="w-full contrast-125 h-full object-cover object-[43%_center] sm:object-center lg:absolute lg:top-[-20%] lg:h-[140%] lg:left-0"
                    />
                    {/* Gradient overlay to ensure visual depth and seamless transition */}
                    <div className="absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent lg:from-slate-950/70 lg:via-slate-950/20 lg:to-transparent" />
                </motion.div>

                {/* Content Container - flows naturally under image on mobile & tablet, overlays image on desktop */}
                <motion.div
                    className="relative z-10 w-full"
                    style={{ y: isMobileOrTablet ? undefined : yText, opacity: isMobileOrTablet ? undefined : opacityText }}
                >
                    <Wrapper className="pt-6 sm:pt-8 lg:pt-40 pb-14 sm:pb-8 lg:pb-8">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 lg:gap-12">
                            {/* Left: Heading and Description */}
                            <div className="max-w-xl sm:max-w-2xl lg:max-w-xl text-left space-y-1.5">
                                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black uppercase italic tracking-tighter text-foreground lg:text-white leading-[1.1] drop-shadow-none lg:drop-shadow-[0_3px_10px_rgba(0,0,0,0.85)]">
                                   <span className={'h-10  w-2 inline-block -skew-x-18 bg-[#0064be]'}></span> Moving the <span className="text-white italic drop-shadow-sm">Impossible</span>
                                </h1>
                                <p className="text-sm sm:text-base lg:text-lg text-foreground/80 lg:text-slate-100 font-medium leading-relaxed drop-shadow-none lg:drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                                     We specialize in abnormal loads.
                                </p>
                                <Link
                                    href="/contact-us"
                                    prefetch="hover"
                                    className="text-sm font-bold whitespace-nowrap tracking-widest uppercase inline-flex items-center gap-2 bg-[#0064be] hover:from-primary/90 hover:to-primary text-primary-foreground transition-all shadow-sm hover:shadow px-5 py-2.5 -skew-x-18"
                                >
                                    Request a Quote
                                </Link>
                            </div>
                        </div>

                    </Wrapper>
                </motion.div>
            </div>
        </div>
    );
}
