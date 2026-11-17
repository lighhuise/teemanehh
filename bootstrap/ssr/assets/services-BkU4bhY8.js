import { l as Wrapper, r as LogoMark, t as AppLayout, u as cn } from "./app-layout-D9mOtw6n.js";
import { t as PageHeader } from "./page-header-CpAPd8b_.js";
import { t as ServiceCard } from "./service-card-YRD-CPi1.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
// resources/images/480681841_599071983112975_7334336084460441989_n.webp
var _480681841_599071983112975_7334336084460441989_n_default = "/build/assets/480681841_599071983112975_7334336084460441989_n-DAroHuZe.webp";
// resources/js/pages/services/index.tsx
function Index({ services }) {
	const isFourCol = services?.length === 4 || services?.length && services.length % 4 === 0;
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: "Services",
		children: [/* @__PURE__ */ jsx(PageHeader, {
			title: /* @__PURE__ */ jsxs(Fragment, { children: ["SPECIALISED TRANSPORT ", /* @__PURE__ */ jsx("span", {
				className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1 pb-1",
				children: "SOLUTIONS"
			})] }),
			description: "We understand that every heavy haulage project demands precision, reliability and rigorous planning. Our capabilities provide the flexibility and strength needed to tackle the most demanding abnormal loads.",
			image: _480681841_599071983112975_7334336084460441989_n_default
		}), /* @__PURE__ */ jsxs("div", {
			className: "bg-background selection:bg-primary selection:text-white relative",
			children: [/* @__PURE__ */ jsxs("div", {
				"aria-hidden": "true",
				className: "absolute top-30 right-0 pointer-events-none opacity-10 md:opacity-[0.1] translate-x-1/2 mix-blend-luminosity",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mr-20 -mt-20 w-180 h-180 rounded-full blur-[80px] bg-primary/50 pointer-events-none" }), /* @__PURE__ */ jsx(LogoMark, { className: "w-64 md:w-96 h-auto" })]
			}), /* @__PURE__ */ jsx("section", {
				className: "relative py-20 md:py-28 bg-background overflow-clip",
				children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx("div", {
					className: cn("grid gap-6 relative z-10", isFourCol ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3"),
					children: services.map((service) => /* @__PURE__ */ jsx(ServiceCard, { service }, service.id))
				}) })
			})]
		})]
	});
}
export { Index as default };

//# sourceMappingURL=services-BkU4bhY8.js.map