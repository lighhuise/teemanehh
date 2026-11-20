import { d as cn } from "./app-layout-DCuwPKZC.js";
import { jsx, jsxs } from "react/jsx-runtime";
// resources/js/components/ui/misc/section-heading.tsx
var alignClass = {
	left: "items-start text-left",
	center: "items-center text-center",
	right: "items-end text-right"
};
function SectionHeading({ label, title, children, align = "center", tone = "default", className }) {
	const isDark = tone === "dark";
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col space-y-4", alignClass[align], className),
		children: [
			label && /* @__PURE__ */ jsxs("span", {
				className: cn("inline-flex items-center gap-2 text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full border w-fit", isDark ? "bg-sky-500/15 text-sky-300 border-sky-400/25" : "bg-primary/10 text-primary border-primary/20"),
				children: [/* @__PURE__ */ jsx("span", {
					"aria-hidden": "true",
					className: cn("size-1.5 rounded-full", isDark ? "bg-sky-400" : "bg-primary")
				}), label]
			}),
			/* @__PURE__ */ jsx("h2", {
				className: cn("text-3xl sm:text-4xl lg:text-5xl max-w-2xl text-balance font-heading font-black uppercase tracking-tighter leading-[1.08]", isDark ? "text-white" : "text-foreground"),
				children: title
			}),
			children && /* @__PURE__ */ jsx("div", {
				className: cn("text-base sm:text-lg leading-relaxed", isDark ? "text-slate-300" : "text-muted-foreground", align === "center" && "max-w-2xl mx-auto", align === "left" && "max-w-2xl", align === "right" && "max-w-2xl ml-auto"),
				children
			})
		]
	});
}
export { SectionHeading as t };

//# sourceMappingURL=section-heading-CT93tXK3.js.map