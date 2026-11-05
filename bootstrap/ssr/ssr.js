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
		"./pages/about-us.tsx": () => import("./assets/about-us-M-NP2KQd.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-6ulwroMP.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-CU18CeHe.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-Dg9yqlre.js"),
		"./pages/error.tsx": () => import("./assets/error-C6V9UbBV.js"),
		"./pages/faq.tsx": () => import("./assets/faq-DcbOrbax.js"),
		"./pages/home.tsx": () => import("./assets/home-DgHQNMYz.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-Bzazyyhb.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-hx2aaHOL.js"),
		"./pages/services/index.tsx": () => import("./assets/services-DlH4DjUU.js"),
		"./pages/services/show.tsx": () => import("./assets/show-DYP8d5NO.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-CsTIeYsj.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
export { renderPage as default };

//# sourceMappingURL=ssr.js.map