import { l as buttonVariants, t as AppLayout, u as Wrapper } from "./app-layout-DCuwPKZC.js";
import { t as SectionHeading } from "./section-heading-CT93tXK3.js";
import { t as FloatingStatCard } from "./floating-stat-card-CZ1lS9UY.js";
import { t as StackedImage } from "./stacked-image-K_AKMb2m.js";
import { t as ResponsiveImage } from "./responsive-image-CxkYlq3p.js";
import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as Navigation$1, Pagination } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
// resources/js/pages/services/show.tsx
function getEmbedUrl(url) {
	try {
		const u = new URL(url);
		if (u.hostname.includes("youtube.com") || u.hostname.includes("youtu.be")) return `https://www.youtube.com/embed/${u.searchParams.get("v") ?? u.pathname.split("/").pop()}`;
		if (u.hostname.includes("vimeo.com")) return `https://player.vimeo.com/video/${u.pathname.split("/").pop()}`;
	} catch {}
	return null;
}
function RichTextRenderer({ data }) {
	const maxWidthClass = data.max_width || "max-w-none";
	return /* @__PURE__ */ jsx("div", {
		className: `prose prose-neutral dark:prose-invert mx-auto ${maxWidthClass}
                       prose-headings:font-black prose-headings:tracking-[0.35px] prose-headings:uppercase prose-headings:text-foreground prose-headings:leading-[1.1]
                       prose-h1:text-4xl lg:prose-h1:text-5xl
                       prose-h2:text-4xl lg:prose-h2:text-5xl
                       prose-h3:text-2xl lg:prose-h3:text-3xl
                       prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed
                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                       prose-blockquote:border-primary prose-blockquote:text-muted-foreground`,
		dangerouslySetInnerHTML: { __html: data.content }
	});
}
function ImageRenderer({ data }) {
	return /* @__PURE__ */ jsxs("figure", {
		className: "overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "aspect-16/10 sm:aspect-16/9 max-h-[75vh] w-full overflow-hidden rounded-xl border border-border/50 bg-muted",
			children: /* @__PURE__ */ jsx(ResponsiveImage, {
				source: data.image_url,
				alt: data.alt || data.caption || "Teemane Heavy Haulage project photography",
				className: "w-full h-full object-cover object-center"
			})
		}), data.caption && /* @__PURE__ */ jsx("figcaption", {
			className: "text-center text-sm text-muted-foreground mt-3 italic",
			children: data.caption
		})]
	});
}
function GalleryRenderer({ data }) {
	const [lightbox, setLightbox] = useState(null);
	const urls = data.image_urls ?? [];
	const slides = urls.map((url) => ({ src: url }));
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-12",
		children: [(data.heading || data.subheading || data.description) && /* @__PURE__ */ jsx(SectionHeading, {
			align: "left",
			label: data.subheading,
			title: data.heading,
			children: data.description && /* @__PURE__ */ jsx("p", {
				className: "whitespace-pre-wrap",
				children: data.description
			})
		}), /* @__PURE__ */ jsxs("figure", { children: [
			/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4",
				children: urls.map((url, i) => /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => setLightbox(i),
					"aria-label": `Open ${data.heading || "gallery"} image ${i + 1} in lightbox`,
					className: "cursor-pointer aspect-4/3 sm:aspect-square overflow-hidden rounded-xl bg-muted border border-border/50 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
					children: /* @__PURE__ */ jsx(ResponsiveImage, {
						source: url,
						alt: `${data.heading || "Project gallery"} image ${i + 1}`,
						className: "w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
					})
				}, i))
			}),
			data.caption && /* @__PURE__ */ jsx("figcaption", {
				className: "text-center text-sm text-muted-foreground mt-3 italic",
				children: data.caption
			}),
			/* @__PURE__ */ jsx(Lightbox, {
				open: lightbox !== null,
				close: () => setLightbox(null),
				index: lightbox ?? 0,
				slides
			})
		] })]
	});
}
function VideoRenderer({ data }) {
	const embedUrl = getEmbedUrl(data.url);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-12",
		children: [(data.heading || data.subheading || data.description) && /* @__PURE__ */ jsx(SectionHeading, {
			align: "left",
			label: data.subheading,
			title: data.heading,
			children: data.description && /* @__PURE__ */ jsx("p", {
				className: "whitespace-pre-wrap",
				children: data.description
			})
		}), /* @__PURE__ */ jsxs("figure", { children: [embedUrl ? /* @__PURE__ */ jsx("div", {
			className: "relative aspect-video rounded-lg overflow-hidden bg-black",
			children: /* @__PURE__ */ jsx("iframe", {
				src: embedUrl,
				title: data.caption ?? "Video",
				allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
				allowFullScreen: true,
				className: "absolute inset-0 w-full h-full"
			})
		}) : /* @__PURE__ */ jsxs("a", {
			href: data.url,
			target: "_blank",
			rel: "noreferrer",
			className: "flex items-center gap-3 text-primary hover:underline",
			children: [/* @__PURE__ */ jsx(Play, { className: "w-5 h-5" }), data.caption ?? data.url]
		}), data.caption && embedUrl && /* @__PURE__ */ jsx("figcaption", {
			className: "text-center text-sm text-muted-foreground mt-3 italic",
			children: data.caption
		})] })]
	});
}
function CtaRenderer({ data }) {
	const isExternal = data.button_url.startsWith("http");
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex-1",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-2xl sm:text-3xl font-heading font-black tracking-tight text-foreground mb-2",
				children: data.heading
			}), data.text && /* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground text-base sm:text-lg leading-relaxed",
				children: data.text
			})]
		}), isExternal ? /* @__PURE__ */ jsxs("a", {
			href: data.button_url,
			target: "_blank",
			rel: "noreferrer",
			className: buttonVariants({
				size: "xl",
				className: "shrink-0"
			}),
			children: [/* @__PURE__ */ jsx("span", { children: data.button_label }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
		}) : /* @__PURE__ */ jsxs(Link, {
			href: data.button_url,
			prefetch: "hover",
			className: buttonVariants({
				size: "xl",
				className: "shrink-0"
			}),
			children: [/* @__PURE__ */ jsx("span", { children: data.button_label }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
		})]
	});
}
function MediaTextRenderer({ data }) {
	const isImageLeft = data.image_position === "left";
	const urls = data.image_urls ?? [];
	const hasMultiple = urls.length > 1;
	return /* @__PURE__ */ jsxs("div", {
		className: `flex flex-col md:flex-row gap-10 md:gap-16 items-center ${isImageLeft ? "md:flex-row-reverse" : ""}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex-1 min-w-0 w-full space-y-6",
			children: [
				(data.heading || data.subheading) && /* @__PURE__ */ jsx(SectionHeading, {
					align: `left`,
					label: data.subheading,
					title: data.heading
				}),
				data.content && /* @__PURE__ */ jsx("div", {
					className: "prose prose-neutral dark:prose-invert max-w-none text-muted-foreground\n                                    prose-headings:font-black prose-headings:tracking-[0.35px] prose-headings:uppercase prose-headings:text-foreground prose-headings:leading-[1.1]\n                                    prose-h1:text-4xl lg:prose-h1:text-5xl\n                                    prose-h2:text-4xl lg:prose-h2:text-5xl\n                                    prose-h3:text-2xl lg:prose-h3:text-3xl\n                                    prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed\n                                    prose-a:text-primary hover:prose-a:underline",
					dangerouslySetInnerHTML: { __html: data.content }
				}),
				data.button_label && data.button_url && (data.button_url.startsWith("http") ? /* @__PURE__ */ jsxs("a", {
					href: data.button_url,
					target: "_blank",
					rel: "noreferrer",
					className: buttonVariants({ size: "xl" }),
					children: [/* @__PURE__ */ jsx("span", { children: data.button_label }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
				}) : /* @__PURE__ */ jsxs(Link, {
					href: data.button_url,
					prefetch: "hover",
					className: buttonVariants({ size: "xl" }),
					children: [/* @__PURE__ */ jsx("span", { children: data.button_label }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
				}))
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex-1 min-w-0 w-full aspect-4/3 sm:aspect-16/10 md:aspect-auto md:h-112 lg:h-125 relative group",
			children: [/* @__PURE__ */ jsx("div", {
				className: "w-full h-full rounded-2xl overflow-hidden shadow-xl relative bg-muted border border-border/50",
				children: hasMultiple ? /* @__PURE__ */ jsx(Swiper, {
					modules: [Navigation$1, Pagination],
					navigation: true,
					pagination: { clickable: true },
					loop: true,
					className: "w-full h-full",
					style: {
						"--swiper-theme-color": "var(--primary)",
						"--swiper-navigation-size": "24px",
						"--swiper-navigation-color": "white",
						"--swiper-pagination-color": "var(--primary)",
						"--swiper-pagination-bullet-inactive-color": "rgba(255, 255, 255, 0.7)",
						"--swiper-pagination-bullet-inactive-opacity": "1"
					},
					children: urls.map((url, i) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(ResponsiveImage, {
						source: url,
						alt: `${data.heading || "Service showcase"} slide ${i + 1}`,
						className: "w-full h-full object-cover object-center"
					}) }, i))
				}) : urls.length === 1 ? /* @__PURE__ */ jsx(ResponsiveImage, {
					source: urls[0],
					alt: data.heading || "Service showcase image",
					className: "w-full h-full object-cover object-center"
				}) : /* @__PURE__ */ jsx("div", {
					className: "w-full h-full bg-muted flex items-center justify-center",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground text-sm uppercase tracking-widest",
						children: "No Image"
					})
				})
			}), data.stat_card_value && data.stat_card_label && /* @__PURE__ */ jsx(FloatingStatCard, {
				value: data.stat_card_value,
				label: data.stat_card_label,
				position: isImageLeft ? "bottom-right" : "bottom-left"
			})]
		})]
	});
}
function ContentBlock({ block }) {
	switch (block.type) {
		case "rich_text": return /* @__PURE__ */ jsx(RichTextRenderer, { data: block.data });
		case "image": return /* @__PURE__ */ jsx(ImageRenderer, { data: block.data });
		case "gallery": return /* @__PURE__ */ jsx(GalleryRenderer, { data: block.data });
		case "video": return /* @__PURE__ */ jsx(VideoRenderer, { data: block.data });
		case "cta": return /* @__PURE__ */ jsx(CtaRenderer, { data: block.data });
		case "media_text": return /* @__PURE__ */ jsx(MediaTextRenderer, { data: block.data });
		default: return null;
	}
}
function Hero({ service }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative border-b border-border bg-background overflow-hidden isolate pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-28",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": "true",
			className: "page-header-radial absolute inset-0 pointer-events-none select-none -z-10"
		}), /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: `grid grid-cols-1 ${service.featured_image_url ? "lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16" : ""} items-center`,
				children: [/* @__PURE__ */ jsxs("div", {
					className: service.featured_image_url ? "lg:col-span-5" : "max-w-3xl",
					children: [/* @__PURE__ */ jsxs(Link, {
						href: "/services",
						prefetch: "hover",
						className: "cursor-pointer inline-flex items-center text-xs font-black tracking-[0.18em] uppercase text-muted-foreground hover:text-primary mb-6 sm:mb-8 transition-colors gap-2",
						children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), "Back to Services"]
					}), /* @__PURE__ */ jsx(SectionHeading, {
						label: "Service Profile",
						title: service.title,
						align: "left",
						className: "mb-0",
						children: service.description && /* @__PURE__ */ jsx("div", {
							className: "prose prose-sm sm:prose lg:prose-lg max-w-none dark:prose-invert text-muted-foreground",
							dangerouslySetInnerHTML: { __html: service.description }
						})
					})]
				}), service.featured_image_url && /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-7 flex justify-center lg:justify-end",
					children: /* @__PURE__ */ jsx(StackedImage, {
						src: service.featured_image_url,
						srcSet: service.featured_image_srcset || void 0,
						sizes: "(max-width: 1023px) calc(100vw - 2.5rem), 54vw",
						priority: true,
						alt: service.title
					})
				})]
			})
		})]
	});
}
function Show({ service }) {
	const hasBlocks = service.content_blocks && service.content_blocks.length > 0;
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: service.title,
		description: service.short_description || service.description?.substring(0, 160),
		image: service.featured_image_url || void 0,
		children: [/* @__PURE__ */ jsx(Hero, { service }), hasBlocks && /* @__PURE__ */ jsx("div", {
			className: "flex flex-col",
			children: service.content_blocks.map((block, i) => {
				const isDark = block.data.darker_background;
				return /* @__PURE__ */ jsx("div", {
					className: `w-full py-16 md:py-24 ${isDark ? "bg-muted border-y border-border" : ""}`,
					children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(ContentBlock, { block }) })
				}, i);
			})
		})]
	});
}
export { Hero, Show as default };

//# sourceMappingURL=show-D1iLJGMq.js.map