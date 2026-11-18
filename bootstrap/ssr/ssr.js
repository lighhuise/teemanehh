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
		"./pages/about-us.tsx": () => import("./assets/about-us-DBGy-Eh-.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-CbfpGjcx.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-Dg0u_Ta8.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-BT1BF_BM.js"),
		"./pages/error.tsx": () => import("./assets/error-B8vETt-3.js"),
		"./pages/faq.tsx": () => import("./assets/faq-Cvumbd2P.js"),
		"./pages/home.tsx": () => import("./assets/home-CJKfLrMo.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-CiCCkjqS.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-ClRP_pKO.js"),
		"./pages/services/index.tsx": () => import("./assets/services-oejevRw6.js"),
		"./pages/services/show.tsx": () => import("./assets/show-D6VK_Zl_.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-CVkmMXAx.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
export { renderPage as default };

//# sourceMappingURL=ssr.js.map