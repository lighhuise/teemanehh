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
		"./pages/about-us.tsx": () => import("./assets/about-us-D2kO93gO.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-Bv1WZBd0.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-C1hap2Fa.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-CcPt06Vh.js"),
		"./pages/error.tsx": () => import("./assets/error-gprc0ruU.js"),
		"./pages/faq.tsx": () => import("./assets/faq-BylxKF16.js"),
		"./pages/home.tsx": () => import("./assets/home-C2j_WFrz.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-LHjWBxQ3.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-BJxQiQxl.js"),
		"./pages/services/index.tsx": () => import("./assets/services-DiFD8aQ6.js"),
		"./pages/services/show.tsx": () => import("./assets/show-BwRgoDW0.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-DS5p5-dq.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
export { renderPage as default };

//# sourceMappingURL=ssr.js.map