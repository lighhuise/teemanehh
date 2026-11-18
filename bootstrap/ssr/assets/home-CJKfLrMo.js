import { c as buttonVariants, l as Wrapper, n as Divider1, t as AppLayout, u as cn } from "./app-layout-CPzwRk-h.js";
import { t as FloatingStatCard } from "./floating-stat-card-BD_japVm.js";
import { t as heavy_haulage_01_default } from "./heavy-haulage-01-CZXBirKr.js";
import { t as SectionHeading } from "./section-heading-Da6THWOD.js";
import { t as ServiceCard } from "./service-card-BEpXznvG.js";
import { t as SectionBackdrop } from "./section-backdrop-3u56M0f6.js";
import { t as ScrollDivider } from "./scroll-divider-DGG0icSX.js";
import { Head, Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Building2, CalendarClock, CheckCircle2, ClipboardCheck, Clock, Compass, Eye, EyeOff, HardHat, MapPin, ShieldCheck, Trophy, Truck } from "lucide-react";
import { useScroll, useTransform } from "framer-motion";
import createGlobe from "cobe";
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
	useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
	useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
	useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ jsx("div", {
		ref,
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative flex flex-col justify-end z-0 drop-shadow-lg min-h-0 lg:min-h-[85vh] overflow-hidden bg-background lg:bg-slate-950 transition-colors duration-300",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative w-full aspect-16/10 sm:aspect-16/9 md:aspect-21/9 lg:aspect-auto lg:absolute lg:inset-0 bg-background lg:bg-slate-950 origin-top overflow-hidden pt-16  lg:pt-0 [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] lg:[mask-image:none] [-webkit-mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] lg:[-webkit-mask-image:none]",
				children: [/* @__PURE__ */ jsx("img", {
					src: heavy_haulage_02_default,
					alt: "Teemane Heavy Haulage",
					className: "w-full contrast-125 h-full object-cover object-[43%_center] sm:object-center lg:absolute lg:top-[-20%] lg:h-[140%] lg:left-0"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent lg:from-slate-950/40 lg:via-slate-950/20 lg:to-transparent" })]
			}), /* @__PURE__ */ jsx("div", {
				className: "relative z-10 w-full",
				children: /* @__PURE__ */ jsx(Wrapper, {
					className: "pt-6 sm:pt-8 lg:pt-40 pb-14 sm:pb-16 lg:pb-16",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 lg:gap-12",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "max-w-xl sm:max-w-2xl lg:max-w-xl text-left space-y-3 sm:space-y-4",
							children: [/* @__PURE__ */ jsxs("h1", {
								className: "text-2xl sm:text-4xl lg:text-5xl font-heading font-black uppercase tracking-tighter text-foreground lg:text-white leading-[1.1] drop-shadow-none lg:drop-shadow-[0_3px_4px_rgba(0,0,0,0.85)]",
								children: ["Moving the ", /* @__PURE__ */ jsx("span", {
									className: "text-primary drop-shadow-sm pr-1 pb-1",
									children: "Impossible"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm sm:text-base lg:text-lg text-foreground/80 lg:text-slate-100 font-medium leading-relaxed drop-shadow-none lg:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
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
// resources/images/space-nebula-bg.webp
var space_nebula_bg_default = "/build/assets/space-nebula-bg-BVRDihK7.webp";
// resources/js/components/globe.tsx
var HQ_LOCATION = [-33.926637890850294, 18.645063943495657];
var defaultMarkers = [
	{
		id: "thh-cpt-hq",
		location: HQ_LOCATION,
		label: "Cape Town HQ",
		size: .015,
		color: [
			.96,
			.33,
			0
		],
		isHq: true
	},
	{
		id: "thh-jhb",
		location: [-26.2041, 28.0473],
		label: "Johannesburg",
		size: .011
	},
	{
		id: "thh-dbn",
		location: [-29.8587, 31.0218],
		label: "Durban",
		size: .01
	},
	{
		id: "thh-plz",
		location: [-33.9608, 25.6022],
		label: "Gqeberha",
		size: .009
	},
	{
		id: "thh-utn",
		location: [-28.4478, 21.2561],
		label: "Upington",
		size: .009
	},
	{
		id: "thh-wdh",
		location: [-22.5609, 17.0658],
		label: "Windhoek • Namibia",
		size: .01
	},
	{
		id: "thh-gbe",
		location: [-24.6282, 25.9231],
		label: "Gaborone • Botswana",
		size: .009
	},
	{
		id: "thh-mpm",
		location: [-25.9692, 32.5732],
		label: "Maputo • Mozambique",
		size: .01
	},
	{
		id: "thh-hre",
		location: [-17.8252, 31.0335],
		label: "Harare • Zimbabwe",
		size: .01
	},
	{
		id: "thh-lun",
		location: [-15.3875, 28.3228],
		label: "Lusaka • Zambia",
		size: .01
	},
	{
		id: "thh-lad",
		location: [-8.839, 13.2894],
		label: "Luanda • Angola",
		size: .01
	},
	{
		id: "thh-dar",
		location: [-6.7924, 39.2083],
		label: "Dar es Salaam • Tanzania",
		size: .01
	},
	{
		id: "thh-fih",
		location: [-4.4419, 15.2663],
		label: "Kinshasa • DRC",
		size: .01
	},
	{
		id: "thh-nbo",
		location: [-1.2921, 36.8219],
		label: "Nairobi • Kenya",
		size: .011
	},
	{
		id: "thh-los",
		location: [6.5244, 3.3792],
		label: "Lagos • Nigeria",
		size: .011
	},
	{
		id: "thh-acc",
		location: [5.6037, -.187],
		label: "Accra • Ghana",
		size: .01
	},
	{
		id: "thh-add",
		location: [9.032, 38.7469],
		label: "Addis Ababa • Ethiopia",
		size: .01
	},
	{
		id: "thh-dkr",
		location: [14.7167, -17.4677],
		label: "Dakar • Senegal",
		size: .01
	},
	{
		id: "thh-cai",
		location: [30.0444, 31.2357],
		label: "Cairo • Egypt",
		size: .011
	},
	{
		id: "thh-cmn",
		location: [33.5731, -7.5898],
		label: "Casablanca • Morocco",
		size: .01
	}
];
var defaultArcs = [
	{
		id: "thh-arc-jhb",
		from: HQ_LOCATION,
		to: [-26.2041, 28.0473]
	},
	{
		id: "thh-arc-dbn",
		from: HQ_LOCATION,
		to: [-29.8587, 31.0218]
	},
	{
		id: "thh-arc-plz",
		from: HQ_LOCATION,
		to: [-33.9608, 25.6022]
	},
	{
		id: "thh-arc-utn",
		from: HQ_LOCATION,
		to: [-28.4478, 21.2561]
	},
	{
		id: "thh-arc-wdh",
		from: HQ_LOCATION,
		to: [-22.5609, 17.0658]
	},
	{
		id: "thh-arc-gbe",
		from: [-26.2041, 28.0473],
		to: [-24.6282, 25.9231]
	},
	{
		id: "thh-arc-mpm",
		from: [-26.2041, 28.0473],
		to: [-25.9692, 32.5732]
	},
	{
		id: "thh-arc-hre",
		from: [-26.2041, 28.0473],
		to: [-17.8252, 31.0335]
	},
	{
		id: "thh-arc-lun",
		from: [-17.8252, 31.0335],
		to: [-15.3875, 28.3228]
	},
	{
		id: "thh-arc-lad",
		from: [-22.5609, 17.0658],
		to: [-8.839, 13.2894]
	},
	{
		id: "thh-arc-fih",
		from: [-8.839, 13.2894],
		to: [-4.4419, 15.2663]
	},
	{
		id: "thh-arc-dar",
		from: [-15.3875, 28.3228],
		to: [-6.7924, 39.2083]
	},
	{
		id: "thh-arc-nbo",
		from: [-6.7924, 39.2083],
		to: [-1.2921, 36.8219]
	},
	{
		id: "thh-arc-add",
		from: [-1.2921, 36.8219],
		to: [9.032, 38.7469]
	},
	{
		id: "thh-arc-cai",
		from: [9.032, 38.7469],
		to: [30.0444, 31.2357]
	},
	{
		id: "thh-arc-los",
		from: [-4.4419, 15.2663],
		to: [6.5244, 3.3792]
	},
	{
		id: "thh-arc-acc",
		from: [6.5244, 3.3792],
		to: [5.6037, -.187]
	},
	{
		id: "thh-arc-dkr",
		from: [5.6037, -.187],
		to: [14.7167, -17.4677]
	},
	{
		id: "thh-arc-cmn",
		from: [14.7167, -17.4677],
		to: [33.5731, -7.5898]
	},
	{
		id: "thh-arc-cpt-los",
		from: HQ_LOCATION,
		to: [6.5244, 3.3792]
	},
	{
		id: "thh-arc-jhb-nbo",
		from: [-26.2041, 28.0473],
		to: [-1.2921, 36.8219]
	}
];
var MARKER_ELEVATION = .02;
var ARC_HEIGHT = .22;
function latLonToUnitVec(location) {
	const latRad = location[0] * Math.PI / 180;
	const lonRad = location[1] * Math.PI / 180 - Math.PI;
	const cosLat = Math.cos(latRad);
	return [
		-cosLat * Math.cos(lonRad),
		Math.sin(latRad),
		cosLat * Math.sin(lonRad)
	];
}
function projectVec3ToScreen(tx, ty, tz, cosP, sinP, cosT, sinT) {
	const c = cosP * tx + sinP * tz;
	const s = sinP * sinT * tx + cosT * ty - cosP * sinT * tz;
	const depth = -sinP * cosT * tx + sinT * ty + cosP * cosT * tz;
	const occludedBySphere = depth < 0 && c * c + s * s < .64;
	return {
		x: (c + 1) / 2,
		y: (-s + 1) / 2,
		visible: !occludedBySphere,
		depth
	};
}
function projectMarkerToScreen(location, phi, theta) {
	const [ux, uy, uz] = latLonToUnitVec(location);
	const radius = .8200000000000001;
	const cosT = Math.cos(theta);
	const sinT = Math.sin(theta);
	const cosP = Math.cos(phi);
	const sinP = Math.sin(phi);
	const res = projectVec3ToScreen(ux * radius, uy * radius, uz * radius, cosP, sinP, cosT, sinT);
	return {
		x: res.x * 100,
		y: res.y * 100,
		visible: res.depth > .05 && res.visible
	};
}
function precomputeArcs(arcs) {
	const baseRadius = .8200000000000001;
	return arcs.map((arc, idx) => {
		const l = latLonToUnitVec(arc.from);
		const m = latLonToUnitVec(arc.to);
		const start = [
			l[0] * baseRadius,
			l[1] * baseRadius,
			l[2] * baseRadius
		];
		const end = [
			m[0] * baseRadius,
			m[1] * baseRadius,
			m[2] * baseRadius
		];
		const fx = l[0] + m[0];
		const fy = l[1] + m[1];
		const fz = l[2] + m[2];
		const fLen = Math.hypot(fx, fy, fz);
		const ex = fLen > .001 ? fx / fLen : 0;
		const ey = fLen > .001 ? fy / fLen : 1;
		const ez = fLen > .001 ? fz / fLen : 0;
		const chordDist = Math.hypot(l[0] - m[0], l[1] - m[1], l[2] - m[2]);
		const peakRadius = .8200000000000001 + ARC_HEIGHT * Math.max(.55, Math.min(1.35, chordDist * .85));
		const control = [
			ex * peakRadius,
			ey * peakRadius,
			ez * peakRadius
		];
		return {
			id: arc.id,
			start,
			control,
			end,
			phase: idx * .37 % 1.45,
			flightSpeed: .32 + idx % 5 * .045
		};
	});
}
function evalQuadraticBezier(start, control, end, t) {
	const inv = 1 - t;
	const b0 = inv * inv;
	const b1 = 2 * inv * t;
	const b2 = t * t;
	return [
		b0 * start[0] + b1 * control[0] + b2 * end[0],
		b0 * start[1] + b1 * control[1] + b2 * end[1],
		b0 * start[2] + b1 * control[2] + b2 * end[2]
	];
}
function Globe({ markers = defaultMarkers, arcs = defaultArcs, className = "", speed = .0022 }) {
	const canvasRef = useRef(null);
	const arcCanvasRef = useRef(null);
	const labelRefs = useRef({});
	const pointerStart = useRef(null);
	const dragOffset = useRef({
		phi: 0,
		theta: 0
	});
	const phiOffset = useRef(0);
	const thetaOffset = useRef(0);
	const isPaused = useRef(false);
	const speedMultiplierRef = useRef(1);
	const [labelsVisible, setLabelsVisible] = useState(true);
	const [speedMultiplier, setSpeedMultiplier] = useState(1);
	const handleSpeedChange = (val) => {
		setSpeedMultiplier(val);
		speedMultiplierRef.current = val;
	};
	const handlePointerDown = useCallback((e) => {
		pointerStart.current = {
			x: e.clientX,
			y: e.clientY
		};
		if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
		isPaused.current = true;
	}, []);
	const handlePointerUp = useCallback(() => {
		if (pointerStart.current !== null) {
			phiOffset.current += dragOffset.current.phi;
			thetaOffset.current = Math.max(-.8, Math.min(.8, thetaOffset.current + dragOffset.current.theta));
			dragOffset.current = {
				phi: 0,
				theta: 0
			};
		}
		pointerStart.current = null;
		if (canvasRef.current) canvasRef.current.style.cursor = "grab";
		isPaused.current = false;
	}, []);
	useEffect(() => {
		const handlePointerMove = (e) => {
			if (pointerStart.current !== null) dragOffset.current = {
				phi: (e.clientX - pointerStart.current.x) / 280,
				theta: (e.clientY - pointerStart.current.y) / 700
			};
		};
		window.addEventListener("pointermove", handlePointerMove, { passive: true });
		window.addEventListener("pointerup", handlePointerUp, { passive: true });
		return () => {
			window.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("pointerup", handlePointerUp);
		};
	}, [handlePointerUp]);
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		let globe = null;
		let animationId = 0;
		let fadeTimeout;
		let ro;
		let phi = 4.32;
		const baseTheta = -.18;
		const precomputedArcs = precomputeArcs(arcs);
		const startTime = performance.now();
		const updateLabels = (currentPhi, currentTheta) => {
			for (const m of markers) {
				const el = labelRefs.current[m.id];
				if (!el) continue;
				const pos = projectMarkerToScreen(m.location, currentPhi, currentTheta);
				el.style.left = `${pos.x.toFixed(2)}%`;
				el.style.top = `${pos.y.toFixed(2)}%`;
				el.style.opacity = pos.visible ? "1" : "0";
				el.style.filter = pos.visible ? "blur(0px)" : "blur(6px)";
			}
		};
		const drawFlyingArcs = (currentPhi, currentTheta, nowMs) => {
			const arcCanvas = arcCanvasRef.current;
			if (!arcCanvas) return;
			const ctx = arcCanvas.getContext("2d");
			if (!ctx) return;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const displayW = canvas.offsetWidth;
			const displayH = canvas.offsetHeight || displayW;
			if (displayW === 0) return;
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
			const elapsedSec = (nowMs - startTime) / 1e3;
			const BASE_STEPS = 28;
			const COMET_STEPS = 22;
			const COMET_LENGTH = .42;
			const CYCLE_SPAN = 1.45;
			for (const arc of precomputedArcs) {
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
						} else ctx.lineTo(sx, sy);
					} else penDown = false;
				}
				ctx.strokeStyle = "rgba(56, 189, 248, 0.14)";
				ctx.lineWidth = 1.1;
				ctx.stroke();
				const progress = (elapsedSec * arc.flightSpeed + arc.phase) % CYCLE_SPAN;
				const headT = Math.min(1, progress);
				const tailT = Math.max(0, progress - COMET_LENGTH);
				if (headT > tailT + .01) {
					const pts = [];
					for (let i = 0; i <= COMET_STEPS; i++) {
						const t = tailT + (headT - tailT) * i / COMET_STEPS;
						const [bx, by, bz] = evalQuadraticBezier(arc.start, arc.control, arc.end, t);
						const pt = projectVec3ToScreen(bx, by, bz, cosP, sinP, cosT, sinT);
						pts.push({
							x: pt.x * displayW,
							y: pt.y * displayH,
							visible: pt.visible,
							t
						});
					}
					const firstVis = pts.find((p) => p.visible);
					const lastVis = [...pts].reverse().find((p) => p.visible);
					if (firstVis && lastVis && (firstVis.x !== lastVis.x || firstVis.y !== lastVis.y)) {
						const grad = ctx.createLinearGradient(firstVis.x, firstVis.y, lastVis.x, lastVis.y);
						grad.addColorStop(0, "rgba(0, 100, 190, 0)");
						grad.addColorStop(.35, "rgba(56, 189, 248, 0.65)");
						grad.addColorStop(.75, "rgba(244, 83, 0, 0.95)");
						grad.addColorStop(1, "rgba(255, 225, 190, 1)");
						ctx.beginPath();
						let cometPen = false;
						for (const p of pts) if (p.visible) {
							if (!cometPen) {
								ctx.moveTo(p.x, p.y);
								cometPen = true;
							} else ctx.lineTo(p.x, p.y);
						} else cometPen = false;
						ctx.strokeStyle = grad;
						ctx.lineWidth = 2.4;
						ctx.lineCap = "round";
						ctx.shadowColor = "#F45300";
						ctx.shadowBlur = 10;
						ctx.stroke();
						ctx.shadowBlur = 0;
					}
					const headPt = pts[pts.length - 1];
					if (headPt && headPt.visible && progress <= 1.02) {
						const headGlow = ctx.createRadialGradient(headPt.x, headPt.y, 0, headPt.x, headPt.y, 9);
						headGlow.addColorStop(0, "rgba(255, 245, 230, 1)");
						headGlow.addColorStop(.4, "rgba(244, 83, 0, 0.85)");
						headGlow.addColorStop(1, "rgba(244, 83, 0, 0)");
						ctx.fillStyle = headGlow;
						ctx.beginPath();
						ctx.arc(headPt.x, headPt.y, 9, 0, Math.PI * 2);
						ctx.fill();
					}
				}
				if (progress >= .96 && progress <= 1.32) {
					const endPt = projectVec3ToScreen(arc.end[0], arc.end[1], arc.end[2], cosP, sinP, cosT, sinT);
					if (endPt.visible && endPt.depth > 0) {
						const pulseT = (progress - .96) / .36;
						const radius = 3 + pulseT * 14;
						const alpha = (1 - pulseT) * .75;
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
		const animate = (nowMs = performance.now()) => {
			if (!isPaused.current) phi += speed * speedMultiplierRef.current;
			const currentPhi = phi + phiOffset.current + dragOffset.current.phi;
			const currentTheta = Math.max(-1.15, Math.min(.85, baseTheta + thetaOffset.current + dragOffset.current.theta));
			globe?.update({
				phi: currentPhi,
				theta: currentTheta
			});
			drawFlyingArcs(currentPhi, currentTheta, nowMs);
			updateLabels(currentPhi, currentTheta);
			animationId = requestAnimationFrame(animate);
		};
		const init = () => {
			const width = canvas.offsetWidth;
			if (width === 0 || globe) return;
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
				baseColor: [
					.22,
					.34,
					.62
				],
				markerColor: [
					.96,
					.33,
					0
				],
				glowColor: [
					.04,
					.18,
					.55
				],
				markerElevation: MARKER_ELEVATION,
				markers: markers.map((m) => ({
					location: m.location,
					size: m.size ?? .01,
					id: m.id,
					color: m.color ?? [
						.96,
						.33,
						0
					]
				})),
				arcs: [],
				opacity: .62
			});
			animate();
			fadeTimeout = setTimeout(() => {
				canvas.style.opacity = "0.78";
			});
		};
		if (canvas.offsetWidth > 0) init();
		else {
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
			if (fadeTimeout) clearTimeout(fadeTimeout);
			if (animationId) cancelAnimationFrame(animationId);
			globe?.destroy();
		};
	}, [
		markers,
		arcs,
		speed
	]);
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden bg-[#030611] text-white min-h-[760px] sm:min-h-[860px] lg:min-h-[960px] flex items-center py-20 lg:py-28 border-y border-white/10 select-none",
		children: [
			/* @__PURE__ */ jsxs("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 z-0",
				children: [/* @__PURE__ */ jsx("img", {
					src: space_nebula_bg_default,
					alt: "",
					className: "h-full w-full object-cover object-right opacity-85"
				}), /* @__PURE__ */ jsx("div", {
					className: "absolute inset-0",
					style: { background: "linear-gradient(90deg, #030611 0%, rgba(3, 6, 17, 0.78) 34%, rgba(3, 6, 17, 0.15) 68%, rgba(3, 6, 17, 0.35) 100%)" }
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: `pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[40%] w-[860px] sm:w-[1080px] lg:w-[1320px] xl:w-[1480px] aspect-square z-10 ${className}`,
				style: { userSelect: "none" },
				children: [
					/* @__PURE__ */ jsxs("div", {
						"aria-hidden": "true",
						className: "pointer-events-none absolute rounded-full flex items-center justify-center",
						style: {
							inset: "10.5%",
							transform: "rotate(180deg)"
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 rounded-full",
								style: {
									backgroundColor: "#000",
									boxShadow: "0rem 0.08rem 0.16rem 0 #ffbc75, 0 0.65rem 1.3rem 0 #ff834a, inset 0 -5.5rem 3.8rem -4.2rem #f50, inset 0 -5.6rem 8rem 0.57rem #321500"
								}
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 rounded-full",
								style: { boxShadow: "inset 0 7.1rem 7.2rem -2.4rem #012fff, inset 0 18.8rem 14.2rem -4.1rem #021777" }
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 rounded-full",
								style: {
									mixBlendMode: "plus-lighter",
									backgroundColor: "transparent",
									boxShadow: "-0.08rem -0.08rem 0.24rem -2.5rem #75bcff, -0.32rem -0.32rem 1.3rem -3.1rem #4781ff, -0.65rem -0.97rem 3.2rem 0 #0046dd, inset 0 2.6rem 5rem -2.1rem #8dedff"
								}
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 rounded-full",
								style: {
									mixBlendMode: "plus-lighter",
									backgroundColor: "transparent",
									boxShadow: "inset 0 -2.8rem 2.3rem -2.1rem #ffd1b0"
								}
							})
						]
					}),
					/* @__PURE__ */ jsx("canvas", {
						ref: canvasRef,
						onPointerDown: handlePointerDown,
						role: "img",
						"aria-label": "Interactive 3D globe showing Teemane Heavy Haulage headquarters in Bellville South, Cape Town and transport corridors across South Africa and Africa",
						style: {
							position: "relative",
							zIndex: 2,
							width: "100%",
							height: "100%",
							cursor: "grab",
							pointerEvents: "auto",
							opacity: 0,
							transition: "opacity 1.2s ease",
							borderRadius: "50%",
							touchAction: "none"
						}
					}),
					/* @__PURE__ */ jsx("canvas", {
						ref: arcCanvasRef,
						"aria-hidden": "true",
						className: "pointer-events-none absolute inset-0 z-5 h-full w-full"
					}),
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": !labelsVisible,
						className: "pointer-events-none absolute inset-0 z-10 transition-opacity duration-300",
						style: { opacity: labelsVisible ? 1 : 0 },
						children: markers.map((m) => /* @__PURE__ */ jsx("div", {
							ref: (el) => {
								labelRefs.current[m.id] = el;
							},
							style: {
								position: "absolute",
								left: "50%",
								top: "50%",
								transform: "translate(-50%, calc(-100% - 8px))",
								pointerEvents: "none",
								opacity: 0,
								transition: "opacity 0.25s ease, filter 0.25s ease",
								zIndex: m.isHq ? 30 : 15
							},
							children: /* @__PURE__ */ jsxs("span", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: "5px",
									fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
									fontSize: m.isHq ? "0.72rem" : "0.62rem",
									fontWeight: m.isHq ? 700 : 500,
									textTransform: "uppercase",
									color: "#ffffff",
									backgroundColor: m.isHq ? "#F45300" : "rgba(17, 17, 17, 0.88)",
									border: m.isHq ? "1px solid rgba(255, 209, 176, 0.65)" : "1px solid rgba(255, 255, 255, 0.18)",
									padding: m.isHq ? "5px 10px" : "3px 8px",
									borderRadius: "4px",
									letterSpacing: "0.06em",
									whiteSpace: "nowrap",
									boxShadow: m.isHq ? "0 0 18px rgba(244, 83, 0, 0.6)" : "0 2px 8px rgba(0, 0, 0, 0.5)",
									backdropFilter: "blur(6px)"
								},
								children: [/* @__PURE__ */ jsx("span", { style: {
									width: 5,
									height: 5,
									borderRadius: "50%",
									backgroundColor: m.isHq ? "#fff" : "#F45300",
									boxShadow: "0 0 6px #F45300"
								} }), m.label]
							})
						}, m.id))
					})
				]
			}),
			/* @__PURE__ */ jsx(Wrapper, {
				className: "relative z-20 pointer-events-none",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-xl lg:max-w-2xl space-y-6 pointer-events-auto",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-[#F45300] shadow-[0_0_12px_#F45300]" }), /* @__PURE__ */ jsx("span", {
								className: "font-mono text-xs uppercase tracking-[0.22em] text-white/75",
								children: "Continental Reach"
							})]
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-4xl sm:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter leading-[1.02] text-white drop-shadow-md",
							children: [
								"Built For ",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-primary",
									children: "The Long Haul"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-base sm:text-lg text-white/75 leading-relaxed max-w-lg drop-shadow",
							children: "From port terminals and manufacturing plants to remote mines and power stations, our multi-axle convoys and escort teams deliver oversized cargo safely to the toughest destinations on the continent."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "group rounded-xl border border-white/12 bg-white/[0.03] hover:border-primary/60 hover:bg-primary/[0.08] px-4 py-3.5 backdrop-blur-md transition-all duration-300",
									children: [/* @__PURE__ */ jsxs("svg", {
										viewBox: "0 0 180 54",
										fill: "none",
										xmlns: "http://www.w3.org/2000/svg",
										className: "w-full h-11 text-white/85 group-hover:text-white transition-colors",
										"aria-label": "Gooseneck Lowbed Truck and Trailer",
										children: [
											/* @__PURE__ */ jsx("line", {
												x1: "4",
												y1: "48",
												x2: "176",
												y2: "48",
												stroke: "currentColor",
												strokeOpacity: "0.2",
												strokeWidth: "1",
												strokeDasharray: "3 3"
											}),
											/* @__PURE__ */ jsx("path", {
												d: "M14 40V20C14 17.5 15.8 16 18 16H29V29H48V40H14Z",
												stroke: "currentColor",
												strokeWidth: "1.6",
												strokeLinejoin: "round"
											}),
											/* @__PURE__ */ jsx("path", {
												d: "M14 25H23V16",
												stroke: "currentColor",
												strokeWidth: "1.3",
												strokeLinejoin: "round"
											}),
											/* @__PURE__ */ jsx("line", {
												x1: "31",
												y1: "14",
												x2: "31",
												y2: "29",
												stroke: "currentColor",
												strokeWidth: "1.4",
												strokeLinecap: "round"
											}),
											/* @__PURE__ */ jsx("path", {
												d: "M42 36H53L62 41H128L133 35H168V40H131L128 43H60L52 38H42",
												stroke: "#0064be",
												strokeWidth: "1.8",
												strokeLinejoin: "round"
											}),
											/* @__PURE__ */ jsx("rect", {
												x: "68",
												y: "25",
												width: "46",
												height: "16",
												rx: "2",
												stroke: "currentColor",
												strokeOpacity: "0.65",
												strokeWidth: "1.4"
											}),
											/* @__PURE__ */ jsx("line", {
												x1: "78",
												y1: "25",
												x2: "78",
												y2: "41",
												stroke: "currentColor",
												strokeOpacity: "0.45",
												strokeWidth: "1.2"
											}),
											/* @__PURE__ */ jsx("line", {
												x1: "102",
												y1: "25",
												x2: "102",
												y2: "41",
												stroke: "currentColor",
												strokeOpacity: "0.45",
												strokeWidth: "1.2"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "22",
												cy: "42",
												r: "5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.6"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "38",
												cy: "42",
												r: "5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.6"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "49",
												cy: "42",
												r: "5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.6"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "139",
												cy: "42",
												r: "4.5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.6"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "150",
												cy: "42",
												r: "4.5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.6"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "161",
												cy: "42",
												r: "4.5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.6"
											})
										]
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/60 group-hover:text-white/90 transition-colors",
										children: "Gooseneck Lowbed"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "group rounded-xl border border-white/12 bg-white/[0.03] hover:border-primary/60 hover:bg-primary/[0.08] px-4 py-3.5 backdrop-blur-md transition-all duration-300",
									children: [/* @__PURE__ */ jsxs("svg", {
										viewBox: "0 0 180 54",
										fill: "none",
										xmlns: "http://www.w3.org/2000/svg",
										className: "w-full h-11 text-white/85 group-hover:text-white transition-colors",
										"aria-label": "Step-Deck Extendable Trailer",
										children: [
											/* @__PURE__ */ jsx("line", {
												x1: "4",
												y1: "48",
												x2: "176",
												y2: "48",
												stroke: "currentColor",
												strokeOpacity: "0.2",
												strokeWidth: "1",
												strokeDasharray: "3 3"
											}),
											/* @__PURE__ */ jsx("path", {
												d: "M12 40V22L16 15H27V29H46V40H12Z",
												stroke: "currentColor",
												strokeWidth: "1.6",
												strokeLinejoin: "round"
											}),
											/* @__PURE__ */ jsx("path", {
												d: "M13 23H22V15",
												stroke: "currentColor",
												strokeWidth: "1.3",
												strokeLinejoin: "round"
											}),
											/* @__PURE__ */ jsx("line", {
												x1: "29",
												y1: "13",
												x2: "29",
												y2: "29",
												stroke: "currentColor",
												strokeWidth: "1.4",
												strokeLinecap: "round"
											}),
											/* @__PURE__ */ jsx("path", {
												d: "M40 31H66V36H168V39H63V34H40V31Z",
												stroke: "#0064be",
												strokeWidth: "1.7",
												strokeLinejoin: "round"
											}),
											/* @__PURE__ */ jsx("rect", {
												x: "54",
												y: "20",
												width: "108",
												height: "10",
												rx: "1.5",
												stroke: "currentColor",
												strokeOpacity: "0.65",
												strokeWidth: "1.4"
											}),
											/* @__PURE__ */ jsx("path", {
												d: "M58 30L72 20L86 30L100 20L114 30L128 20L142 30L156 20",
												stroke: "currentColor",
												strokeOpacity: "0.4",
												strokeWidth: "1.1",
												strokeLinejoin: "round"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "20",
												cy: "42",
												r: "5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.6"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "35",
												cy: "42",
												r: "5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.6"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "46",
												cy: "42",
												r: "5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.6"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "126",
												cy: "42",
												r: "4.5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.6"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "137",
												cy: "42",
												r: "4.5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.6"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "148",
												cy: "42",
												r: "4.5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.6"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "159",
												cy: "42",
												r: "4.5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.6"
											})
										]
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/60 group-hover:text-white/90 transition-colors",
										children: "Step-Deck Flatbed"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "group rounded-xl border border-white/12 bg-white/[0.03] hover:border-primary/60 hover:bg-primary/[0.08] px-4 py-3.5 backdrop-blur-md transition-all duration-300",
									children: [/* @__PURE__ */ jsxs("svg", {
										viewBox: "0 0 180 54",
										fill: "none",
										xmlns: "http://www.w3.org/2000/svg",
										className: "w-full h-11 text-white/85 group-hover:text-white transition-colors",
										"aria-label": "Multi-Axle Modular Hydraulic Trailer",
										children: [
											/* @__PURE__ */ jsx("line", {
												x1: "4",
												y1: "48",
												x2: "176",
												y2: "48",
												stroke: "currentColor",
												strokeOpacity: "0.2",
												strokeWidth: "1",
												strokeDasharray: "3 3"
											}),
											/* @__PURE__ */ jsx("path", {
												d: "M10 40V19C10 16.8 11.6 15 14 15H25V28H54V40H10Z",
												stroke: "currentColor",
												strokeWidth: "1.6",
												strokeLinejoin: "round"
											}),
											/* @__PURE__ */ jsx("path", {
												d: "M10 24H19V15",
												stroke: "currentColor",
												strokeWidth: "1.3",
												strokeLinejoin: "round"
											}),
											/* @__PURE__ */ jsx("rect", {
												x: "27",
												y: "19",
												width: "22",
												height: "9",
												rx: "1",
												stroke: "currentColor",
												strokeOpacity: "0.6",
												strokeWidth: "1.3"
											}),
											/* @__PURE__ */ jsx("line", {
												x1: "54",
												y1: "36",
												x2: "68",
												y2: "36",
												stroke: "#F45300",
												strokeWidth: "1.8"
											}),
											/* @__PURE__ */ jsx("rect", {
												x: "68",
												y: "33",
												width: "102",
												height: "4.5",
												rx: "1",
												stroke: "#0064be",
												strokeWidth: "1.7"
											}),
											/* @__PURE__ */ jsx("path", {
												d: "M78 33V17C78 15.3 79.3 14 81 14H154C155.7 14 157 15.3 157 17V33",
												stroke: "currentColor",
												strokeOpacity: "0.7",
												strokeWidth: "1.5"
											}),
											/* @__PURE__ */ jsx("line", {
												x1: "96",
												y1: "14",
												x2: "96",
												y2: "33",
												stroke: "currentColor",
												strokeOpacity: "0.4",
												strokeWidth: "1.2"
											}),
											/* @__PURE__ */ jsx("line", {
												x1: "118",
												y1: "14",
												x2: "118",
												y2: "33",
												stroke: "currentColor",
												strokeOpacity: "0.4",
												strokeWidth: "1.2"
											}),
											/* @__PURE__ */ jsx("line", {
												x1: "140",
												y1: "14",
												x2: "140",
												y2: "33",
												stroke: "currentColor",
												strokeOpacity: "0.4",
												strokeWidth: "1.2"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "17",
												cy: "42",
												r: "4.5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.5"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "27",
												cy: "42",
												r: "4.5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.5"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "39",
												cy: "42",
												r: "4.5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.5"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "49",
												cy: "42",
												r: "4.5",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.5"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "77",
												cy: "42.5",
												r: "3.8",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.5"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "93",
												cy: "42.5",
												r: "3.8",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.5"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "109",
												cy: "42.5",
												r: "3.8",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.5"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "125",
												cy: "42.5",
												r: "3.8",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.5"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "141",
												cy: "42.5",
												r: "3.8",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.5"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "157",
												cy: "42.5",
												r: "3.8",
												fill: "#030611",
												stroke: "currentColor",
												strokeWidth: "1.5"
											})
										]
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/60 group-hover:text-white/90 transition-colors",
										children: "Multi-Axle Modular"
									})]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute right-5 bottom-6 z-30 flex flex-col items-center gap-2.5",
				children: [/* @__PURE__ */ jsxs("label", {
					title: "Globe rotation speed",
					className: "grid items-center justify-items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-2 py-2.5 text-[0.68rem] text-white backdrop-blur-md",
					style: {
						width: "2.4rem",
						height: "9.5rem",
						gridTemplateRows: "auto minmax(0, 1fr) auto"
					},
					children: [
						/* @__PURE__ */ jsx("span", {
							"aria-hidden": "true",
							className: "text-sm leading-none text-white/80",
							children: "↻"
						}),
						/* @__PURE__ */ jsx("input", {
							type: "range",
							min: 0,
							max: 5,
							step: .1,
							value: speedMultiplier,
							onChange: (e) => handleSpeedChange(Number(e.target.value)),
							"aria-label": "Globe rotation speed",
							className: "h-full w-4 cursor-pointer",
							style: {
								writingMode: "vertical-lr",
								direction: "rtl",
								accentColor: "#F45300"
							}
						}),
						/* @__PURE__ */ jsxs("span", {
							className: "font-mono text-[0.62rem] leading-none text-white/90",
							children: [speedMultiplier.toFixed(1), "×"]
						})
					]
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => setLabelsVisible((v) => !v),
					"aria-label": "Toggle city labels",
					title: "Toggle city labels",
					className: "flex size-9.5 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-white/15 cursor-pointer",
					children: labelsVisible ? /* @__PURE__ */ jsx(Eye, { className: "size-4" }) : /* @__PURE__ */ jsx(EyeOff, { className: "size-4 text-white/60" })
				})]
			})
		]
	});
}
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
			/* @__PURE__ */ jsx(ScrollDivider, { texts: [/* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-4 uppercase font-heading",
					children: [/* @__PURE__ */ jsx(Building2, {
						className: "size-12 shrink-0",
						strokeWidth: 2.5
					}), /* @__PURE__ */ jsx("span", { children: "Bellville South Headquarters" })]
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "mx-3.75 inline-flex items-center",
					children: "•"
				}),
				"\xA0",
				/* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-4 uppercase font-heading",
					children: [/* @__PURE__ */ jsx(Truck, {
						className: "size-12 shrink-0",
						strokeWidth: 2.5
					}), /* @__PURE__ */ jsx("span", { children: "Modern Multi-Axle Fleet" })]
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "mx-3.75 inline-flex items-center",
					children: "•"
				}),
				"\xA0",
				/* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-4 uppercase font-heading",
					children: [/* @__PURE__ */ jsx(Compass, {
						className: "size-12 shrink-0",
						strokeWidth: 2.5
					}), /* @__PURE__ */ jsx("span", { children: "Detailed Pre-Load Site Evaluations" })]
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "mx-3.75 inline-flex items-center",
					children: "•"
				}),
				"\xA0",
				/* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-4 uppercase font-heading",
					children: [/* @__PURE__ */ jsx(ShieldCheck, {
						className: "size-12 shrink-0",
						strokeWidth: 2.5
					}), /* @__PURE__ */ jsx("span", { children: "Comprehensive Liability & Equipment Cover" })]
				})
			] }), /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-4 uppercase font-heading",
					children: [/* @__PURE__ */ jsx(HardHat, {
						className: "size-12 shrink-0",
						strokeWidth: 2.5
					}), /* @__PURE__ */ jsx("span", { children: "Dedicated On-Site Load Supervisors" })]
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "mx-3.75 inline-flex items-center",
					children: "•"
				}),
				"\xA0",
				/* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-4 uppercase font-heading",
					children: [/* @__PURE__ */ jsx(ClipboardCheck, {
						className: "size-12 shrink-0",
						strokeWidth: 2.5
					}), /* @__PURE__ */ jsx("span", { children: "Audit-Ready Contractor Documentation" })]
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "mx-3.75 inline-flex items-center",
					children: "•"
				}),
				"\xA0",
				/* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-4 uppercase font-heading",
					children: [/* @__PURE__ */ jsx(CalendarClock, {
						className: "size-12 shrink-0",
						strokeWidth: 2.5
					}), /* @__PURE__ */ jsx("span", { children: "Flexible Short- & Long-Term Packages" })]
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "mx-3.75 inline-flex items-center",
					children: "•"
				}),
				"\xA0",
				/* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-4 uppercase font-heading",
					children: [/* @__PURE__ */ jsx(Clock, {
						className: "size-12 shrink-0",
						strokeWidth: 2.5
					}), /* @__PURE__ */ jsx("span", { children: "Western Cape & Nationwide Dispatch" })]
				})
			] })] }),
			/* @__PURE__ */ jsx(HomeIntroSection, {}),
			/* @__PURE__ */ jsx(HomeServicesSection, { services }),
			/* @__PURE__ */ jsx(Divider1, {
				leftImage: isolate_truck_trailer_load_left_default,
				rightImage: isolate_truck_trailer_load_default
			}),
			/* @__PURE__ */ jsx(HomeSafetySection, {}),
			/* @__PURE__ */ jsx(Globe, {}),
			/* @__PURE__ */ jsx(DarkCta, {})
		]
	});
}
Home.displayName = "Home";
Home.layout = AppLayout;
export { Home as default };

//# sourceMappingURL=home-CJKfLrMo.js.map