import { c as buttonVariants, l as Wrapper, n as Divider1, t as AppLayout, u as cn } from "./app-layout-DecTnfMv.js";
import { t as FloatingStatCard } from "./floating-stat-card-Dcy-demM.js";
import { t as heavy_haulage_01_default } from "./heavy-haulage-01-CZXBirKr.js";
import { t as SectionHeading } from "./section-heading-CujaOgGG.js";
import { t as ServiceCard } from "./service-card-RyPfmBE-.js";
import { t as SectionBackdrop } from "./section-backdrop-D3eOcoLe.js";
import { Head, Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Clock, MapPin, ShieldCheck, Trophy } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
// resources/js/components/ui/misc/cutout-box.tsx
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
// resources/images/heavy-haulage-02.webp
var heavy_haulage_02_default = "/build/assets/heavy-haulage-02-DJont-aN.webp";
// resources/js/components/hero.tsx
function Hero() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const [isMobileOrTablet, setIsMobileOrTablet] = useState(() => {
		if (typeof window !== "undefined") return window.innerWidth < 1024;
		return false;
	});
	useEffect(() => {
		const media = window.matchMedia("(max-width: 1023px)");
		const onChange = (e) => setIsMobileOrTablet(e.matches);
		setIsMobileOrTablet(media.matches);
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	}, []);
	const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
	const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
	const opacityText = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ jsx("div", {
		ref,
		children: /* @__PURE__ */ jsxs(CutoutBox, {
			position: "bottom",
			className: "relative flex flex-col justify-end z-0 drop-shadow-lg min-h-0 lg:min-h-[85vh] overflow-hidden bg-background lg:bg-slate-950 transition-colors duration-300",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				className: "relative w-full aspect-16/10 sm:aspect-16/9 md:aspect-21/9 lg:aspect-auto lg:absolute lg:inset-0 bg-background lg:bg-slate-950 origin-top overflow-hidden pt-16 sm:pt-32 lg:pt-0 [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] lg:[mask-image:none] [-webkit-mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] lg:[-webkit-mask-image:none]",
				style: { y: isMobileOrTablet ? void 0 : yImage },
				children: [/* @__PURE__ */ jsx("img", {
					src: heavy_haulage_02_default,
					alt: "Teemane Heavy Haulage",
					className: "w-full h-full object-cover object-[43%_center] sm:object-center lg:absolute lg:top-[-20%] lg:h-[140%] lg:left-0"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent lg:from-slate-950/70 lg:via-slate-950/20 lg:to-transparent" })]
			}), /* @__PURE__ */ jsx(motion.div, {
				className: "relative z-10 w-full",
				style: {
					y: isMobileOrTablet ? void 0 : yText,
					opacity: isMobileOrTablet ? void 0 : opacityText
				},
				children: /* @__PURE__ */ jsx(Wrapper, {
					className: "pt-6 sm:pt-8 lg:pt-40 pb-14 sm:pb-16 lg:pb-16",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 lg:gap-12",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "max-w-xl sm:max-w-2xl lg:max-w-xl text-left space-y-3 sm:space-y-4",
							children: [/* @__PURE__ */ jsxs("h1", {
								className: "text-2xl sm:text-4xl lg:text-5xl font-heading font-black uppercase tracking-tighter text-foreground lg:text-white leading-[1.1] drop-shadow-none lg:drop-shadow-[0_3px_10px_rgba(0,0,0,0.85)]",
								children: ["Moving the ", /* @__PURE__ */ jsx("span", {
									className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-400 drop-shadow-sm pr-1 pb-1",
									children: "Impossible"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm sm:text-base lg:text-lg text-foreground/80 lg:text-slate-100 font-medium leading-relaxed drop-shadow-none lg:drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]",
								children: "South Africa's most trusted heavy haulage experts. We specialize in abnormal loads, oversized machinery, and complex transport logistics."
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col lg:items-end gap-4 shrink-0 pt-2 lg:pt-0",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center lg:justify-end gap-2 sm:gap-3 text-xs font-semibold text-foreground/90 lg:text-slate-200",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 bg-muted/60 text-foreground border border-border lg:bg-slate-950/70 lg:text-slate-200 lg:border-white/15 px-3 py-1.5 rounded-full backdrop-blur-md shadow-xs lg:shadow-md",
										children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-primary lg:text-sky-400" }), " Fully Insured"]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 bg-muted/60 text-foreground border border-border lg:bg-slate-950/70 lg:text-slate-200 lg:border-white/15 px-3 py-1.5 rounded-full backdrop-blur-md shadow-xs lg:shadow-md",
										children: [/* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-primary lg:text-sky-400" }), " Nationwide Routes"]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 bg-muted/60 text-foreground border border-border lg:bg-slate-950/70 lg:text-slate-200 lg:border-white/15 px-3 py-1.5 rounded-full backdrop-blur-md shadow-xs lg:shadow-md",
										children: [/* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5 text-primary lg:text-sky-400" }), " 24/7 Response"]
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center lg:justify-end gap-3 pt-1",
								children: [/* @__PURE__ */ jsx(Link, {
									href: "/contact-us",
									className: "inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold tracking-widest uppercase px-6 py-3 rounded-lg text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5",
									children: "Request A Quote"
								}), /* @__PURE__ */ jsxs(Link, {
									href: "/services",
									className: "inline-flex items-center justify-center gap-2 bg-background hover:bg-muted text-foreground border border-border lg:border-white/25 lg:bg-slate-950/40 lg:hover:bg-slate-900/60 lg:text-white font-bold tracking-widest uppercase px-6 py-3 rounded-lg text-xs sm:text-sm backdrop-blur-md shadow-xs lg:shadow-md hover:shadow-md lg:hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5",
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
// resources/js/components/sections/home-intro-section.tsx
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
// resources/js/components/sections/home-services-section.tsx
function HomeServicesSection({ services }) {
	const isFourCol = services?.length === 4 || services?.length && services.length % 4 === 0;
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-muted/30 border-y isolate border-border relative overflow-clip",
		children: [/* @__PURE__ */ jsx(SectionBackdrop, {}), /* @__PURE__ */ jsxs(Wrapper, { children: [
			/* @__PURE__ */ jsx(SectionHeading, {
				label: "Our Capabilities",
				title: "ENGINEERED FOR THE EXTRAORDINARY",
				align: "center",
				className: "mb-16",
				children: "When the scale is extraordinary, experience makes the difference. Our specialised abnormal transport solutions offer the engineered precision, modular capacity, and proven expertise needed to move oversized cargo across South Africa and the SADC region."
			}),
			/* @__PURE__ */ jsx("div", {
				className: cn("grid gap-6", isFourCol ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"),
				children: (services || []).map((service) => /* @__PURE__ */ jsx(ServiceCard, { service }, service.id))
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
		] })]
	});
}
// resources/images/heavy-haulage-03.webp
var heavy_haulage_03_default = "/build/assets/heavy-haulage-03-pNrpKH65.webp";
// resources/js/components/sections/home-safety-section.tsx
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
// resources/js/components/sections/dark-cta.tsx
function DarkCta() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 md:py-32 isolate bg-background text-foreground relative overflow-hidden border-y border-border",
		children: [/* @__PURE__ */ jsx(SectionBackdrop, { graphic: "wheel" }), /* @__PURE__ */ jsx(Wrapper, {
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
							children: "With over a century of collective industry experience, our leadership team delivers the technical rigor and practical know-how needed to master Africa's toughest transport routes. We don't just move abnormal cargo. We engineer every transit, eliminate risk, and deliver certainty from start to finish."
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "space-y-5 pt-4",
							children: [
								"Expert Route Surveying & Engineering",
								"Abnormal Load Permits & Specialised Escorting",
								"Comprehensive End-to-End Project Management",
								"Multi-Axle Modular Transport & SADC Logistics"
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
								children: "Let us engineer the optimal transport solution for your oversized and abnormal needs."
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
		})]
	});
}
// resources/images/isolate-truck-trailer-load-left.webp
var isolate_truck_trailer_load_left_default = "/build/assets/isolate-truck-trailer-load-left-CixsnmC6.webp";
// resources/images/isolate-truck-trailer-load.webp
var isolate_truck_trailer_load_default = "/build/assets/isolate-truck-trailer-load-pOQyv-wc.webp";
// resources/js/pages/home.tsx
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
			/* @__PURE__ */ jsx(Divider1, {
				leftImage: isolate_truck_trailer_load_left_default,
				rightImage: isolate_truck_trailer_load_default
			}),
			/* @__PURE__ */ jsx(HomeSafetySection, {}),
			/* @__PURE__ */ jsx(Divider1, {}),
			/* @__PURE__ */ jsx(DarkCta, {})
		]
	});
}
Home.displayName = "Home";
Home.layout = AppLayout;
export { Home as default };

//# sourceMappingURL=home-BZCosC59.js.map