import { d as cn, n as LogoMark, t as AppLayout, u as Wrapper } from "./app-layout-4wljOYs7.js";
import { t as PageHeader } from "./page-header-ICKVkuZ7.js";
import { t as ServiceCard } from "./service-card-DWpa_fmF.js";
import { n as responsiveImages } from "./responsive-image-CxkYlq3p.js";
import { t as ScrollDivider } from "./scroll-divider-DhWxEaK9.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import React from "react";
// resources/js/pages/services/index.tsx
function renderServiceTickerRow(items) {
	return /* @__PURE__ */ jsx(Fragment, { children: items.map((service, idx) => /* @__PURE__ */ jsxs(React.Fragment, { children: [idx > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
		"\xA0",
		/* @__PURE__ */ jsx("span", {
			className: "mx-3.75 inline-flex items-center",
			children: "•"
		}),
		"\xA0"
	] }), /* @__PURE__ */ jsx("span", {
		className: "inline-flex items-center font-heading uppercase",
		children: service.title
	})] }, service.id ?? service.slug ?? idx)) });
}
function Index({ services }) {
	const isFourCol = services?.length === 4 || services?.length && services.length % 4 === 0;
	const midpoint = Math.ceil((services?.length || 0) / 2);
	const firstRowServices = services?.slice(0, midpoint) ?? [];
	const secondRowServices = services?.length > 1 ? services.slice(midpoint) : firstRowServices;
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: "Services",
		children: [
			/* @__PURE__ */ jsx(PageHeader, {
				label: "Fleet & Capabilities",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"SPECIALISED TRANSPORT",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "bg-linear-to-r from-primary to-sky-500 bg-clip-text pr-1 text-transparent",
						children: "SOLUTIONS"
					})
				] }),
				description: "We understand that every heavy haulage project demands precision, reliability and rigorous planning. Our capabilities provide the flexibility and strength needed to tackle the most demanding abnormal loads.",
				image: responsiveImages.servicesHeader,
				imageAlt: "Teemane Heavy Haulage MAN prime mover fleet lined up for abnormal transport",
				imageClassName: "object-center"
			}),
			services?.length > 0 && /* @__PURE__ */ jsx(ScrollDivider, { texts: [renderServiceTickerRow(firstRowServices), renderServiceTickerRow(secondRowServices)] }),
			/* @__PURE__ */ jsxs("section", {
				className: "capabilities-glass-stage relative isolate overflow-x-clip border-y border-sky-500/15 py-16 selection:bg-primary selection:text-white sm:py-24 lg:py-28",
				children: [
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "capabilities-stage-dots pointer-events-none absolute inset-0"
					}),
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px opacity-50"
					}),
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-45"
					}),
					/* @__PURE__ */ jsxs("div", {
						"aria-hidden": "true",
						className: "pointer-events-none absolute top-30 right-0 translate-x-1/2 opacity-[0.07] mix-blend-luminosity",
						children: [/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-180 w-180 rounded-full bg-primary/40 blur-[80px]" }), /* @__PURE__ */ jsx(LogoMark, { className: "h-auto w-64 text-primary md:w-96 dark:text-sky-400" })]
					}),
					/* @__PURE__ */ jsx(Wrapper, {
						className: "relative z-10",
						children: /* @__PURE__ */ jsx("div", {
							className: cn("grid gap-6", isFourCol ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3"),
							children: services.map((service, index) => /* @__PURE__ */ jsx(ServiceCard, {
								service,
								index,
								sizes: isFourCol ? "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 23vw" : "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 31vw"
							}, service.id))
						})
					})
				]
			})
		]
	});
}
export { Index as default };

//# sourceMappingURL=services-C-EdeSXs.js.map