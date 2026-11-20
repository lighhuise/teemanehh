import { l as buttonVariants, u as Wrapper } from "./app-layout-DCuwPKZC.js";
import { t as FloatingStatCard } from "./floating-stat-card-CZ1lS9UY.js";
import { t as SectionHeading } from "./section-heading-CT93tXK3.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { MapPin, Navigation } from "lucide-react";
// resources/js/components/map.tsx
function Map() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	const position = [-33.926637890850294, 18.645063943495657];
	if (!mounted) return /* @__PURE__ */ jsx("section", {
		className: "bg-background relative z-10 w-full pb-20 pt-8",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx("div", {
			className: "w-full h-[360px] sm:h-[440px] lg:h-[520px] rounded-2xl overflow-hidden border border-border bg-muted flex items-center justify-center",
			children: /* @__PURE__ */ jsx("span", {
				className: "text-muted-foreground animate-pulse text-sm font-bold tracking-widest uppercase",
				children: "Loading Map..."
			})
		}) })
	});
	const customMarkerIcon = L.divIcon({
		className: "custom-marker",
		html: `<div style="background-color: var(--primary); width: 28px; height: 28px; border-radius: 50%; border: 4px solid var(--background); box-shadow: 0 0 20px var(--primary); display: flex; align-items: center; justify-content: center; position: relative; top: -14px; left: -14px;"><div style="background-color: var(--background); width: 8px; height: 8px; border-radius: 50%;"></div></div>`,
		iconSize: [0, 0]
	});
	return /* @__PURE__ */ jsx("section", {
		className: "overflow-x-clip bg-muted border-t-2 boder-primary relative z-10 w-full pb-20 sm:pb-24 pt-6 sm:pt-10",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					label: "Headquarters",
					title: "Find Us On The Map",
					align: "left",
					children: "Centrally located to rapidly deploy abnormal transport convoys, escort vehicles, and heavy haulage equipment across South Africa and the SADC region."
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col sm:flex-row gap-5 sm:items-center shrink-0",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3.5 rounded-xl bg-card border border-border px-4 py-3 shadow-xs",
						children: [/* @__PURE__ */ jsx("div", {
							className: "shrink-0 size-10 bg-primary/10 text-primary flex items-center justify-center rounded-lg",
							children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "block text-xs font-black uppercase tracking-wider text-foreground",
							children: "Head Office"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground text-xs sm:text-sm leading-snug block",
							children: "6 Van Eck St, Bellville South, Cape Town, 7530"
						})] })]
					}), /* @__PURE__ */ jsxs("a", {
						href: "https://maps.google.com/?q=-33.926637890850294,18.645063943495657",
						target: "_blank",
						rel: "noreferrer",
						className: buttonVariants({
							size: "xl",
							className: "shrink-0"
						}),
						children: [/* @__PURE__ */ jsx(Navigation, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Get Directions" })]
					})]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative w-full pb-6 lg:pb-0",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "relative w-full h-[340px] sm:h-[440px] lg:h-[520px] rounded-2xl overflow-hidden border border-border shadow-xl group grayscale-[0.15] hover:grayscale-0 transition-all duration-500",
						children: /* @__PURE__ */ jsxs(MapContainer, {
							center: position,
							zoom: 16,
							scrollWheelZoom: false,
							className: "w-full h-full relative z-0",
							style: { zIndex: 0 },
							children: [/* @__PURE__ */ jsx(TileLayer, {
								attribution: "© <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>",
								url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							}), /* @__PURE__ */ jsx(Marker, {
								position,
								icon: customMarkerIcon,
								children: /* @__PURE__ */ jsx(Popup, { children: /* @__PURE__ */ jsxs("div", {
									className: "font-sans leading-relaxed text-center",
									children: [/* @__PURE__ */ jsx("strong", {
										className: "text-base text-primary font-bold tracking-tight block mb-1",
										children: "Teemane Heavy Haulage"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-sm text-slate-700",
										children: "6 Van Eck St, Bellville South"
									})]
								}) })
							})]
						})
					}),
					/* @__PURE__ */ jsx(FloatingStatCard, {
						value: "THH",
						label: "Headquarters Cape Town",
						position: "bottom-right",
						className: "pointer-events-none"
					}),
					/* @__PURE__ */ jsx("style", { children: `
                            html.dark .leaflet-tile-pane {
                                filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
                            }
                        ` })
				]
			})]
		}) })
	});
}
export { Map as default };

//# sourceMappingURL=map-BNYngfn7.js.map