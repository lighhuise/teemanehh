import { d as cn, u as Wrapper } from "./app-layout-4wljOYs7.js";
import { t as StackedImage } from "./stacked-image-CCRpH6iH.js";
import { n as responsiveImages } from "./responsive-image-CxkYlq3p.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
// resources/js/components/ui/misc/page-header.tsx
function PageHeader({ label, title, description, children, image, imageSrcSet, imageAlt, imageClassName, className }) {
	const headerImage = image || responsiveImages.lineup;
	return /* @__PURE__ */ jsxs("section", {
		className: cn("capabilities-glass-stage relative isolate overflow-hidden border-b border-sky-500/15 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28", className),
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "capabilities-stage-dots pointer-events-none absolute inset-0 -z-10"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-50"
			}),
			/* @__PURE__ */ jsx(Wrapper, {
				className: "relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-6 lg:col-span-6",
						children: [
							label && /* @__PURE__ */ jsxs("span", {
								className: "bento-glass-card relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-full px-4 py-1.5 text-xs font-black tracking-[0.2em] text-primary uppercase dark:text-sky-200",
								children: [
									/* @__PURE__ */ jsx("span", {
										"aria-hidden": "true",
										className: "bento-glass-card-flare pointer-events-none absolute inset-0"
									}),
									/* @__PURE__ */ jsx("span", {
										"aria-hidden": "true",
										className: "relative z-10 size-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,100,190,0.8)] dark:bg-sky-400 dark:shadow-[0_0_8px_#38bdf8]"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "relative z-10",
										children: label
									})
								]
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "font-heading text-3xl leading-[1.08] font-black tracking-tighter text-foreground uppercase sm:text-5xl lg:text-6xl",
								children: title
							}),
							description && /* @__PURE__ */ jsx("p", {
								className: "page-header-desc text-base leading-relaxed font-normal text-muted-foreground sm:text-xl",
								children: description
							}),
							children
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex justify-center lg:col-span-6 lg:justify-end",
						children: /* @__PURE__ */ jsx(StackedImage, {
							src: headerImage,
							srcSet: imageSrcSet,
							sizes: "(max-width: 1023px) calc(100vw - 2.5rem), 48vw",
							priority: true,
							imageClassName,
							alt: imageAlt || (typeof title === "string" ? title : "Teemane Heavy Haulage")
						})
					})]
				})
			})
		]
	});
}
export { PageHeader as t };

//# sourceMappingURL=page-header-ICKVkuZ7.js.map