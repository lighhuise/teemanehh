import { cn } from '@/lib/utils';
import React from "react";

export default function Wrapper({
    className,
    as,
    style,
    children,
    ...props
}: {
    className?: string;
    as?: React.ElementType;
    style?: React.CSSProperties;
    children: React.ReactNode;
}) {
    const Comp = as || 'div';

    return (
        <Comp
            className={cn(
                'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
                className,
            )}
            style={style}
            {...props}
        >
            {children}
        </Comp>
    );
}

Wrapper.displayName = 'Wrapper';
