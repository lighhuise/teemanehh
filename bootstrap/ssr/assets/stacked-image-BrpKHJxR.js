import { u as cn } from "./app-layout-D9mOtw6n.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
// resources/js/components/ui/misc/stacked-image.tsx
function StackedImage({ src, alt = "Teemane Heavy Haulage", className, imageClassName, containerClassName, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("relative pr-2 pb-2 sm:pr-6 sm:pb-6 w-full", containerClassName),
		...props,
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative group w-full max-w-2xl mx-auto lg:max-w-none",
			children: [
				/* @__PURE__ */ jsx("div", {
					"aria-hidden": "true",
					className: "absolute inset-0 rounded-2xl bg-linear-to-br from-primary to-primary/80 border border-primary-foreground/20 shadow-xl shadow-primary/30 overflow-hidden origin-bottom-right scale-95 sm:scale-[0.97] translate-x-5 translate-y-5 sm:translate-x-7 sm:translate-y-7 transition-transform duration-500 ease-out group-hover:translate-x-6 group-hover:translate-y-6 sm:group-hover:translate-x-9 sm:group-hover:translate-y-9",
					children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#000_4px,#000_8px)]" })
				}),
				/* @__PURE__ */ jsx("div", {
					"aria-hidden": "true",
					className: "absolute inset-0 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl origin-bottom-right scale-95 sm:scale-[0.97] translate-x-2.5 translate-y-2.5 sm:translate-x-3.5 sm:translate-y-3.5 transition-transform duration-500 ease-out group-hover:translate-x-3.5 group-hover:translate-y-3.5 sm:group-hover:translate-x-5 sm:group-hover:translate-y-5"
				}),
				/* @__PURE__ */ jsx("div", {
					className: cn("relative z-10 w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-muted", className),
					children: /* @__PURE__ */ jsx("img", {
						src,
						alt,
						className: cn("w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105", imageClassName)
					})
				})
			]
		})
	});
}
export { StackedImage as t };

//# sourceMappingURL=stacked-image-BrpKHJxR.js.map