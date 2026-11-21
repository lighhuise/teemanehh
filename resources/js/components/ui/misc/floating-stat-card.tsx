import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';

type FloatingPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type FloatingStatGlass = 'frosted' | 'realglass';

interface FloatingStatCardProps {
    value: string;
    label: string;
    position?: FloatingPosition;
    glass?: FloatingStatGlass;
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
    glass = 'frosted',
    className,
    delay = 0,
}: FloatingStatCardProps) {
    const prefersReducedMotion = useReducedMotion();
    const isRealGlass = glass === 'realglass';

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
            {/* Slanted, Pop-out Value Block */}
            <div
                className={cn(
                    'relative z-10 -mr-5 sm:-mr-6 px-4 py-2.5 sm:px-5 sm:py-3 md:px-7 md:py-4 rounded-xl -skew-x-12 flex items-center justify-center overflow-hidden',
                    isRealGlass ? 'floating-stat-value-realglass' : 'floating-stat-value'
                )}
            >
                {isRealGlass ? (
                    <div
                        aria-hidden="true"
                        className="floating-stat-realglass-sheen pointer-events-none absolute inset-0"
                    />
                ) : (
                    <>
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 opacity-15 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#000_4px,#000_8px)]"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-200/80 to-transparent"
                        />
                    </>
                )}

                <div className="skew-x-12 relative flex items-center justify-center">
                    <span
                        className={cn(
                            'text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white tracking-tighter',
                            isRealGlass
                                ? 'drop-shadow-[0_1px_6px_rgba(0,12,32,0.55)]'
                                : 'drop-shadow-[0_2px_10px_rgba(56,189,248,0.35)]'
                        )}
                    >
                        {value}
                    </span>
                </div>
            </div>

            {/* Glassmorphic Label Panel */}
            <div
                className={cn(
                    'relative overflow-hidden rounded-r-xl rounded-l-[2.25rem] pl-8 sm:pl-10 pr-4 sm:pr-6 py-2.5 sm:py-3 md:py-4 flex flex-col justify-center min-w-[124px] sm:min-w-[144px]',
                    isRealGlass ? 'floating-stat-realglass' : 'floating-stat-glass'
                )}
            >
                {isRealGlass ? (
                    <div aria-hidden="true" className="floating-stat-realglass-sheen pointer-events-none absolute inset-0" />
                ) : (
                    <>
                        <div aria-hidden="true" className="floating-stat-flare pointer-events-none absolute inset-0" />
                        <div aria-hidden="true" className="nav-logo-plinth-dots pointer-events-none absolute inset-0" />
                    </>
                )}
                <div aria-hidden="true" className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px" />

                {/* Decorative Status Dot */}
                <div className="absolute top-2.5 right-3 sm:top-3 sm:right-4 flex items-center gap-1.5 z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400/50 animate-ping motion-reduce:animate-none absolute" />
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)] relative" />
                </div>

                <div
                    className={cn(
                        'relative z-10 text-[10px] sm:text-[11px] md:text-xs font-black uppercase tracking-[0.16em] leading-snug max-w-[120px] mt-0.5',
                        isRealGlass
                            ? 'text-white [text-shadow:0_1px_6px_rgba(0,10,28,0.7)]'
                            : 'text-slate-100'
                    )}
                >
                    {label}
                </div>
            </div>
        </motion.div>
    );
}
