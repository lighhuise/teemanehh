import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import { jsx } from "react/jsx-runtime";
//#region node_modules/laravel-vite-plugin/inertia-helpers/index.js
async function resolvePageComponent(path, pages) {
	for (const p of Array.isArray(path) ? path : [path]) {
		const page = pages[p];
		if (typeof page === "undefined") continue;
		return typeof page === "function" ? page() : page;
	}
	throw new Error(`Page not found: ${path}`);
}
//#endregion
//#region resources/js/ssr.tsx
var appName = "Teemane Heavy Haulage";
var renderPage = (page) => createInertiaApp({
	page,
	render: ReactDOMServer.renderToString,
	title: (title) => `${title} - ${appName}`,
	resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* #__PURE__ */ Object.assign({
		"./pages/about-us.tsx": () => import("./assets/about-us-CxlwVgGV.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-BvB0wdDH.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-BkvI2z8N.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-BdCfxcNy.js"),
		"./pages/error.tsx": () => import("./assets/error-B9qulDZX.js"),
		"./pages/faq.tsx": () => import("./assets/faq-Cxf3PI7g.js"),
		"./pages/home.tsx": () => import("./assets/home-BkN9R1ok.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-8e-tpAXP.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-Civ7GtNw.js"),
		"./pages/services/index.tsx": () => import("./assets/services-OfObxirE.js"),
		"./pages/services/show.tsx": () => import("./assets/show-CRBvptny.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-DjEeiTIM.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map