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
		"./pages/about-us.tsx": () => import("./assets/about-us-V7fU_Vzy.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-DeFAdeJr.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-rwFsUS2x.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-Cximjqf6.js"),
		"./pages/error.tsx": () => import("./assets/error-V69Vr28-.js"),
		"./pages/faq.tsx": () => import("./assets/faq-BLPmW3uQ.js"),
		"./pages/home.tsx": () => import("./assets/home-B4g4BCR4.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-CQKmbsSp.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-aOMgODU-.js"),
		"./pages/services/index.tsx": () => import("./assets/services-iVbkjaFm.js"),
		"./pages/services/show.tsx": () => import("./assets/show-m5H9PrUz.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-DslH_U68.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
export { renderPage as default };

//# sourceMappingURL=ssr.js.map