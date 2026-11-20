import { u as Wrapper } from "./app-layout-DCuwPKZC.js";
import { t as StackedImage } from "./stacked-image-K_AKMb2m.js";
import { n as responsiveImages } from "./responsive-image-CxkYlq3p.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
// resources/js/components/ui/misc/page-header.tsx
function PageHeader({ label, title, description, children, image, imageSrcSet, imageAlt, imageClassName, className }) {
	const headerImage = image || responsiveImages.lineup;
	return /* @__PURE__ */ jsxs("section", {
		className: `relative border-b border-border bg-background overflow-hidden isolate pb-16 sm:pb-20 pt-28 sm:pt-36 lg:pt-44 lg:pb-28 ${className || ""}`,
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": "true",
			className: "page-header-radial absolute inset-0 pointer-events-none select-none -z-10"
		}), /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-6 space-y-6",
					children: [
						label && /* @__PURE__ */ jsx("span", {
							className: "inline-flex text-xs font-black uppercase tracking-[0.2em] text-primary px-4 py-1.5 rounded-full bg-primary/10 w-fit",
							children: label
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "text-3xl sm:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter text-foreground leading-[1.08]",
							children: title
						}),
						description && /* @__PURE__ */ jsx("p", {
							className: "page-header-desc text-base sm:text-xl text-muted-foreground leading-relaxed font-normal",
							children: description
						}),
						children
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-6 flex justify-center lg:justify-end",
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
		})]
	});
}
export { PageHeader as t };

//# sourceMappingURL=page-header-B50LwUXx.js.map