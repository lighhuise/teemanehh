import { l as Wrapper } from "./app-layout-DecTnfMv.js";
import { t as StackedImage } from "./stacked-image-B5UfbF9L.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
// resources/images/lineup.webp
var lineup_default = "/build/assets/lineup-Ccm_0BOI.webp";
// resources/js/components/ui/misc/page-header.tsx
function PageHeader({ label, title, description, children, image, imageAlt, className }) {
	const headerImage = image || lineup_default;
	return /* @__PURE__ */ jsxs("section", {
		className: `relative border-b border-border bg-background overflow-hidden isolate pb-20 pt-36 sm:pt-44 lg:pt-48 lg:pb-28 ${className || ""}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none -z-10",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" }), /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-sky-500/5 blur-[120px] rounded-full" })]
		}), /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-6 space-y-6",
					children: [
						label && /* @__PURE__ */ jsx("span", {
							className: "inline-flex text-xs font-black uppercase tracking-[0.2em] text-primary px-4 py-1.5 rounded-full bg-primary/10 w-fit",
							children: label
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "text-4xl sm:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter text-foreground leading-[1.08]",
							children: title
						}),
						description && /* @__PURE__ */ jsx("p", {
							className: "text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal",
							children: description
						}),
						children
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-6 flex justify-center lg:justify-end",
					children: /* @__PURE__ */ jsx(StackedImage, {
						src: headerImage,
						alt: imageAlt || (typeof title === "string" ? title : "Teemane Heavy Haulage")
					})
				})]
			})
		})]
	});
}
export { PageHeader as t };

//# sourceMappingURL=page-header-C4gjJ3tB.js.map