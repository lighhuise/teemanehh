import { d as cn } from "./app-layout-4wljOYs7.js";
import { t as ResponsiveImage } from "./responsive-image-CxkYlq3p.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
// resources/js/components/ui/misc/stacked-image.tsx
function StackedImage({ src, srcSet, sizes = "(max-width: 1023px) calc(100vw - 2.5rem), 48vw", priority = false, alt = "Teemane Heavy Haulage", className, imageClassName, containerClassName, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("relative pr-5 pb-5 sm:pr-7 sm:pb-7 w-full", containerClassName),
		...props,
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative group w-full max-w-2xl mx-auto lg:max-w-none",
			children: [
				/* @__PURE__ */ jsxs("div", {
					"aria-hidden": "true",
					className: "scroll-divider-surface absolute inset-0 rounded-2xl border border-primary/50 shadow-xl shadow-primary/25 overflow-hidden origin-bottom-right scale-95 sm:scale-[0.97] translate-x-4 translate-y-4 sm:translate-x-7 sm:translate-y-7 transition-transform duration-500 ease-out group-hover:translate-x-5 group-hover:translate-y-5 sm:group-hover:translate-x-9 sm:group-hover:translate-y-9 motion-reduce:transition-none motion-reduce:group-hover:translate-x-4 motion-reduce:group-hover:translate-y-4 sm:motion-reduce:group-hover:translate-x-7 sm:motion-reduce:group-hover:translate-y-7",
					children: [
						/* @__PURE__ */ jsx("div", { className: "scroll-divider-corona absolute inset-0 scale-y-[-1]" }),
						/* @__PURE__ */ jsx("div", { className: "nav-logo-plinth-dots absolute inset-0" }),
						/* @__PURE__ */ jsx("div", { className: "nav-canopy-hazard absolute inset-x-0 bottom-0 h-2 border-t border-white/15 border-b-0" })
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					"aria-hidden": "true",
					className: "stacked-image-glass absolute inset-0 rounded-2xl overflow-hidden origin-bottom-right scale-95 sm:scale-[0.97] translate-x-2 translate-y-2 sm:translate-x-3.5 sm:translate-y-3.5 transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-3 sm:group-hover:translate-x-5 sm:group-hover:translate-y-5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-2 motion-reduce:group-hover:translate-y-2 sm:motion-reduce:group-hover:translate-x-3.5 sm:motion-reduce:group-hover:translate-y-3.5",
					children: [
						/* @__PURE__ */ jsx("div", { className: "stacked-image-glass-flare absolute inset-0" }),
						/* @__PURE__ */ jsx("div", { className: "nav-logo-plinth-dots absolute inset-0" }),
						/* @__PURE__ */ jsx("div", { className: "nav-logo-plinth-edge absolute inset-y-0 right-0 w-px" }),
						/* @__PURE__ */ jsx("div", { className: "stacked-image-glass-bottom-edge absolute inset-x-0 bottom-0 h-px" })
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: cn("relative z-10 w-full aspect-16/10 sm:aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-sky-300/30 ring-1 ring-inset ring-white/15 bg-muted", className),
					children: [/* @__PURE__ */ jsx(ResponsiveImage, {
						source: src,
						srcSet,
						sizes,
						priority,
						alt,
						className: cn("w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100", imageClassName)
					}), /* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-200/60 to-transparent"
					})]
				})
			]
		})
	});
}
export { StackedImage as t };

//# sourceMappingURL=stacked-image-CCRpH6iH.js.map