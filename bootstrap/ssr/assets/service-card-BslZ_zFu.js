import { u as cn } from "./app-layout-D2NLqIyl.js";
import { t as heavy_haulage_01_default } from "./heavy-haulage-01-CZXBirKr.js";
import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
// resources/js/components/service-card.tsx
function getServiceImageUrl(service) {
	let rawUrl = service.featured_image_url || service.image;
	if (!rawUrl && Array.isArray(service.content_blocks)) for (const block of service.content_blocks) {
		if (block.type === "image" && block.data?.image) {
			rawUrl = block.data.image;
			break;
		}
		if ((block.type === "media_text" || block.type === "gallery") && block.data?.images?.[0]) {
			rawUrl = block.data.images[0];
			break;
		}
	}
	if (!rawUrl) return null;
	if (rawUrl.startsWith("http://") || rawUrl.startsWith("https://") || rawUrl.startsWith("/")) return rawUrl;
	return `/storage/${rawUrl}`;
}
function ServiceCard({ service, className }) {
	const imageUrl = getServiceImageUrl(service) || heavy_haulage_01_default;
	return /* @__PURE__ */ jsxs(Link, {
		href: `/services/${service.slug}`,
		className: cn("group relative bg-card flex flex-col justify-between overflow-hidden rounded-2xl border border-border shadow-xs hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative aspect-16/10 w-full overflow-hidden bg-muted border-b border-border/50",
			children: [/* @__PURE__ */ jsx("img", {
				src: imageUrl,
				alt: service.title,
				className: "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105",
				loading: "lazy"
			}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-20 group-hover:opacity-0 transition-opacity duration-300" })]
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-6 flex flex-col justify-between flex-1",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-2.5",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-lg font-heading font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2",
					children: service.title
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground line-clamp-3 leading-relaxed",
					children: service.short_description
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary",
				children: [/* @__PURE__ */ jsx("span", { children: "Learn More" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })]
			})]
		})]
	});
}
export { ServiceCard as t };

//# sourceMappingURL=service-card-BslZ_zFu.js.map