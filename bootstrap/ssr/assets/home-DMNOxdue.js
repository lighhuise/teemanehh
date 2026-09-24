import { c as cn, o as buttonVariants, s as Wrapper, t as AppLayout } from "./app-layout-C6YHPn1x.js";
import { t as FloatingStatCard } from "./floating-stat-card-CtPtr6CY.js";
import { t as SectionHeading } from "./section-heading-D1pxik3Q.js";
import { t as ServiceCard } from "./service-card-Dv_Lv5JI.js";
import { Head, Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { ArrowRight } from "lucide-react";
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
//#region resources/images/boat-on-truck.webp
var boat_on_truck_default = "/build/assets/boat-on-truck-BZvPSM0k.webp";
//#endregion
//#region resources/js/components/hero.tsx
function Hero() {
	return /* @__PURE__ */ jsx("div", {
		className: " px-4 sm:px-6 pt-28 pb-14 -mt-26 relative z-0 drop-shadow-lg drop-shadow-black/30",
		children: /* @__PURE__ */ jsxs(CutoutBox, {
			asWrapper: true,
			position: "bottom",
			className: "w-full rounded-3xl relative overflow-hidden flex flex-col justify-center",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 bg-background",
				children: /* @__PURE__ */ jsx("img", {
					src: boat_on_truck_default,
					alt: "Teemane Heavy Haulage",
					className: "absolute inset-0 w-full h-full object-cover object-center"
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative z-10 px-6 sm:px-12 py-16 sm:py-24 max-w-4xl mx-auto text-center space-y-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-4 ",
					children: [/* @__PURE__ */ jsxs("h1", {
						className: "text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]",
						children: [
							"Heavy Haulage. ",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-300 ",
								children: "Precisely Planned."
							}),
							" ",
							/* @__PURE__ */ jsx("br", {}),
							"Reliably Delivered."
						]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-lg sm:text-xl text-white font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md",
						children: "Specialised transportation solutions for machinery, oversized equipment and some of the most demanding abnormal loads."
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col sm:flex-row items-center text-sm justify-center gap-4 pt-4",
					children: [/* @__PURE__ */ jsx(Link, {
						href: "/contact-us",
						className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-widest uppercase px-6 py-3 rounded-lg shadow-sm transition-all",
						children: "Plan Your Transport"
					}), /* @__PURE__ */ jsxs(Link, {
						href: "/services",
						className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-background/70 hover:bg-background border-2 border-primary/20 hover:border-primary text-foreground font-bold tracking-widest uppercase px-6 py-3 rounded-lg backdrop-blur-sm transition-all",
						children: ["Explore Our Services", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
					})]
				})]
			})]
		})
	});
}
//#endregion
//#region resources/images/IMG_0190-copy.webp
var IMG_0190_copy_default = "/build/assets/IMG_0190-copy-870kN3in.webp";
//#endregion
//#region resources/js/components/sections/home-intro-section.tsx
function HomeIntroSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 bg-background",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "grid lg:grid-cols-2 gap-16 items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-8",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-4",
						children: [/* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-primary" }), /* @__PURE__ */ jsx("span", {
							className: "text-sm font-bold text-primary tracking-widest uppercase",
							children: "Who We Are"
						})]
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "text-4xl lg:text-5xl font-black tracking-tighter text-foreground leading-[1.1] ",
						children: [
							"THE ONLY NAME ",
							/* @__PURE__ */ jsx("br", {}),
							"TRUSTED TO PERFORM"
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-lg text-muted-foreground leading-relaxed text-balance",
						children: "Established in 2012, Teemane Heavy Haulage prides itself on countless victories across South Africa's most demanding worksites. From high-stakes projects to complex operations that have redefined what's possible in mobile crane hire."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-lg text-muted-foreground leading-relaxed text-balance",
						children: "Backed by a fleet of hydraulic cranes with capacities of up to 440 tons and more than 100 years of combined management experience, we bring the depth of knowledge, control and capability required to deliver certainty in high-risk environments."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "pt-4",
						children: /* @__PURE__ */ jsx(Link, {
							href: "/about-us",
							className: buttonVariants({
								size: "lg",
								className: "uppercase tracking-widest font-bold px-8 h-14"
							}),
							children: "Our Story"
						})
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative pb-6 lg:pb-0 drop-shadow-lg drop-shadow-black/30",
				children: [/* @__PURE__ */ jsx(CutoutBox, {
					position: `both`,
					className: "aspect-4/5 rounded-xl overflow-hidden border border-border shadow-lg",
					children: /* @__PURE__ */ jsx("img", {
						src: IMG_0190_copy_default,
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
//#region resources/images/media-24-building.webp
var media_24_building_default = "/build/assets/media-24-building-C-uGPsNs.webp";
//#endregion
//#region resources/js/components/sections/home-safety-section.tsx
function HomeSafetySection() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 bg-background",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "grid lg:grid-cols-2 gap-16 items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative pb-6 lg:pb-0 order-2 lg:order-1 drop-shadow-lg drop-shadow-black/30",
				children: [/* @__PURE__ */ jsx(CutoutBox, {
					position: `both`,
					className: "aspect-4/5 rounded-xl overflow-hidden border border-border shadow-lg",
					children: /* @__PURE__ */ jsx("img", {
						src: media_24_building_default,
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
//#region resources/js/components/sections/home-credentials-section.tsx
function HomeCredentialsSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-radial-[at_50%_85%] from-primary/70 to-primary py-10",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2 md:grid-cols-5 gap-8 text-center",
			children: [
				{ label: "B-BBEE Certified" },
				{ label: "Red Seal Riggers" },
				{ label: "ISO 9001 & 14001" },
				{ label: "OHSAS 45001" },
				{ label: "Operational 24/7" }
			].map((item) => /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center gap-2",
				children: [/* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-primary-foreground/60" }), /* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold tracking-widest uppercase text-primary-foreground/90",
					children: item.label
				})]
			}, item.label))
		}) })
	});
}
//#endregion
//#region resources/js/pages/home.tsx
function Home({ services }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background selection:bg-primary selection:text-white",
		children: [
			/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsx("title", { children: "A Cut Above The Rest" }), /* @__PURE__ */ jsx("meta", {
				name: "description",
				content: "Established in 2012, Teemane Heavy Haulage delivers crane hire, heavy lifting, rigging and specialised transport across South Africa's most demanding worksites. Up to 440T capacity."
			})] }),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(HomeIntroSection, {}),
			/* @__PURE__ */ jsx(HomeServicesSection, { services }),
			/* @__PURE__ */ jsx(HomeSafetySection, {}),
			/* @__PURE__ */ jsx(HomeCredentialsSection, {})
		]
	});
}
Home.displayName = "Home";
Home.layout = AppLayout;
//#endregion
export { Home as default };

//# sourceMappingURL=home-DMNOxdue.js.map