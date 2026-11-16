import React from 'react';
import { cn } from '@/lib/utils';

export interface StackedImageProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    alt?: string;
    imageClassName?: string;
    containerClassName?: string;
}

export function StackedImage({
    src,
    alt = "Teemane Heavy Haulage",
    className,
    imageClassName,
    containerClassName,
    ...props
}: StackedImageProps) {
    return (
        <div className={cn("relative pr-2 pb-2 sm:pr-6 sm:pb-6 w-full", containerClassName)} {...props}>
            <div className="relative group w-full max-w-2xl mx-auto lg:max-w-none">
                {/* Box 1 (Back): Primary with gradient and subtle industrial stripe */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary to-primary/80 border border-primary-foreground/20 shadow-xl shadow-primary/30 overflow-hidden origin-bottom-right scale-95 sm:scale-[0.97] translate-x-5 translate-y-5 sm:translate-x-7 sm:translate-y-7 transition-transform duration-500 ease-out group-hover:translate-x-6 group-hover:translate-y-6 sm:group-hover:translate-x-9 sm:group-hover:translate-y-9"
                >
                    {/* Subtle industrial stripe overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#000_4px,#000_8px)]" />
                </div>

                {/* Box 2 (Middle): Sleek glassmorphic card with elevation */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl origin-bottom-right scale-95 sm:scale-[0.97] translate-x-2.5 translate-y-2.5 sm:translate-x-3.5 sm:translate-y-3.5 transition-transform duration-500 ease-out group-hover:translate-x-3.5 group-hover:translate-y-3.5 sm:group-hover:translate-x-5 sm:group-hover:translate-y-5"
                />

                {/* Front Image */}
                <div className={cn("relative z-10 w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-muted", className)}>
                    <img
                        src={src}
                        alt={alt}
                        className={cn("w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105", imageClassName)}
                    />

                </div>
            </div>
        </div>
    );
}

export default StackedImage;


