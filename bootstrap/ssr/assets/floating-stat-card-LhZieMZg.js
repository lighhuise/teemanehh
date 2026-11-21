import { d as cn } from "./app-layout-4wljOYs7.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion, useReducedMotion } from "framer-motion";
// resources/js/components/ui/misc/floating-stat-card.tsx
var positionClasses = {
	"top-left": "top-0 left-2 sm:left-0 lg:-left-6 -translate-y-1/2",
	"top-right": "top-0 right-2 sm:right-0 lg:-right-6 -translate-y-1/2",
	"bottom-left": "bottom-0 left-2 sm:left-0 lg:-left-6 translate-y-1/2",
	"bottom-right": "bottom-0 right-2 sm:right-0 lg:-right-6 translate-y-1/2"
};
function FloatingStatCard({ value, label, position = "bottom-left", glass = "frosted", className, delay = 0 }) {
	const prefersReducedMotion = useReducedMotion();
	const isRealGlass = glass === "realglass";
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: prefersReducedMotion ? void 0 : {
			opacity: 0,
			x: position.includes("left") ? -16 : 16
		},
		whileInView: prefersReducedMotion ? void 0 : {
			opacity: 1,
			x: 0
		},
		viewport: { once: true },
		animate: prefersReducedMotion ? void 0 : { y: [
			0,
			-5,
			0
		] },
		transition: prefersReducedMotion ? void 0 : {
			x: {
				duration: .5,
				type: "spring",
				bounce: .3
			},
			opacity: { duration: .5 },
			y: {
				duration: 4.5,
				repeat: Infinity,
				ease: "easeInOut",
				delay
			}
		},
		className: cn("absolute pointer-events-none z-20 flex items-stretch group max-w-[calc(100%-1rem)]", positionClasses[position], className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("relative z-10 -mr-5 sm:-mr-6 px-4 py-2.5 sm:px-5 sm:py-3 md:px-7 md:py-4 rounded-xl -skew-x-12 flex items-center justify-center overflow-hidden", isRealGlass ? "floating-stat-value-realglass" : "floating-stat-value"),
			children: [isRealGlass ? /* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "floating-stat-realglass-sheen pointer-events-none absolute inset-0"
			}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 opacity-15 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#000_4px,#000_8px)]"
			}), /* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-200/80 to-transparent"
			})] }), /* @__PURE__ */ jsx("div", {
				className: "skew-x-12 relative flex items-center justify-center",
				children: /* @__PURE__ */ jsx("span", {
					className: cn("text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white tracking-tighter", isRealGlass ? "drop-shadow-[0_1px_6px_rgba(0,12,32,0.55)]" : "drop-shadow-[0_2px_10px_rgba(56,189,248,0.35)]"),
					children: value
				})
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: cn("relative overflow-hidden rounded-r-xl rounded-l-[2.25rem] pl-8 sm:pl-10 pr-4 sm:pr-6 py-2.5 sm:py-3 md:py-4 flex flex-col justify-center min-w-[124px] sm:min-w-[144px]", isRealGlass ? "floating-stat-realglass" : "floating-stat-glass"),
			children: [
				isRealGlass ? /* @__PURE__ */ jsx("div", {
					"aria-hidden": "true",
					className: "floating-stat-realglass-sheen pointer-events-none absolute inset-0"
				}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
					"aria-hidden": "true",
					className: "floating-stat-flare pointer-events-none absolute inset-0"
				}), /* @__PURE__ */ jsx("div", {
					"aria-hidden": "true",
					className: "nav-logo-plinth-dots pointer-events-none absolute inset-0"
				})] }),
				/* @__PURE__ */ jsx("div", {
					"aria-hidden": "true",
					className: "nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute top-2.5 right-3 sm:top-3 sm:right-4 flex items-center gap-1.5 z-10",
					children: [/* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-sky-400/50 animate-ping motion-reduce:animate-none absolute" }), /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)] relative" })]
				}),
				/* @__PURE__ */ jsx("div", {
					className: cn("relative z-10 text-[10px] sm:text-[11px] md:text-xs font-black uppercase tracking-[0.16em] leading-snug max-w-[120px] mt-0.5", isRealGlass ? "text-white [text-shadow:0_1px_6px_rgba(0,10,28,0.7)]" : "text-slate-100"),
					children: label
				})
			]
		})]
	});
}
export { FloatingStatCard as t };

//# sourceMappingURL=floating-stat-card-LhZieMZg.js.map