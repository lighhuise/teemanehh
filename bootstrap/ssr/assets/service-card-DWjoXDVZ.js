import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
//#region resources/js/components/service-card.tsx
function ServiceCard({ service, index }) {
	return /* @__PURE__ */ jsxs(Link, {
		href: `/services/${service.slug}`,
		className: "group relative p-8 bg-card flex flex-col justify-between min-h-65 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 rounded-2xl border border-border/40 hover:border-primary/20",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm mb-2",
					children: ["0", index + 1]
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "text-xl font-bold text-foreground group-hover:text-primary transition-colors",
					children: service.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground line-clamp-4 leading-relaxed",
					children: service.short_description
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-8 flex items-center text-sm font-semibold tracking-wide text-primary",
			children: ["Learn More ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" })]
		})]
	});
}
//#endregion
export { ServiceCard as t };

//# sourceMappingURL=service-card-DWjoXDVZ.js.map