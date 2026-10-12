import { c as Wrapper, l as cn, s as buttonVariants, t as AppLayout } from "./app-layout-DVyLTKad.js";
import { t as FloatingStatCard } from "./floating-stat-card-CYBqVR3y.js";
import { n as heavy_haulage_02_default, t as heavy_haulage_01_default } from "./heavy-haulage-01-CdrHGCfr.js";
import { t as SectionHeading } from "./section-heading-DY1hb5d1.js";
import { t as ServiceCard } from "./service-card-c8rnEs57.js";
import { Head, Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { ArrowRight, CheckCircle2, Clock, MapPin, ShieldCheck, Trophy } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
//#region resources/js/components/ui/misc/cutout-box.tsx
var notchPath = "M346.52 0c-10.26 0-25.48.45-40.7 14.94-16.24 15.45-28.55 15.71-51.87 15.45-22.03-.25-74.91.02-80.69.05-5.77-.03-58.66-.3-80.69-.05-23.31.26-35.62 0-51.87-15.45C25.48.45 10.27 0 0 0z";
var topNotch = `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 346.52 30.44'><path fill='black' d='${notchPath}'/></svg>`)}")`;
var bottomNotch = `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 346.52 30.44'><g transform='translate(0,30.44) scale(1,-1)'><path fill='black' d='${notchPath}'/></g></svg>`)}")`;
function getCutoutStyles(position) {
	if (position === "none") return {};
	const images = [];
	const sizes = [];
	const positions = [];
	const composites = [];
	const webkitComposites = [];
	if (position === "top" || position === "both") {
		images.push(topNotch);
		sizes.push("346px auto");
		positions.push("top center");
		composites.push("exclude");
		webkitComposites.push("destination-out");
	}
	if (position === "bottom" || position === "both") {
		images.push(bottomNotch);
		sizes.push("346px auto");
		positions.push("center calc(100% + 1px)");
		composites.push("exclude");
		webkitComposites.push("destination-out");
	}
	images.push("linear-gradient(#000, #000)");
	sizes.push("100% 100%");
	positions.push("0 0");
	return {
		maskImage: images.join(", "),
		maskSize: sizes.join(", "),
		maskPosition: positions.join(", "),
		maskRepeat: "no-repeat",
		maskComposite: composites.join(", "),
		WebkitMaskImage: images.join(", "),
		WebkitMaskSize: sizes.join(", "),
		WebkitMaskPosition: positions.join(", "),
		WebkitMaskRepeat: "no-repeat",
		WebkitMaskComposite: webkitComposites.join(", ")
	};
}
function CutoutBox({ position = "both", className, containerClassName, asWrapper = false, style, children, ...props }) {
	const combinedStyle = {
		...getCutoutStyles(position),
		...style
	};
	const Component = asWrapper ? Wrapper : "div";
	return /* @__PURE__ */ jsx("div", {
		className: cn("drop-shadow-sm", containerClassName),
		children: /* @__PURE__ */ jsx(Component, {
			className: cn("relative overflow-visible", className),
			style: combinedStyle,
			...props,
			children
		})
	});
}
//#endregion
//#region resources/js/components/hero.tsx
function Hero() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
	const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
	const opacityText = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ jsx("div", {
		ref,
		children: /* @__PURE__ */ jsxs(CutoutBox, {
			position: "bottom",
			className: "relative flex flex-col justify-end z-0 drop-shadow-lg min-h-[75vh] sm:min-h-[85vh] overflow-hidden",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				className: "absolute inset-0 bg-slate-950 origin-top",
				style: { y: yImage },
				children: [/* @__PURE__ */ jsx("img", {
					src: heavy_haulage_02_default,
					alt: "Teemane Heavy Haulage",
					className: "absolute top-[-20%] left-0 w-full h-[140%] object-cover object-center"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/30 to-black/10" })]
			}), /* @__PURE__ */ jsx(motion.div, {
				className: "relative z-10 w-full",
				style: {
					y: yText,
					opacity: opacityText
				},
				children: /* @__PURE__ */ jsx(Wrapper, {
					className: "pb-12 sm:pb-16 pt-32 sm:pt-40",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "max-w-xl text-left space-y-3",
							children: [/* @__PURE__ */ jsxs("h1", {
								className: "text-3xl sm:text-4xl lg:text-5xl font-heading font-black uppercase tracking-tighter text-white leading-[1.1] drop-shadow-xl",
								children: ["Moving the ", /* @__PURE__ */ jsx("span", {
									className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 drop-shadow-sm pr-1 pb-1",
									children: "Impossible"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm sm:text-base lg:text-lg text-slate-200/90 font-medium leading-relaxed drop-shadow-md",
								children: "South Africa's most trusted heavy haulage experts. We specialize in abnormal loads, oversized machinery, and complex transport logistics."
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col lg:items-end gap-4 shrink-0",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center lg:justify-end gap-2 sm:gap-3 text-xs font-semibold text-slate-200",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-sm",
										children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-sky-400" }), " Fully Insured"]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-sm",
										children: [/* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-sky-400" }), " Nationwide Routes"]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-sm",
										children: [/* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5 text-sky-400" }), " 24/7 Response"]
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center lg:justify-end gap-3 pt-1",
								children: [/* @__PURE__ */ jsx(Link, {
									href: "/contact-us",
									className: "inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold tracking-widest uppercase px-6 py-3 rounded-lg text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5",
									children: "Request A Quote"
								}), /* @__PURE__ */ jsxs(Link, {
									href: "/services",
									className: "inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold tracking-widest uppercase px-6 py-3 rounded-lg text-xs sm:text-sm backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5",
									children: ["View Fleet & Services", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
								})]
							})]
						})]
					})
				})
			})]
		})
	});
}
//#endregion
//#region resources/js/components/sections/home-intro-section.tsx
function HomeIntroSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 bg-background",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "grid lg:grid-cols-2 gap-16 items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-8",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					label: "Who We Are",
					title: /* @__PURE__ */ jsxs(Fragment, { children: [
						"THE ONLY NAME ",
						/* @__PURE__ */ jsx("br", {}),
						"TRUSTED TO PERFORM"
					] }),
					align: "left",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsx("p", { children: "Established in 2012, Teemane Heavy Haulage prides itself on countless victories across South Africa's most demanding worksites. From high-stakes logistics to complex routing operations, we have redefined what's possible in abnormal load transport." }), /* @__PURE__ */ jsx("p", { children: "Backed by a state-of-the-art fleet of multi-axle modular trailers, high-capacity prime movers, and over 100 years of combined management experience, we bring the precise engineering, control, and capability required to deliver certainty in high-risk environments." })]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "pt-2",
					children: /* @__PURE__ */ jsx(Link, {
						href: "/about-us",
						className: buttonVariants({
							size: "lg",
							className: "uppercase tracking-widest font-bold px-8 h-14"
						}),
						children: "Our Story"
					})
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative pb-6 lg:pb-0 drop-shadow-lg drop-shadow-black/30",
				children: [/* @__PURE__ */ jsx("div", {
					className: "aspect-square rounded-xl overflow-hidden border border-border shadow-lg",
					children: /* @__PURE__ */ jsx("img", {
						src: heavy_haulage_01_default,
						alt: "Teemane Heavy Haulage on site",
						className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700"
					})
				}), /* @__PURE__ */ jsx(FloatingStatCard, {
					value: "100+",
					label: "Years Combined Experience",
					position: "bottom-right"
				})]
			})]
		}) })
	});
}
//#endregion
//#region resources/js/components/sections/home-services-section.tsx
function HomeServicesSection({ services }) {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 bg-muted/30 border-y border-border",
		children: /* @__PURE__ */ jsxs(Wrapper, { children: [
			/* @__PURE__ */ jsx(SectionHeading, {
				label: "Our Capabilities",
				title: "ENGINEERED FOR THE LIFT",
				align: "center",
				className: "mb-16",
				children: "We understand that every lifting project demands precision, reliability and efficiency. Our services offer the flexibility and strength needed to tackle any challenge from construction sites to the most demanding industrial operations."
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: (services || []).map((service, idx) => /* @__PURE__ */ jsx(ServiceCard, {
					service,
					index: idx
				}, service.id))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-16 text-center",
				children: /* @__PURE__ */ jsx(Link, {
					href: "/services",
					className: buttonVariants({
						variant: "secondary",
						size: "lg",
						className: "uppercase tracking-widest font-bold px-10 h-14 border-2"
					}),
					children: "View All Services"
				})
			})
		] })
	});
}
//#endregion
//#region resources/images/heavy-haulage-03.webp
var heavy_haulage_03_default = "/build/assets/heavy-haulage-03-pNrpKH65.webp";
//#endregion
//#region resources/js/components/sections/home-safety-section.tsx
function HomeSafetySection() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 bg-background",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "grid lg:grid-cols-2 gap-16 items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative pb-6 lg:pb-0 order-2 lg:order-1 drop-shadow-lg drop-shadow-black/30",
				children: [/* @__PURE__ */ jsx("div", {
					className: "aspect-square rounded-xl overflow-hidden border border-border shadow-lg",
					children: /* @__PURE__ */ jsx("img", {
						src: heavy_haulage_03_default,
						alt: "Teemane Heavy Haulage Safety Briefing",
						className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700"
					})
				}), /* @__PURE__ */ jsx(FloatingStatCard, {
					value: "500+",
					label: "Projects Completed",
					position: "bottom-left"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-8 order-1 lg:order-2",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-4",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-sm font-bold text-primary tracking-widest uppercase",
							children: "Where Excellence Begins"
						}), /* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-primary" })]
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "text-4xl lg:text-5xl font-black tracking-tighter text-foreground leading-[1.1]",
						children: [
							"SAFETY STARTS ",
							/* @__PURE__ */ jsx("br", {}),
							"BEFORE THE LIFT"
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-lg text-muted-foreground leading-relaxed",
						children: "With services available for both short- and long-term hire and backed by prompt, professional support, THH oversees every stage from initial consultation and detailed site inspections to full project execution."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-lg text-muted-foreground leading-relaxed",
						children: "For specialised projects, we incorporate advanced lift studies and CAD drawings, allowing us to anticipate challenges and engineer safe, efficient solutions before operations begin. Combined with decades of experience, this defines how the most demanding projects are completed to unmatched standards."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center gap-4 pt-4",
						children: [/* @__PURE__ */ jsx(Link, {
							prefetch: `hover`,
							href: "/contact-us",
							className: buttonVariants({
								size: "lg",
								className: "uppercase tracking-widest font-bold px-8 h-14"
							}),
							children: "Start a Project"
						}), /* @__PURE__ */ jsx(Link, {
							prefetch: `hover`,
							href: "/about-us",
							className: buttonVariants({
								variant: "outline",
								size: "lg",
								className: "uppercase tracking-widest font-bold px-8 h-14 border-2"
							}),
							children: "Our Approach"
						})]
					})
				]
			})]
		}) })
	});
}
//#endregion
//#region resources/js/components/sections/dark-cta.tsx
function DarkCta() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 md:py-32 bg-background text-foreground relative overflow-hidden border-y border-border",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-125 h-125 bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" }),
			/* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-150 h-150 bg-sky-500/10 blur-[130px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" }),
			/* @__PURE__ */ jsx(Wrapper, {
				className: "relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-7 space-y-8",
						children: [
							/* @__PURE__ */ jsxs("h2", {
								className: "text-4xl md:text-5xl text-balance font-black uppercase tracking-tighter text-foreground leading-[1.1]",
								children: ["100+ Years of ", /* @__PURE__ */ jsx("span", {
									className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1 pb-1",
									children: "Combined Expertise."
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl",
								children: "Our management team brings an unparalleled depth of knowledge and capability required to deliver certainty in high-risk environments. We don't just move cargo we mitigate risk, overcome infrastructure challenges, and ensure flawless execution."
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "space-y-5 pt-4",
								children: [
									"Expert Route Surveying & Engineering",
									"Abnormal Load Permits & specialised Escorting",
									"Comprehensive End-to-End Project Management",
									"Rigging & Heavy Lifting Coordination"
								].map((item, i) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0",
										children: /* @__PURE__ */ jsx(CheckCircle2, { className: "text-primary w-5 h-5" })
									}), /* @__PURE__ */ jsx("span", {
										className: "text-lg font-bold text-foreground tracking-wide uppercase",
										children: item
									})]
								}, i))
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-5 relative",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/10 blur-[80px] rounded-full" }), /* @__PURE__ */ jsxs("div", {
							className: "relative bg-card/80 backdrop-blur-2xl rounded-3xl p-10 md:p-12 border border-border shadow-xl text-center",
							children: [
								/* @__PURE__ */ jsx(Trophy, { className: "w-16 h-16 text-primary mx-auto mb-6 drop-shadow-sm" }),
								/* @__PURE__ */ jsx("h3", {
									className: "text-3xl font-black uppercase tracking-tight text-foreground mb-4",
									children: "Ready for your next project?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-muted-foreground text-lg mb-10 leading-relaxed",
									children: "Let us engineer the optimal transport solution for your oversized and abnormal machinery."
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "/contact-us",
									className: "inline-flex w-full justify-center items-center gap-3 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 px-8 py-5 rounded-xl font-black tracking-widest uppercase text-sm",
									children: ["Request a Quote ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })]
								})
							]
						})]
					})]
				})
			})
		]
	});
}
//#endregion
//#region resources/js/pages/home.tsx
function Home({ services }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background selection:bg-primary selection:text-white",
		children: [
			/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsx("title", { children: "Heavy Haulage & Machinery Transport" }), /* @__PURE__ */ jsx("meta", {
				name: "description",
				content: "Teemane Heavy Haulage provides tailored transportation for oversized cargo, heavy equipment and industrial machinery across South Africa."
			})] }),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(HomeIntroSection, {}),
			/* @__PURE__ */ jsx(HomeServicesSection, { services }),
			/* @__PURE__ */ jsx(HomeSafetySection, {}),
			/* @__PURE__ */ jsx(DarkCta, {})
		]
	});
}
Home.displayName = "Home";
Home.layout = AppLayout;
//#endregion
export { Home as default };

//# sourceMappingURL=home-BGEAVWlg.js.map