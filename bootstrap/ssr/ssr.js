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
		"./pages/about-us.tsx": () => import("./assets/about-us-DC3me3oB.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-C3T8Y0UG.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-_xtpGNbH.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-BEyWYDbv.js"),
		"./pages/error.tsx": () => import("./assets/error-uA3kNBJG.js"),
		"./pages/faq.tsx": () => import("./assets/faq--sqmzbEp.js"),
		"./pages/home.tsx": () => import("./assets/home-DMNOxdue.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-D3Ojh_QQ.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-BLDugwYA.js"),
		"./pages/services/index.tsx": () => import("./assets/services-5Q8Xskjk.js"),
		"./pages/services/show.tsx": () => import("./assets/show-DUq0Enb9.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-U7yD606v.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map