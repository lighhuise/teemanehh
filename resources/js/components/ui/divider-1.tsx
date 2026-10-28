

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import LogoMark from '@/components/ui/misc/logo-mark';

interface Divider1Props extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

function Divider1({ className, ...props }: Divider1Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    // Mechanical counter-sliding parallax tracks on scroll
    const xTrackUpper = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
    const xTrackLower = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);
    const centerScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.04, 0.92]);

    return (
        <div
            ref={containerRef}
            aria-hidden="true"
            className={cn(
                'relative isolate h-24 w-full select-none overflow-hidden sm:h-32 lg:h-40',
                'border-y-2 border-primary/80 bg-slate-950',
                'shadow-[inset_0_16px_36px_rgba(0,0,0,0.6),inset_0_-16px_36px_rgba(0,0,0,0.6)]',
                className
            )}
            {...props}
        >
            {/* Primary atmospheric core gradient */}
            <div className="absolute inset-0 -z-20 bg-linear-to-r from-slate-950 via-primary/95 to-slate-950" />

            {/* Radial spotlight behind the central coupling node */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-48 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/25 blur-3xl" />

            {/* Diagonal industrial hazard texture (parallax layer 1) */}
            <motion.div
                style={{ x: xTrackUpper }}
                className="pointer-events-none absolute -inset-x-16 inset-y-0 -z-10 opacity-15 bg-[repeating-linear-gradient(-45deg,transparent,transparent_6px,#000_6px,#000_12px)]"
            />

            {/* Precision CAD blueprint grid overlay */}
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Top precision millimeter ruler flange */}
            <motion.div
                style={{ x: xTrackLower }}
                className="pointer-events-none absolute top-0 -inset-x-16 h-2.5 border-b border-white/15 bg-slate-950/50 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.35)_0px,rgba(255,255,255,0.35)_1px,transparent_1px,transparent_12px)]"
            >
                <div className="h-full w-full bg-[repeating-linear-gradient(90deg,rgba(56,189,248,0.65)_0px,rgba(56,189,248,0.65)_2px,transparent_2px,transparent_60px)]" />
            </motion.div>

            {/* Bottom precision millimeter ruler flange */}
            <motion.div
                style={{ x: xTrackUpper }}
                className="pointer-events-none absolute bottom-0 -inset-x-16 h-2.5 border-t border-white/15 bg-slate-950/50 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.35)_0px,rgba(255,255,255,0.35)_1px,transparent_1px,transparent_12px)]"
            >
                <div className="h-full w-full bg-[repeating-linear-gradient(90deg,rgba(56,189,248,0.65)_0px,rgba(56,189,248,0.65)_2px,transparent_2px,transparent_60px)]" />
            </motion.div>

            {/* Horizontal structural horizon beam & center assembly */}
            <div className="relative flex h-full w-full items-center justify-center px-4">
                {/* Full-width glowing horizon axis line */}
                <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-linear-to-r from-transparent via-sky-300/60 to-transparent" />
                <div className="pointer-events-none absolute inset-x-1/4 top-1/2 h-[3px] -translate-y-1/2 bg-linear-to-r from-transparent via-sky-400/30 to-transparent blur-[2px]" />

                {/* Left stepped industrial chevron array */}
                <div className="mr-4 hidden items-center gap-1.5 sm:mr-6 sm:flex md:gap-2">
                    {[0.15, 0.25, 0.4, 0.6, 0.85].map((opacity, index) => (
                        <span
                            key={`left-rib-${index}`}
                            style={{ opacity }}
                            className="block h-5 w-1.5 -skew-x-24 rounded-[1px] bg-linear-to-b from-sky-300 via-white to-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.4)] sm:h-6 sm:w-2"
                        />
                    ))}
                </div>

                {/* Central Heavy-Haulage Structural Lockplate */}
                <motion.div
                    style={{ scale: centerScale }}
                    className="relative flex items-center gap-3 -skew-x-12 rounded-xl border border-sky-300/35 bg-slate-950/85 px-5 py-2.5 shadow-[0_0_30px_rgba(2,96,147,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md sm:px-7 sm:py-3"
                >
                    {/* Subtle internal hazard sheen */}
                    <div className="pointer-events-none absolute inset-0 rounded-xl opacity-15 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#fff_4px,#fff_5px)]" />

                    {/* Left telemetry beacon */}
                    <span className="relative flex h-2 w-2 skew-x-12 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
                    </span>

                    {/* Brand geometric emblem */}
                    <div className="relative z-10 skew-x-12 px-1">
                        <LogoMark className="h-6 w-auto drop-shadow-[0_2px_8px_rgba(56,189,248,0.45)] sm:h-8" />
                    </div>

                    {/* Right telemetry beacon */}
                    <span className="relative flex h-2 w-2 skew-x-12 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75 [animation-delay:750ms]" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
                    </span>
                </motion.div>

                {/* Right stepped industrial chevron array */}
                <div className="ml-4 hidden items-center gap-1.5 sm:ml-6 sm:flex md:gap-2">
                    {[0.85, 0.6, 0.4, 0.25, 0.15].map((opacity, index) => (
                        <span
                            key={`right-rib-${index}`}
                            style={{ opacity }}
                            className="block h-5 w-1.5 skew-x-24 rounded-[1px] bg-linear-to-b from-sky-300 via-white to-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.4)] sm:h-6 sm:w-2"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Divider1;

Divider1.displayName = 'Divider1';
