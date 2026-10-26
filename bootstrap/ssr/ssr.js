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
		"./pages/about-us.tsx": () => import("./assets/about-us-BtSh3sr8.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-Cfn86UaP.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-CV-K4xK6.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-Bp9J4xfO.js"),
		"./pages/error.tsx": () => import("./assets/error-CbPzAqZz.js"),
		"./pages/faq.tsx": () => import("./assets/faq-ClymIlP2.js"),
		"./pages/home.tsx": () => import("./assets/home-BNk3T37P.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-Dem1v03r.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-DJ7S2EKP.js"),
		"./pages/services/index.tsx": () => import("./assets/services-D-GLFLeh.js"),
		"./pages/services/show.tsx": () => import("./assets/show-DBFeO1QL.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-C97uIO47.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map