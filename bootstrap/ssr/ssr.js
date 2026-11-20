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
		"./pages/about-us.tsx": () => import("./assets/about-us-waa5DE1r.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-y-5yOsJQ.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-DyKv7t-H.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-BKGapU3B.js"),
		"./pages/error.tsx": () => import("./assets/error-CjDzMEb5.js"),
		"./pages/faq.tsx": () => import("./assets/faq-CF38IQR1.js"),
		"./pages/home.tsx": () => import("./assets/home-DXEVFwkR.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-Bb5jRQpL.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-CCUyR5tj.js"),
		"./pages/services/index.tsx": () => import("./assets/services-C72OTUs_.js"),
		"./pages/services/show.tsx": () => import("./assets/show-D1iLJGMq.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-B8kJHtTJ.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
export { renderPage as default };

//# sourceMappingURL=ssr.js.map