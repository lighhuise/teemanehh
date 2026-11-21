import { t as AppLayout, u as Wrapper } from "./app-layout-4wljOYs7.js";
import { t as SectionHeading } from "./section-heading-8zOEVGTQ.js";
import { t as FloatingStatCard } from "./floating-stat-card-LhZieMZg.js";
import { t as StackedImage } from "./stacked-image-CCRpH6iH.js";
import { t as ResponsiveImage } from "./responsive-image-CxkYlq3p.js";
import { Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
		className: `prose prose-neutral mx-auto dark:prose-invert ${maxWidthClass}
                       prose-headings:leading-[1.1] prose-headings:font-black prose-headings:tracking-[0.35px] prose-headings:text-foreground prose-headings:uppercase
                       prose-h1:text-4xl lg:prose-h1:text-5xl
                       prose-h2:text-4xl lg:prose-h2:text-5xl
                       prose-h3:text-2xl lg:prose-h3:text-3xl
                       prose-p:text-lg prose-p:leading-relaxed prose-p:text-muted-foreground
                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                       prose-blockquote:border-primary prose-blockquote:text-muted-foreground`,
		dangerouslySetInnerHTML: { __html: data.content }
	});
}
function ImageRenderer({ data }) {
	return /* @__PURE__ */ jsxs("figure", {
		className: "overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "bento-glass-card relative rounded-3xl p-1.5 sm:p-2",
			children: [/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/85 to-transparent dark:via-sky-200/60"
			}), /* @__PURE__ */ jsx("div", {
				className: "aspect-16/10 max-h-[75vh] w-full overflow-hidden rounded-2xl border border-sky-400/25 bg-muted sm:aspect-16/9",
				children: /* @__PURE__ */ jsx(ResponsiveImage, {
					source: data.image_url,
					alt: data.alt || data.caption || "Teemane Heavy Haulage project photography",
					className: "h-full w-full object-cover object-center"
				})
			})]
		}), data.caption && /* @__PURE__ */ jsx("figcaption", {
			className: "mt-3 text-center text-sm text-muted-foreground italic",
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
				className: "grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4",
				children: urls.map((url, i) => /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => setLightbox(i),
					"aria-label": `Open ${data.heading || "gallery"} image ${i + 1} in lightbox`,
					className: "bento-glass-card group relative aspect-4/3 cursor-pointer overflow-hidden rounded-2xl p-1 transition-all duration-300 hover:-translate-y-0.5 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none sm:aspect-square",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative h-full w-full overflow-hidden rounded-xl border border-sky-400/20 bg-muted",
						children: [/* @__PURE__ */ jsx("div", {
							"aria-hidden": "true",
							className: "pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/80 to-transparent"
						}), /* @__PURE__ */ jsx(ResponsiveImage, {
							source: url,
							alt: `${data.heading || "Project gallery"} image ${i + 1}`,
							className: "h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
						})]
					})
				}, i))
			}),
			data.caption && /* @__PURE__ */ jsx("figcaption", {
				className: "mt-3 text-center text-sm text-muted-foreground italic",
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
		}), /* @__PURE__ */ jsxs("figure", { children: [embedUrl ? /* @__PURE__ */ jsxs("div", {
			className: "bento-glass-card relative rounded-3xl p-1.5 sm:p-2",
			children: [/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/85 to-transparent dark:via-sky-200/60"
			}), /* @__PURE__ */ jsx("div", {
				className: "relative aspect-video overflow-hidden rounded-2xl border border-sky-400/25 bg-black",
				children: /* @__PURE__ */ jsx("iframe", {
					src: embedUrl,
					title: data.caption ?? "Video",
					allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
					allowFullScreen: true,
					className: "absolute inset-0 h-full w-full"
				})
			})]
		}) : /* @__PURE__ */ jsxs("a", {
			href: data.url,
			target: "_blank",
			rel: "noreferrer",
			className: "bento-glass-card inline-flex items-center gap-3 rounded-xl px-5 py-3 text-sm font-bold text-primary transition-all duration-200 hover:-translate-y-0.5 dark:text-sky-300",
			children: [/* @__PURE__ */ jsx(Play, { className: "h-5 w-5" }), /* @__PURE__ */ jsx("span", { children: data.caption ?? data.url })]
		}), data.caption && embedUrl && /* @__PURE__ */ jsx("figcaption", {
			className: "mt-3 text-center text-sm text-muted-foreground italic",
			children: data.caption
		})] })]
	});
}
function CtaRenderer({ data }) {
	const isExternal = data.button_url.startsWith("http");
	const buttonClasses = "emergency-cta-glass group relative inline-flex h-12 shrink-0 items-center justify-center gap-2.5 overflow-hidden rounded-xl px-8 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-0.5";
	return /* @__PURE__ */ jsxs("div", {
		className: "scroll-divider-surface relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-sky-400/35 p-8 text-white shadow-2xl md:flex-row md:items-center md:p-12",
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "footer-corona pointer-events-none absolute inset-0"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "footer-dots pointer-events-none absolute inset-0"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "nav-canopy-hazard pointer-events-none absolute inset-x-0 top-0 h-1.5"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-85"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 flex-1",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "mb-2 font-heading text-2xl font-black tracking-tight text-white uppercase sm:text-3xl",
					children: data.heading
				}), data.text && /* @__PURE__ */ jsx("p", {
					className: "text-base leading-relaxed text-sky-100/80 sm:text-lg",
					children: data.text
				})]
			}),
			isExternal ? /* @__PURE__ */ jsxs("a", {
				href: data.button_url,
				target: "_blank",
				rel: "noreferrer",
				className: buttonClasses,
				children: [
					/* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						className: "emergency-cta-glass-flare pointer-events-none absolute inset-0"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "relative z-10",
						children: data.button_label
					}),
					/* @__PURE__ */ jsx(ArrowRight, { className: "relative z-10 h-4 w-4 text-sky-200 transition-transform duration-300 group-hover:translate-x-1" })
				]
			}) : /* @__PURE__ */ jsxs(Link, {
				href: data.button_url,
				prefetch: "hover",
				className: buttonClasses,
				children: [
					/* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						className: "emergency-cta-glass-flare pointer-events-none absolute inset-0"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "relative z-10",
						children: data.button_label
					}),
					/* @__PURE__ */ jsx(ArrowRight, { className: "relative z-10 h-4 w-4 text-sky-200 transition-transform duration-300 group-hover:translate-x-1" })
				]
			})
		]
	});
}
function MediaTextRenderer({ data }) {
	const isImageLeft = data.image_position === "left";
	const urls = data.image_urls ?? [];
	const hasMultiple = urls.length > 1;
	const buttonClasses = "emergency-cta-glass group relative inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-xl px-8 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-0.5";
	return /* @__PURE__ */ jsxs("div", {
		className: `flex flex-col items-center gap-10 md:flex-row md:gap-16 ${isImageLeft ? "md:flex-row-reverse" : ""}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "w-full min-w-0 flex-1 space-y-6",
			children: [
				(data.heading || data.subheading) && /* @__PURE__ */ jsx(SectionHeading, {
					align: "left",
					label: data.subheading,
					title: data.heading
				}),
				data.content && /* @__PURE__ */ jsx("div", {
					className: "prose prose-neutral max-w-none text-muted-foreground dark:prose-invert\n                                   prose-headings:leading-[1.1] prose-headings:font-black prose-headings:tracking-[0.35px] prose-headings:text-foreground prose-headings:uppercase\n                                   prose-h1:text-4xl lg:prose-h1:text-5xl\n                                   prose-h2:text-4xl lg:prose-h2:text-5xl\n                                   prose-h3:text-2xl lg:prose-h3:text-3xl\n                                   prose-p:text-lg prose-p:leading-relaxed prose-p:text-muted-foreground\n                                   prose-a:text-primary hover:prose-a:underline",
					dangerouslySetInnerHTML: { __html: data.content }
				}),
				data.button_label && data.button_url && (data.button_url.startsWith("http") ? /* @__PURE__ */ jsxs("a", {
					href: data.button_url,
					target: "_blank",
					rel: "noreferrer",
					className: buttonClasses,
					children: [
						/* @__PURE__ */ jsx("span", {
							"aria-hidden": "true",
							className: "emergency-cta-glass-flare pointer-events-none absolute inset-0"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "relative z-10",
							children: data.button_label
						}),
						/* @__PURE__ */ jsx(ArrowRight, { className: "relative z-10 h-4 w-4 text-sky-200 transition-transform duration-300 group-hover:translate-x-1" })
					]
				}) : /* @__PURE__ */ jsxs(Link, {
					href: data.button_url,
					prefetch: "hover",
					className: buttonClasses,
					children: [
						/* @__PURE__ */ jsx("span", {
							"aria-hidden": "true",
							className: "emergency-cta-glass-flare pointer-events-none absolute inset-0"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "relative z-10",
							children: data.button_label
						}),
						/* @__PURE__ */ jsx(ArrowRight, { className: "relative z-10 h-4 w-4 text-sky-200 transition-transform duration-300 group-hover:translate-x-1" })
					]
				}))
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "group relative w-full min-w-0 flex-1 pb-8 md:pb-0",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "bento-glass-card relative rounded-3xl p-1.5 sm:p-2",
				children: [/* @__PURE__ */ jsx("div", {
					"aria-hidden": "true",
					className: "pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-linear-to-r from-transparent via-white/85 to-transparent dark:via-sky-200/60"
				}), /* @__PURE__ */ jsx("div", {
					className: "relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-sky-400/25 bg-muted shadow-lg sm:aspect-16/10 md:aspect-auto md:h-112 lg:h-125",
					children: hasMultiple ? /* @__PURE__ */ jsx(Swiper, {
						modules: [Navigation$1, Pagination],
						navigation: true,
						pagination: { clickable: true },
						loop: true,
						className: "h-full w-full",
						style: {
							"--swiper-theme-color": "#38bdf8",
							"--swiper-navigation-size": "24px",
							"--swiper-navigation-color": "#e0f2fe",
							"--swiper-pagination-color": "#38bdf8",
							"--swiper-pagination-bullet-inactive-color": "rgba(255, 255, 255, 0.7)",
							"--swiper-pagination-bullet-inactive-opacity": "1"
						},
						children: urls.map((url, i) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(ResponsiveImage, {
							source: url,
							alt: `${data.heading || "Service showcase"} slide ${i + 1}`,
							className: "h-full w-full object-cover object-center"
						}) }, i))
					}) : urls.length === 1 ? /* @__PURE__ */ jsx(ResponsiveImage, {
						source: urls[0],
						alt: data.heading || "Service showcase image",
						className: "h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
					}) : /* @__PURE__ */ jsx("div", {
						className: "flex h-full w-full items-center justify-center bg-muted",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-sm tracking-widest text-muted-foreground uppercase",
							children: "No Image"
						})
					})
				})]
			}), data.stat_card_value && data.stat_card_label && /* @__PURE__ */ jsx(FloatingStatCard, {
				value: data.stat_card_value,
				label: data.stat_card_label,
				position: isImageLeft ? "bottom-right" : "bottom-left",
				glass: "realglass"
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
		className: "capabilities-glass-stage relative isolate overflow-hidden border-b border-sky-500/15 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28",
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "capabilities-stage-dots pointer-events-none absolute inset-0"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-50"
			}),
			/* @__PURE__ */ jsx(Wrapper, {
				className: "relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: `grid grid-cols-1 items-center ${service.featured_image_url ? "gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16" : ""}`,
					children: [/* @__PURE__ */ jsxs("div", {
						className: service.featured_image_url ? "lg:col-span-5" : "max-w-3xl",
						children: [/* @__PURE__ */ jsxs(Link, {
							href: "/services",
							prefetch: "hover",
							className: "bento-glass-card group relative mb-6 inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-full px-4 py-2 text-xs font-black tracking-[0.18em] text-foreground uppercase transition-all duration-300 hover:-translate-y-0.5 hover:text-primary sm:mb-8 dark:hover:text-sky-200",
							children: [
								/* @__PURE__ */ jsx("span", {
									"aria-hidden": "true",
									className: "bento-glass-card-flare pointer-events-none absolute inset-0"
								}),
								/* @__PURE__ */ jsx(ArrowLeft, { className: "relative z-10 h-3.5 w-3.5 text-primary transition-transform duration-200 group-hover:-translate-x-0.5 dark:text-sky-300" }),
								/* @__PURE__ */ jsx("span", {
									className: "relative z-10",
									children: "Back to Services"
								})
							]
						}), /* @__PURE__ */ jsx(SectionHeading, {
							label: "Service Profile",
							title: service.title,
							align: "left",
							className: "mb-0",
							children: service.description && /* @__PURE__ */ jsx("div", {
								className: "prose prose-sm max-w-none text-muted-foreground sm:prose lg:prose-lg dark:prose-invert",
								dangerouslySetInnerHTML: { __html: service.description }
							})
						})]
					}), service.featured_image_url && /* @__PURE__ */ jsx("div", {
						className: "flex justify-center lg:col-span-7 lg:justify-end",
						children: /* @__PURE__ */ jsx(StackedImage, {
							src: service.featured_image_url,
							srcSet: service.featured_image_srcset || void 0,
							sizes: "(max-width: 1023px) calc(100vw - 2.5rem), 54vw",
							priority: true,
							alt: service.title
						})
					})]
				})
			})
		]
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
				return /* @__PURE__ */ jsxs("div", {
					className: isDark ? "capabilities-glass-stage relative w-full overflow-x-clip border-y border-sky-500/15 py-16 md:py-24" : "relative w-full overflow-x-clip bg-background py-16 md:py-24",
					children: [isDark && /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx("div", {
							"aria-hidden": "true",
							className: "capabilities-stage-dots pointer-events-none absolute inset-0"
						}),
						/* @__PURE__ */ jsx("div", {
							"aria-hidden": "true",
							className: "scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px opacity-45"
						}),
						/* @__PURE__ */ jsx("div", {
							"aria-hidden": "true",
							className: "scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-45"
						})
					] }), /* @__PURE__ */ jsx(Wrapper, {
						className: "relative z-10",
						children: /* @__PURE__ */ jsx(ContentBlock, { block })
					})]
				}, i);
			})
		})]
	});
}
export { Hero, Show as default };

//# sourceMappingURL=show-BYe_f5NW.js.map