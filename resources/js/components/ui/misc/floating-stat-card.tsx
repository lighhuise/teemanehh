import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type FloatingPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface FloatingStatCardProps {
    value: string;
    label: string;
    position?: FloatingPosition;
    className?: string;
    delay?: number;
}

const positionClasses: Record<FloatingPosition, string> = {
    'top-left':     'top-0 left-0 md:-left-8 -translate-y-1/2',
    'top-right':    'top-0 right-0 md:-right-8 -translate-y-1/2',
    'bottom-left':  'bottom-0 left-0 md:-left-8 translate-y-1/2',
    'bottom-right': 'bottom-0 right-0 md:-right-8 translate-y-1/2',
};

export function FloatingStatCard({
    value,
    label,
    position = 'bottom-left',
    className,
    delay = 0,
}: FloatingStatCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: position.includes('left') ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={{ y: [0, -6, 0] }}
            transition={{
                x: { duration: 0.6, type: "spring", bounce: 0.4 },
                opacity: { duration: 0.6 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }
            }}
            className={cn(
                'absolute pointer-events-none z-20 flex items-stretch group',
                positionClasses[position],
                className
            )}
        >
            {/* Slanted, Pop-out Industrial Value Block */}
            <div className="relative z-10 -mr-6 bg-linear-to-br from-primary to-primary/80 border border-primary-foreground/20 shadow-xl shadow-primary/30 px-5 py-3 md:px-7 md:py-4 rounded-xl -skew-x-12 transform group-hover:-translate-y-1 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden">
                {/* Subtle industrial stripe overlay */}
                <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#000_4px,#000_8px)]"></div>

                <div className="skew-x-12 relative flex items-center justify-center">
                    <span className="text-3xl md:text-5xl font-black text-primary-foreground tracking-tighter drop-shadow-md">
                        {value}
                    </span>
                </div>
            </div>

            {/* Sleek Glassmorphic Label Panel */}
            <div className="relative bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-r-xl rounded-l-[2.5rem] pl-10 pr-6 py-3 md:py-4 flex flex-col justify-center min-w-[140px]">

                {/* Decorative Status Dot */}
                <div className="absolute top-3 right-4 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-ping absolute"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary relative"></div>
                </div>

                <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-foreground leading-snug max-w-[120px] mt-1">
                    {label}
                </div>
            </div>
        </motion.div>
    );
}
