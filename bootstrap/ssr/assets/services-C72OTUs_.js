import { d as cn, n as LogoMark, t as AppLayout, u as Wrapper } from "./app-layout-DCuwPKZC.js";
import { t as PageHeader } from "./page-header-B50LwUXx.js";
import { t as ServiceCard } from "./service-card-DXNwmBGu.js";
import { n as responsiveImages } from "./responsive-image-CxkYlq3p.js";
import { t as ScrollDivider } from "./scroll-divider-CjH_P-yb.js";
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
		className: "inline-flex items-center uppercase font-heading",
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
						className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1",
						children: "SOLUTIONS"
					})
				] }),
				description: "We understand that every heavy haulage project demands precision, reliability and rigorous planning. Our capabilities provide the flexibility and strength needed to tackle the most demanding abnormal loads.",
				image: responsiveImages.servicesHeader,
				imageAlt: "Teemane Heavy Haulage MAN prime mover fleet lined up for abnormal transport",
				imageClassName: "object-center"
			}),
			services?.length > 0 && /* @__PURE__ */ jsx(ScrollDivider, { texts: [renderServiceTickerRow(firstRowServices), renderServiceTickerRow(secondRowServices)] }),
			/* @__PURE__ */ jsxs("div", {
				className: "bg-background selection:bg-primary selection:text-white relative overflow-x-clip",
				children: [/* @__PURE__ */ jsxs("div", {
					"aria-hidden": "true",
					className: "absolute top-30 right-0 pointer-events-none opacity-10 translate-x-1/2 mix-blend-luminosity",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mr-20 -mt-20 w-180 h-180 rounded-full blur-[80px] bg-primary/40 pointer-events-none" }), /* @__PURE__ */ jsx(LogoMark, { className: "w-64 md:w-96 h-auto" })]
				}), /* @__PURE__ */ jsx("section", {
					className: "relative py-16 sm:py-24 lg:py-28 bg-background",
					children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx("div", {
						className: cn("grid gap-6 relative z-10", isFourCol ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3"),
						children: services.map((service) => /* @__PURE__ */ jsx(ServiceCard, {
							service,
							sizes: isFourCol ? "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 23vw" : "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 31vw"
						}, service.id))
					}) })
				})]
			})
		]
	});
}
export { Index as default };

//# sourceMappingURL=services-C72OTUs_.js.map