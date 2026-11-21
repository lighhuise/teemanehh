import React, {useCallback, useEffect, useRef, useState} from 'react';
import createGlobe from 'cobe';
import {Eye, EyeOff} from 'lucide-react';
import Wrapper from '@/components/ui/misc/wrapper';
import ResponsiveImage from '@/components/ui/misc/responsive-image';
import {responsiveImages} from '@/lib/responsive-images';

export interface GlobeMarker {
    id: string;
    location: [number, number];
    label: string;
    size?: number;
    color?: [number, number, number];
    isHq?: boolean;
}

export interface GlobeArc {
    id: string;
    from: [number, number];
    to: [number, number];
    color?: [number, number, number];
}

interface GlobeProps {
    markers?: GlobeMarker[];
    arcs?: GlobeArc[];
    className?: string;
    speed?: number;
}

// 6 Van Eck St, Bellville South, Cape Town, 7530 (Teemane Heavy Haulage HQ)
export const HQ_LOCATION: [number, number] = [-33.926637890850294, 18.645063943495657];

export const defaultMarkers: GlobeMarker[] = [
    // Main Headquarters (Bellville South, Cape Town)
    {
        id: 'thh-cpt-hq',
        location: HQ_LOCATION,
        label: 'Cape Town HQ',
        size: 0.015,
        color: [0.96, 0.33, 0.0],
        isHq: true,
    },

    // Major South African Hubs (well-spaced)
    { id: 'thh-jhb', location: [-26.2041, 28.0473], label: 'Johannesburg', size: 0.011 },
    { id: 'thh-dbn', location: [-29.8587, 31.0218], label: 'Durban', size: 0.01 },
    { id: 'thh-plz', location: [-33.9608, 25.6022], label: 'Gqeberha', size: 0.009 },
    { id: 'thh-utn', location: [-28.4478, 21.2561], label: 'Upington', size: 0.009 },

    // Southern Africa / SADC Hubs (well-spaced)
    { id: 'thh-wdh', location: [-22.5609, 17.0658], label: 'Windhoek • Namibia', size: 0.01 },
    { id: 'thh-gbe', location: [-24.6282, 25.9231], label: 'Gaborone • Botswana', size: 0.009 },
    { id: 'thh-mpm', location: [-25.9692, 32.5732], label: 'Maputo • Mozambique', size: 0.01 },
    { id: 'thh-hre', location: [-17.8252, 31.0335], label: 'Harare • Zimbabwe', size: 0.01 },
    { id: 'thh-lun', location: [-15.3875, 28.3228], label: 'Lusaka • Zambia', size: 0.01 },

    // Central, East, West & North Africa (well-spaced across the continent)
    { id: 'thh-lad', location: [-8.839, 13.2894], label: 'Luanda • Angola', size: 0.01 },
    { id: 'thh-dar', location: [-6.7924, 39.2083], label: 'Dar es Salaam • Tanzania', size: 0.01 },
    { id: 'thh-fih', location: [-4.4419, 15.2663], label: 'Kinshasa • DRC', size: 0.01 },
    { id: 'thh-nbo', location: [-1.2921, 36.8219], label: 'Nairobi • Kenya', size: 0.011 },
    { id: 'thh-los', location: [6.5244, 3.3792], label: 'Lagos • Nigeria', size: 0.011 },
    { id: 'thh-acc', location: [5.6037, -0.187], label: 'Accra • Ghana', size: 0.01 },
    { id: 'thh-add', location: [9.032, 38.7469], label: 'Addis Ababa • Ethiopia', size: 0.01 },
    { id: 'thh-dkr', location: [14.7167, -17.4677], label: 'Dakar • Senegal', size: 0.01 },
    { id: 'thh-cai', location: [30.0444, 31.2357], label: 'Cairo • Egypt', size: 0.011 },
    { id: 'thh-cmn', location: [33.5731, -7.5898], label: 'Casablanca • Morocco', size: 0.01 },
];

export const defaultArcs: GlobeArc[] = [
    // South African & SADC Core Corridors from Cape Town HQ
    { id: 'thh-arc-jhb', from: HQ_LOCATION, to: [-26.2041, 28.0473] },
    { id: 'thh-arc-dbn', from: HQ_LOCATION, to: [-29.8587, 31.0218] },
    { id: 'thh-arc-plz', from: HQ_LOCATION, to: [-33.9608, 25.6022] },
    { id: 'thh-arc-utn', from: HQ_LOCATION, to: [-28.4478, 21.2561] },
    { id: 'thh-arc-wdh', from: HQ_LOCATION, to: [-22.5609, 17.0658] },
    { id: 'thh-arc-gbe', from: [-26.2041, 28.0473], to: [-24.6282, 25.9231] },
    { id: 'thh-arc-mpm', from: [-26.2041, 28.0473], to: [-25.9692, 32.5732] },
    { id: 'thh-arc-hre', from: [-26.2041, 28.0473], to: [-17.8252, 31.0335] },
    { id: 'thh-arc-lun', from: [-17.8252, 31.0335], to: [-15.3875, 28.3228] },

    // Continental African Corridors (Central, East, West & North Africa)
    { id: 'thh-arc-lad', from: [-22.5609, 17.0658], to: [-8.839, 13.2894] },
    { id: 'thh-arc-fih', from: [-8.839, 13.2894], to: [-4.4419, 15.2663] },
    { id: 'thh-arc-dar', from: [-15.3875, 28.3228], to: [-6.7924, 39.2083] },
    { id: 'thh-arc-nbo', from: [-6.7924, 39.2083], to: [-1.2921, 36.8219] },
    { id: 'thh-arc-add', from: [-1.2921, 36.8219], to: [9.032, 38.7469] },
    { id: 'thh-arc-cai', from: [9.032, 38.7469], to: [30.0444, 31.2357] },
    { id: 'thh-arc-los', from: [-4.4419, 15.2663], to: [6.5244, 3.3792] },
    { id: 'thh-arc-acc', from: [6.5244, 3.3792], to: [5.6037, -0.187] },
    { id: 'thh-arc-dkr', from: [5.6037, -0.187], to: [14.7167, -17.4677] },
    { id: 'thh-arc-cmn', from: [14.7167, -17.4677], to: [33.5731, -7.5898] },
    { id: 'thh-arc-cpt-los', from: HQ_LOCATION, to: [6.5244, 3.3792] },
    { id: 'thh-arc-jhb-nbo', from: [-26.2041, 28.0473], to: [-1.2921, 36.8219] },
];

const MARKER_ELEVATION = 0.02;
const ARC_HEIGHT = 0.32;

function latLonToUnitVec(location: [number, number]): [number, number, number] {
    const latRad = (location[0] * Math.PI) / 180;
    const lonRad = (location[1] * Math.PI) / 180 - Math.PI;
    const cosLat = Math.cos(latRad);
    return [-cosLat * Math.cos(lonRad), Math.sin(latRad), cosLat * Math.sin(lonRad)];
}

function projectVec3ToScreen(
    tx: number,
    ty: number,
    tz: number,
    cosP: number,
    sinP: number,
    cosT: number,
    sinT: number,
): { x: number; y: number; visible: boolean; depth: number } {
    const c = cosP * tx + sinP * tz;
    const s = sinP * sinT * tx + cosT * ty - cosP * sinT * tz;
    const depth = -sinP * cosT * tx + sinT * ty + cosP * cosT * tz;
    // Matches Cobe's exact fragment discard: occluded when on back hemisphere (depth < 0) AND inside sphere disk (r^2 < 0.64)
    const occludedBySphere = depth < 0 && c * c + s * s < 0.64;

    return {
        x: (c + 1) / 2,
        y: (-s + 1) / 2,
        visible: !occludedBySphere,
        depth,
    };
}

function projectMarkerToScreen(
    location: [number, number],
    phi: number,
    theta: number,
): { x: number; y: number; visible: boolean } {
    const [ux, uy, uz] = latLonToUnitVec(location);
    const radius = 0.8 + MARKER_ELEVATION;
    const cosT = Math.cos(theta);
    const sinT = Math.sin(theta);
    const cosP = Math.cos(phi);
    const sinP = Math.sin(phi);

    const res = projectVec3ToScreen(ux * radius, uy * radius, uz * radius, cosP, sinP, cosT, sinT);
    return {
        x: res.x * 100,
        y: res.y * 100,
        visible: res.depth > 0.05 && res.visible,
    };
}

interface PrecomputedArc {
    id: string;
    start: [number, number, number];
    control: [number, number, number];
    end: [number, number, number];
    phase: number;
    flightSpeed: number;
}

function precomputeArcs(arcs: GlobeArc[]): PrecomputedArc[] {
    const baseRadius = 0.8 + MARKER_ELEVATION;
    return arcs.map((arc, idx) => {
        const l = latLonToUnitVec(arc.from);
        const m = latLonToUnitVec(arc.to);

        const start: [number, number, number] = [l[0] * baseRadius, l[1] * baseRadius, l[2] * baseRadius];
        const end: [number, number, number] = [m[0] * baseRadius, m[1] * baseRadius, m[2] * baseRadius];

        const fx = l[0] + m[0];
        const fy = l[1] + m[1];
        const fz = l[2] + m[2];
        const fLen = Math.hypot(fx, fy, fz);
        const ex = fLen > 1e-3 ? fx / fLen : 0;
        const ey = fLen > 1e-3 ? fy / fLen : 1;
        const ez = fLen > 1e-3 ? fz / fLen : 0;

        // Longer distances get a higher arc peak
        const chordDist = Math.hypot(l[0] - m[0], l[1] - m[1], l[2] - m[2]);
        const dynamicHeight = ARC_HEIGHT * Math.max(0.55, Math.min(1.35, chordDist * 0.85));
        const peakRadius = 0.8 + MARKER_ELEVATION + dynamicHeight;
        const control: [number, number, number] = [ex * peakRadius, ey * peakRadius, ez * peakRadius];

        return {
            id: arc.id,
            start,
            control,
            end,
            phase: (idx * 0.37) % 1.45,
            flightSpeed: 0.32 + (idx % 5) * 0.045,
        };
    });
}

function evalQuadraticBezier(
    start: [number, number, number],
    control: [number, number, number],
    end: [number, number, number],
    t: number,
): [number, number, number] {
    const inv = 1 - t;
    const b0 = inv * inv;
    const b1 = 2 * inv * t;
    const b2 = t * t;
    return [
        b0 * start[0] + b1 * control[0] + b2 * end[0],
        b0 * start[1] + b1 * control[1] + b2 * end[1],
        b0 * start[2] + b1 * control[2] + b2 * end[2],
    ];
}

export default function Globe({
    markers = defaultMarkers,
    arcs = defaultArcs,
    className = '',
    speed = 0.0322,
}: GlobeProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const arcCanvasRef = useRef<HTMLCanvasElement>(null);
    const labelRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const pointerStart = useRef<{ x: number; y: number } | null>(null);
    const dragOffset = useRef({ phi: 0, theta: 0 });
    const phiOffset = useRef(0);
    const thetaOffset = useRef(0);
    const isPaused = useRef(false);
    const speedMultiplierRef = useRef(1);

    const [labelsVisible, setLabelsVisible] = useState(true);
    const [speedMultiplier, setSpeedMultiplier] = useState(1);

    const handleSpeedChange = (val: number) => {
        setSpeedMultiplier(val);
        speedMultiplierRef.current = val;
    };

    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        pointerStart.current = { x: e.clientX, y: e.clientY };
        if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grabbing';
        }
        isPaused.current = true;
    }, []);

    const handlePointerUp = useCallback(() => {
        if (pointerStart.current !== null) {
            phiOffset.current += dragOffset.current.phi;
            thetaOffset.current = Math.max(
                -0.8,
                Math.min(0.8, thetaOffset.current + dragOffset.current.theta),
            );
            dragOffset.current = { phi: 0, theta: 0 };
        }
        pointerStart.current = null;
        if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
        }
        isPaused.current = false;
    }, []);

    useEffect(() => {
        const handlePointerMove = (e: PointerEvent) => {
            if (pointerStart.current !== null) {
                dragOffset.current = {
                    phi: (e.clientX - pointerStart.current.x) / 280,
                    theta: (e.clientY - pointerStart.current.y) / 700,
                };
            }
        };
        window.addEventListener('pointermove', handlePointerMove, { passive: true });
        window.addEventListener('pointerup', handlePointerUp, { passive: true });
        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [handlePointerUp]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        let globe: ReturnType<typeof createGlobe> | null = null;
        let animationId = 0;
        let fadeTimeout: ReturnType<typeof setTimeout> | undefined;
        let ro: ResizeObserver | undefined;

        // Start facing Africa (Southern + Continental Africa)
        let phi = 4.32;
        const baseTheta = -0.18;
        const precomputedArcs = precomputeArcs(arcs);
        const startTime = performance.now();

        const updateLabels = (currentPhi: number, currentTheta: number) => {
            for (const m of markers) {
                const el = labelRefs.current[m.id];
                if (!el) {
                    continue;
                }
                const pos = projectMarkerToScreen(m.location, currentPhi, currentTheta);
                el.style.left = `${pos.x.toFixed(2)}%`;
                el.style.top = `${pos.y.toFixed(2)}%`;
                el.style.opacity = pos.visible ? '1' : '0';
                el.style.filter = pos.visible ? 'blur(0px)' : 'blur(6px)';
            }
        };

        const drawFlyingArcs = (currentPhi: number, currentTheta: number, nowMs: number) => {
            const arcCanvas = arcCanvasRef.current;
            if (!arcCanvas) {
                return;
            }
            const ctx = arcCanvas.getContext('2d');
            if (!ctx) {
                return;
            }

            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const displayW = canvas.offsetWidth;
            const displayH = canvas.offsetHeight || displayW;
            if (displayW === 0) {
                return;
            }

            const targetW = Math.round(displayW * dpr);
            const targetH = Math.round(displayH * dpr);
            if (arcCanvas.width !== targetW || arcCanvas.height !== targetH) {
                arcCanvas.width = targetW;
                arcCanvas.height = targetH;
            }

            ctx.save();
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, displayW, displayH);

            const cosT = Math.cos(currentTheta);
            const sinT = Math.sin(currentTheta);
            const cosP = Math.cos(currentPhi);
            const sinP = Math.sin(currentPhi);
            const elapsedSec = (nowMs - startTime) / 1000;

            const BASE_STEPS = 28;
            const COMET_STEPS = 22;
            const COMET_LENGTH = 0.42;
            const CYCLE_SPAN = 1.45;

            for (const arc of precomputedArcs) {
                // 1. Subtle base trajectory guide line
                ctx.beginPath();
                let penDown = false;
                for (let i = 0; i <= BASE_STEPS; i++) {
                    const t = i / BASE_STEPS;
                    const [bx, by, bz] = evalQuadraticBezier(arc.start, arc.control, arc.end, t);
                    const pt = projectVec3ToScreen(bx, by, bz, cosP, sinP, cosT, sinT);
                    if (pt.visible) {
                        const sx = pt.x * displayW;
                        const sy = pt.y * displayH;
                        if (!penDown) {
                            ctx.moveTo(sx, sy);
                            penDown = true;
                        } else {
                            ctx.lineTo(sx, sy);
                        }
                    } else {
                        penDown = false;
                    }
                }
                ctx.strokeStyle = 'rgba(56, 189, 248, 0.14)';
                ctx.lineWidth = 1.1;
                ctx.stroke();

                // 2. Animated flying gradient comet along the arc (from start marker -> end marker)
                const progress = (elapsedSec * arc.flightSpeed + arc.phase) % CYCLE_SPAN;
                const headT = Math.min(1, progress);
                const tailT = Math.max(0, progress - COMET_LENGTH);

                if (headT > tailT + 0.01) {
                    const pts: { x: number; y: number; visible: boolean; t: number }[] = [];
                    for (let i = 0; i <= COMET_STEPS; i++) {
                        const t = tailT + ((headT - tailT) * i) / COMET_STEPS;
                        const [bx, by, bz] = evalQuadraticBezier(arc.start, arc.control, arc.end, t);
                        const pt = projectVec3ToScreen(bx, by, bz, cosP, sinP, cosT, sinT);
                        pts.push({
                            x: pt.x * displayW,
                            y: pt.y * displayH,
                            visible: pt.visible,
                            t,
                        });
                    }

                    const firstVis = pts.find((p) => p.visible);
                    const lastVis = [...pts].reverse().find((p) => p.visible);

                    if (firstVis && lastVis && (firstVis.x !== lastVis.x || firstVis.y !== lastVis.y)) {
                        const grad = ctx.createLinearGradient(firstVis.x, firstVis.y, lastVis.x, lastVis.y);
                        grad.addColorStop(0, 'rgba(0, 100, 190, 0)');
                        grad.addColorStop(0.35, 'rgba(56, 189, 248, 0.65)');
                        grad.addColorStop(0.75, 'rgba(244, 83, 0, 0.95)');
                        grad.addColorStop(1, 'rgba(255, 225, 190, 1)');

                        ctx.beginPath();
                        let cometPen = false;
                        for (const p of pts) {
                            if (p.visible) {
                                if (!cometPen) {
                                    ctx.moveTo(p.x, p.y);
                                    cometPen = true;
                                } else {
                                    ctx.lineTo(p.x, p.y);
                                }
                            } else {
                                cometPen = false;
                            }
                        }
                        ctx.strokeStyle = grad;
                        ctx.lineWidth = 2.4;
                        ctx.lineCap = 'round';
                        ctx.shadowColor = '#F45300';
                        ctx.shadowBlur = 10;
                        ctx.stroke();
                        ctx.shadowBlur = 0;
                    }

                    // 3. Glowing leading head particle while in flight
                    const headPt = pts[pts.length - 1];
                    if (headPt && headPt.visible && progress <= 1.02) {
                        const headGlow = ctx.createRadialGradient(
                            headPt.x,
                            headPt.y,
                            0,
                            headPt.x,
                            headPt.y,
                            9,
                        );
                        headGlow.addColorStop(0, 'rgba(255, 245, 230, 1)');
                        headGlow.addColorStop(0.4, 'rgba(244, 83, 0, 0.85)');
                        headGlow.addColorStop(1, 'rgba(244, 83, 0, 0)');
                        ctx.fillStyle = headGlow;
                        ctx.beginPath();
                        ctx.arc(headPt.x, headPt.y, 9, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }

                // 4. Arrival pulse ring when the flying arc reaches the destination marker
                if (progress >= 0.96 && progress <= 1.32) {
                    const endPt = projectVec3ToScreen(
                        arc.end[0],
                        arc.end[1],
                        arc.end[2],
                        cosP,
                        sinP,
                        cosT,
                        sinT,
                    );
                    if (endPt.visible && endPt.depth > 0) {
                        const pulseT = (progress - 0.96) / 0.36;
                        const radius = 3 + pulseT * 14;
                        const alpha = (1 - pulseT) * 0.75;
                        ctx.beginPath();
                        ctx.arc(endPt.x * displayW, endPt.y * displayH, radius, 0, Math.PI * 2);
                        ctx.strokeStyle = `rgba(244, 83, 0, ${alpha.toFixed(3)})`;
                        ctx.lineWidth = 1.5;
                        ctx.stroke();
                    }
                }
            }

            ctx.restore();
        };

        const animate = (nowMs: number = performance.now()) => {
            if (!isPaused.current) {
                phi += speed * speedMultiplierRef.current;
            }
            const currentPhi = phi + phiOffset.current + dragOffset.current.phi;
            const currentTheta = Math.max(
                -1.15,
                Math.min(0.85, baseTheta + thetaOffset.current + dragOffset.current.theta),
            );

            globe?.update({
                phi: currentPhi,
                theta: currentTheta,
            });
            drawFlyingArcs(currentPhi, currentTheta, nowMs);
            updateLabels(currentPhi, currentTheta);
            animationId = requestAnimationFrame(animate);
        };

        const init = () => {
            const width = canvas.offsetWidth;
            if (width === 0 || globe) {
                return;
            }

            globe = createGlobe(canvas, {
                devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
                width,
                height: width,
                phi,
                theta: baseTheta,
                dark: 1,
                diffuse: 1.85,
                mapSamples: 8500,
                mapBrightness: 3.4,
                mapBaseBrightness: 0,
                baseColor: [0.22, 0.34, 0.62],
                markerColor: [0.96, 0.33, 0.0],
                glowColor: [0.04, 0.18, 0.55],
                markerElevation: MARKER_ELEVATION,
                markers: markers.map((m) => ({
                    location: m.location,
                    size: m.size ?? 0.01,
                    id: m.id,
                    color: m.color ?? [0.96, 0.33, 0.0],
                })),
                arcs: [],
                opacity: 0.62,
            });
            animate();
            fadeTimeout = setTimeout(() => {
                canvas.style.opacity = '0.78';
            });
        };

        if (canvas.offsetWidth > 0) {
            init();
        } else {
            ro = new ResizeObserver((entries) => {
                if (entries[0]?.contentRect.width > 0) {
                    ro?.disconnect();
                    init();
                }
            });
            ro.observe(canvas);
        }

        return () => {
            ro?.disconnect();
            if (fadeTimeout) {
                clearTimeout(fadeTimeout);
            }
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            globe?.destroy();
        };
    }, [markers, arcs, speed]);

    return (
        <section className="relative overflow-hidden bg-[#030611] text-white min-h-[760px] sm:min-h-[860px] lg:min-h-[960px] flex items-center py-20 lg:py-28 border-y border-sky-400/15 select-none">
            {/* Top & Bottom Luminous Horizon Hairlines */}
            <div aria-hidden="true" className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 z-30 h-px" />
            <div aria-hidden="true" className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 z-30 h-px opacity-75" />

            {/* Space Nebula Background Image */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
                <ResponsiveImage
                    source={responsiveImages.spaceNebulaBg}
                    sizes="100vw"
                    alt=""
                    className="h-full w-full object-cover object-right opacity-85"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(90deg, #030611 0%, rgba(3, 6, 17, 0.78) 34%, rgba(3, 6, 17, 0.15) 68%, rgba(3, 6, 17, 0.35) 100%)',
                    }}
                />
            </div>

            {/* Massive Globe — Placed 40% Offscreen to the Right (United Carriers layout) */}
            <div
                className={`pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[40%] w-[860px] sm:w-[1080px] lg:w-[1320px] xl:w-[1480px] aspect-square z-10 ${className}`}
                style={{ userSelect: 'none' }}
            >
                {/* United Carriers 4-Layer Atmospheric Sphere Rim Glow (.home-hero-globe-shadow-grp) */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute rounded-full flex items-center justify-center"
                    style={{
                        inset: '10.5%',
                        transform: 'rotate(180deg)',
                    }}
                >
                    {/* Orange lower-rim warmth */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            backgroundColor: '#000',
                            boxShadow:
                                '0rem 0.08rem 0.16rem 0 #ffbc75, 0 0.65rem 1.3rem 0 #ff834a, inset 0 -5.5rem 3.8rem -4.2rem #f50, inset 0 -5.6rem 8rem 0.57rem #321500',
                        }}
                    />
                    {/* Deep cobalt blue inner atmosphere */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            boxShadow:
                                'inset 0 7.1rem 7.2rem -2.4rem #012fff, inset 0 18.8rem 14.2rem -4.1rem #021777',
                        }}
                    />
                    {/* Plus-lighter cyan/blue upper rim halo */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            mixBlendMode: 'plus-lighter',
                            backgroundColor: 'transparent',
                            boxShadow:
                                '-0.08rem -0.08rem 0.24rem -2.5rem #75bcff, -0.32rem -0.32rem 1.3rem -3.1rem #4781ff, -0.65rem -0.97rem 3.2rem 0 #0046dd, inset 0 2.6rem 5rem -2.1rem #8dedff',
                        }}
                    />
                    {/* Plus-lighter warm horizon highlight */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            mixBlendMode: 'plus-lighter',
                            backgroundColor: 'transparent',
                            boxShadow: 'inset 0 -2.8rem 2.3rem -2.1rem #ffd1b0',
                        }}
                    />
                </div>

                {/* Interactive Cobe Canvas */}
                <canvas
                    ref={canvasRef}
                    onPointerDown={handlePointerDown}
                    role="img"
                    aria-label="Interactive 3D globe showing Teemane Heavy Haulage headquarters in Bellville South, Cape Town and transport corridors across South Africa and Africa"
                    style={{
                        position: 'relative',
                        zIndex: 2,
                        width: '100%',
                        height: '100%',
                        cursor: 'grab',
                        pointerEvents: 'auto',
                        opacity: 0,
                        transition: 'opacity 1.2s ease',
                        borderRadius: '50%',
                        touchAction: 'none',
                    }}
                />

                {/* Animated Gradient Flying Arcs Overlay Canvas */}
                <canvas
                    ref={arcCanvasRef}
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-5 h-full w-full"
                />

                {/* United Carriers Floating Monospace Labels */}
                <div
                    aria-hidden={!labelsVisible}
                    className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
                    style={{ opacity: labelsVisible ? 1 : 0 }}
                >
                    {markers.map((m) => (
                        <div
                            key={m.id}
                            ref={(el) => {
                                labelRefs.current[m.id] = el;
                            }}
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, calc(-100% - 8px))',
                                pointerEvents: 'none',
                                opacity: 0,
                                transition: 'opacity 0.25s ease, filter 0.25s ease',
                                zIndex: m.isHq ? 30 : 15,
                            }}
                        >
                            <span
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                                    fontSize: m.isHq ? '0.72rem' : '0.62rem',
                                    fontWeight: m.isHq ? 700 : 500,
                                    textTransform: 'uppercase',
                                    color: '#ffffff',
                                    background: m.isHq
                                        ? 'linear-gradient(135deg, rgba(244, 83, 0, 0.92) 0%, rgba(210, 62, 0, 0.82) 100%)'
                                        : 'linear-gradient(135deg, rgba(0, 16, 38, 0.78) 0%, rgba(1, 28, 62, 0.62) 100%)',
                                    border: m.isHq
                                        ? '1px solid rgba(255, 224, 198, 0.7)'
                                        : '1px solid rgba(125, 211, 252, 0.32)',
                                    padding: m.isHq ? '5px 10px' : '3px 8px',
                                    borderRadius: '6px',
                                    letterSpacing: '0.06em',
                                    whiteSpace: 'nowrap',
                                    boxShadow: m.isHq
                                        ? 'inset 0 1px 0 rgba(255, 255, 255, 0.45), 0 0 18px rgba(244, 83, 0, 0.62)'
                                        : 'inset 0 1px 0 rgba(224, 242, 254, 0.24), 0 4px 12px rgba(0, 6, 18, 0.6)',
                                    backdropFilter: 'blur(10px) saturate(155%)',
                                    WebkitBackdropFilter: 'blur(10px) saturate(155%)',
                                }}
                            >
                                <span
                                    style={{
                                        width: 5,
                                        height: 5,
                                        borderRadius: '50%',
                                        backgroundColor: m.isHq ? '#fff' : '#F45300',
                                        boxShadow: '0 0 6px #F45300',
                                    }}
                                />
                                {m.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Foreground Copy — Left Aligned over the Offscreen-Right Globe */}
            <Wrapper className="relative z-20 pointer-events-none">
                <div className="max-w-xl lg:max-w-2xl space-y-6 pointer-events-auto">
                    <div className="emergency-cta-pill inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5">
                        <span className="size-2 rounded-full bg-[#F45300] shadow-[0_0_12px_#F45300]" />
                        <span className="font-mono text-xs uppercase tracking-[0.22em] text-sky-100/90">
                            Continental Reach
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter leading-[1.02] text-white drop-shadow-md">
                        Built For <br />
                        <span className="text-primary">
                            The Long Haul
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-lg drop-shadow">
                        From port terminals and manufacturing plants to remote mines and power stations, our multi-axle convoys and escort teams deliver oversized cargo safely to the toughest destinations on the continent.
                    </p>

                    {/* 3 Distinct Truck & Trailer CAD Line SVG Icons */}
                    <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
                        {/* 1. Gooseneck Lowbed Truck & Trailer */}
                        <div className="group globe-glass-card relative overflow-hidden rounded-xl px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5">
                            <div aria-hidden="true" className="globe-glass-card-flare pointer-events-none absolute inset-0" />
                            <div aria-hidden="true" className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-80" />
                            <div className="relative z-10">
                                <svg
                                    viewBox="0 0 180 54"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-11 text-white/85 group-hover:text-white transition-colors"
                                    aria-label="Gooseneck Lowbed Truck and Trailer"
                                >
                                    {/* Ground datum line */}
                                    <line x1="4" y1="48" x2="176" y2="48" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 3" />
                                    {/* Cab-over Prime Mover */}
                                    <path
                                        d="M14 40V20C14 17.5 15.8 16 18 16H29V29H48V40H14Z"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinejoin="round"
                                    />
                                    {/* Windshield & cab detail */}
                                    <path d="M14 25H23V16" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                                    <line x1="31" y1="14" x2="31" y2="29" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                    {/* Fifth wheel & gooseneck drop */}
                                    <path
                                        d="M42 36H53L62 41H128L133 35H168V40H131L128 43H60L52 38H42"
                                        stroke="#38bdf8"
                                        strokeWidth="1.8"
                                        strokeLinejoin="round"
                                    />
                                    {/* Oversized machinery payload block on lowbed */}
                                    <rect x="68" y="25" width="46" height="16" rx="2" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.4" />
                                    <line x1="78" y1="25" x2="78" y2="41" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />
                                    <line x1="102" y1="25" x2="102" y2="41" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />
                                    {/* Truck & Tri-axle lowbed wheels */}
                                    <circle cx="22" cy="42" r="5" fill="#030c1d" stroke="currentColor" strokeWidth="1.6" />
                                    <circle cx="38" cy="42" r="5" fill="#030c1d" stroke="currentColor" strokeWidth="1.6" />
                                    <circle cx="49" cy="42" r="5" fill="#030c1d" stroke="currentColor" strokeWidth="1.6" />
                                    <circle cx="139" cy="42" r="4.5" fill="#030c1d" stroke="currentColor" strokeWidth="1.6" />
                                    <circle cx="150" cy="42" r="4.5" fill="#030c1d" stroke="currentColor" strokeWidth="1.6" />
                                    <circle cx="161" cy="42" r="4.5" fill="#030c1d" stroke="currentColor" strokeWidth="1.6" />
                                </svg>
                                <div className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-sky-100/70 group-hover:text-white transition-colors">
                                    Gooseneck Lowbed
                                </div>
                            </div>
                        </div>

                        {/* 2. Step-Deck Extendable Flatbed Truck & Trailer */}
                        <div className="group globe-glass-card relative overflow-hidden rounded-xl px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5">
                            <div aria-hidden="true" className="globe-glass-card-flare pointer-events-none absolute inset-0" />
                            <div aria-hidden="true" className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-80" />
                            <div className="relative z-10">
                                <svg
                                    viewBox="0 0 180 54"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-11 text-white/85 group-hover:text-white transition-colors"
                                    aria-label="Step-Deck Extendable Trailer"
                                >
                                    {/* Ground datum line */}
                                    <line x1="4" y1="48" x2="176" y2="48" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 3" />
                                    {/* Heavy Prime Mover with headache rack */}
                                    <path
                                        d="M12 40V22L16 15H27V29H46V40H12Z"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M13 23H22V15" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                                    <line x1="29" y1="13" x2="29" y2="29" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                    {/* Step-deck upper & lower beam */}
                                    <path
                                        d="M40 31H66V36H168V39H63V34H40V31Z"
                                        stroke="#38bdf8"
                                        strokeWidth="1.7"
                                        strokeLinejoin="round"
                                    />
                                    {/* Long structural steel truss/beam cargo */}
                                    <rect x="54" y="20" width="108" height="10" rx="1.5" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.4" />
                                    <path d="M58 30L72 20L86 30L100 20L114 30L128 20L142 30L156 20" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.1" strokeLinejoin="round" />
                                    {/* Wheels (6x4 tractor + 4-axle step-deck) */}
                                    <circle cx="20" cy="42" r="5" fill="#030c1d" stroke="currentColor" strokeWidth="1.6" />
                                    <circle cx="35" cy="42" r="5" fill="#030c1d" stroke="currentColor" strokeWidth="1.6" />
                                    <circle cx="46" cy="42" r="5" fill="#030c1d" stroke="currentColor" strokeWidth="1.6" />
                                    <circle cx="126" cy="42" r="4.5" fill="#030c1d" stroke="currentColor" strokeWidth="1.6" />
                                    <circle cx="137" cy="42" r="4.5" fill="#030c1d" stroke="currentColor" strokeWidth="1.6" />
                                    <circle cx="148" cy="42" r="4.5" fill="#030c1d" stroke="currentColor" strokeWidth="1.6" />
                                    <circle cx="159" cy="42" r="4.5" fill="#030c1d" stroke="currentColor" strokeWidth="1.6" />
                                </svg>
                                <div className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-sky-100/70 group-hover:text-white transition-colors">
                                    Step-Deck Flatbed
                                </div>
                            </div>
                        </div>

                        {/* 3. Multi-Axle Modular Hydraulic Platform Trailer */}
                        <div className="group globe-glass-card relative overflow-hidden rounded-xl px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5">
                            <div aria-hidden="true" className="globe-glass-card-flare pointer-events-none absolute inset-0" />
                            <div aria-hidden="true" className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-80" />
                            <div className="relative z-10">
                                <svg
                                    viewBox="0 0 180 54"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-11 text-white/85 group-hover:text-white transition-colors"
                                    aria-label="Multi-Axle Modular Hydraulic Trailer"
                                >
                                    {/* Ground datum line */}
                                    <line x1="4" y1="48" x2="176" y2="48" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 3" />
                                    {/* 8x4 Ballasted Prime Mover */}
                                    <path
                                        d="M10 40V19C10 16.8 11.6 15 14 15H25V28H54V40H10Z"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M10 24H19V15" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                                    {/* Ballast box behind cab */}
                                    <rect x="27" y="19" width="22" height="9" rx="1" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.3" />
                                    {/* Drawbar & Hydraulic Modular Platform Deck */}
                                    <line x1="54" y1="36" x2="68" y2="36" stroke="#F45300" strokeWidth="1.8" />
                                    <rect x="68" y="33" width="102" height="4.5" rx="1" stroke="#38bdf8" strokeWidth="1.7" />
                                    {/* Heavy Industrial Vessel / Transformer Cargo */}
                                    <path
                                        d="M78 33V17C78 15.3 79.3 14 81 14H154C155.7 14 157 15.3 157 17V33"
                                        stroke="currentColor"
                                        strokeOpacity="0.7"
                                        strokeWidth="1.5"
                                    />
                                    <line x1="96" y1="14" x2="96" y2="33" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" />
                                    <line x1="118" y1="14" x2="118" y2="33" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" />
                                    <line x1="140" y1="14" x2="140" y2="33" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" />
                                    {/* 4 Tractor axles + 6 Modular hydraulic trailer axles */}
                                    <circle cx="17" cy="42" r="4.5" fill="#030c1d" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="27" cy="42" r="4.5" fill="#030c1d" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="39" cy="42" r="4.5" fill="#030c1d" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="49" cy="42" r="4.5" fill="#030c1d" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="77" cy="42.5" r="3.8" fill="#030c1d" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="93" cy="42.5" r="3.8" fill="#030c1d" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="109" cy="42.5" r="3.8" fill="#030c1d" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="125" cy="42.5" r="3.8" fill="#030c1d" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="141" cy="42.5" r="3.8" fill="#030c1d" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="157" cy="42.5" r="3.8" fill="#030c1d" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                                <div className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-sky-100/70 group-hover:text-white transition-colors">
                                    Multi-Axle Modular
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>

            {/* United Carriers Interactive Controls — Anchored in Visible Bottom-Right Corner */}
            <div className="absolute right-5 bottom-6 z-30 flex flex-col items-center gap-2.5">
                <label
                    title="Globe rotation speed"
                    className="globe-hud-glass grid items-center justify-items-center gap-1.5 rounded-full px-2 py-2.5 text-[0.68rem] text-white"
                    style={{
                        width: '2.4rem',
                        height: '9.5rem',
                        gridTemplateRows: 'auto minmax(0, 1fr) auto',
                    }}
                >
                    <span aria-hidden="true" className="text-sm leading-none text-sky-200/85">
                        ↻
                    </span>
                    <input
                        type="range"
                        min={0}
                        max={5}
                        step={0.1}
                        value={speedMultiplier}
                        onChange={(e) => handleSpeedChange(Number(e.target.value))}
                        aria-label="Globe rotation speed"
                        className="h-full w-4 cursor-pointer"
                        style={{
                            writingMode: 'vertical-lr',
                            direction: 'rtl',
                            accentColor: '#F45300',
                        }}
                    />
                    <span className="font-mono text-[0.62rem] leading-none text-sky-100/90">
                        {speedMultiplier.toFixed(1)}×
                    </span>
                </label>

                <button
                    type="button"
                    onClick={() => setLabelsVisible((v) => !v)}
                    aria-label="Toggle city labels"
                    title="Toggle city labels"
                    className="globe-hud-glass globe-hud-glass-btn flex size-9.5 items-center justify-center rounded-full text-sky-100 transition-all duration-200 cursor-pointer"
                >
                    {labelsVisible ? <Eye className="size-4" /> : <EyeOff className="size-4 text-sky-200/55" />}
                </button>
            </div>
        </section>
    );
}




