import { t as AppLayout, u as Wrapper } from "./app-layout-DCuwPKZC.js";
import { t as PageHeader } from "./page-header-B50LwUXx.js";
import { t as FloatingStatCard } from "./floating-stat-card-CZ1lS9UY.js";
import { t as SectionHeading } from "./section-heading-CT93tXK3.js";
import { n as responsiveImages, t as ResponsiveImage } from "./responsive-image-CxkYlq3p.js";
import { t as Divider1 } from "./divider-1-bcU1KOwR.js";
import { t as ScrollDivider } from "./scroll-divider-CjH_P-yb.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Building2, ShieldCheck, Target, Truck } from "lucide-react";
// resources/js/components/sections/about-manifesto.tsx
function AboutManifesto() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-16 sm:py-24 lg:py-28 relative overflow-hidden bg-background",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0 pointer-events-none overflow-hidden",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-primary/5 blur-[120px] rounded-full" }), /* @__PURE__ */ jsxs("div", {
				className: "absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] sm:w-[700px] sm:h-[700px] md:w-[850px] md:h-[850px] opacity-20 dark:opacity-15 pointer-events-none",
				children: [/* @__PURE__ */ jsxs("svg", {
					className: "w-full h-full text-primary animate-[spin_60s_linear_infinite] motion-reduce:animate-none",
					viewBox: "0 0 600 600",
					fill: "none",
					stroke: "currentColor",
					children: [
						/* @__PURE__ */ jsx("circle", {
							cx: "300",
							cy: "300",
							r: "280",
							strokeWidth: "1",
							strokeDasharray: "4 8"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "300",
							cy: "300",
							r: "240",
							strokeWidth: "1.5"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "300",
							cy: "300",
							r: "200",
							strokeWidth: "0.75",
							strokeDasharray: "1 5"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "300",
							cy: "300",
							r: "140",
							strokeWidth: "1",
							strokeDasharray: "12 12"
						}),
						/* @__PURE__ */ jsx("line", {
							x1: "300",
							y1: "20",
							x2: "300",
							y2: "40",
							strokeWidth: "2"
						}),
						/* @__PURE__ */ jsx("line", {
							x1: "300",
							y1: "560",
							x2: "300",
							y2: "580",
							strokeWidth: "2"
						}),
						/* @__PURE__ */ jsx("line", {
							x1: "20",
							y1: "300",
							x2: "40",
							y2: "300",
							strokeWidth: "2"
						}),
						/* @__PURE__ */ jsx("line", {
							x1: "560",
							y1: "300",
							x2: "580",
							y2: "300",
							strokeWidth: "2"
						}),
						/* @__PURE__ */ jsx("line", {
							x1: "102",
							y1: "102",
							x2: "116",
							y2: "116",
							strokeWidth: "1.5"
						}),
						/* @__PURE__ */ jsx("line", {
							x1: "484",
							y1: "102",
							x2: "498",
							y2: "116",
							strokeWidth: "1.5"
						}),
						/* @__PURE__ */ jsx("line", {
							x1: "102",
							y1: "498",
							x2: "116",
							y2: "484",
							strokeWidth: "1.5"
						}),
						/* @__PURE__ */ jsx("line", {
							x1: "484",
							y1: "498",
							x2: "498",
							y2: "484",
							strokeWidth: "1.5"
						})
					]
				}), /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary/40 animate-ping motion-reduce:animate-none" })]
			})]
		}), /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsx("div", {
			className: "relative z-10",
			children: /* @__PURE__ */ jsx(SectionHeading, {
				label: "Our Mission",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"Moving the impossible ",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("span", {
						className: "text-transparent bg-clip-text bg-linear-to-r from-primary to-sky-500 pr-1",
						children: "across borders."
					})
				] }),
				align: "center",
				children: "Teemane Heavy Haulage is not just a transport company — we are specialised logistics engineers. From massive mining infrastructure to sensitive industrial components, we plan, route, and execute the movement of Africa's most challenging abnormal loads."
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-12 sm:mt-16 lg:mt-20 pb-8 lg:pb-0 relative z-10 max-w-5xl mx-auto",
			children: [/* @__PURE__ */ jsx("div", {
				className: "w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl bg-black relative",
				children: /* @__PURE__ */ jsx("iframe", {
					className: "w-full h-full border-0",
					src: "https://www.youtube-nocookie.com/embed/vtxOjKiEqB4?rel=0&modestbranding=1",
					title: "Teemane Heavy Haulage Fleet & Operations Video",
					loading: "lazy",
					allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
					allowFullScreen: true
				})
			}), /* @__PURE__ */ jsx(FloatingStatCard, {
				value: "250T+",
				label: "Max Payload Capacity",
				position: "bottom-left",
				delay: .5
			})]
		})] })]
	});
}
// resources/js/components/sections/about-capabilities.tsx
function AboutCapabilities() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-16 sm:py-24 lg:py-28 bg-muted/40 border-y border-border",
		children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsx(SectionHeading, {
			title: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Our Core",
				" ",
				/* @__PURE__ */ jsx("span", {
					className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500",
					children: "Capabilities"
				})
			] }),
			label: "Why we lead the sector",
			align: "center",
			children: "Built on modern modular equipment, strict HSE governance, and decades of hands-on heavy transport leadership."
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2 bg-card rounded-2xl p-7 sm:p-10 border border-border shadow-sm hover:shadow-lg hover:border-primary/35 transition-all duration-200 group",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "size-14 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center rounded-xl mb-6",
							children: /* @__PURE__ */ jsx(Truck, { className: "w-7 h-7" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-foreground mb-3",
							children: "State-of-the-Art Fleet"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl",
							children: "Our modern fleet includes multi-axle modular trailers, heavy-duty prime movers, and specialised lowbeds explicitly designed and configured to handle staggering payload capacities over challenging terrains."
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "bg-linear-to-br from-[#000d1e] via-[#011835] to-[#001027] text-white rounded-2xl p-7 sm:p-10 border border-primary/35 shadow-xl relative overflow-hidden flex flex-col justify-end min-h-[280px] md:min-h-[340px]",
					children: [
						/* @__PURE__ */ jsx("div", {
							"aria-hidden": "true",
							className: "absolute inset-0 opacity-10 bg-[repeating-linear-gradient(-45deg,transparent,transparent_8px,#fff_8px,#fff_16px)]"
						}),
						/* @__PURE__ */ jsx("div", {
							"aria-hidden": "true",
							className: "absolute -top-20 -right-20 size-52 rounded-full bg-primary/35 blur-3xl pointer-events-none"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative z-10 mt-auto",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "size-14 bg-sky-500/15 backdrop-blur-md flex items-center justify-center rounded-xl mb-6 border border-sky-400/30 text-sky-400",
									children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-7 h-7" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight mb-3 text-white",
									children: "Zero Incidents"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-slate-300 text-sm sm:text-base leading-relaxed",
									children: "Stringent protocols, certified load supervisors, and meticulous route clearing guarantee the safe delivery of high-stakes transports."
								})
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "bg-card rounded-2xl p-7 sm:p-10 border border-border shadow-sm hover:shadow-lg hover:border-primary/35 transition-all duration-200 group",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "size-14 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center rounded-xl mb-6",
							children: /* @__PURE__ */ jsx(Target, { className: "w-7 h-7" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-2xl font-heading font-black uppercase tracking-tight text-foreground mb-3",
							children: "Precision Planning"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground text-base leading-relaxed",
							children: "Every abnormal route is surveyed, simulated, and heavily escorted by our expert logistics personnel."
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2 bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm hover:shadow-lg hover:border-primary/35 transition-all duration-200 flex flex-col md:flex-row gap-6 sm:gap-8 items-center group",
					children: [/* @__PURE__ */ jsx("div", {
						className: "w-full md:w-2/5 aspect-4/3 sm:aspect-3/2 md:aspect-square rounded-xl overflow-hidden border border-border/60 bg-muted",
						children: /* @__PURE__ */ jsx(ResponsiveImage, {
							source: responsiveImages.heavyHaulage01,
							sizes: "(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) 36vw, 24vw",
							alt: "Turnkey heavy haulage convoy staging on site",
							className: "w-full h-full object-cover object-[52%_52%] group-hover:scale-105 transition-transform duration-700 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 space-y-3 sm:space-y-4 md:pl-2",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "size-14 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center rounded-xl",
								children: /* @__PURE__ */ jsx(Building2, { className: "w-7 h-7" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-foreground",
								children: "Turnkey Solutions"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground text-base sm:text-lg leading-relaxed",
								children: "Entrusted by South Africa's most established industrial, mining, and construction companies as their sole provider for complex logistical operations and heavy hauling."
							})
						]
					})]
				})
			]
		})] })
	});
}
// resources/js/pages/about-us.tsx
function AboutUs() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHeader, {
			label: "About Teemane",
			className: "border-transparent",
			title: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Redefining What's Possible In",
				" ",
				/* @__PURE__ */ jsx("span", {
					className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1",
					children: "Heavy Haulage"
				})
			] }),
			description: "Established in 2012, Teemane Heavy Haulage prides itself on countless victories across South Africa's most demanding transport routes, delivering complex, oversized machinery with absolute precision.",
			image: responsiveImages.aboutHeader,
			imageAlt: "Teemane Heavy Haulage Volvo FH16 transporting an industrial power transformer",
			imageClassName: "object-[46%_55%]"
		}),
		/* @__PURE__ */ jsx(ScrollDivider, { texts: [`Redefining What's Possible In Heavy Haulage`, `Redefining What's Possible In Heavy Haulage`] }),
		/* @__PURE__ */ jsx(AboutManifesto, {}),
		/* @__PURE__ */ jsx(Divider1, {}),
		/* @__PURE__ */ jsx(AboutCapabilities, {}),
		/* @__PURE__ */ jsx(Divider1, {})
	] });
}
AboutUs.layout = (page) => /* @__PURE__ */ jsx(AppLayout, {
	title: "About Us",
	children: page
});
export { AboutUs as default };

//# sourceMappingURL=about-us-waa5DE1r.js.map