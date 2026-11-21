import React from 'react';
import Wrapper from '@/components/ui/misc/wrapper';
import { StackedImage } from '@/components/ui/misc/stacked-image';
import { ImageSource, responsiveImages } from '@/lib/responsive-images';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
    label?: string;
    title: React.ReactNode;
    description?: string;
    children?: React.ReactNode;
    image?: ImageSource;
    imageSrcSet?: string;
    imageAlt?: string;
    imageClassName?: string;
    className?: string;
}

export default function PageHeader({
    label,
    title,
    description,
    children,
    image,
    imageSrcSet,
    imageAlt,
    imageClassName,
    className,
}: PageHeaderProps) {
    const headerImage = image || responsiveImages.lineup;

    return (
        <section
            className={cn(
                'capabilities-glass-stage relative isolate overflow-hidden border-b border-sky-500/15 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28',
                className,
            )}
        >
            <div aria-hidden="true" className="capabilities-stage-dots pointer-events-none absolute inset-0 -z-10" />
            <div
                aria-hidden="true"
                className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-50"
            />

            <Wrapper className="relative z-10">
                <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="space-y-6 lg:col-span-6">
                        {label && (
                            <span className="bento-glass-card relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-full px-4 py-1.5 text-xs font-black tracking-[0.2em] text-primary uppercase dark:text-sky-200">
                                <span
                                    aria-hidden="true"
                                    className="bento-glass-card-flare pointer-events-none absolute inset-0"
                                />
                                <span
                                    aria-hidden="true"
                                    className="relative z-10 size-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,100,190,0.8)] dark:bg-sky-400 dark:shadow-[0_0_8px_#38bdf8]"
                                />
                                <span className="relative z-10">{label}</span>
                            </span>
                        )}
                        <h1 className="font-heading text-3xl leading-[1.08] font-black tracking-tighter text-foreground uppercase sm:text-5xl lg:text-6xl">
                            {title}
                        </h1>
                        {description && (
                            <p className="page-header-desc text-base leading-relaxed font-normal text-muted-foreground sm:text-xl">
                                {description}
                            </p>
                        )}
                        {children}
                    </div>

                    <div className="flex justify-center lg:col-span-6 lg:justify-end">
                        <StackedImage
                            src={headerImage}
                            srcSet={imageSrcSet}
                            sizes="(max-width: 1023px) calc(100vw - 2.5rem), 48vw"
                            priority
                            imageClassName={imageClassName}
                            alt={imageAlt || (typeof title === 'string' ? title : 'Teemane Heavy Haulage')}
                        />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
