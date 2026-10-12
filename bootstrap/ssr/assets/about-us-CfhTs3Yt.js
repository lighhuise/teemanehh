import { c as Wrapper, t as AppLayout } from "./app-layout-DVyLTKad.js";
import { t as PageHeader } from "./page-header-D3uo1gMx.js";
import { t as FloatingStatCard } from "./floating-stat-card-CYBqVR3y.js";
import { n as heavy_haulage_02_default, t as heavy_haulage_01_default } from "./heavy-haulage-01-CdrHGCfr.js";
import { t as SectionHeading } from "./section-heading-DY1hb5d1.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Building2, ShieldCheck, Target, Truck } from "lucide-react";
//#region resources/js/components/sections/about-manifesto.tsx
function AboutManifesto() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-20 md:py-32 relative overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" }), /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl mx-auto text-center space-y-6 relative z-10",
			children: [/* @__PURE__ */ jsxs("h2", {
				className: "text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-foreground leading-[1.1]",
				children: [
					"Moving the impossible ",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("span", {
						className: "text-transparent bg-clip-text bg-linear-to-r from-primary to-sky-500 pr-1 pb-1",
						children: "across borders."
					})
				]
			}), /* @__PURE__ */ jsx("p", {
				className: "text-xl text-muted-foreground leading-relaxed",
				children: "Teemane Heavy Haulage is not just a transport company we are specialised logistics engineers. From massive mining infrastructure to sensitive industrial components, we plan, route, and execute the movement of Africa's most challenging abnormal loads."
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-16 md:mt-24 relative z-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-100 md:h-150 group",
				children: [/* @__PURE__ */ jsx("img", {
					src: heavy_haulage_02_default,
					alt: "Heavy Haulage Operation",
					className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent mix-blend-multiply" })]
			}), /* @__PURE__ */ jsx(FloatingStatCard, {
				value: "250T+",
				label: "Max Payload Capacity",
				position: "bottom-left",
				delay: .5
			})]
		})] })]
	});
}
//#endregion
//#region resources/js/components/sections/about-capabilities.tsx
function AboutCapabilities() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-20 md:py-32 bg-muted/40 border-y border-border",
		children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsx(SectionHeading, {
			title: "Our Core Capabilities",
			label: "Why we lead the sector",
			align: "center"
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-20",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2 bg-background/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-border shadow-xl hover:shadow-2xl transition-all group",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "w-16 h-16 bg-linear-to-br from-primary/20 to-primary/5 text-primary flex items-center justify-center rounded-xl mb-8 group-hover:-translate-y-2 transition-transform shadow-sm",
							children: /* @__PURE__ */ jsx(Truck, { className: "w-8 h-8" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-3xl font-black uppercase tracking-tight mb-4",
							children: "State-of-the-Art Fleet"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground text-lg leading-relaxed max-w-xl",
							children: "Our modern fleet includes multi-axle modular trailers, heavy-duty prime movers, and specialised lowbeds explicitly designed and configured to handle staggering payload capacities over challenging terrains."
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "bg-linear-to-br from-primary to-primary/80 text-primary-foreground rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-primary/40 transition-all group relative overflow-hidden flex flex-col justify-end min-h-[350px]",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10 bg-[repeating-linear-gradient(-45deg,transparent,transparent_8px,#000_8px,#000_16px)]" }), /* @__PURE__ */ jsxs("div", {
						className: "relative z-10 mt-auto",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-16 h-16 bg-white/20 backdrop-blur-md flex items-center justify-center rounded-xl mb-6 group-hover:-translate-y-2 transition-transform border border-white/30",
								children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-8 h-8 text-white" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-white drop-shadow-md",
								children: "Zero Incidents"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-white/90 leading-relaxed font-medium",
								children: "Stringent protocols and meticulous route clearing guarantee the safe delivery of high-stakes transports."
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "bg-background/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-border shadow-xl hover:shadow-2xl transition-all group",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "w-16 h-16 bg-linear-to-br from-primary/20 to-primary/5 text-primary flex items-center justify-center rounded-xl mb-8 group-hover:-translate-y-2 transition-transform shadow-sm",
							children: /* @__PURE__ */ jsx(Target, { className: "w-8 h-8" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-2xl font-black uppercase tracking-tight mb-4",
							children: "Precision Planning"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed",
							children: "Every abnormal route is surveyed, simulated, and heavily escorted by our expert logistics personnel."
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2 bg-background/80 backdrop-blur-xl rounded-3xl p-8 border border-border shadow-xl hover:shadow-2xl transition-all flex flex-col md:flex-row gap-8 items-center group",
					children: [/* @__PURE__ */ jsx("div", {
						className: "w-full md:w-2/5 aspect-4/3 md:aspect-square rounded-2xl overflow-hidden border border-white/5",
						children: /* @__PURE__ */ jsx("img", {
							src: heavy_haulage_01_default,
							alt: "Turnkey Solutions",
							className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 space-y-4 md:pl-4",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-16 h-16 bg-linear-to-br from-primary/20 to-primary/5 text-primary flex items-center justify-center rounded-xl mb-4 group-hover:-translate-y-2 transition-transform shadow-sm",
								children: /* @__PURE__ */ jsx(Building2, { className: "w-8 h-8" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-3xl font-black uppercase tracking-tight",
								children: "Turnkey Solutions"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground text-lg leading-relaxed",
								children: "Entrusted by South Africa's most established industrial, mining, and construction companies as their sole provider for complex logistical operations and heavy hauling."
							})
						]
					})]
				})
			]
		})] })
	});
}
//#endregion
//#region resources/js/pages/about-us.tsx
function AboutUs() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHeader, {
			title: /* @__PURE__ */ jsxs(Fragment, { children: ["Redefining What's Possible In ", /* @__PURE__ */ jsx("span", {
				className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 drop-shadow-sm pr-1 pb-1",
				children: "Heavy Haulage"
			})] }),
			description: "Established in 2012, Teemane Heavy Haulage prides itself on countless victories across South Africa's most demanding transport routes, delivering complex, oversized machinery with absolute precision.",
			image: heavy_haulage_01_default
		}),
		/* @__PURE__ */ jsx(AboutManifesto, {}),
		/* @__PURE__ */ jsx(AboutCapabilities, {})
	] });
}
AboutUs.layout = (page) => /* @__PURE__ */ jsx(AppLayout, {
	title: "About Us",
	children: page
});
//#endregion
export { AboutUs as default };

//# sourceMappingURL=about-us-CfhTs3Yt.js.map