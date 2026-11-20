import React from 'react';
import { cn } from '@/lib/utils';
import ResponsiveImage from '@/components/ui/misc/responsive-image';
import { ImageSource } from '@/lib/responsive-images';

export interface StackedImageProps extends React.HTMLAttributes<HTMLDivElement> {
    src: ImageSource;
    srcSet?: string;
    sizes?: string;
    priority?: boolean;
    alt?: string;
    imageClassName?: string;
    containerClassName?: string;
}

export function StackedImage({
    src,
    srcSet,
    sizes = '(max-width: 1023px) calc(100vw - 2.5rem), 48vw',
    priority = false,
    alt = 'Teemane Heavy Haulage',
    className,
    imageClassName,
    containerClassName,
    ...props
}: StackedImageProps) {
    return (
        <div className={cn('relative pr-5 pb-5 sm:pr-7 sm:pb-7 w-full', containerClassName)} {...props}>
            <div className="relative group w-full max-w-2xl mx-auto lg:max-w-none">
                {/* Box 1 (Back): Deep dark steel plate with radial corona & hazard trim */}
                <div
                    aria-hidden="true"
                    className="scroll-divider-surface absolute inset-0 rounded-2xl border border-primary/50 shadow-xl shadow-primary/25 overflow-hidden origin-bottom-right scale-95 sm:scale-[0.97] translate-x-4 translate-y-4 sm:translate-x-7 sm:translate-y-7 transition-transform duration-500 ease-out group-hover:translate-x-5 group-hover:translate-y-5 sm:group-hover:translate-x-9 sm:group-hover:translate-y-9 motion-reduce:transition-none motion-reduce:group-hover:translate-x-4 motion-reduce:group-hover:translate-y-4 sm:motion-reduce:group-hover:translate-x-7 sm:motion-reduce:group-hover:translate-y-7"
                >
                    <div className="scroll-divider-corona absolute inset-0 scale-y-[-1]" />
                    <div className="nav-logo-plinth-dots absolute inset-0" />
                    <div className="nav-canopy-hazard absolute inset-x-0 bottom-0 h-2 border-t border-white/15 border-b-0" />
                </div>

                {/* Box 2 (Middle): Frosted dark-navy Brand Plinth glassmorphism plate with light flare */}
                <div
                    aria-hidden="true"
                    className="stacked-image-glass absolute inset-0 rounded-2xl overflow-hidden origin-bottom-right scale-95 sm:scale-[0.97] translate-x-2 translate-y-2 sm:translate-x-3.5 sm:translate-y-3.5 transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-3 sm:group-hover:translate-x-5 sm:group-hover:translate-y-5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-2 motion-reduce:group-hover:translate-y-2 sm:motion-reduce:group-hover:translate-x-3.5 sm:motion-reduce:group-hover:translate-y-3.5"
                >
                    <div className="stacked-image-glass-flare absolute inset-0" />
                    <div className="nav-logo-plinth-dots absolute inset-0" />
                    <div className="nav-logo-plinth-edge absolute inset-y-0 right-0 w-px" />
                    <div className="stacked-image-glass-bottom-edge absolute inset-x-0 bottom-0 h-px" />
                </div>

                {/* Front Image */}
                <div className={cn('relative z-10 w-full aspect-16/10 sm:aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-sky-300/30 ring-1 ring-inset ring-white/15 bg-muted', className)}>
                    <ResponsiveImage
                        source={src}
                        srcSet={srcSet}
                        sizes={sizes}
                        priority={priority}
                        alt={alt}
                        className={cn(
                            'w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100',
                            imageClassName
                        )}
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-200/60 to-transparent"
                    />
                </div>
            </div>
        </div>
    );
}

export default StackedImage;


