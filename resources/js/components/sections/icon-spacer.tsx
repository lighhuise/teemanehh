import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import DividerSurface from '@/components/ui/divider-surface';
import Wrapper from '@/components/ui/misc/wrapper';

// @ts-ignore
import gooseneckLowbedIcon from '@/../images/fleet-icons/gooseneck-lowbed.webp';
// @ts-ignore
import stepDeckFlatbedIcon from '@/../images/fleet-icons/step-deck-flatbed.webp';
// @ts-ignore
import multiAxleModularIcon from '@/../images/fleet-icons/multi-axle-modular.webp';
// @ts-ignore
import vesselBridgeIcon from '@/../images/fleet-icons/vessel-bridge.webp';
// @ts-ignore
import telescopicAbnormalIcon from '@/../images/fleet-icons/telescopic-abnormal.webp';

interface IconSpacerTypes {
    className?: string;
}

interface ConnectorGeometry {
    width: number;
    height: number;
    paths: string[];
}

const fleetConfigurations = [
    {
        code: '01',
        name: 'Gooseneck Lowbed',
        spec: 'Tri-Axle Plant & Machinery',
        src: gooseneckLowbedIcon,
        alt: 'Gooseneck lowbed truck and tri-axle trailer carrying an excavator',
        pulseDelay: 0.9,
    },
    {
        code: '02',
        name: 'Step-Deck Flatbed',
        spec: '4-Axle Structural Steel',
        src: stepDeckFlatbedIcon,
        alt: 'Heavy prime mover with 4-axle step-deck flatbed hauling a structural steel truss',
        pulseDelay: 0.45,
    },
    {
        code: '03',
        name: 'Multi-Axle Modular',
        spec: 'Hydraulic Superload Deck',
        src: multiAxleModularIcon,
        alt: 'Ballasted 8x4 prime mover towing a 6-axle modular hydraulic platform trailer with a power transformer',
        pulseDelay: 0,
    },
    {
        code: '04',
        name: 'Vessel Bridge',
        spec: 'Jeep-Dolly Drop-Well Deck',
        src: vesselBridgeIcon,
        alt: 'Heavy prime mover with 2-axle front jeep dolly and drop-well vessel bridge trailer carrying an industrial pressure vessel',
        pulseDelay: 0.45,
    },
    {
        code: '05',
        name: 'Telescopic Abnormal',
        spec: 'Steerable Dolly Long-Load',
        src: telescopicAbnormalIcon,
        alt: 'Heavy prime mover with extendable telescopic spine beam and steerable rear dolly carrying a wind turbine tower section',
        pulseDelay: 0.9,
    },
] as const;

const SSR_FALLBACK_TARGETS = [95, 297.5, 500, 702.5, 905];

function buildSmoothCurve(sx: number, sy: number, ex: number, ey: number): string {
    const dy = ey - sy;
    const c1y = sy + dy * 0.58;
    const c2y = ey - dy * 0.58;
    return `M ${sx.toFixed(1)} ${sy.toFixed(1)} C ${sx.toFixed(1)} ${c1y.toFixed(1)}, ${ex.toFixed(1)} ${c2y.toFixed(1)}, ${ex.toFixed(1)} ${ey.toFixed(1)}`;
}

export default function IconSpacer({ className }: IconSpacerTypes) {
    const svgId = useId().replace(/:/g, '');
    const diagramRef = useRef<HTMLDivElement | null>(null);
    const hubPortRef = useRef<HTMLSpanElement | null>(null);
    const cardPortRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [geometry, setGeometry] = useState<ConnectorGeometry | null>(null);

    const measureConnectors = useCallback(() => {
        const diagramEl = diagramRef.current;
        const hubPortEl = hubPortRef.current;

        if (!diagramEl || !hubPortEl) {
            return;
        }

        const diagramRect = diagramEl.getBoundingClientRect();
        if (diagramRect.width === 0 || diagramRect.height === 0) {
            return;
        }

        const hubRect = hubPortEl.getBoundingClientRect();
        const sx = hubRect.left - diagramRect.left + hubRect.width / 2;
        const sy = hubRect.top - diagramRect.top + hubRect.height / 2;

        const paths: string[] = [];
        for (let i = 0; i < fleetConfigurations.length; i++) {
            const portEl = cardPortRefs.current[i];
            if (!portEl) {
                return;
            }

            const portRect = portEl.getBoundingClientRect();
            if (portRect.width === 0 && portRect.height === 0) {
                setGeometry(null);
                return;
            }

            const ex = portRect.left - diagramRect.left + portRect.width / 2;
            const ey = portRect.top - diagramRect.top + portRect.height / 2;
            paths.push(buildSmoothCurve(sx, sy, ex, ey));
        }

        setGeometry({
            width: diagramRect.width,
            height: diagramRect.height,
            paths,
        });
    }, []);

    useEffect(() => {
        measureConnectors();

        const diagramEl = diagramRef.current;
        if (!diagramEl || typeof ResizeObserver === 'undefined') {
            return;
        }

        const observer = new ResizeObserver(() => {
            measureConnectors();
        });
        observer.observe(diagramEl);

        window.addEventListener('resize', measureConnectors);
        return () => {
            observer.disconnect();
            window.removeEventListener('resize', measureConnectors);
        };
    }, [measureConnectors]);

    const beamGradId = `beam-grad-${svgId}`;
    const glowFilterId = `beam-glow-${svgId}`;
    const stemGradId = `stem-grad-${svgId}`;

    return (
        <DividerSurface
            as="section"
            canopyTrim={false}
            aria-label="Heavy haulage truck and trailer combinations"
            className={cn('py-10 sm:py-12 lg:py-16', className)}
        >
            <Wrapper>
                <div ref={diagramRef} className="relative">
                    {/* Desktop (lg+) Pixel-Measured Curved Node Connectors */}
                    {geometry && (
                        <svg
                            aria-hidden="true"
                            width={geometry.width}
                            height={geometry.height}
                            viewBox={`0 0 ${geometry.width} ${geometry.height}`}
                            className="pointer-events-none absolute inset-0 z-10 hidden overflow-visible lg:block"
                        >
                            <defs>
                                <linearGradient id={beamGradId} x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.95" />
                                    <stop offset="55%" stopColor="#38bdf8" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#0064be" stopOpacity="0.9" />
                                </linearGradient>
                                <filter id={glowFilterId} x="-25%" y="-25%" width="150%" height="150%">
                                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {geometry.paths.map((d, index) => {
                                const isActive = activeIndex === index;
                                const isDimmed = activeIndex !== null && !isActive;

                                return (
                                    <g key={fleetConfigurations[index].code}>
                                        {/* Base technical CAD curve */}
                                        <path
                                            d={d}
                                            fill="none"
                                            stroke={isActive ? 'rgba(186, 230, 253, 0.92)' : 'rgba(56, 189, 248, 0.28)'}
                                            strokeWidth={isActive ? 2 : 1.25}
                                            strokeLinecap="round"
                                            filter={isActive ? `url(#${glowFilterId})` : undefined}
                                            style={{
                                                opacity: isDimmed ? 0.35 : 1,
                                                transition: 'stroke 240ms ease, stroke-width 240ms ease, opacity 240ms ease',
                                            }}
                                        />

                                        {/* Staggered traveling light-pulse beam */}
                                        <path
                                            d={d}
                                            fill="none"
                                            pathLength={100}
                                            stroke={`url(#${beamGradId})`}
                                            strokeWidth={isActive ? 2.6 : 1.75}
                                            strokeLinecap="round"
                                            filter={`url(#${glowFilterId})`}
                                            className="node-connector-pulse"
                                            style={{
                                                animationDelay: `${fleetConfigurations[index].pulseDelay}s`,
                                                opacity: isDimmed ? 0.2 : undefined,
                                            }}
                                        />
                                    </g>
                                );
                            })}
                        </svg>
                    )}

                    {/* Top-Center Brand Plinth Glass Hub Node */}
                    <div className="relative z-20 flex justify-center">
                        <div className="icon-spacer-hub relative inline-flex flex-col items-center rounded-2xl px-6 py-4 text-center sm:px-9 sm:py-5">
                            {/* Clipped internal glass flare & micro-dots */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
                            >
                                <div className="globe-glass-card-flare absolute inset-0" />
                                <div className="nav-logo-plinth-dots absolute inset-0 opacity-25" />
                                <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-sky-200/65 to-transparent" />
                                <div className="absolute inset-x-4 bottom-0 h-px bg-linear-to-r from-transparent via-sky-300/75 to-transparent" />
                                <div className="nav-logo-plinth-edge absolute inset-y-0 right-0 w-px opacity-80" />
                            </div>

                            <div className="relative z-10 inline-flex items-center gap-2">
                                <span
                                    aria-hidden="true"
                                    className={cn(
                                        'size-1.5 rounded-full bg-sky-400 transition-all duration-300',
                                        activeIndex !== null
                                            ? 'scale-125 shadow-[0_0_12px_rgba(186,230,253,1)]'
                                            : 'shadow-[0_0_8px_rgba(56,189,248,0.85)]',
                                    )}
                                />
                                <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-sky-200/85 sm:text-xs">
                                    Fleet Configurations
                                </span>
                            </div>

                            <h2 className="relative z-10 mt-1.5 font-heading text-xl font-black uppercase tracking-tight text-white sm:text-2xl lg:text-3xl">
                                Purpose-Built{' '}
                                <span className="bg-linear-to-r from-sky-200 via-sky-300 to-primary bg-clip-text text-transparent">
                                    Rigs
                                </span>
                            </h2>

                            {/* Bottom-Center Origin Anchor Port */}
                            <span
                                ref={hubPortRef}
                                aria-hidden="true"
                                className={cn(
                                    'absolute -bottom-2 left-1/2 z-30 flex size-4 -translate-x-1/2 items-center justify-center rounded-full border bg-[#001838] transition-all duration-300',
                                    activeIndex !== null
                                        ? 'scale-110 border-sky-100 shadow-[0_0_18px_rgba(125,211,252,0.95)]'
                                        : 'border-sky-300/80 shadow-[0_0_12px_rgba(56,189,248,0.75)]',
                                )}
                            >
                                <span className="size-1.5 rounded-full bg-sky-100 shadow-[0_0_6px_#e0f2fe]" />
                            </span>
                        </div>
                    </div>

                    {/* Desktop (lg+) Bridge Height + SSR Fallback Curves Before Hydration */}
                    <div className="relative hidden h-20 lg:block xl:h-24" aria-hidden="true">
                        {!geometry && (
                            <svg
                                viewBox="0 0 1000 88"
                                preserveAspectRatio="none"
                                className="h-full w-full overflow-visible"
                            >
                                {SSR_FALLBACK_TARGETS.map((targetX, index) => (
                                    <path
                                        key={fleetConfigurations[index].code}
                                        d={buildSmoothCurve(500, 0, targetX, 88)}
                                        fill="none"
                                        stroke="rgba(56, 189, 248, 0.28)"
                                        strokeWidth="1.4"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                ))}
                            </svg>
                        )}
                    </div>

                    {/* Tablet (sm to < lg) Compact Vertical Glowing Connector Stem */}
                    <div
                        aria-hidden="true"
                        className="relative hidden h-10 flex-col items-center justify-center sm:flex lg:hidden"
                    >
                        <svg viewBox="0 0 4 40" className="h-full w-1 overflow-visible">
                            <defs>
                                <linearGradient id={stemGradId} x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.95" />
                                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
                                </linearGradient>
                            </defs>
                            <line
                                x1="2"
                                y1="0"
                                x2="2"
                                y2="40"
                                stroke="rgba(56, 189, 248, 0.35)"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M 2 0 L 2 40"
                                pathLength={100}
                                fill="none"
                                stroke={`url(#${stemGradId})`}
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                className="node-connector-pulse"
                            />
                        </svg>
                        <div className="h-px w-2/3 bg-linear-to-r from-transparent via-sky-400/35 to-transparent" />
                    </div>

                    {/* Mobile (< sm) Pixel-Exact Curved Lead-In From Centered Hub to Left Spine Rail */}
                    <div aria-hidden="true" className="relative h-7 sm:hidden">
                        <div className="absolute top-0 left-[calc(25%+5.5px)] h-[14.5px] w-[calc(25%-5.5px)] rounded-br-xl border-r border-b border-sky-400/40" />
                        <div className="absolute bottom-0 left-[11px] h-[14.5px] w-[calc(25%-5.5px)] rounded-tl-xl border-t border-l border-sky-400/40" />
                    </div>

                    {/* 5 Fleet Rig Glass Cards */}
                    <div className="relative pl-6 sm:pl-0">
                        {/* Mobile (< sm) Left-Edge Vertical Spine Rail */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute top-0 bottom-8 left-[11px] w-px bg-linear-to-b from-sky-400/50 via-sky-400/30 to-sky-400/10 sm:hidden"
                        />

                        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
                            {fleetConfigurations.map((rig, index) => {
                                const isActive = activeIndex === index;

                                return (
                                    <div
                                        key={rig.code}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        onMouseLeave={() => setActiveIndex(null)}
                                        className="group relative"
                                    >
                                        {/* Mobile (< sm) Curved Branch Stub From Left Spine Into Card */}
                                        <svg
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            className="pointer-events-none absolute top-1/2 -left-[13px] h-6 w-6 -translate-y-1/2 overflow-visible sm:hidden"
                                        >
                                            <path
                                                d="M 0 0 C 0 12, 6 12, 13 12"
                                                fill="none"
                                                stroke="rgba(56, 189, 248, 0.45)"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>

                                        {/* Mobile (< sm) Left-Center Receiving Port */}
                                        <span
                                            aria-hidden="true"
                                            className="absolute top-1/2 -left-1.5 z-20 flex size-3 -translate-y-1/2 items-center justify-center rounded-full border border-sky-300/75 bg-[#001838] shadow-[0_0_8px_rgba(56,189,248,0.6)] sm:hidden"
                                        >
                                            <span className="size-1 rounded-full bg-sky-200" />
                                        </span>

                                        {/* Desktop (lg+) Top-Center Receiving Port */}
                                        <span
                                            ref={(el) => {
                                                cardPortRefs.current[index] = el;
                                            }}
                                            aria-hidden="true"
                                            className={cn(
                                                'absolute -top-1.5 left-1/2 z-20 hidden size-3 -translate-x-1/2 items-center justify-center rounded-full border bg-[#001838] transition-all duration-300 lg:flex',
                                                isActive
                                                    ? 'scale-125 border-sky-100 shadow-[0_0_14px_rgba(186,230,253,0.95)]'
                                                    : 'border-sky-300/70 shadow-[0_0_8px_rgba(56,189,248,0.55)]',
                                            )}
                                        >
                                            <span
                                                className={cn(
                                                    'size-1 rounded-full transition-colors duration-300',
                                                    isActive ? 'bg-white' : 'bg-sky-300/90',
                                                )}
                                            />
                                        </span>

                                        {/* Glass Card Body */}
                                        <div className="globe-glass-card relative flex h-full flex-col justify-between overflow-hidden rounded-xl px-4 py-4 transition-all duration-300">
                                            <div
                                                aria-hidden="true"
                                                className="globe-glass-card-flare pointer-events-none absolute inset-0"
                                            />
                                            <div
                                                aria-hidden="true"
                                                className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-80"
                                            />

                                            <div className="relative z-10 flex items-center justify-between">
                                                <span className="font-mono text-[0.62rem] font-semibold tracking-[0.2em] text-sky-300/65 transition-colors group-hover:text-sky-200">
                                                    {rig.code}
                                                </span>
                                                <span className="h-1.5 w-1.5 rounded-full bg-sky-400/70 shadow-[0_0_8px_rgba(56,189,248,0.85)] transition-transform duration-300 group-hover:scale-125" />
                                            </div>

                                            <div className="relative z-10 my-3 flex items-center justify-center">
                                                <img
                                                    src={rig.src}
                                                    alt={rig.alt}
                                                    width={720}
                                                    height={200}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="aspect-[18/5] w-full object-contain opacity-90 transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
                                                />
                                            </div>

                                            <div className="relative z-10 border-t border-sky-300/15 pt-2.5">
                                                <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-white/90 transition-colors group-hover:text-white">
                                                    {rig.name}
                                                </div>
                                                <div className="mt-0.5 text-[0.68rem] text-sky-200/60 transition-colors group-hover:text-sky-100/80">
                                                    {rig.spec}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </DividerSurface>
    );
}
