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
		"./pages/about-us.tsx": () => import("./assets/about-us-pc2sRuho.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-1nGYqVG7.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-DTUPpdgW.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-DHSLN1OF.js"),
		"./pages/error.tsx": () => import("./assets/error-gy4oTXtR.js"),
		"./pages/faq.tsx": () => import("./assets/faq-CVpcBn6-.js"),
		"./pages/home.tsx": () => import("./assets/home-ujF1RACz.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-WzAyXfHJ.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-YYLbHgvW.js"),
		"./pages/services/index.tsx": () => import("./assets/services-DTM5dwob.js"),
		"./pages/services/show.tsx": () => import("./assets/show-BT7oXxhU.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-B15GxRP8.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
export { renderPage as default };

//# sourceMappingURL=ssr.js.map