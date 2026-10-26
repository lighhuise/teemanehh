import { l as cn } from "./app-layout-B7PuHxtL.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region resources/js/components/ui/misc/floating-stat-card.tsx
var positionClasses = {
	"top-left": "top-0 left-0 md:-left-8 -translate-y-1/2",
	"top-right": "top-0 right-0 md:-right-8 -translate-y-1/2",
	"bottom-left": "bottom-0 left-0 md:-left-8 translate-y-1/2",
	"bottom-right": "bottom-0 right-0 md:-right-8 translate-y-1/2"
};
function FloatingStatCard({ value, label, position = "bottom-left", className, delay = 0 }) {
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			x: position.includes("left") ? -20 : 20
		},
		whileInView: {
			opacity: 1,
			x: 0
		},
		viewport: { once: true },
		animate: { y: [
			0,
			-6,
			0
		] },
		transition: {
			x: {
				duration: .6,
				type: "spring",
				bounce: .4
			},
			opacity: { duration: .6 },
			y: {
				duration: 4,
				repeat: Infinity,
				ease: "easeInOut",
				delay
			}
		},
		className: cn("absolute pointer-events-none z-20 flex items-stretch group", positionClasses[position], className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative z-10 -mr-6 bg-linear-to-br from-primary to-primary/80 border border-primary-foreground/20 shadow-xl shadow-primary/30 px-5 py-3 md:px-7 md:py-4 rounded-xl -skew-x-12 transform group-hover:-translate-y-1 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#000_4px,#000_8px)]" }), /* @__PURE__ */ jsx("div", {
				className: "skew-x-12 relative flex items-center justify-center",
				children: /* @__PURE__ */ jsx("span", {
					className: "text-3xl md:text-5xl font-black text-primary-foreground tracking-tighter drop-shadow-md",
					children: value
				})
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-r-xl rounded-l-[2.5rem] pl-10 pr-6 py-3 md:py-4 flex flex-col justify-center min-w-[140px]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "absolute top-3 right-4 flex items-center gap-1.5",
				children: [/* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary/40 animate-ping absolute" }), /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary relative" })]
			}), /* @__PURE__ */ jsx("div", {
				className: "text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-foreground leading-snug max-w-[120px] mt-1",
				children: label
			})]
		})]
	});
}
//#endregion
export { FloatingStatCard as t };

//# sourceMappingURL=floating-stat-card-BXZ6Ejll.js.map