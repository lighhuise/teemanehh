import React from "react";
import Wrapper from "@/components/ui/misc/wrapper";
import { StackedImage } from "@/components/ui/misc/stacked-image";
import { ImageSource, responsiveImages } from "@/lib/responsive-images";

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
        <section className={`relative border-b border-border bg-background overflow-hidden isolate pb-16 sm:pb-20 pt-28 sm:pt-36 lg:pt-44 lg:pb-28 ${className || ''}`}>
            <div aria-hidden="true" className="page-header-radial absolute inset-0 pointer-events-none select-none -z-10" />

            <Wrapper className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 space-y-6">
                        {label && (
                            <span className="inline-flex text-xs font-black uppercase tracking-[0.2em] text-primary px-4 py-1.5 rounded-full bg-primary/10 w-fit">
                                {label}
                            </span>
                        )}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter text-foreground leading-[1.08]">
                            {title}
                        </h1>
                        {description && (
                            <p className="page-header-desc text-base sm:text-xl text-muted-foreground leading-relaxed font-normal">
                                {description}
                            </p>
                        )}
                        {children}
                    </div>

                    <div className="lg:col-span-6 flex justify-center lg:justify-end">
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
