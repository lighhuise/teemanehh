import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Align = 'left' | 'center' | 'right';

interface SectionHeadingProps {
    /** Small label shown above the title with industrial precision styling */
    label?: string;
    /** Main heading text */
    title: string | ReactNode;
    /** Optional descriptive paragraph or any children below the title */
    children?: ReactNode;
    /** Text alignment — controls layout of the label, title and children */
    align?: Align;
    /** Use 'dark' when rendering on deep navy/dark surfaces */
    tone?: 'default' | 'dark';
    className?: string;
}

const alignClass: Record<Align, string> = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
};

export default function SectionHeading({
    label,
    title,
    children,
    align = 'center',
    tone = 'default',
    className,
}: SectionHeadingProps) {
    const isDark = tone === 'dark';

    return (
        <div className={cn('flex flex-col space-y-4', alignClass[align], className)}>
            {label && (
                <span
                    className={cn(
                        'inline-flex items-center gap-2 text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full border w-fit',
                        isDark
                            ? 'bg-sky-500/15 text-sky-300 border-sky-400/25'
                            : 'bg-primary/10 text-primary border-primary/20'
                    )}
                >
                    <span
                        aria-hidden="true"
                        className={cn(
                            'size-1.5 rounded-full',
                            isDark ? 'bg-sky-400' : 'bg-primary'
                        )}
                    />
                    {label}
                </span>
            )}

            <h2
                className={cn(
                    'text-3xl sm:text-4xl lg:text-5xl max-w-2xl text-balance font-heading font-black uppercase tracking-tighter leading-[1.08]',
                    isDark ? 'text-white' : 'text-foreground'
                )}
            >
                {title}
            </h2>

            {children && (
                <div
                    className={cn(
                        'text-base sm:text-lg leading-relaxed',
                        isDark ? 'text-slate-300' : 'text-muted-foreground',
                        align === 'center' && 'max-w-2xl mx-auto',
                        align === 'left' && 'max-w-2xl',
                        align === 'right' && 'max-w-2xl ml-auto'
                    )}
                >
                    {children}
                </div>
            )}
        </div>
    );
}
