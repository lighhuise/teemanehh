import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";
import Wrapper from "./wrapper";

const notchPath = 'M346.52 0c-10.26 0-25.48.45-40.7 14.94-16.24 15.45-28.55 15.71-51.87 15.45-22.03-.25-74.91.02-80.69.05-5.77-.03-58.66-.3-80.69-.05-23.31.26-35.62 0-51.87-15.45C25.48.45 10.27 0 0 0z';

const topNotch = `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 346.52 30.44'><path fill='black' d='${notchPath}'/></svg>`)}")`;
const bottomNotch = `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 346.52 30.44'><g transform='translate(0,30.44) scale(1,-1)'><path fill='black' d='${notchPath}'/></g></svg>`)}")`;

export type CutoutPosition = 'top' | 'bottom' | 'both' | 'none';

export function getCutoutStyles(position: CutoutPosition): CSSProperties & Record<string, string> {
    if (position === 'none') return {};

    const images = [];
    const sizes = [];
    const positions = [];
    const composites = [];
    const webkitComposites = [];

    if (position === 'top' || position === 'both') {
        images.push(topNotch);
        sizes.push('346px auto');
        positions.push('top center');
        composites.push('exclude');
        webkitComposites.push('destination-out');
    }

    if (position === 'bottom' || position === 'both') {
        images.push(bottomNotch);
        sizes.push('346px auto');
        positions.push('center calc(100% + 1px)');
        composites.push('exclude');
        webkitComposites.push('destination-out');
    }

    images.push('linear-gradient(#000, #000)');
    sizes.push('100% 100%');
    positions.push('0 0');

    return {
        maskImage: images.join(', '),
        maskSize: sizes.join(', '),
        maskPosition: positions.join(', '),
        maskRepeat: 'no-repeat',
        maskComposite: composites.join(', '),
        WebkitMaskImage: images.join(', '),
        WebkitMaskSize: sizes.join(', '),
        WebkitMaskPosition: positions.join(', '),
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskComposite: webkitComposites.join(', '),
    };
}

interface CutoutBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: CutoutPosition;
    containerClassName?: string;
    asWrapper?: boolean;
}

export default function CutoutBox({
    position = 'both',
    className,
    containerClassName,
    asWrapper = false,
    style,
    children,
    ...props
}: CutoutBoxProps) {
    const combinedStyle = { ...getCutoutStyles(position), ...style };
    const Component = asWrapper ? Wrapper : 'div';
    
    return (
        <div className={cn("drop-shadow-sm", containerClassName)}>
            <Component
                className={cn("relative overflow-visible", className)}
                style={combinedStyle}
                {...props as any}
            >
                {children}
            </Component>
        </div>
    );
}
