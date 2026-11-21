import {useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
// @ts-ignore
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Wrapper from './ui/misc/wrapper';
import {MapPin, Navigation as NavIcon} from 'lucide-react';
import {FloatingStatCard} from '@/components/ui/misc/floating-stat-card';
import SectionHeading from '@/components/ui/misc/section-heading';

export default function Map() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // 6 Van Eck St, Bellville South, Cape Town, 7530
    const position: [number, number] = [-33.926637890850294, 18.645063943495657];

    if (!mounted) {
        return (
            <section className="capabilities-glass-stage relative z-10 w-full overflow-x-clip border-t border-sky-500/20 pt-10 pb-20 sm:pt-14 sm:pb-24">
                <div aria-hidden="true" className="capabilities-stage-dots pointer-events-none absolute inset-0" />
                <Wrapper className="relative z-10">
                    <div className="bento-glass-card flex h-[360px] w-full items-center justify-center overflow-hidden rounded-3xl sm:h-[440px] lg:h-[520px]">
                        <span className="animate-pulse font-mono text-sm font-bold uppercase tracking-[0.22em] text-muted-foreground">
                            Loading Map...
                        </span>
                    </div>
                </Wrapper>
            </section>
        );
    }

    const customMarkerIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: var(--primary); width: 28px; height: 28px; border-radius: 50%; border: 4px solid var(--background); box-shadow: 0 0 20px var(--primary); display: flex; align-items: center; justify-content: center; position: relative; top: -14px; left: -14px;"><div style="background-color: var(--background); width: 8px; height: 8px; border-radius: 50%;"></div></div>`,
        iconSize: [0, 0],
    });

    return (
        <section className="capabilities-glass-stage relative z-10 w-full overflow-x-clip border-t border-sky-500/20 pt-10 pb-20 sm:pt-14 sm:pb-24">
            {/* Ambient CAD Dot Matrix for Glass Refraction */}
            <div aria-hidden="true" className="capabilities-stage-dots pointer-events-none absolute inset-0" />
            <div
                aria-hidden="true"
                className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px opacity-55"
            />
            <div
                aria-hidden="true"
                className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-45"
            />

            <Wrapper className="relative z-10">
                <div className="flex flex-col gap-10">
                    {/* Header Text Section */}
                    <div className="flex w-full flex-col justify-between gap-8 lg:flex-row lg:items-end">
                        <SectionHeading
                            label="Headquarters"
                            title={
                                <>
                                    Find Us{' '}
                                    <span className="bg-linear-to-r from-primary to-sky-500 bg-clip-text text-transparent">
                                        On The Map
                                    </span>
                                </>
                            }
                            align="left"
                        >
                            Centrally located to rapidly deploy abnormal transport convoys, escort vehicles, and heavy haulage equipment across South Africa and the SADC region.
                        </SectionHeading>

                        <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center">
                            <div className="bento-glass-card relative flex items-center gap-3.5 overflow-hidden rounded-2xl px-4 py-3 transition-all duration-300">
                                <div
                                    aria-hidden="true"
                                    className="bento-glass-card-flare pointer-events-none absolute inset-0"
                                />
                                <div
                                    aria-hidden="true"
                                    className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-75"
                                />
                                <div className="bento-glass-icon relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl text-primary dark:text-sky-300">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div className="relative z-10">
                                    <span className="block text-xs font-black uppercase tracking-wider text-foreground">
                                        Head Office
                                    </span>
                                    <span className="block text-xs leading-snug text-muted-foreground sm:text-sm">
                                        6 Van Eck St, Bellville South, Cape Town, 7530
                                    </span>
                                </div>
                            </div>

                            <a
                                href="https://maps.google.com/?q=-33.926637890850294,18.645063943495657"
                                target="_blank"
                                rel="noreferrer"
                                className="emergency-cta-glass group relative inline-flex h-12 shrink-0 items-center justify-center gap-2.5 overflow-hidden rounded-xl px-6 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <span
                                    aria-hidden="true"
                                    className="emergency-cta-glass-flare pointer-events-none absolute inset-0"
                                />
                                <NavIcon className="relative z-10 h-4 w-4 text-sky-200 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                <span className="relative z-10">Get Directions</span>
                            </a>
                        </div>
                    </div>

                    {/* Map Section — Frosted Glass Display Bezel */}
                    <div className="relative w-full pb-6 lg:pb-0">
                        <div className="bento-glass-card relative rounded-3xl p-1.5 sm:p-2">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/85 to-transparent dark:via-sky-200/60"
                            />
                            <div className="group relative h-[340px] w-full overflow-hidden rounded-2xl border border-sky-400/25 shadow-inner grayscale-[0.15] transition-all duration-500 hover:grayscale-0 sm:h-[440px] lg:h-[520px]">
                                {/* Floating Top-Right GPS Coordinates HUD Pill */}
                                <div className="globe-hud-glass pointer-events-none absolute top-3.5 right-3.5 z-[400] hidden items-center gap-2 rounded-full px-3.5 py-1.5 sm:inline-flex">
                                    <span className="size-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                                    <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-sky-100/90">
                                        33.9266° S · 18.6451° E
                                    </span>
                                </div>

                                <MapContainer
                                    center={position}
                                    zoom={16}
                                    scrollWheelZoom={false}
                                    className="relative z-0 h-full w-full"
                                    style={{ zIndex: 0 }}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={position} icon={customMarkerIcon}>
                                        <Popup>
                                            <div className="text-center font-sans leading-relaxed">
                                                <strong className="mb-1 block text-base font-bold tracking-tight text-primary">
                                                    Teemane Heavy Haulage
                                                </strong>
                                                <span className="text-sm text-slate-700">6 Van Eck St, Bellville South</span>
                                            </div>
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>

                        <FloatingStatCard
                            value="THH"
                            label="Headquarters Cape Town"
                            position="bottom-right"
                            className="pointer-events-none"
                        />

                        <style>{`
                            html.dark .leaflet-tile-pane {
                                filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
                            }
                            .leaflet-control-zoom {
                                border: 1px solid rgba(125, 211, 252, 0.35) !important;
                                border-radius: 0.75rem !important;
                                overflow: hidden;
                                box-shadow: 0 10px 24px -8px rgba(0, 12, 29, 0.45) !important;
                                backdrop-filter: blur(14px) saturate(160%);
                                -webkit-backdrop-filter: blur(14px) saturate(160%);
                            }
                            .leaflet-control-zoom a {
                                background: rgba(0, 18, 44, 0.78) !important;
                                color: #e0f2fe !important;
                                border-bottom-color: rgba(125, 211, 252, 0.22) !important;
                            }
                            .leaflet-control-zoom a:hover {
                                background: rgba(0, 64, 134, 0.9) !important;
                                color: #ffffff !important;
                            }
                            .leaflet-control-attribution {
                                background: rgba(0, 14, 34, 0.65) !important;
                                color: rgba(224, 242, 254, 0.78) !important;
                                backdrop-filter: blur(10px);
                                border-top-left-radius: 0.5rem;
                            }
                            .leaflet-control-attribution a {
                                color: #7dd3fc !important;
                            }
                        `}</style>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
