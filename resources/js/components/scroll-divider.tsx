import ScrollVelocity from "@/components/ScrollVelocity";


interface ScrollDividerProps {
    texts: React.ReactNode[];
}

function ScrollDivider({texts}: ScrollDividerProps) {
    return (
        <section
            className="relative overflow-hidden py-16 lg:py-18 min-h-32 bg-linear-to-br from-zinc-950 via-primary/95 to-primary text-white border-y border-white/10">
            {/* Dotted pattern with radial gradient mask from top right */}
            <div
                aria-hidden={true}
                className="pointer-events-none opacity-20 absolute bg-fixed inset-0 bg-[radial-gradient(circle,#ffffff40_2px,transparent_2px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_at_top_right,black_35%,transparent_60%)]"
            />

            <ScrollVelocity
                texts={texts}
                velocity={40}
                skewWithVelocity={16}
                scaleWithVelocity={0.18}
                draggable
                fontSize={40}
                fontWeight={900}
                className="opacity-70 inline-flex items-center py-2"
                numCopies={5}
                damping={50}
                stiffness={400}
                separator="•"
                fadeEdges
                outlineAlternate={false}
                gap={30}
                pauseOnHover={false}
            />
        </section>
    )
}

export default ScrollDivider;

ScrollDivider.displayName = 'ScrollDivider';
