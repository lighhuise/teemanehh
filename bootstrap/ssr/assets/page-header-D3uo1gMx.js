import { c as Wrapper } from "./app-layout-DVyLTKad.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
//#region resources/js/components/ui/misc/page-header.tsx
function PageHeader({ title, description, image, className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `relative bg-background overflow-hidden border-b border-border/50 pb-24 pt-48 ${className || ""}`,
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-b from-primary/5 to-transparent pointer-events-none" }), /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-3xl space-y-6",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "text-4xl sm:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter text-foreground leading-[1.1]",
					children: title
				}), description && /* @__PURE__ */ jsx("p", {
					className: "text-lg sm:text-xl text-muted-foreground leading-relaxed",
					children: description
				})]
			})
		})]
	});
}
//#endregion
export { PageHeader as t };

//# sourceMappingURL=page-header-D3uo1gMx.js.map