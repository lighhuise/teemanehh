import { c as Wrapper, t as AppLayout } from "./app-layout-DVyLTKad.js";
import { t as PageHeader } from "./page-header-D3uo1gMx.js";
import { t as ServiceCard } from "./service-card-c8rnEs57.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/services/index.tsx
function Index({ services }) {
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: "Services",
		children: [/* @__PURE__ */ jsx(PageHeader, {
			title: /* @__PURE__ */ jsxs(Fragment, { children: ["SPECIALISED TRANSPORT ", /* @__PURE__ */ jsx("span", {
				className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1 pb-1",
				children: "SOLUTIONS"
			})] }),
			description: "We understand that every heavy haulage project demands precision, reliability and rigorous planning. Our capabilities provide the flexibility and strength needed to tackle the most demanding abnormal loads."
		}), /* @__PURE__ */ jsx("div", {
			className: "bg-background selection:bg-primary selection:text-white pb-24",
			children: /* @__PURE__ */ jsx("section", {
				className: "py-24 bg-background",
				children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: services.map((service, idx) => /* @__PURE__ */ jsx(ServiceCard, {
						service,
						index: idx
					}, service.id))
				}) })
			})
		})]
	});
}
//#endregion
export { Index as default };

//# sourceMappingURL=services-ChTpFvbc.js.map