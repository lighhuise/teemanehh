import { n as LogoMark, t as AppLayout, u as Wrapper } from "./app-layout-4wljOYs7.js";
import { t as PageHeader } from "./page-header-ICKVkuZ7.js";
import { t as Divider1 } from "./divider-1-B8EquaLK.js";
import { t as ScrollDivider } from "./scroll-divider-DhWxEaK9.js";
import { n as responsiveImages } from "./responsive-image-CxkYlq3p.js";
import { Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ChevronDownIcon, ChevronUpIcon, Mail, PhoneCall } from "lucide-react";
import { Accordion } from "@base-ui/react/accordion";
import { cn } from "cn";
// resources/js/components/ui/accordion.tsx
function Accordion$1({ className, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Root, {
		"data-slot": "accordion",
		className: cn("flex w-full flex-col", className),
		...props
	});
}
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Item, {
		"data-slot": "accordion-item",
		className: cn("not-last:border-b", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Header, {
		className: "flex",
		children: /* @__PURE__ */ jsxs(Accordion.Trigger, {
			"data-slot": "accordion-trigger",
			className: cn("group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground", className),
			...props,
			children: [
				children,
				/* @__PURE__ */ jsx(ChevronDownIcon, {
					"data-slot": "accordion-trigger-icon",
					className: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
				}),
				/* @__PURE__ */ jsx(ChevronUpIcon, {
					"data-slot": "accordion-trigger-icon",
					className: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
				})
			]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Panel, {
		"data-slot": "accordion-content",
		className: "overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up",
		...props,
		children: /* @__PURE__ */ jsx("div", {
			className: cn("h-(--accordion-panel-height) pt-0 pb-2.5 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className),
			children
		})
	});
}
// resources/js/pages/faq.tsx
function FaqPage({ faqs }) {
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: "Frequently Asked Questions",
		children: [
			/* @__PURE__ */ jsx(PageHeader, {
				label: "Knowledge Base",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"FREQUENTLY ASKED",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "bg-linear-to-r from-primary to-sky-500 bg-clip-text pr-1 text-transparent",
						children: "QUESTIONS"
					})
				] }),
				description: "Find answers to common questions about our heavy haulage services, equipment, permits, and SADC operations.",
				image: responsiveImages.faqHeader,
				imageAlt: "Teemane Heavy Haulage abnormal convoy hauling a large catamaran yacht",
				imageClassName: "object-[52%_52%]"
			}),
			/* @__PURE__ */ jsx(ScrollDivider, { texts: [/* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("span", {
					className: "inline-flex items-center font-heading uppercase",
					children: "Abnormal Load Permits"
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "mx-3.75 inline-flex items-center",
					children: "•"
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "inline-flex items-center font-heading uppercase",
					children: "250T+ Payload Capacity"
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "mx-3.75 inline-flex items-center",
					children: "•"
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "inline-flex items-center font-heading uppercase",
					children: "Route Surveys & Escort Pilots"
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "mx-3.75 inline-flex items-center",
					children: "•"
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "inline-flex items-center font-heading uppercase",
					children: "SADC Cross-Border Corridors"
				})
			] }), /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("span", {
					className: "inline-flex items-center font-heading uppercase",
					children: "24/7 Live GPS Fleet Tracking"
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "mx-3.75 inline-flex items-center",
					children: "•"
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "inline-flex items-center font-heading uppercase",
					children: "CAD & Bridge Engineering Studies"
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "mx-3.75 inline-flex items-center",
					children: "•"
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "inline-flex items-center font-heading uppercase",
					children: "24/7/365 Emergency Dispatch"
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "mx-3.75 inline-flex items-center",
					children: "•"
				}),
				"\xA0",
				/* @__PURE__ */ jsx("span", {
					className: "inline-flex items-center font-heading uppercase",
					children: "Engineered Transport Quotations"
				})
			] })] }),
			/* @__PURE__ */ jsxs("section", {
				className: "capabilities-glass-stage relative isolate overflow-clip py-20 md:py-32",
				children: [
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "capabilities-stage-dots pointer-events-none absolute inset-0"
					}),
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px opacity-50"
					}),
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-40"
					}),
					/* @__PURE__ */ jsx(Wrapper, {
						className: "relative z-10",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-4xl",
							children: [faqs.length > 0 ? /* @__PURE__ */ jsx(Accordion$1, {
								className: "w-full gap-3.5",
								children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(AccordionItem, {
									value: `item-${faq.id}`,
									className: "group/item bento-glass-card relative overflow-hidden rounded-2xl px-5 transition-all duration-300 data-open:border-primary/45 md:px-8 dark:data-open:border-sky-300/55",
									children: [
										/* @__PURE__ */ jsx("div", {
											"aria-hidden": "true",
											className: "bento-glass-card-flare pointer-events-none absolute inset-0"
										}),
										/* @__PURE__ */ jsx("div", {
											"aria-hidden": "true",
											className: "nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-75"
										}),
										/* @__PURE__ */ jsxs(AccordionTrigger, {
											className: "relative z-10 cursor-pointer items-center gap-4 border-none py-5 text-left text-base font-bold transition-colors hover:text-primary hover:no-underline group-aria-expanded/accordion-trigger:text-primary sm:text-lg md:py-6 md:text-xl dark:hover:text-sky-300 dark:group-aria-expanded/accordion-trigger:text-sky-300 **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-primary dark:**:data-[slot=accordion-trigger-icon]:text-sky-300",
											children: [/* @__PURE__ */ jsx("span", {
												className: "bento-glass-icon inline-flex shrink-0 items-center justify-center rounded-lg px-2.5 py-1 font-mono text-xs font-bold tracking-wider text-primary transition-all duration-200 group-data-open/item:border-sky-300/60 group-data-open/item:bg-primary group-data-open/item:bg-none group-data-open/item:text-white group-data-open/item:shadow-[0_6px_18px_-4px_rgba(0,100,190,0.65)] dark:text-sky-300",
												children: String(index + 1).padStart(2, "0")
											}), /* @__PURE__ */ jsx("span", {
												className: "flex-1 leading-snug text-foreground transition-colors group-hover/accordion-trigger:text-primary group-data-open/item:text-primary dark:group-hover/accordion-trigger:text-sky-200 dark:group-data-open/item:text-sky-200",
												children: faq.question
											})]
										}),
										/* @__PURE__ */ jsx(AccordionContent, {
											className: "relative z-10 pt-1 pb-7",
											children: /* @__PURE__ */ jsx("div", {
												className: "prose max-w-[68ch] pl-0 text-base leading-relaxed text-muted-foreground prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 md:pl-12 md:text-lg dark:prose-invert dark:prose-a:text-sky-300",
												dangerouslySetInnerHTML: { __html: faq.answer }
											})
										})
									]
								}, faq.id))
							}) : /* @__PURE__ */ jsxs("div", {
								className: "bento-glass-card relative overflow-hidden rounded-2xl p-12 text-center",
								children: [/* @__PURE__ */ jsx("div", {
									"aria-hidden": "true",
									className: "bento-glass-card-flare pointer-events-none absolute inset-0"
								}), /* @__PURE__ */ jsxs("div", {
									className: "relative z-10",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-xl font-medium text-muted-foreground",
										children: "No FAQs have been added yet."
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-2 text-muted-foreground",
										children: "Please check back later."
									})]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "scroll-divider-surface relative mt-16 overflow-hidden rounded-3xl border border-sky-400/35 p-8 text-center text-white shadow-2xl md:mt-24 md:p-12",
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
									/* @__PURE__ */ jsx("div", {
										"aria-hidden": "true",
										className: "pointer-events-none absolute top-0 left-0 -translate-x-1/3 opacity-[0.09]",
										children: /* @__PURE__ */ jsx(LogoMark, { className: "h-auto w-64 text-sky-400 md:w-76" })
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "relative z-10",
										children: [
											/* @__PURE__ */ jsxs("span", {
												className: "emergency-cta-pill mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-sky-200 sm:text-xs",
												children: [/* @__PURE__ */ jsx("span", {
													"aria-hidden": "true",
													className: "size-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"
												}), "Direct Support"]
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "mb-3 font-heading text-2xl font-black uppercase tracking-tight text-white md:text-3xl",
												children: "Still have questions?"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mx-auto mb-8 max-w-2xl text-base text-sky-100/80 sm:text-lg",
												children: "Can't find the answer you're looking for? Our heavy haulage experts are available 24/7 to assist you with your project requirements."
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex flex-col items-center justify-center gap-3 sm:flex-row",
												children: [/* @__PURE__ */ jsxs(Link, {
													href: "/contact-us",
													prefetch: "hover",
													className: "emergency-cta-glass group relative inline-flex h-12 w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl px-7 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 sm:w-auto",
													children: [
														/* @__PURE__ */ jsx("span", {
															"aria-hidden": "true",
															className: "emergency-cta-glass-flare pointer-events-none absolute inset-0"
														}),
														/* @__PURE__ */ jsx(Mail, { className: "relative z-10 h-4 w-4 text-sky-200" }),
														/* @__PURE__ */ jsx("span", {
															className: "relative z-10",
															children: "Contact Us"
														})
													]
												}), /* @__PURE__ */ jsxs("a", {
													href: "tel:0861888004",
													className: "globe-hud-glass globe-hud-glass-btn inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl px-7 text-sm font-bold uppercase tracking-wider text-sky-100 transition-all duration-300 hover:-translate-y-0.5 sm:w-auto",
													children: [/* @__PURE__ */ jsx(PhoneCall, { className: "h-4 w-4 text-sky-300" }), /* @__PURE__ */ jsx("span", { children: "086 188 8004" })]
												})]
											})
										]
									})
								]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx(Divider1, {})
		]
	});
}
export { FaqPage as default };

//# sourceMappingURL=faq-zn3lfxBT.js.map