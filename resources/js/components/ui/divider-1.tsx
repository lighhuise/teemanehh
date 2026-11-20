import React, {useRef} from 'react';
import {cn} from '@/lib/utils';
import Logo from '@/components/ui/misc/logo';
import ResponsiveImage from '@/components/ui/misc/responsive-image';
import DividerSurface from '@/components/ui/divider-surface';
import {ImageSource, responsiveImages} from '@/lib/responsive-images';

interface Divider1Props extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    leftImage?: ImageSource;
    rightImage?: ImageSource;
}

function Divider1({
    className,
    leftImage = responsiveImages.volvoBlueprintLeft,
    rightImage = responsiveImages.volvoBlueprintRight,
    style,
    ...props
}: Divider1Props) {
    const rootRef = useRef<HTMLDivElement>(null);

    return (
        <DividerSurface
            ref={rootRef}
            className={cn('h-56 sm:h-80 lg:h-105 select-none', className)}
            style={style}
            {...props}
        >
            <div
                className="relative flex h-full w-full items-center justify-center overflow-hidden px-4"
            >
                {/* Right CAD Blueprint Overlay (Screen Blend Mode) */}
                {rightImage && (
                    <ResponsiveImage
                        source={rightImage}
                        sizes="(max-width: 639px) 34vw, (max-width: 1023px) 38vw, 40vw"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute top-9 right-2 bottom-9 h-[calc(100%-4.5rem)] w-auto max-w-[34%] sm:max-w-[38%] object-contain object-right opacity-65 sm:opacity-85 mix-blend-screen sm:top-11 sm:right-6 sm:bottom-11 sm:h-[calc(100%-5.5rem)] lg:right-10"
                    />
                )}

                {/* Logo center */}
                <div className={`isolate size-28 sm:size-32 relative`}>
                    <div className={`size-44 sm:size-50 -z-10 animate-[spin_20s_linear_infinite] motion-reduce:animate-none border border-dashed border-white/25 absolute left-1/2 top-1/2 rounded-full -translate-1/2`}>
                        <div className={`h-px -inset-x-30 bg-linear-to-r from-transparent via-white/30 to-transparent absolute top-1/2`}></div>
                        <div className={`h-px -inset-x-10 bg-linear-to-r rotate-45 from-transparent via-white/30 to-transparent absolute top-1/2`}></div>
                        <div className={`h-px -inset-x-20 bg-linear-to-r -rotate-45 from-transparent via-white/30 to-transparent absolute top-1/2`}></div>
                        <div className={`w-px -inset-y-10 bg-linear-to-b from-transparent via-white/30 to-transparent absolute left-1/2`}></div>
                        <div className={`border-2 inset-4 border-white/25 absolute rounded-full`}></div>
                    </div>
                    <div className="glass-plinth-medallion relative isolate size-28 sm:size-32 rounded-full overflow-hidden grid place-items-center">
                        <div aria-hidden="true" className="glass-plinth-medallion-flare pointer-events-none absolute inset-0" />
                        <div aria-hidden="true" className="glass-plinth-medallion-dots pointer-events-none absolute inset-0" />
                        <div aria-hidden="true" className="glass-plinth-medallion-rim pointer-events-none absolute inset-0 rounded-full" />
                        <Logo
                            inverted
                            className="h-8 z-10 sm:h-11 w-auto block relative drop-shadow-[0_2px_10px_rgba(0,100,190,0.45)] transition-transform duration-300 group-hover:scale-105"
                            aria-label="Teemane Heavy Haulage Logo"
                        />
                    </div>
                </div>

                {leftImage && (
                    <ResponsiveImage
                        source={leftImage}
                        sizes="(max-width: 639px) 34vw, (max-width: 1023px) 38vw, 40vw"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute top-9 left-2 bottom-9 h-[calc(100%-4.5rem)] w-auto max-w-[34%] sm:max-w-[38%] object-contain object-left opacity-65 sm:opacity-85 mix-blend-screen sm:top-11 sm:left-6 sm:bottom-11 sm:h-[calc(100%-5.5rem)] lg:left-10"
                    />
                )}
            </div>
        </DividerSurface>
    );
}

export default Divider1;

Divider1.displayName = 'Divider1';
