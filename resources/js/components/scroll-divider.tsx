import React from 'react';
import ScrollVelocity from '@/components/ScrollVelocity';
import DividerSurface from '@/components/ui/divider-surface';
import {cn} from "@/lib/utils";

interface ScrollDividerProps {
    texts: React.ReactNode[];
    className?: string;
}

function ScrollDivider({ texts, className }: ScrollDividerProps) {
    return (
        <DividerSurface
            as="section"
            canopyTrim={false}
            aria-label="Key capabilities ticker"
            className={cn('scroll-divider-ticker py-8 sm:py-10 lg:py-12', className)}
        >
            <ScrollVelocity
                texts={texts}
                velocity={36}
                skewWithVelocity={10}
                scaleWithVelocity={0.1}
                draggable
                fontSize={60}
                fontWeight={900}
                className="inline-flex items-center py-1"
                numCopies={5}
                damping={50}
                stiffness={400}
                separator=""
                fadeEdges
                outlineAlternate={false}
                gap={10}
                pauseOnHover={false}
            />
        </DividerSurface>
    );
}

export default ScrollDivider;

ScrollDivider.displayName = 'ScrollDivider';
