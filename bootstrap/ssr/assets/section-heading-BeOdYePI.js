import { l as cn } from "./app-layout-CcOx8vC6.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/ui/misc/section-heading.tsx
var alignClass = {
	left: "items-start text-left",
	center: "items-center text-center",
	right: "items-end text-right"
};
function SectionHeading({ label, title, children, align = "center", className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col space-y-4", alignClass[align], className),
		children: [
			label && /* @__PURE__ */ jsx("span", {
				className: "text-xs font-black uppercase tracking-[0.2em] text-primary px-4 py-1.5 rounded-full bg-primary/10 w-fit",
				children: label
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "text-3xl md:text-4xl lg:text-5xl max-w-2xl text-balance font-heading font-black uppercase tracking-tighter text-foreground leading-[1.15]",
				children: title
			}),
			children && /* @__PURE__ */ jsx("div", {
				className: cn("text-lg text-muted-foreground leading-relaxed", align === "center" && "max-w-2xl mx-auto", align === "left" && "max-w-2xl", align === "right" && "max-w-2xl ml-auto"),
				children
			})
		]
	});
}
//#endregion
export { SectionHeading as t };

//# sourceMappingURL=section-heading-BeOdYePI.js.map