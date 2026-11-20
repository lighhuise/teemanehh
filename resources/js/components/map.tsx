import {useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
// @ts-ignore
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Wrapper from './ui/misc/wrapper';
import {MapPin, Navigation as NavIcon} from 'lucide-react';
import {FloatingStatCard} from '@/components/ui/misc/floating-stat-card';
import SectionHeading from '@/components/ui/misc/section-heading';
import {buttonVariants} from '@/components/ui/button';

export default function Map() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // 6 Van Eck St, Bellville South, Cape Town, 7530
    const position: [number, number] = [-33.926637890850294, 18.645063943495657];

    if (!mounted) {
        return (
            <section className="bg-background relative z-10 w-full pb-20 pt-8">
                <Wrapper>
                    <div className="w-full h-[360px] sm:h-[440px] lg:h-[520px] rounded-2xl overflow-hidden border border-border bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground animate-pulse text-sm font-bold tracking-widest uppercase">
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
        <section className="overflow-x-clip bg-muted border-t-2 boder-primary relative z-10 w-full pb-20 sm:pb-24 pt-6 sm:pt-10">
            <Wrapper>
                <div className="flex flex-col gap-10">
                    {/* Header Text Section */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full">
                        <SectionHeading
                            label="Headquarters"
                            title="Find Us On The Map"
                            align="left"
                        >
                            Centrally located to rapidly deploy abnormal transport convoys, escort vehicles, and heavy haulage equipment across South Africa and the SADC region.
                        </SectionHeading>

                        <div className="flex flex-col sm:flex-row gap-5 sm:items-center shrink-0">
                            <div className="flex items-center gap-3.5 rounded-xl bg-card border border-border px-4 py-3 shadow-xs">
                                <div className="shrink-0 size-10 bg-primary/10 text-primary flex items-center justify-center rounded-lg">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-xs font-black uppercase tracking-wider text-foreground">
                                        Head Office
                                    </span>
                                    <span className="text-muted-foreground text-xs sm:text-sm leading-snug block">
                                        6 Van Eck St, Bellville South, Cape Town, 7530
                                    </span>
                                </div>
                            </div>
                            <a
                                href="https://maps.google.com/?q=-33.926637890850294,18.645063943495657"
                                target="_blank"
                                rel="noreferrer"
                                className={buttonVariants({ size: 'xl', className: 'shrink-0' })}
                            >
                                <NavIcon className="w-4 h-4" />
                                <span>Get Directions</span>
                            </a>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="relative w-full pb-6 lg:pb-0">
                        <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[520px] rounded-2xl overflow-hidden border border-border shadow-xl group grayscale-[0.15] hover:grayscale-0 transition-all duration-500">
                            <MapContainer
                                center={position}
                                zoom={16}
                                scrollWheelZoom={false}
                                className="w-full h-full relative z-0"
                                style={{ zIndex: 0 }}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position} icon={customMarkerIcon}>
                                    <Popup>
                                        <div className="font-sans leading-relaxed text-center">
                                            <strong className="text-base text-primary font-bold tracking-tight block mb-1">
                                                Teemane Heavy Haulage
                                            </strong>
                                            <span className="text-sm text-slate-700">6 Van Eck St, Bellville South</span>
                                        </div>
                                    </Popup>
                                </Marker>
                            </MapContainer>
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
                        `}</style>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
