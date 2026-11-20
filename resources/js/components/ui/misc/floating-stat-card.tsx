import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';

type FloatingPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface FloatingStatCardProps {
    value: string;
    label: string;
    position?: FloatingPosition;
    className?: string;
    delay?: number;
}

const positionClasses: Record<FloatingPosition, string> = {
    'top-left': 'top-0 left-2 sm:left-0 lg:-left-6 -translate-y-1/2',
    'top-right': 'top-0 right-2 sm:right-0 lg:-right-6 -translate-y-1/2',
    'bottom-left': 'bottom-0 left-2 sm:left-0 lg:-left-6 translate-y-1/2',
    'bottom-right': 'bottom-0 right-2 sm:right-0 lg:-right-6 translate-y-1/2',
};

export function FloatingStatCard({
    value,
    label,
    position = 'bottom-left',
    className,
    delay = 0,
}: FloatingStatCardProps) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: position.includes('left') ? -16 : 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }}
            transition={
                prefersReducedMotion
                    ? undefined
                    : {
                          x: { duration: 0.5, type: 'spring', bounce: 0.3 },
                          opacity: { duration: 0.5 },
                          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay },
                      }
            }
            className={cn(
                'absolute pointer-events-none z-20 flex items-stretch group max-w-[calc(100%-1rem)]',
                positionClasses[position],
                className
            )}
        >
            {/* Slanted, Pop-out Industrial Value Block */}
            <div className="relative z-10 -mr-5 sm:-mr-6 bg-linear-to-br from-primary to-sky-600 border border-primary-foreground/20 shadow-xl shadow-primary/30 px-4 py-2.5 sm:px-5 sm:py-3 md:px-7 md:py-4 rounded-xl -skew-x-12 flex items-center justify-center overflow-hidden">
                {/* Subtle industrial stripe overlay */}
                <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#000_4px,#000_8px)]" />

                <div className="skew-x-12 relative flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-primary-foreground tracking-tighter drop-shadow-sm">
                        {value}
                    </span>
                </div>
            </div>

            {/* Sleek Glassmorphic Label Panel */}
            <div className="relative bg-card/95 backdrop-blur-xl border border-border shadow-xl rounded-r-xl rounded-l-[2.25rem] pl-8 sm:pl-10 pr-4 sm:pr-6 py-2.5 sm:py-3 md:py-4 flex flex-col justify-center min-w-[124px] sm:min-w-[144px]">
                {/* Decorative Status Dot */}
                <div className="absolute top-2.5 right-3 sm:top-3 sm:right-4 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-ping motion-reduce:animate-none absolute" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary relative" />
                </div>

                <div className="text-[10px] sm:text-[11px] md:text-xs font-black uppercase tracking-[0.16em] text-foreground leading-snug max-w-[120px] mt-0.5">
                    {label}
                </div>
            </div>
        </motion.div>
    );
}
