import React, {useRef} from 'react';
import {cn} from '@/lib/utils';
// @ts-ignore
import volvoBlueprintImage from '@/../images/Abnormal Volvo FH16 Empty Low-Loader Blueprint.webp';
// @ts-ignore
import volvoBlueprintImageLeft from '@/../images/Inverted Volvo FH16 Haulage Blueprint.webp';
// @ts-ignore
import subtleWhiteFeathers from '@/../images/subtle_white_feathers.png';
import Logo from "@/components/ui/misc/logo";

interface Divider1Props extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    leftImage?: string;
    rightImage?: string;
}

function Divider1({
    className,
    leftImage = volvoBlueprintImageLeft,
    rightImage = volvoBlueprintImage,
    style,
    ...props
}: Divider1Props) {
    const rootRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={rootRef}
            className={cn(
                'relative isolate h-64 w-full select-none overflow-hidden sm:h-90 lg:h-105',
                'border-y-2 border-primary bg-primary text-primary-foreground',
                // 'shadow-[inset_0_24px_56px_rgba(0,0,0,0.2),inset_0_-24px_56px_rgba(0,0,0,0.2)]',
                className
            )}
            style={{
                backgroundImage: `url(${subtleWhiteFeathers})`,
                backgroundRepeat: 'repeat',
                backgroundBlendMode: 'multiply',
                ...style,
            }}
            {...props}
        >
            <div className={`absolute top-0 inset-x-0 h-5 opacity-10 border-b border-black bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#000_4px,#000_8px)] `}></div>
            <div className={`absolute bottom-0 inset-x-0 h-5 opacity-10 border-t border-black bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#000_4px,#000_8px)] `}></div>
            <div
                className="divider-radial-vignette relative flex h-full w-full items-center justify-center overflow-hidden px-4"
            >
                {/* Right CAD Blueprint Overlay (Screen Blend Mode) */}
                {rightImage && (
                    <img
                        src={rightImage}
                        alt="CAD"
                        aria-hidden="true"
                        className="pointer-events-none absolute top-9 right-2 bottom-9 z-0 h-[calc(100%-4.5rem)] w-auto max-w-[38%] object-contain object-right opacity-85 mix-blend-screen sm:top-11 sm:right-6 sm:bottom-11 sm:h-[calc(100%-5.5rem)] lg:right-10"
                    />
                )}
                <div className={` isolate size-32  relative`}>
                    <div className={`size-50 -z-10 animate-[spin_20s_linear_infinite] border border-dashed border-white/25 absolute left-1/2 top-1/2 rounded-full -translate-1/2`}>
                        <div className={`h-px -inset-x-30 bg-linear-to-r from-transparent via-white/30 to-transparent absolute top-1/2`}></div>
                        <div className={`h-px -inset-x-10 bg-linear-to-r rotate-45 from-transparent via-white/30 to-transparent absolute top-1/2`}></div>
                        <div className={`h-px -inset-x-20 bg-linear-to-r -rotate-45 from-transparent via-white/30 to-transparent absolute top-1/2`}></div>
                        <div className={`w-px -inset-y-10 bg-linear-to-b from-transparent via-white/30 to-transparent absolute left-1/2`}></div>
                        <div className={`border-2 inset-4 border-white/25 absolute rounded-full`}></div>
                    </div>
                    <div className={`size-32 shadow-2xl border-5 border-black/25 bg-background  grid place-items-center rounded-full`}>
                        <Logo className="h-9 z-10 sm:h-11 w-auto block relative transition-transform duration-300 group-hover:scale-105" aria-label="Teemane Heavy Haulage Logo" />
                    </div>
                </div>


                {leftImage && (
                    <img
                        src={leftImage}
                        alt="CAD"
                        aria-hidden="true"
                        className="pointer-events-none absolute top-9 left-2 bottom-9 z-0 h-[calc(100%-4.5rem)] w-auto max-w-[38%] object-contain object-left opacity-85 mix-blend-screen sm:top-11 sm:left-6 sm:bottom-11 sm:h-[calc(100%-5.5rem)] lg:left-10"
                    />
                )}
            </div>

        </div>
    );
}

export default Divider1;

Divider1.displayName = 'Divider1';
