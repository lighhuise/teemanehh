import { d as cn, o as SpotlightCard } from "./app-layout-DCuwPKZC.js";
import { n as responsiveImages, t as ResponsiveImage } from "./responsive-image-CxkYlq3p.js";
import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
// resources/js/components/service-card.tsx
function getServiceImageUrl(service) {
	let rawUrl = service.featured_image_thumb_url || service.featured_image_url || service.image;
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
function ServiceCard({ service, sizes = "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 31vw", className }) {
	const resolvedUrl = getServiceImageUrl(service);
	const imageSource = resolvedUrl || responsiveImages.heavyHaulage01;
	const imageSrcSet = resolvedUrl ? service.featured_image_srcset || void 0 : void 0;
	return /* @__PURE__ */ jsx(SpotlightCard, {
		theme: "dark",
		spotlightColor: "var(--spotlight-color)",
		intensity: .1,
		spotlightSize: 200,
		softness: .7,
		shape: "circle",
		borderGlow: .85,
		proximity: 160,
		smoothing: .5,
		grain: 0,
		ambient: false,
		flare: true,
		className: cn("group p-0! rounded-2xl! shadow-xs! hover:shadow-xl! transition-all duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0", className),
		style: {
			"--spotlight-card-surface": "var(--card)",
			"--spotlight-card-border": "var(--border)"
		},
		children: /* @__PURE__ */ jsxs(Link, {
			href: `/services/${service.slug}`,
			className: "cursor-pointer flex flex-col justify-between h-full",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative aspect-16/10 w-full overflow-hidden bg-muted border-b border-border/50",
				children: [/* @__PURE__ */ jsx(ResponsiveImage, {
					source: imageSource,
					srcSet: imageSrcSet,
					sizes,
					alt: service.title,
					className: "w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
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
		})
	});
}
export { ServiceCard as t };

//# sourceMappingURL=service-card-DXNwmBGu.js.map