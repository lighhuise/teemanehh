import React from 'react';
import { cn } from '@/lib/utils';

export interface DividerSurfaceProps extends React.HTMLAttributes<HTMLElement> {
    as?: 'div' | 'section';
    ref?: React.Ref<HTMLDivElement & HTMLElement>;
    /**
     * Renders the top and mirrored bottom canopy hazard micro-rail + luminous edge trim.
     * Defaults to true for visual dividers; set false for minimal ticker bands.
     */
    canopyTrim?: boolean;
}

export function DividerSurface({
    as: Component = 'div',
    canopyTrim = true,
    className,
    children,
    ref,
    ...props
}: DividerSurfaceProps) {
    return (
        <Component
            ref={ref}
            className={cn(
                'scroll-divider-surface relative isolate w-full overflow-hidden border-y border-primary/30 text-white',
                className
            )}
            {...props}
        >
            {/* Atmospheric top-edge radial light flare matching ScrollDivider */}
            <div aria-hidden="true" className="scroll-divider-corona pointer-events-none absolute inset-0" />

            {/* Precision dot grid catching top-edge light */}
            <div
                aria-hidden="true"
                className="pointer-events-none opacity-25 absolute inset-0 bg-[radial-gradient(circle,rgba(125,211,252,0.4)_1.5px,transparent_1.5px)] bg-size-[18px_18px] mask-[radial-gradient(ellipse_at_top,black_25%,transparent_80%)]"
            />

            {canopyTrim ? (
                <>
                    {/* Top canopy trim (reuses the single scroll-divider-corona flare above so color stays identical to ScrollDivider) */}
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="nav-canopy-dots absolute inset-0" />
                        <div className="nav-canopy-hazard absolute inset-x-0 top-0 h-1.5" />
                        <div className="nav-canopy-top-line absolute inset-x-0 top-0 h-px" />
                        <div className="nav-canopy-bottom-line absolute inset-x-0 bottom-0 h-px" />
                    </div>

                    {/* Bottom mirrored canopy glow & trim */}
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden scale-y-[-1]">
                        <div className="nav-canopy-glow absolute inset-0" />
                        <div className="nav-canopy-dots absolute inset-0" />
                        <div className="nav-canopy-hazard absolute inset-x-0 top-0 h-1.5" />
                        <div className="nav-canopy-top-line absolute inset-x-0 top-0 h-px" />
                        <div className="nav-canopy-bottom-line absolute inset-x-0 bottom-0 h-px" />
                    </div>
                </>
            ) : (
                <>
                    {/* Top flare hairline & bottom subtle border highlight */}
                    <div aria-hidden="true" className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px" />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent"
                    />
                </>
            )}

            {children}
        </Component>
    );
}

export default DividerSurface;

DividerSurface.displayName = 'DividerSurface';
