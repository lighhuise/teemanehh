import { Head, Link, usePage } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Suspense, createContext, lazy, useContext, useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AlertTriangle, ArrowRight, CircleCheckIcon, InfoIcon, Loader2Icon, Mail, MapPin, Menu, Moon, OctagonXIcon, Phone, PhoneCall, Sun, TriangleAlertIcon, XIcon } from "lucide-react";
import { Button } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import { Toast } from "@base-ui/react/toast";
import { Dialog } from "@base-ui/react/dialog";
import { Menu as Menu$1 } from "@base-ui/react/menu";
// resources/js/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
// resources/js/components/ui/misc/wrapper.tsx
function Wrapper({ className, as, style, children, ...props }) {
	return /* @__PURE__ */ jsx(as || "div", {
		className: cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className),
		style,
		...props,
		children
	});
}
Wrapper.displayName = "Wrapper";
// resources/js/components/ui/button.tsx
var buttonVariants = cva("cursor-pointer group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding text-sm font-bold whitespace-nowrap transition-all duration-200 motion-reduce:transition-none outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-linear-to-r from-primary to-sky-600 text-primary-foreground hover:from-primary/90 hover:to-sky-500 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25",
			outline: "border-border bg-background text-foreground hover:border-primary/40 hover:bg-muted/70 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-card/60 dark:hover:bg-card",
			secondary: "border-border bg-secondary text-secondary-foreground hover:border-primary/30 hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_6%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 gap-2 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
			xs: "h-7 gap-1 rounded-lg px-2.5 text-xs in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			sm: "h-8.5 gap-1.5 rounded-lg px-3.5 text-xs in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-12 gap-2 px-6 text-xs sm:text-sm uppercase tracking-widest",
			xl: "h-14 gap-2.5 px-8 text-xs sm:text-sm uppercase tracking-widest",
			icon: "size-9",
			"icon-xs": "size-7 rounded-lg in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-8 rounded-lg in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button$1({ className, variant = "default", size = "default", ...props }) {
	return /* @__PURE__ */ jsx(Button, {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
// resources/js/components/ui/misc/logo.tsx
function Logo({ inverted = false, ...props }) {
	const secondaryFill = inverted ? "fill-white transition-colors duration-300" : "fill-[#918e88] dark:fill-white transition-colors duration-300";
	return /* @__PURE__ */ jsxs("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 419 195.3",
		...props,
		children: [
			/* @__PURE__ */ jsxs("g", { children: [
				/* @__PURE__ */ jsx("polygon", {
					className: "fill-[#026093]",
					points: "402.9 30.1 388.1 6.8 348.5 27.8 402.9 30.1"
				}),
				/* @__PURE__ */ jsx("polygon", {
					className: "fill-[#026093]",
					points: "291.7 30.1 306.8 6.8 346.1 27.8 291.7 30.1"
				}),
				/* @__PURE__ */ jsx("polygon", {
					className: "fill-[#026093]",
					points: "347.3 33 321.1 66.9 347.3 99.9 373.5 66.9 347.3 33"
				})
			] }),
			/* @__PURE__ */ jsx("polygon", {
				className: "fill-[#026093]",
				points: "257.3 5.4 105.7 5.4 29.1 5.4 6.2 35.4 15.2 49.3 84.4 49.3 84.4 187.7 105.7 187.7 127.3 187.7 127.3 49.3 271.1 49.3 280.5 35.4 257.3 5.4"
			}),
			/* @__PURE__ */ jsx("polygon", {
				className: secondaryFill,
				points: "139.9 188.3 185.8 188.3 185.8 139.7 226.7 139.7 226.7 189.8 271.1 189.8 271.1 59 226.7 59 226.7 109.6 184.8 109.6 184.8 60.6 138.8 60.6 139.9 188.3"
			}),
			/* @__PURE__ */ jsx("polygon", {
				className: secondaryFill,
				points: "282.4 188.3 328.3 188.3 328.3 139.7 369.2 139.7 369.2 189.8 413.7 189.8 413.7 59 391.7 59 369.2 87.1 369.2 109.6 327.3 109.6 327.3 89.4 302.8 60.6 281.4 60.6 282.4 188.3"
			}),
			/* @__PURE__ */ jsx("polygon", {
				className: secondaryFill,
				points: "375.3 64.3 402.2 33 348.5 30.1 375.3 64.3"
			}),
			/* @__PURE__ */ jsx("polygon", {
				className: secondaryFill,
				points: "308.9 4.9 347.3 25.4 386 4.9 308.9 4.9"
			}),
			/* @__PURE__ */ jsx("polygon", {
				className: secondaryFill,
				points: "319.3 64.3 292.6 33 346.1 30.1 319.3 64.3"
			})
		]
	});
}
// resources/js/components/SpotlightCard.tsx
var THEMES = {
	dark: {
		surface: "#111111",
		border: "rgba(255, 255, 255, 0.08)",
		shadow: "0 24px 48px -24px rgba(0, 0, 0, 0.6)",
		light: "#ffffff",
		fill: 1,
		edge: 1
	},
	light: {
		surface: "#ffffff",
		border: "rgba(24, 24, 27, 0.1)",
		shadow: "0 1px 2px rgba(24, 24, 27, 0.04), 0 18px 40px -20px rgba(24, 24, 27, 0.16)",
		light: "#18181b",
		fill: .28,
		edge: .7
	}
};
var SHAPES = ["circle", "beam"];
var NOISE = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
var clamp = (value, min, max) => Math.min(max, Math.max(min, value));
var falloff = (color, softness) => {
	const soft = clamp(softness, 0, 1);
	const core = (1 - soft) ** 1.5 * .85;
	const stop = (alpha, at) => `color-mix(in srgb, ${color} ${(alpha * 100).toFixed(2)}%, transparent) ${(at * 100).toFixed(2)}%`;
	const list = [stop(1, 0)];
	for (let i = 0; i <= 14; i++) {
		const t = core + (1 - core) * i / 14;
		const g = (t - core) / (1 - core);
		const smooth = 1 - g * g * (3 - 2 * g);
		const glow = Math.exp(-4.6 * g * g) * (1 - g ** 6);
		list.push(stop(smooth + (glow - smooth) * soft, t));
	}
	return list.join(", ");
};
var CARD = "relative isolate overflow-hidden rounded-3xl p-8 [background-color:var(--spotlight-card-surface)] [box-shadow:var(--spotlight-card-shadow)]";
var SpotlightCard = ({ children, className = "", style, spotlightColor, intensity = .15, spotlightSize = 240, softness = .7, shape = "circle", borderGlow = .6, proximity = 80, smoothing = .3, ambient = false, flare = true, grain = 0, theme = "dark", ...rest }) => {
	const rootRef = useRef(null);
	const lightRef = useRef(null);
	const grainRef = useRef(null);
	const edgeRef = useRef(null);
	const wakeRef = useRef(null);
	const palette = THEMES[theme] ?? THEMES.dark;
	const color = spotlightColor ?? palette.light;
	const settings = {
		shape: SHAPES.includes(shape) ? shape : "circle",
		fill: falloff(color, softness),
		edge: falloff(color, 1),
		size: Math.max(20, spotlightSize),
		intensity: clamp(intensity, 0, 1) * palette.fill,
		borderGlow: clamp(borderGlow, 0, 1) * palette.edge,
		proximity: Math.max(0, proximity),
		smoothing: clamp(smoothing, 0, 1),
		ambient,
		flare,
		grain: clamp(grain, 0, 1)
	};
	const settingsRef = useRef(settings);
	settingsRef.current = settings;
	useEffect(() => {
		wakeRef.current?.();
	});
	useEffect(() => {
		const root = rootRef.current;
		const light = lightRef.current;
		const noise = grainRef.current;
		const edge = edgeRef.current;
		if (!root || !light || !noise || !edge) return void 0;
		const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
		const state = {
			x: 0,
			y: 0,
			presence: 0,
			flare: 0,
			time: Math.random() * 60,
			pressed: false,
			visible: true
		};
		const pointer = {
			x: 0,
			y: 0,
			active: false
		};
		const drawn = {
			light: "",
			edge: "",
			noise: ""
		};
		let focus = null;
		let raf = 0;
		let last = 0;
		let alive = true;
		const gradient = (s, size, x, y, stops) => {
			if (s.shape === "beam") {
				const reach = Math.max(size * .6, y + size * .55);
				return `radial-gradient(${(size * .55).toFixed(1)}px ${reach.toFixed(1)}px at ${x.toFixed(1)}px 0px, ${stops})`;
			}
			return `radial-gradient(circle ${size.toFixed(1)}px at ${x.toFixed(1)}px ${y.toFixed(1)}px, ${stops})`;
		};
		const paint = (s) => {
			const size = s.size * (1 + .2 * state.flare);
			const boost = 1 + .7 * state.flare;
			const fill = gradient(s, size, state.x, state.y, s.fill);
			const rim = gradient(s, size * .6, state.x, s.shape === "beam" ? 0 : state.y, s.edge);
			if (fill !== drawn.light) {
				drawn.light = fill;
				light.style.background = fill;
			}
			if (rim !== drawn.edge) {
				drawn.edge = rim;
				edge.style.background = rim;
			}
			light.style.opacity = String(Math.min(1, state.presence * s.intensity * boost));
			edge.style.opacity = String(Math.min(1, state.presence * s.borderGlow * boost));
			const grainy = s.grain > 0 ? gradient(s, size, state.x, state.y, "#000 0%, transparent 100%") : "none";
			if (grainy !== drawn.noise) {
				drawn.noise = grainy;
				noise.style.webkitMaskImage = grainy;
				noise.style.maskImage = grainy;
			}
			noise.style.opacity = String(state.presence * s.grain);
		};
		const tick = (now) => {
			raf = 0;
			if (!alive) return;
			const s = settingsRef.current;
			const dt = Math.min(.05, Math.max(.001, (now - last) / 1e3));
			last = now;
			const rect = root.getBoundingClientRect();
			let tx = state.x;
			let ty = state.y;
			let target = 0;
			if (focus && root.contains(focus)) {
				const box = focus.getBoundingClientRect();
				tx = box.left + box.width / 2 - rect.left;
				ty = box.top + box.height / 2 - rect.top;
				target = 1;
			} else if (pointer.active) {
				tx = pointer.x - rect.left;
				ty = pointer.y - rect.top;
				const gap = Math.hypot(Math.max(0, -tx, tx - rect.width), Math.max(0, -ty, ty - rect.height));
				if (gap === 0) target = 1;
				else if (s.proximity > 0) target = Math.max(0, 1 - gap / s.proximity) ** 2;
			}
			if (target < .6 && s.ambient && state.visible) {
				if (!reduce) state.time += dt;
				const drift = .6 - target;
				tx += (rect.width * (.5 + .34 * Math.sin(state.time * .43)) - tx) * (drift / .6);
				ty += (rect.height * (.5 + .3 * Math.sin(state.time * .61 + 1.3)) - ty) * (drift / .6);
				target = .6;
			}
			if (state.presence < .02 && target > 0 && !s.ambient) {
				state.x = tx;
				state.y = ty;
			}
			const follow = reduce || s.smoothing === 0 ? 1 : 1 - Math.exp(-dt / (.015 + s.smoothing * .22));
			state.x += (tx - state.x) * follow;
			state.y += (ty - state.y) * follow;
			const fade = reduce ? 1 : 1 - Math.exp(-dt / (target > state.presence ? .1 : .32));
			state.presence += (target - state.presence) * fade;
			if (Math.abs(target - state.presence) < .002) state.presence = target;
			const press = state.pressed && s.flare && !reduce ? 1 : 0;
			state.flare += (press - state.flare) * (1 - Math.exp(-dt / (press ? .05 : .28)));
			if (Math.abs(press - state.flare) < .002) state.flare = press;
			paint(s);
			if (!(!(Math.abs(tx - state.x) > .1 || Math.abs(ty - state.y) > .1) && state.presence === target && state.flare === press) || s.ambient && state.visible && !reduce) raf = requestAnimationFrame(tick);
		};
		const wake = () => {
			if (raf || !alive) return;
			last = performance.now();
			raf = requestAnimationFrame(tick);
		};
		wakeRef.current = wake;
		const onMove = (event) => {
			pointer.x = event.clientX;
			pointer.y = event.clientY;
			pointer.active = true;
			if (state.presence > 0 || settingsRef.current.proximity > 0 || root.contains(event.target)) wake();
		};
		const onOut = (event) => {
			if (event.relatedTarget) return;
			pointer.active = false;
			wake();
		};
		const onDown = (event) => {
			pointer.x = event.clientX;
			pointer.y = event.clientY;
			pointer.active = true;
			state.pressed = true;
			wake();
		};
		const onUp = (event) => {
			if (event.pointerType !== "mouse") pointer.active = false;
			if (!state.pressed && event.pointerType === "mouse") return;
			state.pressed = false;
			wake();
		};
		const onFocusIn = (event) => {
			if (!(event.target instanceof Element) || !event.target.matches(":focus-visible")) return;
			focus = event.target;
			wake();
		};
		const onFocusOut = (event) => {
			if (root.contains(event.relatedTarget)) return;
			focus = null;
			wake();
		};
		const onScroll = () => {
			if (pointer.active || state.presence > 0) wake();
		};
		const observer = new IntersectionObserver((entries) => {
			state.visible = entries.some((entry) => entry.isIntersecting);
			if (state.visible) wake();
		});
		observer.observe(root);
		window.addEventListener("pointermove", onMove);
		window.addEventListener("pointerup", onUp);
		window.addEventListener("pointercancel", onUp);
		window.addEventListener("scroll", onScroll, {
			capture: true,
			passive: true
		});
		document.addEventListener("pointerout", onOut);
		root.addEventListener("pointerdown", onDown);
		root.addEventListener("focusin", onFocusIn);
		root.addEventListener("focusout", onFocusOut);
		wake();
		return () => {
			alive = false;
			cancelAnimationFrame(raf);
			observer.disconnect();
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerup", onUp);
			window.removeEventListener("pointercancel", onUp);
			window.removeEventListener("scroll", onScroll, { capture: true });
			document.removeEventListener("pointerout", onOut);
			root.removeEventListener("pointerdown", onDown);
			root.removeEventListener("focusin", onFocusIn);
			root.removeEventListener("focusout", onFocusOut);
			wakeRef.current = null;
		};
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		ref: rootRef,
		className: `${CARD}${className ? ` ${className}` : ""}`,
		style: {
			"--spotlight-card-surface": palette.surface,
			"--spotlight-card-border": palette.border,
			"--spotlight-card-shadow": palette.shadow,
			...style
		},
		...rest,
		children: [
			/* @__PURE__ */ jsx("span", {
				ref: lightRef,
				className: "pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("span", {
				ref: grainRef,
				className: "pointer-events-none absolute inset-0 -z-10 rounded-[inherit] bg-[length:160px_160px] opacity-0 mix-blend-overlay",
				style: { backgroundImage: NOISE },
				"aria-hidden": "true"
			}),
			children,
			/* @__PURE__ */ jsx("span", {
				className: "pointer-events-none absolute inset-0 z-[1] rounded-[inherit] p-px [background:var(--spotlight-card-border)] [-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [-webkit-mask-composite:xor] [mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)]",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("span", {
				ref: edgeRef,
				className: "pointer-events-none absolute inset-0 z-[1] rounded-[inherit] p-px opacity-0 [-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [-webkit-mask-composite:xor] [mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)]",
				"aria-hidden": "true"
			})
		]
	});
};
// resources/js/components/footer.tsx
var footerLinks = [
	{
		name: "Home",
		href: "/"
	},
	{
		name: "Services",
		href: "/services"
	},
	{
		name: "About Us",
		href: "/about-us"
	},
	{
		name: "FAQ",
		href: "/faq"
	},
	{
		name: "Contact Us",
		href: "/contact-us"
	}
];
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "footer-surface text-slate-300 relative overflow-hidden pt-20 pb-10 border-t border-primary/40",
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "footer-corona pointer-events-none absolute inset-0"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "footer-dots pointer-events-none absolute inset-0"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "scroll-divider-top-edge pointer-events-none absolute top-0 inset-x-0 h-px"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden",
				children: /* @__PURE__ */ jsx("span", {
					className: "font-heading text-[22vw] xl:text-[320px] font-black tracking-tighter leading-none whitespace-nowrap text-white",
					children: "THH"
				})
			}),
			/* @__PURE__ */ jsxs(Wrapper, {
				className: "relative z-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-4 flex flex-col gap-6",
							children: [
								/* @__PURE__ */ jsx(Link, {
									href: "/",
									className: "cursor-pointer inline-block w-fit",
									children: /* @__PURE__ */ jsx(Logo, {
										inverted: true,
										className: "h-14 w-auto",
										"aria-label": "Teemane Heavy Haulage Logo"
									})
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-sm",
									children: "Tailored transportation solutions for oversized cargo, heavy machinery, and industrial equipment across South Africa and the SADC region."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3.5 text-xs font-black tracking-[0.2em] text-sky-400 uppercase pt-1",
									children: [/* @__PURE__ */ jsx("span", {
										"aria-hidden": "true",
										className: "h-px w-8 bg-primary"
									}), /* @__PURE__ */ jsx("span", { children: "Moving the Impossible" })]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-3 lg:col-start-6",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-black tracking-[0.2em] text-sky-400 uppercase mb-2 block",
									children: "Explore"
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-white text-lg font-heading font-black mb-6 tracking-tight uppercase",
									children: "Navigation"
								}),
								/* @__PURE__ */ jsx("ul", {
									className: "flex flex-col gap-3.5",
									children: footerLinks.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
										href: item.href,
										prefetch: "hover",
										className: "cursor-pointer text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group w-fit text-sm font-medium",
										children: [/* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 motion-reduce:transition-none text-sky-400" }), /* @__PURE__ */ jsx("span", { children: item.name })]
									}) }, item.name))
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-4",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-black tracking-[0.2em] text-sky-400 uppercase mb-2 block",
									children: "Direct Communication"
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-white text-lg font-heading font-black mb-6 tracking-tight uppercase",
									children: "Contact Us"
								}),
								/* @__PURE__ */ jsxs("ul", {
									className: "flex flex-col gap-3.5",
									children: [
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(SpotlightCard, {
											theme: "dark",
											spotlightColor: "#38bdf8",
											intensity: .22,
											spotlightSize: 180,
											softness: .7,
											shape: "circle",
											borderGlow: .85,
											proximity: 160,
											smoothing: .5,
											grain: 0,
											ambient: false,
											flare: true,
											className: "footer-glass-card rounded-2xl! p-4! flex items-start gap-3.5",
											style: {
												"--spotlight-card-surface": "rgba(1, 22, 49, 0.48)",
												"--spotlight-card-border": "rgba(56, 189, 248, 0.22)",
												"--spotlight-card-shadow": "none"
											},
											children: [/* @__PURE__ */ jsx("div", {
												className: "p-2.5 rounded-xl text-sky-400 shrink-0 mt-0.5 bg-sky-400/10 border border-sky-300/20",
												children: /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" })
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
												className: "text-[11px] font-black uppercase tracking-wider text-white mb-0.5",
												children: "Head Office & Depot"
											}), /* @__PURE__ */ jsxs("p", {
												className: "text-sm text-slate-300 leading-normal",
												children: [
													"6 Van Eck St, Bellville South",
													/* @__PURE__ */ jsx("br", {}),
													"Cape Town, Western Cape, 7530"
												]
											})] })]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(SpotlightCard, {
											theme: "dark",
											spotlightColor: "#38bdf8",
											intensity: .22,
											spotlightSize: 180,
											softness: .7,
											shape: "circle",
											borderGlow: .85,
											proximity: 160,
											smoothing: .5,
											grain: 0,
											ambient: false,
											flare: true,
											className: "footer-glass-card rounded-2xl! p-4! flex items-center gap-3.5",
											style: {
												"--spotlight-card-surface": "rgba(1, 22, 49, 0.48)",
												"--spotlight-card-border": "rgba(56, 189, 248, 0.22)",
												"--spotlight-card-shadow": "none"
											},
											children: [/* @__PURE__ */ jsx("div", {
												className: "p-2.5 rounded-xl text-sky-400 shrink-0 bg-sky-400/10 border border-sky-300/20",
												children: /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" })
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
												className: "text-[11px] font-black uppercase tracking-wider text-white mb-0.5",
												children: "24/7 Dispatch Hotline"
											}), /* @__PURE__ */ jsx("a", {
												href: "tel:0861888004",
												className: "cursor-pointer text-base font-bold text-white hover:text-sky-400 transition-colors",
												children: "086 188 8004"
											})] })]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(SpotlightCard, {
											theme: "dark",
											spotlightColor: "#38bdf8",
											intensity: .22,
											spotlightSize: 180,
											softness: .7,
											shape: "circle",
											borderGlow: .85,
											proximity: 160,
											smoothing: .5,
											grain: 0,
											ambient: false,
											flare: true,
											className: "footer-glass-card rounded-2xl! p-4! flex items-center gap-3.5",
											style: {
												"--spotlight-card-surface": "rgba(1, 22, 49, 0.48)",
												"--spotlight-card-border": "rgba(56, 189, 248, 0.22)",
												"--spotlight-card-shadow": "none"
											},
											children: [/* @__PURE__ */ jsx("div", {
												className: "p-2.5 rounded-xl text-sky-400 shrink-0 bg-sky-400/10 border border-sky-300/20",
												children: /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" })
											}), /* @__PURE__ */ jsxs("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ jsx("div", {
													className: "text-[11px] font-black uppercase tracking-wider text-white mb-0.5",
													children: "Electronic Mail"
												}), /* @__PURE__ */ jsx("a", {
													href: "mailto:enquiries@teemanehh.co.za",
													className: "cursor-pointer text-sm font-semibold text-white hover:text-sky-400 transition-colors break-all",
													children: "enquiries@teemanehh.co.za"
												})]
											})]
										}) })
									]
								})
							]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400",
					children: [
						/* @__PURE__ */ jsx("div", {
							"aria-hidden": "true",
							className: "pointer-events-none absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-sky-400/25 to-transparent"
						}),
						/* @__PURE__ */ jsxs("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Teemane Heavy Haulage. All rights reserved."
						] }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center justify-center gap-x-6 gap-y-2",
							children: [
								/* @__PURE__ */ jsx(Link, {
									href: "/privacy-policy",
									className: "cursor-pointer hover:text-white transition-colors",
									children: "Privacy Policy"
								}),
								/* @__PURE__ */ jsx(Link, {
									href: "/terms-of-service",
									className: "cursor-pointer hover:text-white transition-colors",
									children: "Terms of Service"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-slate-600 hidden sm:inline",
									"aria-hidden": "true",
									children: "|"
								}),
								/* @__PURE__ */ jsxs("span", { children: [
									"Built by",
									" ",
									/* @__PURE__ */ jsx("a", {
										target: "_blank",
										rel: "noreferrer",
										className: "cursor-pointer text-sky-400 hover:text-sky-300 hover:underline",
										href: "https://designbycode.co.za",
										children: "designbycode"
									})
								] })
							]
						})
					]
				})]
			})
		]
	});
}
// resources/js/components/ui/toast.tsx
var toast = Toast.createToastManager();
function ToastProvider({ ...props }) {
	return /* @__PURE__ */ jsx(Toast.Provider, { ...props });
}
function ToastPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Toast.Portal, {
		"data-slot": "toast-portal",
		...props
	});
}
function ToastViewport({ className, ...props }) {
	return /* @__PURE__ */ jsx(Toast.Viewport, {
		"data-slot": "toast-viewport",
		className: cn("fixed right-4 bottom-4 z-[100] flex max-h-screen w-[calc(100%-2rem)] flex-col-reverse sm:right-8 sm:bottom-8 sm:top-auto sm:flex-col md:max-w-[420px]", className),
		...props
	});
}
function Toast$1({ className, ...props }) {
	return /* @__PURE__ */ jsx(Toast.Root, {
		"data-slot": "toast",
		className: cn("group/toast pointer-events-auto absolute right-0 bottom-0 z-[calc(1000-var(--toast-index))] w-full origin-bottom rounded-2xl border bg-popover text-popover-foreground shadow-lg will-change-transform outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "[--gap:0.75rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))]", "h-(--height) [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))] [transition:transform_500ms_cubic-bezier(0.22,1,0.36,1),opacity_500ms,height_150ms]", "after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']", "data-expanded:h-(--toast-height) data-expanded:[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]", "data-limited:opacity-0 data-starting-style:[transform:translateY(150%)]", "[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(150%)]", "data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]", "data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]", "data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]", "data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]", "data-expanded:data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]", "data-expanded:data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]", "data-expanded:data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]", "data-expanded:data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]", className),
		...props
	});
}
function ToastContent({ className, ...props }) {
	return /* @__PURE__ */ jsx(Toast.Content, {
		"data-slot": "toast-content",
		className: cn("flex h-full items-center gap-3 overflow-hidden p-4 transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-behind:opacity-0 data-expanded:opacity-100", className),
		...props
	});
}
function ToastTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Toast.Title, {
		"data-slot": "toast-title",
		className: cn("text-sm font-medium", className),
		...props
	});
}
function ToastDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Toast.Description, {
		"data-slot": "toast-description",
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
function ToastAction({ className, render = /* @__PURE__ */ jsx(Button$1, {
	variant: "outline",
	size: "sm"
}), ...props }) {
	return /* @__PURE__ */ jsx(Toast.Action, {
		"data-slot": "toast-action",
		render,
		className: cn("shrink-0", className),
		...props
	});
}
function ToastClose({ className, children, render = /* @__PURE__ */ jsx(Button$1, {
	variant: "ghost",
	size: "icon-sm"
}), ...props }) {
	return /* @__PURE__ */ jsx(Toast.Close, {
		"data-slot": "toast-close",
		"aria-label": "Close toast",
		render,
		className: cn("relative shrink-0 text-muted-foreground after:absolute after:-inset-2 after:content-[''] hover:text-foreground", className),
		...props,
		children: children ?? /* @__PURE__ */ jsx(XIcon, { "aria-hidden": "true" })
	});
}
function ToastIcon({ type }) {
	let icon = null;
	if (type === "success") icon = /* @__PURE__ */ jsx(CircleCheckIcon, { "aria-hidden": "true" });
	if (type === "info") icon = /* @__PURE__ */ jsx(InfoIcon, { "aria-hidden": "true" });
	if (type === "warning") icon = /* @__PURE__ */ jsx(TriangleAlertIcon, { "aria-hidden": "true" });
	if (type === "error") icon = /* @__PURE__ */ jsx(OctagonXIcon, {
		className: "text-destructive",
		"aria-hidden": "true"
	});
	if (type === "loading") icon = /* @__PURE__ */ jsx(Loader2Icon, {
		className: "animate-spin",
		"aria-hidden": "true"
	});
	if (!icon) return null;
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "toast-icon",
		className: "shrink-0 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
		children: icon
	});
}
function ToastList() {
	const { toasts } = Toast.useToastManager();
	return toasts.map((toastItem) => /* @__PURE__ */ jsx(Toast$1, {
		toast: toastItem,
		children: /* @__PURE__ */ jsxs(ToastContent, { children: [
			/* @__PURE__ */ jsx(ToastIcon, { type: toastItem.type }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex min-w-0 flex-1 flex-col gap-1",
				children: [/* @__PURE__ */ jsx(ToastTitle, {}), /* @__PURE__ */ jsx(ToastDescription, {})]
			}),
			/* @__PURE__ */ jsx(ToastAction, {}),
			/* @__PURE__ */ jsx(ToastClose, {})
		] })
	}, toastItem.id));
}
function Toaster({ children, toastManager = toast, ...props }) {
	return /* @__PURE__ */ jsxs(ToastProvider, {
		toastManager,
		...props,
		children: [children, /* @__PURE__ */ jsx(ToastPortal, { children: /* @__PURE__ */ jsx(ToastViewport, { children: /* @__PURE__ */ jsx(ToastList, {}) }) })]
	});
}
Toast.createToastManager;
Toast.useToastManager;
// resources/js/components/ui/sheet.tsx
function Sheet({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Root, {
		"data-slot": "sheet",
		...props
	});
}
function SheetTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Trigger, {
		"data-slot": "sheet-trigger",
		render: /* @__PURE__ */ jsx("button", { className }),
		...props,
		children
	});
}
function SheetPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Portal, {
		"data-slot": "sheet-portal",
		...props
	});
}
function SheetOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Backdrop, {
		"data-slot": "sheet-overlay",
		className: cn("fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs", className),
		...props
	});
}
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
	return /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(Dialog.Popup, {
		"data-slot": "sheet-content",
		"data-side": side,
		className: cn("fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ jsxs(Dialog.Close, {
			"data-slot": "sheet-close",
			render: /* @__PURE__ */ jsx(Button$1, {
				variant: "ghost",
				className: "absolute top-3 right-3",
				size: "icon-sm"
			}),
			children: [/* @__PURE__ */ jsx(XIcon, {}), /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Title, {
		"data-slot": "sheet-title",
		className: cn("font-heading text-base font-medium text-foreground", className),
		...props
	});
}
// resources/js/components/ui/dropdown-menu.tsx
function DropdownMenu({ ...props }) {
	return /* @__PURE__ */ jsx(Menu$1.Root, {
		"data-slot": "dropdown-menu",
		...props
	});
}
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Menu$1.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...props
	});
}
function DropdownMenuContent({ align = "start", alignOffset = 0, side = "bottom", sideOffset = 4, className, ...props }) {
	return /* @__PURE__ */ jsx(Menu$1.Portal, { children: /* @__PURE__ */ jsx(Menu$1.Positioner, {
		className: "isolate z-50 outline-none",
		align,
		alignOffset,
		side,
		sideOffset,
		children: /* @__PURE__ */ jsx(Menu$1.Popup, {
			"data-slot": "dropdown-menu-content",
			className: cn("z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95", className),
			...props
		})
	}) });
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx(Menu$1.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": inset,
		"data-variant": variant,
		className: cn("group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", className),
		...props
	});
}
// resources/js/components/theme-provider.tsx
var ThemeProviderContext = createContext({
	theme: "system",
	setTheme: () => null
});
var useTheme = () => {
	const context = useContext(ThemeProviderContext);
	if (context === void 0) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
};
// resources/js/components/mode-toggle.tsx
function ModeToggle({ className }) {
	const { setTheme } = useTheme();
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsxs(DropdownMenuTrigger, {
		render: /* @__PURE__ */ jsx(Button$1, {
			variant: "ghost",
			size: "icon",
			className: cn("cursor-pointer", className)
		}),
		children: [
			/* @__PURE__ */ jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
			/* @__PURE__ */ jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
			/* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Toggle theme"
			})
		]
	}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
		align: "end",
		children: [
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				className: "cursor-pointer",
				onClick: () => setTheme("light"),
				children: "Light"
			}),
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				className: "cursor-pointer",
				onClick: () => setTheme("dark"),
				children: "Dark"
			}),
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				className: "cursor-pointer",
				onClick: () => setTheme("system"),
				children: "System"
			})
		]
	})] });
}
// resources/js/wayfinder/index.ts
var urlDefaults = () => ({});
var getValue = (value) => {
	if (value === true) return "1";
	if (value === false) return "0";
	return value.toString();
};
var addNestedParams = (obj, prefix, params) => {
	Object.entries(obj).forEach(([subKey, value]) => {
		if (value === void 0) return;
		const paramKey = `${prefix}[${subKey}]`;
		if (Array.isArray(value)) value.forEach((v) => params.append(`${paramKey}[]`, getValue(v)));
		else if (value !== null && typeof value === "object") addNestedParams(value, paramKey, params);
		else if ([
			"string",
			"number",
			"boolean"
		].includes(typeof value)) params.set(paramKey, getValue(value));
	});
};
var clearParamFamily = (params, key) => {
	const toDelete = /* @__PURE__ */ new Set();
	params.forEach((_, paramKey) => {
		if (paramKey === key || paramKey.startsWith(`${key}[`)) toDelete.add(paramKey);
	});
	toDelete.forEach((paramKey) => params.delete(paramKey));
};
var queryParams = (options) => {
	if (!options || !options.query && !options.mergeQuery) return "";
	const query = options.query ?? options.mergeQuery;
	const includeExisting = options.mergeQuery !== void 0;
	const params = new URLSearchParams(includeExisting && typeof window !== "undefined" ? window.location.search : "");
	for (const key in query) {
		const queryValue = query[key];
		if (includeExisting) clearParamFamily(params, key);
		if (queryValue === void 0 || queryValue === null) continue;
		if (Array.isArray(queryValue)) queryValue.forEach((value) => {
			params.append(`${key}[]`, value.toString());
		});
		else if (typeof queryValue === "object") addNestedParams(queryValue, key, params);
		else params.set(key, getValue(queryValue));
	}
	const str = params.toString();
	return str.length > 0 ? `?${str}` : "";
};
var applyUrlDefaults = (existing) => {
	const existingParams = { ...existing ?? {} };
	const defaultParams = urlDefaults();
	for (const key in defaultParams) if (existingParams[key] === void 0 && defaultParams[key] !== void 0) existingParams[key] = defaultParams[key];
	return existingParams;
};
// resources/js/routes/index.ts
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
* @see app/Http/Controllers/HomePageIndexController.php:13
* @route '/'
*/
var home = (options) => ({
	url: home.url(options),
	method: "get"
});
home.definition = {
	methods: ["get", "head"],
	url: "/"
};
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
* @see app/Http/Controllers/HomePageIndexController.php:13
* @route '/'
*/
home.url = (options) => {
	return home.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
* @see app/Http/Controllers/HomePageIndexController.php:13
* @route '/'
*/
home.get = (options) => ({
	url: home.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
* @see app/Http/Controllers/HomePageIndexController.php:13
* @route '/'
*/
home.head = (options) => ({
	url: home.url(options),
	method: "head"
});
// resources/js/components/navigation2.tsx
var navLinks = [
	{
		name: "Home",
		href: home.url()
	},
	{
		name: "Services",
		href: "/services"
	},
	{
		name: "About Us",
		href: "/about-us"
	},
	{
		name: "FAQ",
		href: "/faq"
	}
];
function Navigation2() {
	const { url } = usePage();
	const isActive = (href) => href === "/" ? url === "/" : url.startsWith(href);
	const navContent = /* @__PURE__ */ jsx("nav", {
		"aria-label": "Main navigation",
		className: "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex h-16 sm:h-20 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					href: "/",
					prefetch: "hover",
					className: "cursor-pointer flex isolate items-center gap-2 group relative shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "nav-logo-plinth absolute h-20 sm:h-24 w-70 sm:w-115 lg:w-170 -z-5 -right-3 sm:-right-4 rounded-br-2xl sm:rounded-br-3xl -skew-x-18 overflow-hidden pointer-events-none",
						children: [
							/* @__PURE__ */ jsx("div", {
								"aria-hidden": "true",
								className: "nav-logo-plinth-flare absolute inset-0"
							}),
							/* @__PURE__ */ jsx("div", {
								"aria-hidden": "true",
								className: "nav-logo-plinth-dots absolute inset-0"
							}),
							/* @__PURE__ */ jsx("div", {
								"aria-hidden": "true",
								className: "nav-logo-plinth-edge absolute inset-y-0 right-0 w-px"
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 sm:gap-2.5 md:-translate-x-2",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-heading text-3xl sm:text-5xl lg:text-[3.25rem] leading-none text-white -skew-x-18 tracking-tight font-black",
								children: "THH"
							}),
							/* @__PURE__ */ jsx("span", { className: "-skew-x-18 w-1.5 sm:w-2 h-8 sm:h-11 bg-primary shrink-0" }),
							/* @__PURE__ */ jsxs("span", {
								className: "text-[11px] sm:text-sm text-white/95 -skew-x-18 font-semibold leading-tight tracking-wide",
								children: [
									"Teemane ",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "whitespace-nowrap text-sky-300 font-bold",
										children: "Heavy Haulage"
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden lg:flex items-center gap-7",
					children: [
						navLinks.map((link) => {
							const active = isActive(link.href);
							return /* @__PURE__ */ jsx(Link, {
								href: link.href,
								prefetch: "hover",
								className: `cursor-pointer text-xs font-bold tracking-[0.18em] whitespace-nowrap uppercase transition-colors duration-200 px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm ${active ? "nav-link-active text-sky-400" : "text-slate-200 hover:text-white"}`,
								children: link.name
							}, link.name);
						}),
						/* @__PURE__ */ jsx(Link, {
							href: "/contact-us",
							prefetch: "hover",
							className: "cursor-pointer group inline-flex items-center gap-2 text-xs font-black whitespace-nowrap tracking-[0.16em] uppercase bg-linear-to-r from-primary to-sky-600 hover:from-sky-600 hover:to-primary text-white transition-all duration-200 shadow-md shadow-primary/25 hover:shadow-lg px-5 py-2.5 -skew-x-18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400",
							children: /* @__PURE__ */ jsxs("span", {
								className: "skew-x-18 inline-flex items-center gap-2",
								children: ["Request a Quote", /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" })]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "pl-4 border-l-2 border-primary/80 -skew-x-18",
							children: /* @__PURE__ */ jsx("div", {
								className: "skew-x-18",
								children: /* @__PURE__ */ jsx(ModeToggle, { className: "text-slate-200 hover:text-white hover:bg-white/10" })
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5 sm:gap-2 lg:hidden",
					children: [/* @__PURE__ */ jsx(ModeToggle, { className: "text-slate-200 hover:text-white hover:bg-white/10" }), /* @__PURE__ */ jsxs(Sheet, { children: [/* @__PURE__ */ jsxs(SheetTrigger, {
						className: "cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400",
						children: [/* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("span", {
							className: "sr-only",
							children: "Toggle navigation menu"
						})]
					}), /* @__PURE__ */ jsxs(SheetContent, {
						side: "right",
						className: "w-[82vw] max-w-sm bg-background border-l border-border flex flex-col p-0",
						children: [
							/* @__PURE__ */ jsx(SheetTitle, {
								className: "sr-only",
								children: "Navigation Menu"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex items-center gap-3 px-6 py-5 border-b border-border bg-muted/30",
								children: /* @__PURE__ */ jsx(Logo, {
									className: "h-9 w-auto",
									"aria-label": "Teemane Heavy Haulage Logo"
								})
							}),
							/* @__PURE__ */ jsxs("nav", {
								"aria-label": "Mobile navigation",
								className: "flex flex-col px-4 py-6 gap-1.5",
								children: [navLinks.map((link) => {
									const active = isActive(link.href);
									return /* @__PURE__ */ jsxs(Link, {
										href: link.href,
										prefetch: "hover",
										className: `cursor-pointer flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs font-black tracking-[0.18em] uppercase transition-colors duration-200 ${active ? "text-primary bg-primary/10 border border-primary/20" : "text-foreground hover:text-primary hover:bg-muted"}`,
										children: [active && /* @__PURE__ */ jsx("span", { className: "w-1.5 h-4 rounded-full bg-primary shrink-0" }), link.name]
									}, link.name);
								}), /* @__PURE__ */ jsxs(Link, {
									href: "/contact-us",
									prefetch: "hover",
									className: buttonVariants({
										size: "lg",
										className: "mt-4 w-full justify-between"
									}),
									children: [/* @__PURE__ */ jsx("span", { children: "Request a Quote" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-auto px-6 pb-8 space-y-4",
								children: [
									/* @__PURE__ */ jsx("div", { className: "h-px w-full bg-border" }),
									/* @__PURE__ */ jsxs("a", {
										href: "tel:0861888004",
										className: "cursor-pointer flex items-center gap-3 p-3.5 rounded-xl bg-muted/70 border border-border hover:border-primary/40 transition-colors",
										children: [/* @__PURE__ */ jsx("div", {
											className: "size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0",
											children: /* @__PURE__ */ jsx(PhoneCall, { className: "w-4 h-4" })
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "block text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground",
											children: "24/7 Dispatch Hotline"
										}), /* @__PURE__ */ jsx("span", {
											className: "block text-sm font-black text-foreground",
											children: "086 188 8004"
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-[11px] font-black tracking-[0.2em] text-primary uppercase",
										children: "TEEMANE HEAVY HAULAGE"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: "Moving the Impossible Since 2012"
									})] })
								]
							})
						]
					})] })]
				})
			]
		})
	});
	return /* @__PURE__ */ jsxs("header", {
		className: "nav-canopy-surface fixed top-0 inset-x-0 z-50 w-full transition-colors duration-300 backdrop-blur-md",
		children: [/* @__PURE__ */ jsxs("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", { className: "nav-canopy-glow absolute inset-0" }),
				/* @__PURE__ */ jsx("div", { className: "nav-canopy-dots absolute inset-0" }),
				/* @__PURE__ */ jsx("div", { className: "nav-canopy-hazard absolute inset-x-0 top-0 h-1.5" }),
				/* @__PURE__ */ jsx("div", { className: "nav-canopy-top-line absolute inset-x-0 top-0 h-px" }),
				/* @__PURE__ */ jsx("div", { className: "nav-canopy-bottom-line absolute inset-x-0 bottom-0 h-px" })
			]
		}), navContent]
	});
}
// resources/js/components/ui/misc/logo-mark.tsx
function LogoMark(props) {
	return /* @__PURE__ */ jsxs("svg", {
		id: "Layer_1",
		"data-name": "Layer 1",
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 184.93 157.99",
		...props,
		children: [
			/* @__PURE__ */ jsxs("g", { children: [
				/* @__PURE__ */ jsx("polygon", {
					className: "fill-[#026093]",
					points: "184.93 41.91 160.32 3.16 94.46 38.08 184.93 41.91"
				}),
				/* @__PURE__ */ jsx("polygon", {
					className: "fill-[#026093]",
					points: "0 41.91 25.11 3.16 90.47 38.08 0 41.91"
				}),
				/* @__PURE__ */ jsx("polygon", {
					className: "fill-[#026093]",
					points: "92.47 46.73 48.89 103.11 92.47 157.99 136.04 103.11 92.47 46.73"
				})
			] }),
			/* @__PURE__ */ jsx("polygon", {
				className: "fill-[#918e88] dark:fill-white transition-colors duration-300",
				points: "139.03 98.79 183.77 46.73 94.46 41.91 139.03 98.79"
			}),
			/* @__PURE__ */ jsx("polygon", {
				className: "fill-[#918e88] dark:fill-white transition-colors duration-300",
				points: "28.6 0 92.47 34.09 156.83 0 28.6 0"
			}),
			/* @__PURE__ */ jsx("polygon", {
				className: "fill-[#918e88] dark:fill-white transition-colors duration-300",
				points: "45.9 98.79 1.5 46.73 90.47 41.91 45.9 98.79"
			})
		]
	});
}
// resources/js/components/emergency-cta.tsx
function EmergencyCta() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-16 sm:py-24 relative overflow-x-clip isolate bg-background",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs(SpotlightCard, {
			theme: "dark",
			spotlightColor: "var(--primary)",
			intensity: .2,
			spotlightSize: 320,
			softness: .7,
			shape: "circle",
			borderGlow: .85,
			proximity: 160,
			smoothing: .5,
			grain: 0,
			ambient: false,
			flare: true,
			className: "p-0! rounded-3xl! bg-linear-to-br from-[#000d1e] via-[#011835] to-[#001027] text-white shadow-2xl!",
			style: {
				"--spotlight-card-surface": "#000d1e",
				"--spotlight-card-border": "rgba(0, 100, 190, 0.35)"
			},
			children: [
				/* @__PURE__ */ jsx("div", {
					"aria-hidden": "true",
					className: "absolute top-0 right-0 pointer-events-none opacity-[0.07] translate-x-1/3 -translate-y-1/6",
					children: /* @__PURE__ */ jsx(LogoMark, { className: "w-72 md:w-104 h-auto text-white" })
				}),
				/* @__PURE__ */ jsx("div", {
					"aria-hidden": "true",
					className: "absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/25 blur-[90px] pointer-events-none"
				}),
				/* @__PURE__ */ jsx("div", {
					"aria-hidden": "true",
					className: "absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-sky-500/15 blur-[90px] pointer-events-none"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative z-10 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex-1 space-y-5 text-center lg:text-left",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 bg-sky-500/15 border border-sky-400/30 px-4 py-1.5 rounded-full text-sky-300 shadow-xs",
								children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-sky-400 shrink-0" }), /* @__PURE__ */ jsx("span", {
									className: "text-[11px] sm:text-xs font-black uppercase tracking-[0.2em]",
									children: "24/7 Rapid Response"
								})]
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-3xl sm:text-4xl lg:text-5xl font-heading font-black uppercase tracking-tighter text-white leading-[1.08]",
								children: [
									"Emergencies Don't Wait For",
									" ",
									/* @__PURE__ */ jsx("br", { className: "hidden lg:block" }),
									/* @__PURE__ */ jsx("span", {
										className: "bg-clip-text text-transparent bg-linear-to-r from-sky-400 to-blue-400 pr-1",
										children: "Business Hours."
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed",
								children: "Unexpected equipment failures and critical incidents demand immediate action. Our specialised rapid-response teams are on standby 24/7 to provide urgent heavy haulage and transport solutions, minimising your downtime."
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "shrink-0 w-full sm:w-auto",
						children: /* @__PURE__ */ jsxs("a", {
							href: "tel:0861888004",
							className: "cursor-pointer group overflow-clip isolate relative flex items-center justify-center gap-5 bg-linear-to-r from-primary to-sky-600 text-white hover:from-primary/90 hover:to-sky-500 transition-all duration-200 px-6 sm:px-8 py-5 sm:py-6 rounded-2xl w-full sm:w-auto shadow-xl shadow-primary/30 hover:shadow-2xl motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#000d1e]",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "bg-white/15 p-3.5 sm:p-4 rounded-xl border border-white/20 transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none",
									children: /* @__PURE__ */ jsx(PhoneCall, { className: "w-6 h-6 sm:w-7 sm:h-7 text-white" })
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "text-left",
									children: [/* @__PURE__ */ jsx("span", {
										className: "block text-[11px] font-black uppercase tracking-[0.2em] text-sky-100/90 mb-0.5",
										children: "Direct Dispatch Line"
									}), /* @__PURE__ */ jsx("span", {
										className: "block text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-white whitespace-nowrap",
										children: "086 188 8004"
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									"aria-hidden": "true",
									className: "absolute inset-0 -z-10 opacity-10 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#000_4px,#000_8px)]"
								})
							]
						})
					})]
				})
			]
		}) })
	});
}
// resources/js/layouts/app-layout.tsx
var Map = lazy(() => import("./map-BNYngfn7.js"));
function AppLayout({ children, title, description, image }) {
	const [mounted, setMounted] = useState(false);
	const { url } = usePage();
	useEffect(() => setMounted(true), []);
	const defaultTitle = "Teemane Heavy Haulage";
	const siteTitle = title ? `${title} - ${defaultTitle}` : defaultTitle;
	const siteDescription = description || "The only name trusted to perform on South Africa's most demanding worksites. Unmatched excellence in heavy haulage, abnormal transport, and specialised logistics across the SADC region.";
	const siteImage = image || "/images/logo.svg";
	const fullUrl = typeof window !== "undefined" ? window.location.href : url;
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 selection:bg-primary/75 selection:text-white",
		children: [
			/* @__PURE__ */ jsxs(Head, { children: [
				title ? /* @__PURE__ */ jsx("title", { children: title }) : /* @__PURE__ */ jsx("title", { children: defaultTitle }),
				/* @__PURE__ */ jsx("meta", {
					name: "description",
					content: siteDescription
				}),
				/* @__PURE__ */ jsx("meta", {
					property: "og:type",
					content: "website"
				}),
				/* @__PURE__ */ jsx("meta", {
					property: "og:url",
					content: fullUrl
				}),
				/* @__PURE__ */ jsx("meta", {
					property: "og:title",
					content: siteTitle
				}),
				/* @__PURE__ */ jsx("meta", {
					property: "og:description",
					content: siteDescription
				}),
				/* @__PURE__ */ jsx("meta", {
					property: "og:image",
					content: siteImage
				}),
				/* @__PURE__ */ jsx("meta", {
					name: "twitter:card",
					content: "summary_large_image"
				}),
				/* @__PURE__ */ jsx("meta", {
					name: "twitter:url",
					content: fullUrl
				}),
				/* @__PURE__ */ jsx("meta", {
					name: "twitter:title",
					content: siteTitle
				}),
				/* @__PURE__ */ jsx("meta", {
					name: "twitter:description",
					content: siteDescription
				}),
				/* @__PURE__ */ jsx("meta", {
					name: "twitter:image",
					content: siteImage
				})
			] }),
			/* @__PURE__ */ jsx("a", {
				className: "sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:px-4 focus:py-2 focus:rounded-xl focus:bg-background focus:text-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-bold text-sm",
				href: "#main",
				children: "Skip to main content"
			}),
			/* @__PURE__ */ jsx(Navigation2, {}),
			/* @__PURE__ */ jsx("main", {
				id: "main",
				className: "w-full flex-1 flex flex-col",
				children
			}),
			/* @__PURE__ */ jsx(EmergencyCta, {}),
			mounted && /* @__PURE__ */ jsx(Suspense, {
				fallback: null,
				children: /* @__PURE__ */ jsx(Map, {})
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(Toaster, {})
		]
	});
}
export { toast as a, Button$1 as c, cn as d, queryParams as i, buttonVariants as l, LogoMark as n, SpotlightCard as o, applyUrlDefaults as r, Logo as s, AppLayout as t, Wrapper as u };

//# sourceMappingURL=app-layout-DCuwPKZC.js.map