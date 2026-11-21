import { c as SpotlightCard, d as cn } from "./app-layout-4wljOYs7.js";
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
function ServiceCard({ service, index, sizes = "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 46vw, 31vw", className }) {
	const resolvedUrl = getServiceImageUrl(service);
	const imageSource = resolvedUrl || responsiveImages.heavyHaulage01;
	const imageSrcSet = resolvedUrl ? service.featured_image_srcset || void 0 : void 0;
	return /* @__PURE__ */ jsxs(SpotlightCard, {
		theme: "dark",
		spotlightColor: "#38bdf8",
		intensity: .14,
		spotlightSize: 220,
		softness: .7,
		shape: "circle",
		borderGlow: .85,
		proximity: 160,
		smoothing: .5,
		grain: 0,
		ambient: false,
		flare: true,
		className: cn("bento-glass-card group relative rounded-2xl! p-0! transition-all duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0", className),
		style: {
			"--spotlight-card-surface": "transparent",
			"--spotlight-card-border": "rgba(56, 189, 248, 0.22)"
		},
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "bento-glass-card-flare pointer-events-none absolute inset-0 z-0"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 z-20 w-px opacity-75"
			}),
			/* @__PURE__ */ jsxs(Link, {
				href: `/services/${service.slug}`,
				className: "relative z-10 flex h-full cursor-pointer flex-col justify-between",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative aspect-16/10 w-full overflow-hidden border-b border-sky-500/20 bg-muted",
					children: [
						/* @__PURE__ */ jsx("div", {
							"aria-hidden": "true",
							className: "pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/80 to-transparent"
						}),
						/* @__PURE__ */ jsx(ResponsiveImage, {
							source: imageSource,
							srcSet: imageSrcSet,
							sizes,
							alt: service.title,
							className: "h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-[#000c1d]/55 via-transparent to-transparent opacity-45 transition-opacity duration-300 group-hover:opacity-20" }),
						typeof index === "number" && /* @__PURE__ */ jsxs("span", {
							className: "globe-hud-glass pointer-events-none absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.62rem] font-bold tracking-[0.18em] text-sky-100",
							children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" }), String(index + 1).padStart(2, "0")]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-1 flex-col justify-between p-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-2.5",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "line-clamp-2 font-heading text-lg font-black uppercase tracking-tight text-foreground transition-colors group-hover:text-primary dark:group-hover:text-sky-200",
							children: service.title
						}), /* @__PURE__ */ jsx("p", {
							className: "line-clamp-3 text-sm leading-relaxed text-muted-foreground",
							children: service.short_description
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-6 flex items-center justify-between border-t border-sky-500/15 pt-4 text-xs font-bold uppercase tracking-wider text-primary dark:text-sky-300",
						children: [/* @__PURE__ */ jsx("span", { children: "Learn More" }), /* @__PURE__ */ jsx("span", {
							className: "bento-glass-icon flex size-7 items-center justify-center rounded-lg transition-transform duration-300 group-hover:translate-x-0.5",
							children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
						})]
					})]
				})]
			})
		]
	});
}
export { ServiceCard as t };

//# sourceMappingURL=service-card-DWpa_fmF.js.map