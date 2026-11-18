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
		"./pages/about-us.tsx": () => import("./assets/about-us-Cms3knpS.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-BfE2IPI4.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-CZCXJLOy.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-DhkStGT3.js"),
		"./pages/error.tsx": () => import("./assets/error-CqEqHeg3.js"),
		"./pages/faq.tsx": () => import("./assets/faq-yqR2qd3f.js"),
		"./pages/home.tsx": () => import("./assets/home-Cnw21Smk.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-BZZc92Qz.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-CvGcn0dN.js"),
		"./pages/services/index.tsx": () => import("./assets/services-CdmOjLGG.js"),
		"./pages/services/show.tsx": () => import("./assets/show-uccfazBA.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-20ljS-e5.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
export { renderPage as default };

//# sourceMappingURL=ssr.js.map