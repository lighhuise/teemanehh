

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import LogoMark from '@/components/ui/misc/logo-mark';
// @ts-ignore
import volvoBlueprintImage from '@/../images/volvo-FH16-abnormal-load-blueprint.webp';
// @ts-ignore
import volvoBlueprintImageLeft from '@/../images/volvo-FH16-abnormal-load-blueprint-left.webp';

interface Divider1Props extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    leftImage?: string;
    rightImage?: string;
}

const cadBoardStyle: React.CSSProperties = {
    backgroundColor: 'color-mix(in oklab, var(--primary) 72%, var(--chart-5))',
    color: 'var(--primary-foreground)',
    backgroundImage: [
        'linear-gradient(to right, color-mix(in oklab, var(--primary-foreground) 18%, transparent) 1px, transparent 1px)',
        'linear-gradient(to bottom, color-mix(in oklab, var(--primary-foreground) 18%, transparent) 1px, transparent 1px)',
        'linear-gradient(to right, color-mix(in oklab, var(--primary-foreground) 7%, transparent) 1px, transparent 1px)',
        'linear-gradient(to bottom, color-mix(in oklab, var(--primary-foreground) 7%, transparent) 1px, transparent 1px)',
    ].join(', '),
    backgroundSize: '80px 80px, 80px 80px, 16px 16px, 16px 16px',
    backgroundPosition: 'center center',
};

const rulerTicksStyle = (position: 'top left' | 'bottom left'): React.CSSProperties => ({
    backgroundImage: [
        'repeating-linear-gradient(90deg, color-mix(in oklab, var(--primary-foreground) 85%, transparent) 0px, color-mix(in oklab, var(--primary-foreground) 85%, transparent) 1.5px, transparent 1.5px, transparent 80px)',
        'repeating-linear-gradient(90deg, color-mix(in oklab, var(--primary-foreground) 55%, transparent) 0px, color-mix(in oklab, var(--primary-foreground) 55%, transparent) 1px, transparent 1px, transparent 40px)',
        'repeating-linear-gradient(90deg, color-mix(in oklab, var(--primary-foreground) 35%, transparent) 0px, color-mix(in oklab, var(--primary-foreground) 35%, transparent) 1px, transparent 1px, transparent 8px)',
    ].join(', '),
    backgroundSize: '80px 20px, 40px 13px, 8px 7px',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: position,
});

function Divider1({
    className,
    leftImage = volvoBlueprintImageLeft,
    rightImage = volvoBlueprintImage,
    ...props
}: Divider1Props) {
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = rootRef.current;
        if (!el || typeof window === 'undefined') {
            return;
        }

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            return;
        }

        let targetY = window.scrollY;
        // Double-exponential (2-pole) low-pass state for C2-continuous acceleration & deceleration
        let midFluidY = targetY;
        let smoothY = targetY;
        let midFlyY = targetY;
        let flywheelY = targetY;
        let lastTime = performance.now();
        let rafId = 0;
        let running = false;

        const mod80 = (n: number): number => ((n % 80) + 80) % 80;

        const step = (now: number) => {
            const dt = Math.min(32, Math.max(4, now - lastTime)) / 16.667;
            lastTime = now;

            // Pole 1 + Pole 2 cascade ensures smooth ramp-up AND smooth coast-down on discrete wheel ticks
            const aFluid = 1 - Math.pow(1 - 0.11, dt);
            const aFly = 1 - Math.pow(1 - 0.065, dt);

            midFluidY += (targetY - midFluidY) * aFluid;
            smoothY += (midFluidY - smoothY) * aFluid;

            midFlyY += (targetY - midFlyY) * aFly;
            flywheelY += (midFlyY - flywheelY) * aFly;

            // 80px-periodic tick offset driven purely by C2-smooth state
            const tickShift = mod80(smoothY * 0.5) - 40;
            const flyTickShift = mod80(flywheelY * 0.65) - 40;

            // Pure C2-smooth sinusoidal label glide (zero raw delta jump on wheel ticks)
            const labelShift = Math.sin(smoothY * 0.004) * 56;
            const flyLabelShift = Math.sin(flywheelY * 0.0035) * 68;

            el.style.setProperty('--cad-tick-shift', `${tickShift.toFixed(2)}px`);
            el.style.setProperty('--cad-fly-tick-shift', `${flyTickShift.toFixed(2)}px`);
            el.style.setProperty('--cad-label-shift', `${labelShift.toFixed(2)}px`);
            el.style.setProperty('--cad-fly-label-shift', `${flyLabelShift.toFixed(2)}px`);

            if (
                Math.abs(targetY - smoothY) > 0.05 ||
                Math.abs(targetY - flywheelY) > 0.05
            ) {
                rafId = window.requestAnimationFrame(step);
            } else {
                running = false;
            }
        };

        const onScroll = () => {
            targetY = window.scrollY;
            if (!running) {
                running = true;
                lastTime = performance.now();
                rafId = window.requestAnimationFrame(step);
            }
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
            if (rafId) {
                window.cancelAnimationFrame(rafId);
            }
        };
    }, []);

    return (
        <div
            ref={rootRef}
            className={cn(
                'relative isolate h-64 w-full select-none overflow-hidden sm:h-80 lg:h-96',
                'border-y-2 border-primary bg-primary text-primary-foreground',
                'shadow-[inset_0_24px_56px_rgba(0,0,0,0.4),inset_0_-24px_56px_rgba(0,0,0,0.4)]',
                className
            )}
            {...props}
        >
            <div
                style={cadBoardStyle}
                className="relative flex h-full w-full items-center justify-center overflow-hidden px-4"
            >
                {/* Top Vernier CAD Ruler Track (Fine 0.55x Reduction Gear) */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-9 overflow-hidden border-b border-primary-foreground/25 bg-background/10 sm:h-11">
                    <div
                        style={rulerTicksStyle('top left')}
                        className="absolute inset-y-0 -left-24 -right-24 translate-x-[calc(var(--cad-tick-shift,0px)*0.55)] will-change-transform"
                    />
                    <div className="absolute inset-x-8 bottom-1.5 hidden translate-x-[calc(var(--cad-label-shift,0px)*0.45)] justify-between font-mono text-[10px] font-bold tracking-widest text-primary-foreground/75 will-change-transform sm:flex sm:text-[11px]">
                        <span>000 MM</span>
                        <span>100 MM</span>
                        <span>200 MM</span>
                        <span>DATUM 0.0</span>
                        <span>200 MM</span>
                        <span>100 MM</span>
                        <span>000 MM</span>
                    </div>
                </div>

                {/* Bottom Vernier CAD Ruler Track (1.25x Overdrive Parallax Gear) */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-9 overflow-hidden border-t border-primary-foreground/25 bg-background/10 sm:h-11">
                    <div
                        style={rulerTicksStyle('bottom left')}
                        className="absolute inset-y-0 -left-24 -right-24 translate-x-[calc(var(--cad-fly-tick-shift,0px)*1.25)] will-change-transform"
                    />
                    <div className="absolute inset-x-8 top-1.5 hidden translate-x-[calc(var(--cad-fly-label-shift,0px)*1.15)] justify-between font-mono text-[10px] font-bold tracking-widest text-primary-foreground/75 will-change-transform sm:flex sm:text-[11px]">
                        <span>SCALE 1:50</span>
                        <span>CAD-REV.04</span>
                        <span>AXLE-LOAD</span>
                        <span>CENTERLINE</span>
                        <span>440T-SPEC</span>
                        <span>SADC-GRID</span>
                        <span>THH-ENG</span>
                    </div>
                </div>

                {/* CAD Centerline Axis & Dimension Ticks */}
                <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-primary-foreground/30" />
                <div className="pointer-events-none absolute inset-y-9 left-1/2 w-px -translate-x-1/2 border-l border-dashed border-primary-foreground/35 sm:inset-y-11" />

                {/* Right CAD Blueprint Overlay (Screen Blend Mode) */}
                {rightImage && (
                    <img
                        src={rightImage}
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute top-9 right-2 bottom-9 z-0 h-[calc(100%-4.5rem)] w-auto max-w-[38%] object-contain object-right opacity-85 mix-blend-screen sm:top-11 sm:right-6 sm:bottom-11 sm:h-[calc(100%-5.5rem)] lg:right-10"
                    />
                )}

                {leftImage && (
                    <img
                        src={leftImage}
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute top-9 left-2 bottom-9 z-0 h-[calc(100%-4.5rem)] w-auto max-w-[38%] object-contain object-left opacity-85 mix-blend-screen sm:top-11 sm:left-6 sm:bottom-11 sm:h-[calc(100%-5.5rem)] lg:left-10"
                    />
                )}

                {/* Left Dimension Extension Line */}
                <div className="mr-6 hidden items-center gap-2 sm:flex md:mr-10">
                    <div className="h-4 w-px bg-primary-foreground/60" />
                    <div className="h-px w-16 bg-primary-foreground/50 md:w-28 lg:w-40" />
                    <span className="font-mono text-[10px] font-semibold tracking-widest text-primary-foreground/75">
                        R-240
                    </span>
                    <div className="h-px w-8 bg-primary-foreground/50 md:w-14" />
                </div>


                {/* Right Dimension Extension Line */}
                <div className="ml-6 hidden items-center gap-2 sm:flex md:ml-10">
                    <div className="h-px w-8 bg-primary-foreground/50 md:w-14" />
                    <span className="font-mono text-[10px] font-semibold tracking-widest text-primary-foreground/75">
                        R-240
                    </span>
                    <div className="h-px w-16 bg-primary-foreground/50 md:w-28 lg:w-40" />
                    <div className="h-4 w-px bg-primary-foreground/60" />
                </div>
            </div>
        </div>
    );
}

export default Divider1;

Divider1.displayName = 'Divider1';
