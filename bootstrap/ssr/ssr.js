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
		"./pages/about-us.tsx": () => import("./assets/about-us-CfhTs3Yt.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-BoZbMoGO.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-CsCWDm04.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-BwdkctCa.js"),
		"./pages/error.tsx": () => import("./assets/error-I4MnmWfW.js"),
		"./pages/faq.tsx": () => import("./assets/faq-Dd4zy3Ku.js"),
		"./pages/home.tsx": () => import("./assets/home-BGEAVWlg.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-CgzEBGAq.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-BUwogDq9.js"),
		"./pages/services/index.tsx": () => import("./assets/services-ChTpFvbc.js"),
		"./pages/services/show.tsx": () => import("./assets/show-BlWK6KPU.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-9ws-8syI.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map