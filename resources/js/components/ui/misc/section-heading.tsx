import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Align = 'left' | 'center' | 'right';

interface SectionHeadingProps {
    /** Small label shown above the title with decorative lines */
    label?: string;
    /** Main heading text */
    title: string | ReactNode;
    /** Optional descriptive paragraph or any children below the title */
    children?: ReactNode;
    /** Text alignment — controls layout of the label, title and children */
    align?: Align;
    className?: string;
}

const alignClass: Record<Align, string> = {
    left:   'items-start text-left',
    center: 'items-center text-center',
    right:  'items-end text-right',
};

const lineClass: Record<Align, string> = {
    left:   'flex-row',
    center: 'flex-row',
    right:  'flex-row-reverse',
};

export default function SectionHeading({
    label,
    title,
    children,
    align = 'center',
    className,
}: SectionHeadingProps) {
    return (
        <div className={cn('flex flex-col space-y-4', alignClass[align], className)}>
            {/* Soft, clean label */}
            {label && (
                <span className="text-xs font-black uppercase tracking-[0.2em] text-primary px-4 py-1.5 rounded-full bg-primary/10 w-fit">
                    {label}
                </span>
            )}

            {/* Title - Reverted to industrial heavy style */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-2xl text-balance font-heading font-black uppercase tracking-tighter text-foreground leading-[1.15]">
                {title}
            </h2>

            {/* Optional children (description or extra content) */}
            {children && (
                <div className={cn(
                    'text-lg text-muted-foreground leading-relaxed',
                    align === 'center' && 'max-w-2xl mx-auto',
                    align === 'left'   && 'max-w-2xl',
                    align === 'right'  && 'max-w-2xl ml-auto',
                )}>
                    {children}
                </div>
            )}
        </div>
    );
}
