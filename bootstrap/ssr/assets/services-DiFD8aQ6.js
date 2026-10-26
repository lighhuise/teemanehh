import { c as Wrapper, t as AppLayout } from "./app-layout-DYFdaysQ.js";
import { t as PageHeader } from "./page-header-DVtc_umr.js";
import { Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
// resources/js/pages/services/index.tsx
function Index({ services }) {
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: "Services",
		children: [/* @__PURE__ */ jsx(PageHeader, {
			title: /* @__PURE__ */ jsxs(Fragment, { children: ["SPECIALISED TRANSPORT ", /* @__PURE__ */ jsx("span", {
				className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1 pb-1",
				children: "SOLUTIONS"
			})] }),
			description: "We understand that every heavy haulage project demands precision, reliability and rigorous planning. Our capabilities provide the flexibility and strength needed to tackle the most demanding abnormal loads."
		}), /* @__PURE__ */ jsx("div", {
			className: "bg-background selection:bg-primary selection:text-white pb-28 md:pb-36",
			children: /* @__PURE__ */ jsxs("section", {
				className: "relative py-20 md:py-28 bg-background overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 pointer-events-none overflow-hidden",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none opacity-30" }),
						/* @__PURE__ */ jsxs("svg", {
							className: "absolute inset-0 w-full h-full text-primary/15",
							viewBox: "0 0 1200 800",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.2",
							preserveAspectRatio: "none",
							children: [
								/* @__PURE__ */ jsx("path", { d: "M0,160 Q320,100 600,220 T1200,140" }),
								/* @__PURE__ */ jsx("path", { d: "M0,300 Q260,220 560,340 T1200,260" }),
								/* @__PURE__ */ jsx("path", { d: "M0,600 Q290,520 590,620 T1200,530" })
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute top-8 left-8 flex items-center gap-2 font-mono text-[10px] tracking-wider text-muted-foreground/50 uppercase select-none",
							children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" }), /* @__PURE__ */ jsx("span", { children: "ROUTE TOPO ELEVATION // SADC TRANSIT CORRIDOR" })]
						})
					]
				}), /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-4 relative z-10",
					children: services.map((service) => {
						const imageUrl = service.featured_image_url || service.image;
						const summary = service.short_description || (service.description ? service.description.replace(/<[^>]*>?/gm, "").substring(0, 110) + "..." : "");
						return /* @__PURE__ */ jsxs("article", {
							className: "group bg-card border border-border hover:border-primary/50 rounded-xl overflow-hidden transition-all duration-200 flex flex-row items-stretch",
							children: [/* @__PURE__ */ jsx(Link, {
								href: `/services/${service.slug}`,
								className: "block relative w-28 sm:w-36 shrink-0 bg-muted overflow-hidden border-r border-border",
								tabIndex: -1,
								"aria-hidden": "true",
								children: imageUrl ? /* @__PURE__ */ jsx("img", {
									src: imageUrl,
									alt: service.title,
									className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
									loading: "lazy"
								}) : /* @__PURE__ */ jsx("div", {
									className: "w-full h-full flex items-center justify-center text-[10px] uppercase font-bold text-muted-foreground p-2 text-center",
									children: "Spec Asset"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "p-3.5 sm:p-4 flex flex-col justify-between flex-1 min-w-0",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-1",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "inline-block text-[10px] font-black uppercase tracking-wider text-primary",
											children: "Specialised Heavy Transport"
										}),
										/* @__PURE__ */ jsx("h2", {
											className: "text-sm sm:text-base font-heading font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors truncate",
											children: /* @__PURE__ */ jsx(Link, {
												href: `/services/${service.slug}`,
												className: "hover:underline",
												children: service.title
											})
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-muted-foreground text-xs leading-relaxed line-clamp-2",
											children: summary
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "pt-2 flex items-center justify-end border-t border-border/40 mt-2",
									children: /* @__PURE__ */ jsxs(Link, {
										href: `/services/${service.slug}`,
										className: "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-all",
										children: [/* @__PURE__ */ jsx("span", { children: "Learn More" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" })]
									})
								})]
							})]
						}, service.id);
					})
				}) })]
			})
		})]
	});
}
export { Index as default };

//# sourceMappingURL=services-DiFD8aQ6.js.map