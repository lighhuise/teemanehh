import { c as Wrapper, n as LogoMark, t as AppLayout } from "./app-layout-B7PuHxtL.js";
import { t as PageHeader } from "./page-header-CDYW8Q5b.js";
import { Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ChevronDownIcon, ChevronUpIcon, Mail, PhoneCall } from "lucide-react";
import { Accordion } from "@base-ui/react/accordion";
import { cn } from "cn";
//#region resources/js/components/ui/accordion.tsx
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
//#endregion
//#region resources/js/pages/faq.tsx
function FaqPage({ faqs }) {
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: "Frequently Asked Questions",
		children: [/* @__PURE__ */ jsx(PageHeader, {
			title: /* @__PURE__ */ jsxs(Fragment, { children: ["FREQUENTLY ASKED ", /* @__PURE__ */ jsx("span", {
				className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1 pb-1",
				children: "QUESTIONS"
			})] }),
			description: "Find answers to common questions about our heavy haulage services, equipment, and operations."
		}), /* @__PURE__ */ jsxs("section", {
			className: "py-20 md:py-32 bg-background relative overflow-hidden isolate",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none -z-10",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" }), /* @__PURE__ */ jsx("div", { className: "absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-sky-500/5 blur-[120px] rounded-full" })]
			}), /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-4xl mx-auto",
				children: [faqs.length > 0 ? /* @__PURE__ */ jsx(Accordion$1, {
					collapsible: true,
					className: "w-full space-y-4",
					children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(AccordionItem, {
						value: `item-${faq.id}`,
						className: "bg-card border border-border/60 rounded-2xl px-4 md:px-8 shadow-sm hover:shadow-md transition-all duration-300 data-[state=open]:border-primary/30 data-[state=open]:shadow-primary/5",
						children: [/* @__PURE__ */ jsx(AccordionTrigger, {
							className: "text-left font-bold text-lg md:text-xl py-6 hover:no-underline hover:text-primary transition-colors group-aria-expanded/accordion-trigger:text-primary border-none",
							children: faq.question
						}), /* @__PURE__ */ jsx(AccordionContent, {
							className: "pb-8",
							children: /* @__PURE__ */ jsx("div", {
								className: "text-muted-foreground leading-relaxed text-base md:text-lg prose dark:prose-invert max-w-none prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80",
								dangerouslySetInnerHTML: { __html: faq.answer }
							})
						})]
					}, faq.id))
				}) : /* @__PURE__ */ jsxs("div", {
					className: "text-center bg-card border border-border/50 rounded-3xl p-12 shadow-sm",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xl text-muted-foreground font-medium",
						children: "No FAQs have been added yet."
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground mt-2",
						children: "Please check back later."
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-16 md:mt-24 bg-linear-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm",
					children: [/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "absolute top-0 left-0 pointer-events-none opacity-10 md:opacity-[0.1] -translate-x-1/3  ",
						children: /* @__PURE__ */ jsx(LogoMark, { className: "w-64 md:w-76 h-auto text-primary" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative z-10",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-4",
								children: "Still have questions?"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg text-muted-foreground mb-8 max-w-2xl mx-auto",
								children: "Can't find the answer you're looking for? Our heavy haulage experts are available 24/7 to assist you with your project requirements."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row justify-center items-center gap-4",
								children: [/* @__PURE__ */ jsxs(Link, {
									href: "/contact-us",
									className: "inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 px-8 py-4 rounded-xl font-bold tracking-widest uppercase text-sm",
									children: [/* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }), "Contact Us"]
								}), /* @__PURE__ */ jsxs("a", {
									href: "tel:0861888004",
									className: "inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-background hover:bg-accent text-foreground transition-all duration-300 shadow-sm border border-border hover:-translate-y-0.5 px-8 py-4 rounded-xl font-bold tracking-widest uppercase text-sm",
									children: [/* @__PURE__ */ jsx(PhoneCall, { className: "w-4 h-4 text-primary" }), "086 188 8004"]
								})]
							})
						]
					})]
				})]
			}) })]
		})]
	});
}
//#endregion
export { FaqPage as default };

//# sourceMappingURL=faq-ClymIlP2.js.map