import type {HTMLAttributes} from 'react';
import {cn} from '@/lib/utils';
import ParticleText, {type ParticleTextProps} from '@/components/ParticleText';
import DividerSurface from '@/components/ui/divider-surface';

export interface Divider3Props extends HTMLAttributes<HTMLDivElement> {
    text?: string;
    highlightColor?: string;
    heightClassName?: string;
    particleProps?: Partial<Omit<ParticleTextProps, 'text' | 'highlightColor'>>;
}

export function Divider3({
    text = 'Teemane Heavy Haulage',
    highlightColor = '#38bdf8',
    heightClassName = 'h-[240px] sm:h-[300px] lg:h-[360px]',
    particleProps,
    className,
    ...props
}: Divider3Props) {
    return (
        <DividerSurface
            className={cn('select-none font-heading', className)}
            {...props}
        >
            {/* Centered ambient primary glow behind ParticleText */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-48 rounded-full bg-primary/25 blur-[90px]"
            />

            {/* ParticleText stage */}
            <div className={cn('relative w-full px-4 sm:px-6 lg:px-8', heightClassName)}>
                <ParticleText
                    text={text}
                    particleSize={3}
                    density={5}
                    color="currentColor"
                    highlightColor={highlightColor}
                    highlightMode="motion"
                    shape="circle"
                    intro="rain"
                    scatter={190}
                    gatherDuration={2500}
                    stagger={600}
                    clickBurst={false}
                    burstStrength={1.4}
                    pointerRepel={24}
                    repelRadius={90}
                    idleDrift={0.9}
                    trigger="mount"
                    fontSize="clamp(3.5rem, 13vw, 9rem)"
                    fontWeight={900}
                    fontFamily="inherit"
                    glow
                    {...particleProps}
                />
            </div>
        </DividerSurface>
    );
}

export default Divider3;

Divider3.displayName = 'Divider3';
