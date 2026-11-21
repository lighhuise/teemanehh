import { d as cn, l as Logo } from "./app-layout-4wljOYs7.js";
import { n as responsiveImages, t as ResponsiveImage } from "./responsive-image-CxkYlq3p.js";
import { n as DividerSurface } from "./scroll-divider-DhWxEaK9.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useRef } from "react";
// resources/js/components/ui/divider-1.tsx
function Divider1({ className, leftImage = responsiveImages.volvoBlueprintLeft, rightImage = responsiveImages.volvoBlueprintRight, style, ...props }) {
	const rootRef = useRef(null);
	return /* @__PURE__ */ jsx(DividerSurface, {
		ref: rootRef,
		className: cn("h-56 sm:h-80 lg:h-105 select-none", className),
		style,
		...props,
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative flex h-full w-full items-center justify-center overflow-hidden px-4",
			children: [
				rightImage && /* @__PURE__ */ jsx(ResponsiveImage, {
					source: rightImage,
					sizes: "(max-width: 639px) 34vw, (max-width: 1023px) 38vw, 40vw",
					alt: "",
					"aria-hidden": "true",
					className: "pointer-events-none absolute top-9 right-2 bottom-9 h-[calc(100%-4.5rem)] w-auto max-w-[34%] sm:max-w-[38%] object-contain object-right opacity-65 sm:opacity-85 mix-blend-screen sm:top-11 sm:right-6 sm:bottom-11 sm:h-[calc(100%-5.5rem)] lg:right-10"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: `isolate size-28 sm:size-32 relative`,
					children: [/* @__PURE__ */ jsxs("div", {
						className: `size-44 sm:size-50 -z-10 animate-[spin_20s_linear_infinite] motion-reduce:animate-none border border-dashed border-white/25 absolute left-1/2 top-1/2 rounded-full -translate-1/2`,
						children: [
							/* @__PURE__ */ jsx("div", { className: `h-px -inset-x-30 bg-linear-to-r from-transparent via-white/30 to-transparent absolute top-1/2` }),
							/* @__PURE__ */ jsx("div", { className: `h-px -inset-x-10 bg-linear-to-r rotate-45 from-transparent via-white/30 to-transparent absolute top-1/2` }),
							/* @__PURE__ */ jsx("div", { className: `h-px -inset-x-20 bg-linear-to-r -rotate-45 from-transparent via-white/30 to-transparent absolute top-1/2` }),
							/* @__PURE__ */ jsx("div", { className: `w-px -inset-y-10 bg-linear-to-b from-transparent via-white/30 to-transparent absolute left-1/2` }),
							/* @__PURE__ */ jsx("div", { className: `border-2 inset-4 border-white/25 absolute rounded-full` })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "glass-plinth-medallion relative isolate size-28 sm:size-32 rounded-full overflow-hidden grid place-items-center",
						children: [
							/* @__PURE__ */ jsx("div", {
								"aria-hidden": "true",
								className: "glass-plinth-medallion-flare pointer-events-none absolute inset-0"
							}),
							/* @__PURE__ */ jsx("div", {
								"aria-hidden": "true",
								className: "glass-plinth-medallion-dots pointer-events-none absolute inset-0"
							}),
							/* @__PURE__ */ jsx("div", {
								"aria-hidden": "true",
								className: "glass-plinth-medallion-rim pointer-events-none absolute inset-0 rounded-full"
							}),
							/* @__PURE__ */ jsx(Logo, {
								inverted: true,
								className: "h-8 z-10 sm:h-11 w-auto block relative drop-shadow-[0_2px_10px_rgba(0,100,190,0.45)] transition-transform duration-300 group-hover:scale-105",
								"aria-label": "Teemane Heavy Haulage Logo"
							})
						]
					})]
				}),
				leftImage && /* @__PURE__ */ jsx(ResponsiveImage, {
					source: leftImage,
					sizes: "(max-width: 639px) 34vw, (max-width: 1023px) 38vw, 40vw",
					alt: "",
					"aria-hidden": "true",
					className: "pointer-events-none absolute top-9 left-2 bottom-9 h-[calc(100%-4.5rem)] w-auto max-w-[34%] sm:max-w-[38%] object-contain object-left opacity-65 sm:opacity-85 mix-blend-screen sm:top-11 sm:left-6 sm:bottom-11 sm:h-[calc(100%-5.5rem)] lg:left-10"
				})
			]
		})
	});
}
Divider1.displayName = "Divider1";
export { Divider1 as t };

//# sourceMappingURL=divider-1-B8EquaLK.js.map