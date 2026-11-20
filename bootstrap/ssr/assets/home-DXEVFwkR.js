import { d as cn, l as buttonVariants, o as SpotlightCard, t as AppLayout, u as Wrapper } from "./app-layout-DCuwPKZC.js";
import { n as responsiveImages, t as ResponsiveImage } from "./responsive-image-CxkYlq3p.js";
import { t as FloatingStatCard } from "./floating-stat-card-CZ1lS9UY.js";
import { t as SectionHeading } from "./section-heading-CT93tXK3.js";
import { t as ServiceCard } from "./service-card-DXNwmBGu.js";
import { n as DividerSurface, t as ScrollDivider } from "./scroll-divider-CjH_P-yb.js";
import { Head, Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Building2, CalendarClock, CheckCircle2, ClipboardCheck, Clock, Compass, Eye, EyeOff, FileCheck2, HardHat, MapPin, ShieldCheck, Trophy, Truck } from "lucide-react";
import createGlobe from "cobe";
// resources/js/components/hero.tsx
function Hero() {
	return /* @__PURE__ */ jsx("section", {
		"aria-label": "Introduction",
		className: "relative",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative flex flex-col justify-end z-0 min-h-0 lg:min-h-[88vh] overflow-hidden bg-background lg:bg-[#020817] transition-colors duration-300",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative mt-16 sm:mt-20 lg:mt-0 w-full aspect-4/3 sm:aspect-16/9 md:aspect-2/1 lg:aspect-auto lg:absolute lg:inset-0 bg-background lg:bg-[#020817] origin-top overflow-hidden [mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)] lg:[mask-image:none] [-webkit-mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)] lg:[-webkit-mask-image:none]",
				children: [/* @__PURE__ */ jsx(ResponsiveImage, {
					source: responsiveImages.heavyHaulage02,
					sizes: "100vw",
					priority: true,
					alt: "Teemane Heavy Haulage abnormal load convoy transporting a Komatsu excavator",
					className: "w-full h-full contrast-115 object-cover object-[43%_46%] sm:object-[46%_46%] lg:object-[45%_42%] lg:absolute lg:top-[-15%] lg:h-[130%] lg:left-0"
				}), /* @__PURE__ */ jsx("div", {
					"aria-hidden": "true",
					className: "absolute inset-0 bg-linear-to-t from-black/70  to-transparent to-30%"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "relative z-10 w-full",
				children: /* @__PURE__ */ jsx(Wrapper, {
					className: "pt-6 sm:pt-8 lg:pt-44 pb-12 sm:pb-16 lg:pb-16",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "max-w-xl sm:max-w-2xl lg:max-w-xl text-left space-y-4",
							children: [/* @__PURE__ */ jsxs("h1", {
								className: "text-3xl sm:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter text-foreground lg:text-white leading-[1.04] drop-shadow-none lg:drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]",
								children: [
									"Moving the",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 lg:from-sky-400 lg:to-blue-400 pr-1",
										children: "Impossible"
									})
								]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm sm:text-base lg:text-lg text-muted-foreground lg:text-slate-200 font-normal leading-relaxed drop-shadow-none lg:drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]",
								children: "South Africa's most trusted heavy haulage experts. We engineer abnormal loads, oversized machinery transport, and turnkey cross-border logistics with zero compromise."
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col lg:items-end gap-4 shrink-0 pt-1 lg:pt-0",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center lg:justify-end gap-2 sm:gap-2.5 text-xs font-semibold",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 bg-muted/80 text-foreground border border-border lg:bg-[#000d1e]/75 lg:text-slate-100 lg:border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xs",
										children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-primary lg:text-sky-400 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Fully Insured" })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 bg-muted/80 text-foreground border border-border lg:bg-[#000d1e]/75 lg:text-slate-100 lg:border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xs",
										children: [/* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-primary lg:text-sky-400 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Nationwide & SADC" })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 bg-muted/80 text-foreground border border-border lg:bg-[#000d1e]/75 lg:text-slate-100 lg:border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xs",
										children: [/* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5 text-primary lg:text-sky-400 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "24/7 Dispatch" })]
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center lg:justify-end gap-3 pt-1",
								children: [/* @__PURE__ */ jsxs(Link, {
									href: "/contact-us",
									prefetch: "hover",
									className: buttonVariants({
										size: "lg",
										className: "px-7"
									}),
									children: [/* @__PURE__ */ jsx("span", { children: "Request A Quote" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
								}), /* @__PURE__ */ jsxs(Link, {
									href: "/services",
									prefetch: "hover",
									className: buttonVariants({
										variant: "outline",
										size: "lg",
										className: "px-7 lg:border-white/25 lg:bg-[#000d1e]/55 lg:hover:bg-[#000d1e]/80 lg:hover:border-white/40 lg:text-white lg:hover:text-white lg:backdrop-blur-md"
									}),
									children: [/* @__PURE__ */ jsx("span", { children: "View Fleet & Services" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
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
var highlights = [
	{
		value: "250T+",
		label: "Payload Capacity"
	},
	{
		value: "SADC",
		label: "Regional Corridors"
	},
	{
		value: "24/7",
		label: "Live Operations"
	}
];
function HomeIntroSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-16 sm:py-24 lg:py-28 bg-background",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-8",
				children: [
					/* @__PURE__ */ jsx(SectionHeading, {
						label: "Who We Are",
						title: /* @__PURE__ */ jsxs(Fragment, { children: [
							"THE ONLY NAME ",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500",
								children: "TRUSTED TO PERFORM"
							})
						] }),
						align: "left",
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ jsx("p", { children: "Established in 2012, Teemane Heavy Haulage prides itself on countless victories across South Africa's most demanding worksites. From high-stakes logistics to complex routing operations, we have redefined what's possible in abnormal load transport." }), /* @__PURE__ */ jsx("p", { children: "Backed by a state-of-the-art fleet of multi-axle modular trailers, high-capacity prime movers, and over 100 years of combined management experience, we bring the precise engineering, control, and capability required to deliver certainty in high-risk environments." })]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-3 gap-3 sm:gap-4 pt-1",
						children: highlights.map((item) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border bg-card px-3.5 py-3 sm:px-4 sm:py-3.5 shadow-xs",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-lg sm:text-2xl font-heading font-black tracking-tight text-primary",
								children: item.value
							}), /* @__PURE__ */ jsx("div", {
								className: "text-[11px] sm:text-xs font-semibold text-muted-foreground mt-0.5 leading-snug",
								children: item.label
							})]
						}, item.label))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "pt-1",
						children: /* @__PURE__ */ jsxs(Link, {
							href: "/about-us",
							prefetch: "hover",
							className: buttonVariants({ size: "xl" }),
							children: [/* @__PURE__ */ jsx("span", { children: "Our Story" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
						})
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative pb-8 lg:pb-0",
				children: [/* @__PURE__ */ jsx("div", {
					className: "aspect-4/3 sm:aspect-3/2 lg:aspect-4/3 xl:aspect-square rounded-2xl overflow-hidden border border-border shadow-xl bg-muted",
					children: /* @__PURE__ */ jsx(ResponsiveImage, {
						source: responsiveImages.heavyHaulage01,
						sizes: "(max-width: 1023px) calc(100vw - 2rem), 46vw",
						alt: "Teemane Heavy Haulage abnormal convoy staging with escort vehicles",
						className: "w-full h-full object-cover object-[52%_52%] hover:scale-105 transition-transform duration-700 motion-reduce:transition-none motion-reduce:hover:scale-100"
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
	return /* @__PURE__ */ jsx("section", {
		className: "py-16 sm:py-24 lg:py-28 bg-muted/40 border-y isolate border-border relative overflow-clip",
		children: /* @__PURE__ */ jsxs(Wrapper, { children: [
			/* @__PURE__ */ jsx(SectionHeading, {
				label: "Our Capabilities",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"ENGINEERED FOR THE",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500",
						children: "EXTRAORDINARY"
					})
				] }),
				align: "center",
				className: "mb-12 sm:mb-16",
				children: "When the scale is extraordinary, experience makes the difference. Our specialised abnormal transport solutions offer the engineered precision, modular capacity, and proven expertise needed to move oversized cargo across South Africa and the SADC region."
			}),
			/* @__PURE__ */ jsx("div", {
				className: cn("grid gap-6", isFourCol ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"),
				children: (services || []).map((service) => /* @__PURE__ */ jsx(ServiceCard, {
					service,
					sizes: isFourCol ? "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 23vw" : "(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 31vw"
				}, service.id))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-12 sm:mt-16 text-center",
				children: /* @__PURE__ */ jsxs(Link, {
					href: "/services",
					prefetch: "hover",
					className: buttonVariants({
						variant: "outline",
						size: "xl",
						className: "px-10"
					}),
					children: [/* @__PURE__ */ jsx("span", { children: "View All Services" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
				})
			})
		] })
	});
}
// resources/js/components/sections/home-safety-section.tsx
function HomeSafetySection() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-16 sm:py-24 lg:py-28 bg-background",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative pb-8 lg:pb-0 order-2 lg:order-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "aspect-4/3 sm:aspect-3/2 lg:aspect-4/3 xl:aspect-square rounded-2xl overflow-hidden border border-border shadow-xl bg-muted",
					children: /* @__PURE__ */ jsx(ResponsiveImage, {
						source: responsiveImages.heavyHaulage03,
						sizes: "(max-width: 1023px) calc(100vw - 2rem), 46vw",
						alt: "Teemane Heavy Haulage push-pull convoy navigating a mountain pass safely",
						className: "w-full h-full object-cover object-[58%_46%] hover:scale-105 transition-transform duration-700 motion-reduce:transition-none motion-reduce:hover:scale-100"
					})
				}), /* @__PURE__ */ jsx(FloatingStatCard, {
					value: "500+",
					label: "Projects Completed",
					position: "bottom-left"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-8 order-1 lg:order-2",
				children: [
					/* @__PURE__ */ jsx(SectionHeading, {
						label: "Where Excellence Begins",
						title: /* @__PURE__ */ jsxs(Fragment, { children: [
							"SAFETY STARTS ",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500",
								children: "BEFORE THE LIFT"
							})
						] }),
						align: "left",
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ jsx("p", { children: "With services available for both short- and long-term hire and backed by prompt, professional support, THH oversees every stage from initial consultation and detailed site inspections to full project execution." }), /* @__PURE__ */ jsx("p", { children: "For specialised projects, we incorporate advanced lift studies and CAD drawings, allowing us to anticipate challenges and engineer safe, efficient solutions before operations begin." })]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid sm:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3.5 rounded-xl border border-border bg-card p-4 shadow-xs",
							children: [/* @__PURE__ */ jsx("div", {
								className: "size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ jsx(Compass, { className: "w-5 h-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-sm font-heading font-black uppercase tracking-tight text-foreground",
								children: "CAD & Route Studies"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed",
								children: "Swept-path simulations, bridge clearances, and engineered load distribution."
							})] })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3.5 rounded-xl border border-border bg-card p-4 shadow-xs",
							children: [/* @__PURE__ */ jsx("div", {
								className: "size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ jsx(FileCheck2, { className: "w-5 h-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-sm font-heading font-black uppercase tracking-tight text-foreground",
								children: "Full Statutory Permits"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed",
								children: "Abnormal permits, traffic escorts, and audit-ready HSE documentation."
							})] })]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-1",
						children: [/* @__PURE__ */ jsxs(Link, {
							prefetch: "hover",
							href: "/contact-us",
							className: buttonVariants({ size: "xl" }),
							children: [/* @__PURE__ */ jsx("span", { children: "Start a Project" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
						}), /* @__PURE__ */ jsx(Link, {
							prefetch: "hover",
							href: "/about-us",
							className: buttonVariants({
								variant: "outline",
								size: "xl"
							}),
							children: /* @__PURE__ */ jsx("span", { children: "Our Approach" })
						})]
					})
				]
			})]
		}) })
	});
}
// resources/js/components/sections/dark-cta.tsx
var capabilities = [
	"Expert Route Surveying & Engineering",
	"Abnormal Load Permits & Specialised Escorting",
	"Comprehensive End-to-End Project Management",
	"Multi-Axle Modular Transport & SADC Logistics"
];
function DarkCta() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-16 sm:py-24 lg:py-28 isolate bg-muted/40 text-foreground relative overflow-hidden border-y border-border",
		children: /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-7 space-y-8",
					children: [/* @__PURE__ */ jsx(SectionHeading, {
						label: "Proven Leadership",
						title: /* @__PURE__ */ jsxs(Fragment, { children: [
							"100+ Years of",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/75",
								children: "Combined Expertise."
							})
						] }),
						align: "left",
						children: "With over a century of collective industry experience, our leadership team delivers the technical rigor and practical know-how needed to master Africa's toughest transport routes. We engineer every transit, eliminate risk, and deliver certainty from start to finish."
					}), /* @__PURE__ */ jsx("ul", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2",
						children: capabilities.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(SpotlightCard, {
							theme: "dark",
							spotlightColor: "var(--spotlight-color)",
							intensity: .2,
							spotlightSize: 160,
							softness: .7,
							shape: "circle",
							borderGlow: .85,
							proximity: 160,
							smoothing: .5,
							grain: 0,
							ambient: false,
							flare: true,
							className: "h-full rounded-xl! p-4! flex items-start gap-3.5 shadow-xs!",
							style: {
								"--spotlight-card-surface": "var(--card)",
								"--spotlight-card-border": "var(--border)"
							},
							children: [/* @__PURE__ */ jsx("div", {
								className: "size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5",
								children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4" })
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-heading font-black text-foreground tracking-tight uppercase leading-snug",
								children: item
							})]
						}) }, item))
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-5 relative",
					children: [/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "pointer-events-none absolute -inset-4 bg-primary/10 blur-3xl rounded-full"
					}), /* @__PURE__ */ jsxs(SpotlightCard, {
						theme: "dark",
						spotlightColor: "var(--spotlight-color)",
						intensity: .2,
						spotlightSize: 160,
						softness: .7,
						shape: "circle",
						borderGlow: .85,
						proximity: 160,
						smoothing: .5,
						grain: 0,
						ambient: false,
						flare: true,
						className: "text-card-foreground rounded-3xl! p-8! sm:p-10! md:p-12! shadow-xl! text-center",
						style: {
							"--spotlight-card-surface": "var(--card)",
							"--spotlight-card-border": "var(--border)"
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								"aria-hidden": "true",
								className: "pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_13px,color-mix(in_oklch,var(--primary)_7%,transparent)_13px,color-mix(in_oklch,var(--primary)_7%,transparent)_14px)] mask-[radial-gradient(ellipse_at_top_right,black_15%,transparent_75%)]"
							}),
							/* @__PURE__ */ jsx("div", {
								"aria-hidden": "true",
								className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
							}),
							/* @__PURE__ */ jsx("div", {
								"aria-hidden": "true",
								className: "pointer-events-none absolute -top-24 -right-24 size-60 rounded-full bg-primary/12 blur-3xl"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative z-10",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "size-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mx-auto mb-6 shadow-xs",
										children: /* @__PURE__ */ jsx(Trophy, { className: "w-8 h-8" })
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-card-foreground mb-4",
										children: "Ready for your next project?"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed",
										children: "Let us engineer the optimal transport solution for your oversized and abnormal cargo needs."
									}),
									/* @__PURE__ */ jsxs(Link, {
										href: "/contact-us",
										prefetch: "hover",
										className: buttonVariants({
											size: "xl",
											className: "w-full"
										}),
										children: [/* @__PURE__ */ jsx("span", { children: "Request a Quote" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })]
									})
								]
							})
						]
					})]
				})]
			})
		})
	});
}
// resources/js/components/ParticleText.tsx
var INHERIT = /^(currentcolor|inherit)$/i;
var TONES = 12;
var FADES = 8;
var HEAT_RANGE = 36;
var HEAT_DEADZONE = 3;
var TAU = Math.PI * 2;
var REST_ANGLE = -Math.PI / 4;
var BURST_DAMPING = 7.5;
var SCAN_FADE = [
	0,
	.12,
	.42,
	.78,
	1,
	.78,
	.42,
	.12,
	0
];
var FADE_FLOOR = {
	gather: 0,
	rain: .55,
	spiral: .45,
	scan: .35
};
var clamp = (value, min, max) => Math.min(Math.max(value, min), max);
var easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
var easeInFall = (t) => Math.pow(t, 1.7);
var easeInOutCubic = (t) => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
var fadeAlpha = (level) => .35 + .65 * level / 7;
var wrapHalfTurn = (angle) => (angle % Math.PI + Math.PI * 1.5) % Math.PI - Math.PI / 2;
var resolveFontSize = (value, container, fontWeight, fontFamily) => {
	if (typeof value === "number") return value;
	const probe = document.createElement("span");
	probe.textContent = "M";
	probe.style.position = "absolute";
	probe.style.visibility = "hidden";
	probe.style.pointerEvents = "none";
	probe.style.fontSize = value;
	probe.style.fontWeight = String(fontWeight);
	probe.style.fontFamily = fontFamily;
	container.appendChild(probe);
	const size = parseFloat(window.getComputedStyle(probe).fontSize) || 96;
	probe.remove();
	return size;
};
var waitForFonts = async (font) => {
	if (!("fonts" in document)) return;
	try {
		await document.fonts.load(font);
	} catch {}
	await document.fonts.ready;
};
var ParticleText = ({ text = "React Bits", particleSize = 2, density = 4, color = "currentColor", highlightColor = "#ff5a36", highlightMode = "motion", shape = "circle", intro = "gather", scatter = 180, gatherDuration = 1600, stagger = 420, clickBurst = true, burstStrength = 1, pointerRepel = 40, repelRadius = 120, idleDrift = .7, trigger = "mount", fontSize = "clamp(3rem, 12vw, 8rem)", fontWeight = 800, fontFamily = "inherit", glow = true, className = "", style }) => {
	const containerRef = useRef(null);
	const canvasRef = useRef(null);
	const settingsRef = useRef(null);
	const wakeRef = useRef(() => {});
	useEffect(() => {
		settingsRef.current = {
			text,
			particleSize,
			density,
			color,
			highlightColor,
			highlightMode,
			shape,
			intro,
			scatter,
			gatherDuration,
			stagger,
			clickBurst,
			burstStrength,
			pointerRepel,
			repelRadius,
			idleDrift,
			trigger,
			fontSize,
			fontWeight,
			fontFamily,
			glow
		};
		wakeRef.current();
	});
	useEffect(() => {
		const container = containerRef.current;
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");
		const layer = document.createElement("canvas");
		const layerCtx = layer.getContext("2d");
		const probe = document.createElement("canvas");
		probe.width = 1;
		probe.height = 1;
		const probeCtx = probe.getContext("2d", { willReadFrequently: true });
		if (!container || !canvas || !ctx || !layerCtx || !probeCtx) return void 0;
		const motionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
		let reducedMotion = !!motionQuery?.matches;
		let particles = [];
		let raf = 0;
		let sampleFrame = 0;
		let buildId = 0;
		let introPending = true;
		let sampledKey = "";
		let sampledText = "";
		let requestedSize = "";
		let gathering = false;
		let gatherStart = 0;
		let introMode = "gather";
		let bursting = false;
		let width = 0;
		let height = 0;
		let dpr = 1;
		let last = 0;
		let visible = true;
		let alive = true;
		let colorKey = "";
		let palette = [];
		let glowColor = "#000000";
		let accent = {
			r: 0,
			g: 0,
			b: 0
		};
		const bounds = {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		};
		const swirl = {
			x: 0,
			y: 0,
			aspect: 1
		};
		const scan = {
			from: 0,
			to: 0,
			top: 0,
			bottom: 0,
			duration: 1
		};
		const buckets = Array.from({ length: 96 }, () => []);
		const pointer = {
			active: false,
			x: 0,
			y: 0,
			smoothX: 0,
			smoothY: 0
		};
		const family = (s) => !s.fontFamily || s.fontFamily === "inherit" ? window.getComputedStyle(container).fontFamily || "sans-serif" : s.fontFamily;
		const layoutKey = (s) => [
			s.text,
			s.fontSize,
			s.fontWeight,
			family(s),
			s.density
		].join("|");
		const sizeKey = () => {
			const rect = container.getBoundingClientRect();
			return `${Math.floor(rect.width)}x${Math.floor(rect.height)}@${Math.min(window.devicePixelRatio || 1, 2)}`;
		};
		const toRgb = (value) => {
			probeCtx.clearRect(0, 0, 1, 1);
			probeCtx.fillStyle = "#000000";
			probeCtx.fillStyle = value;
			probeCtx.fillRect(0, 0, 1, 1);
			const [r, g, b] = probeCtx.getImageData(0, 0, 1, 1).data;
			return {
				r,
				g,
				b
			};
		};
		const ensureColors = (s) => {
			const current = window.getComputedStyle(container).color || "#000000";
			const pick = (value) => !value || INHERIT.test(String(value).trim()) ? current : value;
			const base = pick(s.color);
			const highlight = pick(s.highlightColor);
			const key = `${base}|${highlight}`;
			if (key === colorKey) return;
			colorKey = key;
			const from = toRgb(base);
			accent = toRgb(highlight);
			glowColor = `rgb(${accent.r}, ${accent.g}, ${accent.b})`;
			palette = Array.from({ length: TONES }, (_, i) => {
				const t = i / 11;
				return `rgb(${Math.round(from.r + (accent.r - from.r) * t)}, ${Math.round(from.g + (accent.g - from.g) * t)}, ${Math.round(from.b + (accent.b - from.b) * t)})`;
			});
		};
		const travelTime = (s, particle) => {
			if (reducedMotion) return 1;
			if (introMode === "scan") return s.gatherDuration * .4;
			if (introMode === "rain") return s.gatherDuration * (.45 + particle.depth * .3);
			return s.gatherDuration;
		};
		const startIntro = (initial) => {
			const s = settingsRef.current;
			if (!particles.length || !s) return;
			introMode = s.intro;
			const spread = reducedMotion ? 0 : s.scatter;
			const tall = Math.max(1, bounds.bottom - bounds.top);
			swirl.x = (bounds.left + bounds.right) / 2;
			swirl.y = (bounds.top + bounds.bottom) / 2;
			swirl.aspect = clamp(width / Math.max(1, height), 1, 2.5);
			scan.from = bounds.left - 24;
			scan.to = bounds.right + 24;
			scan.top = bounds.top - tall * .3;
			scan.bottom = bounds.bottom + tall * .3;
			scan.duration = Math.max(200, s.gatherDuration * .8);
			let reach = 1;
			if (introMode === "spiral") for (const particle of particles) {
				const dx = particle.targetX - swirl.x;
				const dy = (particle.targetY - swirl.y) * swirl.aspect;
				particle.radius = Math.hypot(dx, dy);
				particle.heading = Math.atan2(dy, dx);
				reach = Math.max(reach, particle.radius);
			}
			for (const particle of particles) {
				let delay = particle.seed * s.stagger;
				let startX;
				let startY;
				if (introMode === "rain") {
					startX = particle.targetX + (particle.depth - .9) * 16;
					startY = -12 - particle.depth * 30 - particle.seed * height * .22;
					delay = particle.seed * s.stagger * 1.3;
				} else if (introMode === "spiral") {
					particle.startRadius = particle.radius * (1.04 + particle.depth * .22) + spread * .3 * particle.seed;
					particle.swirl = (1.5 + 2.6 * (1 - particle.radius / reach)) * (.85 + particle.seed * .3);
					const angle = particle.heading + particle.swirl;
					startX = swirl.x + Math.cos(angle) * particle.startRadius;
					startY = swirl.y + Math.sin(angle) * particle.startRadius / swirl.aspect;
					delay = particle.seed * s.stagger;
				} else if (introMode === "scan") {
					const along = (particle.targetX - scan.from) / Math.max(1, scan.to - scan.from);
					startX = particle.targetX + 3 + particle.seed * 8;
					startY = scan.top + (particle.seed * 7.31 + particle.depth * 3.7) % 1 * (scan.bottom - scan.top);
					delay = along * scan.duration + particle.seed * s.stagger * .15;
				} else {
					const angle = particle.seed * TAU;
					const distance = spread * (.35 + particle.depth * .75);
					startX = particle.targetX + Math.cos(angle) * distance + (particle.seed - .5) * spread * .45;
					startY = particle.targetY + Math.sin(angle) * distance + (particle.depth - .9) * spread * .45;
				}
				particle.startX = startX;
				particle.startY = startY;
				particle.delay = reducedMotion ? 0 : delay;
				if (initial) {
					particle.x = startX;
					particle.y = startY;
				}
			}
			gatherStart = performance.now();
			gathering = true;
			wake();
		};
		const burst = (x, y) => {
			const s = settingsRef.current;
			if (!s || !particles.length) return;
			const strength = Math.max(0, Number(s.burstStrength) || 0);
			if (!strength) return;
			const radius = 90 + 70 * Math.sqrt(strength) + s.repelRadius * .25;
			for (const particle of particles) {
				const dx = particle.x - x;
				const dy = particle.y - y;
				const distance = Math.hypot(dx, dy);
				if (distance > radius) continue;
				const falloff = 1 - distance / radius;
				const power = 950 * strength * (.2 + .8 * falloff * falloff) * (.65 + particle.depth * .45);
				const angle = Math.atan2(dy, dx) + (particle.seed - .5) * .9;
				particle.vx += Math.cos(angle) * power;
				particle.vy += Math.sin(angle) * power;
			}
			bursting = true;
			wake();
		};
		const drawGroup = (target, group, base, shape) => {
			target.beginPath();
			if (shape === "line") {
				for (const particle of group) {
					const dx = Math.cos(particle.angle) * particle.length * .5;
					const dy = Math.sin(particle.angle) * particle.length * .5;
					target.moveTo(particle.x - dx, particle.y - dy);
					target.lineTo(particle.x + dx, particle.y + dy);
				}
				target.stroke();
				return;
			}
			const square = shape === "square";
			for (const particle of group) {
				const size = square ? base : Math.max(.6, base * (.75 + particle.weight * .45));
				if (square || size <= 2.1) target.rect(particle.x - size / 2, particle.y - size / 2, size, size);
				else {
					target.moveTo(particle.x + size / 2, particle.y);
					target.arc(particle.x, particle.y, size / 2, 0, TAU);
				}
			}
			target.fill();
		};
		const drawScan = (now, s) => {
			const progress = (now - gatherStart) / scan.duration;
			if (introMode !== "scan" || progress < 0 || progress > 1.3 || reducedMotion) return false;
			const x = scan.from + (scan.to - scan.from) * clamp(progress, 0, 1);
			const alpha = clamp(progress / .08, 0, 1) * clamp((1.3 - progress) / .3, 0, 1);
			const gradient = ctx.createLinearGradient(0, scan.top, 0, scan.bottom);
			SCAN_FADE.forEach((level, i) => {
				gradient.addColorStop(i / (SCAN_FADE.length - 1), `rgba(${accent.r}, ${accent.g}, ${accent.b}, ${level})`);
			});
			ctx.globalAlpha = alpha * .85;
			ctx.fillStyle = gradient;
			if (s.glow) {
				ctx.shadowColor = glowColor;
				ctx.shadowBlur = 8 * dpr;
			}
			ctx.fillRect(x - .75, scan.top, 1.5, scan.bottom - scan.top);
			ctx.shadowBlur = 0;
			ctx.shadowColor = "transparent";
			ctx.globalAlpha = 1;
			return true;
		};
		const step = (now) => {
			const s = settingsRef.current;
			if (!s) return false;
			const dt = last ? Math.min(.05, Math.max(0, (now - last) / 1e3)) : 1 / 60;
			last = now;
			ensureColors(s);
			const frames = Math.max(dt * 60, .001);
			const follow = reducedMotion ? 1 : 1 - Math.pow(.78, frames);
			const chase = 1 - Math.pow(.82, frames);
			const turn = 1 - Math.pow(.72, frames);
			pointer.smoothX += (pointer.x - pointer.smoothX) * chase;
			pointer.smoothY += (pointer.y - pointer.smoothY) * chase;
			const repel = pointer.active && !reducedMotion && s.pointerRepel > 0 && s.repelRadius > 0;
			const drift = !reducedMotion && s.idleDrift > 0;
			const motionHeat = s.highlightMode !== "gradient";
			const lines = s.shape === "line";
			const floor = gathering ? FADE_FLOOR[introMode] ?? 0 : 0;
			const time = now * .001;
			const sizeBase = Math.max(.1, Number(s.particleSize) || 0);
			const restLength = Math.max(2, sizeBase * .8 + Math.max(2, Math.floor(Number(s.density) || 0)) * .7);
			let complete = true;
			let moving = false;
			let settling = false;
			for (const bucket of buckets) bucket.length = 0;
			for (const particle of particles) {
				let baseX = particle.targetX;
				let baseY = particle.targetY;
				let progress = 1;
				let hidden = false;
				if (gathering) {
					const local = (now - gatherStart - particle.delay) / Math.max(1, travelTime(s, particle));
					progress = clamp(local, 0, 1);
					if (introMode === "scan" && local < 0) hidden = true;
					if (introMode === "spiral") {
						const eased = easeInOutCubic(progress);
						const radius = particle.startRadius + (particle.radius - particle.startRadius) * eased;
						const angle = particle.heading + particle.swirl * (1 - eased);
						baseX = swirl.x + Math.cos(angle) * radius;
						baseY = swirl.y + Math.sin(angle) * radius / swirl.aspect;
					} else {
						const eased = introMode === "rain" ? easeInFall(progress) : easeOutCubic(progress);
						baseX = particle.startX + (particle.targetX - particle.startX) * eased;
						baseY = particle.startY + (particle.targetY - particle.startY) * eased;
					}
					if (progress < 1) complete = false;
				} else if (drift) {
					baseX += Math.sin(time * .9 + particle.seed * 10) * s.idleDrift * particle.depth;
					baseY += Math.cos(time * .75 + particle.depth * 10) * s.idleDrift * particle.depth;
				}
				if (bursting) {
					particle.vx += (-18 * particle.ox - BURST_DAMPING * particle.vx) * dt;
					particle.vy += (-18 * particle.oy - BURST_DAMPING * particle.vy) * dt;
					particle.ox += particle.vx * dt;
					particle.oy += particle.vy * dt;
					if (Math.abs(particle.ox) + Math.abs(particle.oy) > .05 || Math.abs(particle.vx) + Math.abs(particle.vy) > 1) settling = true;
					else {
						particle.ox = 0;
						particle.oy = 0;
						particle.vx = 0;
						particle.vy = 0;
					}
					baseX += particle.ox;
					baseY += particle.oy;
				}
				if (repel) {
					const dx = baseX - pointer.smoothX;
					const dy = baseY - pointer.smoothY;
					const distance = Math.hypot(dx, dy);
					if (distance > 0 && distance < s.repelRadius) {
						const force = Math.pow(1 - distance / s.repelRadius, 2) * s.pointerRepel;
						baseX += dx / distance * force;
						baseY += dy / distance * force;
					}
				}
				const moveX = (baseX - particle.x) * follow;
				const moveY = (baseY - particle.y) * follow;
				particle.x += moveX;
				particle.y += moveY;
				if (Math.abs(moveX) + Math.abs(moveY) > .02) moving = true;
				if (lines) {
					const speed = Math.hypot(moveX, moveY) / frames;
					const offset = wrapHalfTurn((speed > .3 ? Math.atan2(moveY, moveX) : REST_ANGLE) - particle.angle);
					particle.angle += offset * turn;
					if (Math.abs(offset) > .01) moving = true;
					particle.length = restLength + Math.min(restLength * 4, speed * 1.6);
				}
				if (hidden) continue;
				const heat = motionHeat ? clamp((Math.hypot(particle.x - particle.targetX, particle.y - particle.targetY) - HEAT_DEADZONE) / HEAT_RANGE, 0, 1) : particle.tone;
				const tone = Math.round(heat * 11);
				const fade = Math.round((floor + (1 - floor) * progress) * 7);
				buckets[fade * TONES + tone].push(particle);
			}
			if (gathering && complete) gathering = false;
			if (bursting && !settling) bursting = false;
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.globalAlpha = 1;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			const strokeWidth = Math.max(1, sizeBase * .65);
			if (lines) {
				ctx.lineWidth = strokeWidth;
				ctx.lineCap = "round";
			}
			if (s.glow) {
				layerCtx.setTransform(1, 0, 0, 1, 0, 0);
				layerCtx.clearRect(0, 0, layer.width, layer.height);
				layerCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
				layerCtx.fillStyle = glowColor;
				layerCtx.strokeStyle = glowColor;
				layerCtx.lineWidth = strokeWidth;
				layerCtx.lineCap = "round";
				let lit = false;
				for (let fade = 0; fade < FADES; fade++) for (let tone = 1; tone < TONES; tone++) {
					const group = buckets[fade * TONES + tone];
					if (!group.length) continue;
					layerCtx.globalAlpha = tone / 11 * fadeAlpha(fade);
					drawGroup(layerCtx, group, sizeBase, s.shape);
					lit = true;
				}
				layerCtx.globalAlpha = 1;
				if (lit) {
					ctx.shadowColor = glowColor;
					ctx.shadowBlur = (3 + sizeBase * 1.5) * dpr;
					ctx.drawImage(layer, 0, 0, width, height);
					ctx.shadowBlur = 0;
					ctx.shadowColor = "transparent";
				}
			}
			for (let fade = 0; fade < FADES; fade++) {
				ctx.globalAlpha = fadeAlpha(fade);
				for (let tone = 0; tone < TONES; tone++) {
					const group = buckets[fade * TONES + tone];
					if (!group.length) continue;
					if (lines) ctx.strokeStyle = palette[tone];
					else ctx.fillStyle = palette[tone];
					drawGroup(ctx, group, sizeBase, s.shape);
				}
			}
			ctx.globalAlpha = 1;
			const scanning = drawScan(now, s);
			return gathering || moving || repel || drift || bursting || scanning;
		};
		const frame = (now) => {
			raf = 0;
			if (!alive) return;
			const s = settingsRef.current;
			if (s) {
				const key = layoutKey(s);
				if (key !== sampledKey) {
					queueSample(s.text !== sampledText);
					sampledKey = key;
					sampledText = s.text;
				}
			}
			if (step(now) && visible && alive) raf = requestAnimationFrame(frame);
		};
		function wake() {
			if (raf || !visible || !alive) return;
			last = 0;
			raf = requestAnimationFrame(frame);
		}
		wakeRef.current = wake;
		const sampleText = async () => {
			const s = settingsRef.current;
			if (!s) return;
			const currentBuild = ++buildId;
			const rect = container.getBoundingClientRect();
			const nextWidth = Math.floor(rect.width);
			const nextHeight = Math.floor(rect.height);
			requestedSize = sizeKey();
			sampledKey = layoutKey(s);
			sampledText = s.text;
			if (nextWidth <= 0 || nextHeight <= 0) return;
			const nextDpr = Math.min(window.devicePixelRatio || 1, 2);
			const resolvedFamily = family(s);
			let resolvedSize = resolveFontSize(s.fontSize, container, s.fontWeight, resolvedFamily);
			let font = `${s.fontWeight} ${resolvedSize}px ${resolvedFamily}`;
			await waitForFonts(font);
			if (currentBuild !== buildId || !alive) return;
			const offscreen = document.createElement("canvas");
			const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
			if (!offCtx) return;
			const content = String(s.text || " ");
			const maxTextWidth = nextWidth * .92;
			offCtx.font = font;
			let metrics = offCtx.measureText(content);
			const measuredWidth = Math.max(1, metrics.width);
			if (measuredWidth > maxTextWidth) {
				resolvedSize = Math.max(18, resolvedSize * (maxTextWidth / measuredWidth));
				font = `${s.fontWeight} ${resolvedSize}px ${resolvedFamily}`;
				await waitForFonts(font);
				if (currentBuild !== buildId || !alive) return;
				offCtx.font = font;
				metrics = offCtx.measureText(content);
			}
			const left = Math.ceil(metrics.actualBoundingBoxLeft || 0);
			const right = Math.ceil(metrics.actualBoundingBoxRight || metrics.width);
			const ascent = Math.ceil(metrics.actualBoundingBoxAscent || resolvedSize * .78);
			const descent = Math.ceil(metrics.actualBoundingBoxDescent || resolvedSize * .22);
			const padding = Math.max(12, Math.ceil(resolvedSize * .08));
			const textWidth = Math.max(1, left + right);
			const textHeight = Math.max(1, ascent + descent);
			offscreen.width = textWidth + padding * 2;
			offscreen.height = textHeight + padding * 2;
			offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
			offCtx.font = font;
			offCtx.textAlign = "left";
			offCtx.textBaseline = "alphabetic";
			offCtx.fillStyle = "#ffffff";
			offCtx.fillText(content, padding - left, padding + ascent);
			const imageData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height);
			const targets = [];
			const sampleStep = Math.max(2, Math.floor(s.density));
			for (let y = 0; y < offscreen.height; y += sampleStep) for (let x = 0; x < offscreen.width; x += sampleStep) {
				const alpha = imageData.data[(y * offscreen.width + x) * 4 + 3];
				if (alpha > 40) targets.push({
					x: nextWidth / 2 - offscreen.width / 2 + x,
					y: nextHeight / 2 - offscreen.height / 2 + y,
					alpha: alpha / 255
				});
			}
			const maxParticles = Math.max(900, Math.min(5200, Math.floor(nextWidth * nextHeight / 90)));
			const stride = Math.max(1, Math.ceil(targets.length / maxParticles));
			const selected = targets.filter((_, index) => index % stride === 0);
			const intro = introPending && !reducedMotion;
			introPending = false;
			width = nextWidth;
			height = nextHeight;
			dpr = nextDpr;
			canvas.width = Math.max(1, Math.floor(width * dpr));
			canvas.height = Math.max(1, Math.floor(height * dpr));
			layer.width = canvas.width;
			layer.height = canvas.height;
			bounds.left = Infinity;
			bounds.right = -Infinity;
			bounds.top = Infinity;
			bounds.bottom = -Infinity;
			for (const target of selected) {
				bounds.left = Math.min(bounds.left, target.x);
				bounds.right = Math.max(bounds.right, target.x);
				bounds.top = Math.min(bounds.top, target.y);
				bounds.bottom = Math.max(bounds.bottom, target.y);
			}
			if (!selected.length) {
				bounds.left = bounds.right = width / 2;
				bounds.top = bounds.bottom = height / 2;
			}
			particles = selected.map((target, index) => {
				const seed = (index * 9301 + 49297) % 233280 / 233280;
				const depth = .45 + (index * 233 + 97) % 1e3 / 1e3 * .9;
				return {
					x: target.x,
					y: target.y,
					startX: target.x,
					startY: target.y,
					targetX: target.x,
					targetY: target.y,
					weight: target.alpha,
					tone: clamp(target.x / Math.max(1, width) + (seed - .5) * .35, 0, 1),
					seed,
					depth,
					delay: 0,
					ox: 0,
					oy: 0,
					vx: 0,
					vy: 0,
					angle: REST_ANGLE,
					length: 0,
					radius: 0,
					heading: 0,
					startRadius: 0,
					swirl: 0
				};
			});
			bursting = false;
			if (!pointer.active) {
				pointer.x = width / 2;
				pointer.y = height / 2;
				pointer.smoothX = pointer.x;
				pointer.smoothY = pointer.y;
			}
			if (intro) startIntro(true);
			else gathering = false;
			step(performance.now());
			wake();
		};
		function queueSample(intro) {
			if (intro) introPending = true;
			if (sampleFrame) cancelAnimationFrame(sampleFrame);
			sampleFrame = requestAnimationFrame(() => {
				sampleFrame = 0;
				sampleText();
			});
		}
		const locate = (event) => {
			const rect = canvas.getBoundingClientRect();
			pointer.x = event.clientX - rect.left;
			pointer.y = event.clientY - rect.top;
		};
		const handlePointerMove = (event) => {
			locate(event);
			if (!pointer.active) {
				pointer.smoothX = pointer.x;
				pointer.smoothY = pointer.y;
			}
			pointer.active = true;
			wake();
		};
		const handlePointerLeave = () => {
			pointer.active = false;
			wake();
		};
		const handlePointerEnter = (event) => {
			handlePointerMove(event);
			if (settingsRef.current?.trigger === "hover") startIntro(false);
		};
		const handlePointerDown = (event) => {
			const s = settingsRef.current;
			if (!s || s.trigger === "click" || !s.clickBurst || reducedMotion) return;
			const rect = canvas.getBoundingClientRect();
			burst(event.clientX - rect.left, event.clientY - rect.top);
		};
		const handleClick = () => {
			if (settingsRef.current?.trigger === "click") startIntro(false);
		};
		const handleReduceMotionChange = (event) => {
			reducedMotion = event.matches;
			if (reducedMotion) {
				gathering = false;
				bursting = false;
				particles.forEach((particle) => {
					particle.x = particle.targetX;
					particle.y = particle.targetY;
					particle.ox = 0;
					particle.oy = 0;
					particle.vx = 0;
					particle.vy = 0;
				});
			}
			wake();
		};
		motionQuery?.addEventListener?.("change", handleReduceMotionChange);
		canvas.addEventListener("pointerenter", handlePointerEnter);
		canvas.addEventListener("pointermove", handlePointerMove);
		canvas.addEventListener("pointerleave", handlePointerLeave);
		canvas.addEventListener("pointerdown", handlePointerDown);
		canvas.addEventListener("click", handleClick);
		const resizeObserver = new ResizeObserver(() => {
			if (sizeKey() !== requestedSize) queueSample(false);
		});
		resizeObserver.observe(container);
		const intersectionObserver = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting;
			wake();
		});
		intersectionObserver.observe(container);
		const themeObserver = new MutationObserver(wake);
		for (const node of [document.documentElement, document.body]) if (node) themeObserver.observe(node, {
			attributes: true,
			attributeFilter: [
				"class",
				"style",
				"data-theme"
			]
		});
		const schemeQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
		schemeQuery?.addEventListener?.("change", wake);
		sampleText();
		return () => {
			alive = false;
			buildId += 1;
			wakeRef.current = () => {};
			resizeObserver.disconnect();
			intersectionObserver.disconnect();
			themeObserver.disconnect();
			schemeQuery?.removeEventListener?.("change", wake);
			motionQuery?.removeEventListener?.("change", handleReduceMotionChange);
			canvas.removeEventListener("pointerenter", handlePointerEnter);
			canvas.removeEventListener("pointermove", handlePointerMove);
			canvas.removeEventListener("pointerleave", handlePointerLeave);
			canvas.removeEventListener("pointerdown", handlePointerDown);
			canvas.removeEventListener("click", handleClick);
			if (raf) cancelAnimationFrame(raf);
			if (sampleFrame) cancelAnimationFrame(sampleFrame);
		};
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		ref: containerRef,
		className: `relative isolate block h-full min-h-[240px] w-full overflow-hidden touch-pan-y ${className}`.trim(),
		style,
		children: [/* @__PURE__ */ jsx("canvas", {
			ref: canvasRef,
			className: "absolute inset-0 block h-full w-full",
			"aria-hidden": "true"
		}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: text
		})]
	});
};
// resources/js/components/ui/divider-3.tsx
function Divider3({ text = "Teemane Heavy Haulage", highlightColor = "#38bdf8", heightClassName = "h-[240px] sm:h-[300px] lg:h-[360px]", particleProps, className, ...props }) {
	return /* @__PURE__ */ jsxs(DividerSurface, {
		className: cn("select-none font-heading", className),
		...props,
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-48 rounded-full bg-primary/25 blur-[90px]"
		}), /* @__PURE__ */ jsx("div", {
			className: cn("relative w-full px-4 sm:px-6 lg:px-8", heightClassName),
			children: /* @__PURE__ */ jsx(ParticleText, {
				text,
				particleSize: 3,
				density: 5,
				color: "currentColor",
				highlightColor,
				highlightMode: "motion",
				shape: "circle",
				intro: "rain",
				scatter: 190,
				gatherDuration: 2500,
				stagger: 600,
				clickBurst: false,
				burstStrength: 1.4,
				pointerRepel: 24,
				repelRadius: 90,
				idleDrift: .9,
				trigger: "mount",
				fontSize: "clamp(3.5rem, 13vw, 9rem)",
				fontWeight: 900,
				fontFamily: "inherit",
				glow: true,
				...particleProps
			})
		})]
	});
}
Divider3.displayName = "Divider3";
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
				children: [/* @__PURE__ */ jsx(ResponsiveImage, {
					source: responsiveImages.spaceNebulaBg,
					sizes: "100vw",
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
			/* @__PURE__ */ jsx(ScrollDivider, {
				className: `border-y-2  border-primary`,
				texts: [/* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsxs("span", {
						className: "flex justify-center items-center gap-3 uppercase font-heading",
						children: [/* @__PURE__ */ jsx(Building2, {
							className: "size-6 sm:size-18 text-sky-400 shrink-0 mr-3",
							strokeWidth: 2.25
						}), /* @__PURE__ */ jsx("span", {
							className: `inline-block`,
							children: "Bellville South Headquarters"
						})]
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-3 inline-flex items-center text-sky-400/60",
						children: "•"
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "flex justify-center items-center gap-3 uppercase font-heading",
						children: [/* @__PURE__ */ jsx(Truck, {
							className: "size-6 sm:size-18 text-sky-400 shrink-0 mr-3",
							strokeWidth: 2.25
						}), /* @__PURE__ */ jsx("span", {
							className: `inline-block`,
							children: "Modern Multi-Axle Fleet"
						})]
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-3 inline-flex items-center text-sky-400/60",
						children: "•"
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "flex justify-center items-center gap-3 uppercase font-heading",
						children: [/* @__PURE__ */ jsx(Compass, {
							className: "size-6 sm:size-18 text-sky-400 shrink-0 mr-3",
							strokeWidth: 2.25
						}), /* @__PURE__ */ jsx("span", {
							className: `inline-block`,
							children: "Detailed Pre-Load Site Evaluations"
						})]
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-3 inline-flex items-center text-sky-400/60",
						children: "•"
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "flex justify-center items-center gap-3 uppercase font-heading",
						children: [/* @__PURE__ */ jsx(ShieldCheck, {
							className: "size-6 sm:size-18 text-sky-400 shrink-0 mr-3",
							strokeWidth: 2.25
						}), /* @__PURE__ */ jsx("span", {
							className: `inline-block`,
							children: "Comprehensive Liability & Equipment Cover"
						})]
					})
				] }), /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsxs("span", {
						className: "flex justify-center items-center gap-3 uppercase font-heading",
						children: [/* @__PURE__ */ jsx(HardHat, {
							className: "size-6 sm:size-18 text-sky-400 shrink-0 mr-3",
							strokeWidth: 2.25
						}), /* @__PURE__ */ jsx("span", {
							className: `inline-block`,
							children: "Dedicated On-Site Load Supervisors"
						})]
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-3 inline-flex items-center text-sky-400/60",
						children: "•"
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "flex justify-center items-center gap-3 uppercase font-heading",
						children: [/* @__PURE__ */ jsx(ClipboardCheck, {
							className: "size-6 sm:size-18 text-sky-400 shrink-0 mr-3",
							strokeWidth: 2.25
						}), /* @__PURE__ */ jsx("span", {
							className: `inline-block`,
							children: "Audit-Ready Contractor Documentation"
						})]
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-3 inline-flex items-center text-sky-400/60",
						children: "•"
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "flex justify-center items-center gap-3 uppercase font-heading",
						children: [/* @__PURE__ */ jsx(CalendarClock, {
							className: "size-6 sm:size-18 text-sky-400 shrink-0 mr-3",
							strokeWidth: 2.25
						}), /* @__PURE__ */ jsx("span", {
							className: `inline-block`,
							children: "Flexible Short- & Long-Term Packages"
						})]
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-3 inline-flex items-center text-sky-400/60",
						children: "•"
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "flex justify-center items-center gap-3 uppercase font-heading",
						children: [/* @__PURE__ */ jsx(Clock, {
							className: "size-6 sm:size-18 text-sky-400 shrink-0 mr-3",
							strokeWidth: 2.25
						}), /* @__PURE__ */ jsx("span", {
							className: `inline-block`,
							children: "Western Cape & Nationwide Dispatch"
						})]
					})
				] })]
			}),
			/* @__PURE__ */ jsx(HomeIntroSection, {}),
			/* @__PURE__ */ jsx(HomeServicesSection, { services }),
			/* @__PURE__ */ jsx(Divider3, {}),
			/* @__PURE__ */ jsx(HomeSafetySection, {}),
			/* @__PURE__ */ jsx(Globe, {}),
			/* @__PURE__ */ jsx(DarkCta, {})
		]
	});
}
Home.displayName = "Home";
Home.layout = AppLayout;
export { Home as default };

//# sourceMappingURL=home-DXEVFwkR.js.map