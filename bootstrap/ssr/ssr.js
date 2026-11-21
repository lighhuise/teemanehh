import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import { jsx } from "react/jsx-runtime";
// node_modules/laravel-vite-plugin/inertia-helpers/index.js
async function resolvePageComponent(path, pages) {
	for (const p of Array.isArray(path) ? path : [path]) {
		const page = pages[p];
		if (typeof page === "undefined") continue;
		return typeof page === "function" ? page() : page;
	}
	throw new Error(`Page not found: ${path}`);
}
// resources/js/ssr.tsx
var appName = "Teemane Heavy Haulage";
var renderPage = (page) => createInertiaApp({
	page,
	render: ReactDOMServer.renderToString,
	title: (title) => `${title} - ${appName}`,
	resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* #__PURE__ */ Object.assign({
		"./pages/about-us.tsx": () => import("./assets/about-us-DHL-Ts-z.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-DlSbPjjT.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-CnJLRBSr.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-PCv7eZXm.js"),
		"./pages/error.tsx": () => import("./assets/error-BMiUMdcV.js"),
		"./pages/faq.tsx": () => import("./assets/faq-zn3lfxBT.js"),
		"./pages/home.tsx": () => import("./assets/home-CzPblBFz.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-vDptfD_J.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-6_cH5fL-.js"),
		"./pages/services/index.tsx": () => import("./assets/services-C-EdeSXs.js"),
		"./pages/services/show.tsx": () => import("./assets/show-BYe_f5NW.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-DtQ2EgHw.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
export { renderPage as default };

//# sourceMappingURL=ssr.js.map