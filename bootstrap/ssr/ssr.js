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
		"./pages/about-us.tsx": () => import("./assets/about-us-pXCYrUl4.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-CEnrk13t.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-_Ou9rRrE.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-BxyCUPzF.js"),
		"./pages/error.tsx": () => import("./assets/error-DLWmeKNb.js"),
		"./pages/faq.tsx": () => import("./assets/faq-DO9oOxWK.js"),
		"./pages/home.tsx": () => import("./assets/home-D9x6HFVB.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-T7zG1TGY.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-Uhr9dViW.js"),
		"./pages/services/index.tsx": () => import("./assets/services-D1qt83oX.js"),
		"./pages/services/show.tsx": () => import("./assets/show-DbruRt7F.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-BEXlEepl.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map