import { u as Wrapper } from "./app-layout-4wljOYs7.js";
import { t as FloatingStatCard } from "./floating-stat-card-LhZieMZg.js";
import { t as SectionHeading } from "./section-heading-8zOEVGTQ.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
	if (!mounted) return /* @__PURE__ */ jsxs("section", {
		className: "capabilities-glass-stage relative z-10 w-full overflow-x-clip border-t border-sky-500/20 pt-10 pb-20 sm:pt-14 sm:pb-24",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": "true",
			className: "capabilities-stage-dots pointer-events-none absolute inset-0"
		}), /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsx("div", {
				className: "bento-glass-card flex h-[360px] w-full items-center justify-center overflow-hidden rounded-3xl sm:h-[440px] lg:h-[520px]",
				children: /* @__PURE__ */ jsx("span", {
					className: "animate-pulse font-mono text-sm font-bold uppercase tracking-[0.22em] text-muted-foreground",
					children: "Loading Map..."
				})
			})
		})]
	});
	const customMarkerIcon = L.divIcon({
		className: "custom-marker",
		html: `<div style="background-color: var(--primary); width: 28px; height: 28px; border-radius: 50%; border: 4px solid var(--background); box-shadow: 0 0 20px var(--primary); display: flex; align-items: center; justify-content: center; position: relative; top: -14px; left: -14px;"><div style="background-color: var(--background); width: 8px; height: 8px; border-radius: 50%;"></div></div>`,
		iconSize: [0, 0]
	});
	return /* @__PURE__ */ jsxs("section", {
		className: "capabilities-glass-stage relative z-10 w-full overflow-x-clip border-t border-sky-500/20 pt-10 pb-20 sm:pt-14 sm:pb-24",
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "capabilities-stage-dots pointer-events-none absolute inset-0"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px opacity-55"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-45"
			}),
			/* @__PURE__ */ jsx(Wrapper, {
				className: "relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-10",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex w-full flex-col justify-between gap-8 lg:flex-row lg:items-end",
						children: [/* @__PURE__ */ jsx(SectionHeading, {
							label: "Headquarters",
							title: /* @__PURE__ */ jsxs(Fragment, { children: [
								"Find Us",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "bg-linear-to-r from-primary to-sky-500 bg-clip-text text-transparent",
									children: "On The Map"
								})
							] }),
							align: "left",
							children: "Centrally located to rapidly deploy abnormal transport convoys, escort vehicles, and heavy haulage equipment across South Africa and the SADC region."
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "bento-glass-card relative flex items-center gap-3.5 overflow-hidden rounded-2xl px-4 py-3 transition-all duration-300",
								children: [
									/* @__PURE__ */ jsx("div", {
										"aria-hidden": "true",
										className: "bento-glass-card-flare pointer-events-none absolute inset-0"
									}),
									/* @__PURE__ */ jsx("div", {
										"aria-hidden": "true",
										className: "nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-75"
									}),
									/* @__PURE__ */ jsx("div", {
										className: "bento-glass-icon relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl text-primary dark:text-sky-300",
										children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "relative z-10",
										children: [/* @__PURE__ */ jsx("span", {
											className: "block text-xs font-black uppercase tracking-wider text-foreground",
											children: "Head Office"
										}), /* @__PURE__ */ jsx("span", {
											className: "block text-xs leading-snug text-muted-foreground sm:text-sm",
											children: "6 Van Eck St, Bellville South, Cape Town, 7530"
										})]
									})
								]
							}), /* @__PURE__ */ jsxs("a", {
								href: "https://maps.google.com/?q=-33.926637890850294,18.645063943495657",
								target: "_blank",
								rel: "noreferrer",
								className: "emergency-cta-glass group relative inline-flex h-12 shrink-0 items-center justify-center gap-2.5 overflow-hidden rounded-xl px-6 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5",
								children: [
									/* @__PURE__ */ jsx("span", {
										"aria-hidden": "true",
										className: "emergency-cta-glass-flare pointer-events-none absolute inset-0"
									}),
									/* @__PURE__ */ jsx(Navigation, { className: "relative z-10 h-4 w-4 text-sky-200 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }),
									/* @__PURE__ */ jsx("span", {
										className: "relative z-10",
										children: "Get Directions"
									})
								]
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative w-full pb-6 lg:pb-0",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "bento-glass-card relative rounded-3xl p-1.5 sm:p-2",
								children: [/* @__PURE__ */ jsx("div", {
									"aria-hidden": "true",
									className: "pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/85 to-transparent dark:via-sky-200/60"
								}), /* @__PURE__ */ jsxs("div", {
									className: "group relative h-[340px] w-full overflow-hidden rounded-2xl border border-sky-400/25 shadow-inner grayscale-[0.15] transition-all duration-500 hover:grayscale-0 sm:h-[440px] lg:h-[520px]",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "globe-hud-glass pointer-events-none absolute top-3.5 right-3.5 z-[400] hidden items-center gap-2 rounded-full px-3.5 py-1.5 sm:inline-flex",
										children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" }), /* @__PURE__ */ jsx("span", {
											className: "font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-sky-100/90",
											children: "33.9266° S · 18.6451° E"
										})]
									}), /* @__PURE__ */ jsxs(MapContainer, {
										center: position,
										zoom: 16,
										scrollWheelZoom: false,
										className: "relative z-0 h-full w-full",
										style: { zIndex: 0 },
										children: [/* @__PURE__ */ jsx(TileLayer, {
											attribution: "© <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>",
											url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
										}), /* @__PURE__ */ jsx(Marker, {
											position,
											icon: customMarkerIcon,
											children: /* @__PURE__ */ jsx(Popup, { children: /* @__PURE__ */ jsxs("div", {
												className: "text-center font-sans leading-relaxed",
												children: [/* @__PURE__ */ jsx("strong", {
													className: "mb-1 block text-base font-bold tracking-tight text-primary",
													children: "Teemane Heavy Haulage"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-sm text-slate-700",
													children: "6 Van Eck St, Bellville South"
												})]
											}) })
										})]
									})]
								})]
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
                        ` })
						]
					})]
				})
			})
		]
	});
}
export { Map as default };

//# sourceMappingURL=map-eMLUQ8sU.js.map