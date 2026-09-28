import { c as cn } from "./app-layout-jF4oSNeR.js";
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
				className: "text-sm font-semibold text-primary tracking-wide uppercase px-3 py-1 rounded-full bg-primary/10",
				children: label
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "text-3xl md:text-4xl lg:text-5xl max-w-2xl text-balance font-bold tracking-tight text-foreground leading-[1.15]",
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

//# sourceMappingURL=section-heading-DT21cNXU.js.map