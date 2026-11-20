import { a as toast, c as Button, d as cn, t as AppLayout, u as Wrapper } from "./app-layout-DCuwPKZC.js";
import { t as Input } from "./input-DU2Ayv40.js";
import { t as SectionHeading } from "./section-heading-CT93tXK3.js";
import { t as PageHeader } from "./page-header-B50LwUXx.js";
import { t as ScrollDivider } from "./scroll-divider-CjH_P-yb.js";
import { n as responsiveImages } from "./responsive-image-CxkYlq3p.js";
import { useForm } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
// resources/js/components/ui/textarea.tsx
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ jsx("textarea", {
		"data-slot": "textarea",
		className: cn("flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
// resources/js/pages/contact-us.tsx
function ContactUs({ flash, honeypot }) {
	const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
		name: "",
		email: "",
		phone: "",
		message: "",
		...honeypot?.enabled ? {
			[honeypot.nameFieldName]: "",
			[honeypot.validFromFieldName]: honeypot.encryptedValidFrom
		} : {}
	});
	const submit = (e) => {
		e.preventDefault();
		post("/contact-us", {
			preserveScroll: true,
			onSuccess: () => {
				reset();
				toast.add({
					title: "Success!",
					description: "Your message has been sent successfully.",
					type: "success"
				});
			},
			onError: () => {
				toast.add({
					title: "Error",
					description: "Please check the form for errors and try again.",
					type: "error"
				});
			}
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHeader, {
			label: "Get In Touch",
			title: /* @__PURE__ */ jsxs(Fragment, { children: [
				"TELL US ABOUT YOUR",
				" ",
				/* @__PURE__ */ jsx("span", {
					className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1",
					children: "MOVE"
				})
			] }),
			description: "To help us assess your transport requirements, share your cargo specifications, dimensions, collection point, and destination with our team.",
			image: responsiveImages.contactHeader,
			imageAlt: "Teemane Heavy Haulage Mercedes-Benz truck transporting oversized industrial storage tanks",
			imageClassName: "object-[45%_55%]"
		}),
		/* @__PURE__ */ jsx(ScrollDivider, { texts: [/* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("span", {
				className: "inline-flex items-center uppercase font-heading",
				children: "24/7/365 Emergency Dispatch"
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "mx-3.75 inline-flex items-center",
				children: "•"
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "inline-flex items-center uppercase font-heading",
				children: "Bellville South Headquarters"
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "mx-3.75 inline-flex items-center",
				children: "•"
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "inline-flex items-center uppercase font-heading",
				children: "Rapid Quote Turnaround"
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "mx-3.75 inline-flex items-center",
				children: "•"
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "inline-flex items-center uppercase font-heading",
				children: "Nationwide & SADC Coverage"
			})
		] }), /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("span", {
				className: "inline-flex items-center uppercase font-heading",
				children: "Heavy Haulage Enquiries"
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "mx-3.75 inline-flex items-center",
				children: "•"
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "inline-flex items-center uppercase font-heading",
				children: "Oversized Cargo Assessments"
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "mx-3.75 inline-flex items-center",
				children: "•"
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "inline-flex items-center uppercase font-heading",
				children: "Machinery Transport Planning"
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "mx-3.75 inline-flex items-center",
				children: "•"
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "inline-flex items-center uppercase font-heading",
				children: "Direct Hotline: 086 188 8004"
			})
		] })] }),
		/* @__PURE__ */ jsx("section", {
			className: "py-16 sm:py-24 lg:py-28 bg-background",
			children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-5 space-y-10",
					children: [
						/* @__PURE__ */ jsx(SectionHeading, {
							label: "Direct Contact",
							title: "Our Head Office",
							align: "left",
							children: "Headquartered in Bellville South, Cape Town, we provide specialised heavy haulage and machinery transport solutions tailored to your load and schedule."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-4 rounded-2xl bg-card border border-border p-5 shadow-xs",
									children: [/* @__PURE__ */ jsx("div", {
										className: "shrink-0 size-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl border border-primary/20",
										children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5" })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "font-heading font-black text-sm uppercase tracking-wider text-foreground",
										children: "Address"
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-muted-foreground text-sm sm:text-base mt-1 leading-relaxed",
										children: [
											"6 Van Eck St",
											/* @__PURE__ */ jsx("br", {}),
											"Bellville South, Cape Town, 7530"
										]
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-4 rounded-2xl bg-card border border-border p-5 shadow-xs",
									children: [/* @__PURE__ */ jsx("div", {
										className: "shrink-0 size-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl border border-primary/20",
										children: /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5" })
									}), /* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("h3", {
											className: "font-heading font-black text-sm uppercase tracking-wider text-foreground",
											children: "24/7 Dispatch Hotline"
										}),
										/* @__PURE__ */ jsx("a", {
											href: "tel:0861888004",
											className: "cursor-pointer block text-base sm:text-lg font-bold text-foreground hover:text-primary transition-colors mt-1",
											children: "086 188 8004"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-[11px] text-primary mt-1 uppercase tracking-[0.16em] font-black",
											children: "Available 24hrs, 365 Days"
										})
									] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-4 rounded-2xl bg-card border border-border p-5 shadow-xs",
									children: [/* @__PURE__ */ jsx("div", {
										className: "shrink-0 size-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl border border-primary/20",
										children: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" })
									}), /* @__PURE__ */ jsxs("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "font-heading font-black text-sm uppercase tracking-wider text-foreground",
											children: "Email"
										}), /* @__PURE__ */ jsx("a", {
											href: "mailto:enquiries@teemanehh.co.za",
											className: "cursor-pointer block text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors mt-1 break-all",
											children: "enquiries@teemanehh.co.za"
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "border-t border-border pt-8",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs font-black uppercase tracking-[0.18em] text-muted-foreground mb-4",
								children: "Specialised Enquiry Types"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-2.5",
								children: [
									"Heavy Haulage",
									"Oversized Cargo",
									"Machinery Transport",
									"General Enquiry"
								].map((type) => /* @__PURE__ */ jsx("span", {
									className: "px-3.5 py-1.5 rounded-full bg-muted/70 border border-border text-xs font-bold uppercase tracking-wider text-foreground",
									children: type
								}, type))
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-7 bg-card border border-border p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl relative",
					children: [
						flash?.success ? /* @__PURE__ */ jsxs("div", {
							className: "absolute inset-0 z-10 bg-card/96 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 rounded-3xl border border-primary/40",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "w-20 h-20 bg-primary/10 text-primary rounded-2xl border border-primary/20 flex items-center justify-center mb-6",
									children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-10 h-10" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-3xl font-heading font-black uppercase tracking-tighter mb-3 text-foreground",
									children: "Message Sent!"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-base sm:text-lg text-muted-foreground max-w-md",
									children: flash.success
								})
							]
						}) : null,
						/* @__PURE__ */ jsxs("div", {
							className: "mb-8",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-black uppercase tracking-[0.2em] text-primary block mb-2",
									children: "Project Specification"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl sm:text-3xl font-heading font-black tracking-tight text-foreground uppercase",
									children: "Send a Message"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground mt-2",
									children: "Include dimensions, estimated tonnage, collection point, and destination for the fastest quote turnaround."
								})
							]
						}),
						/* @__PURE__ */ jsxs("form", {
							onSubmit: submit,
							className: "space-y-6",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ jsx("label", {
											htmlFor: "name",
											className: "text-xs font-bold uppercase tracking-wider text-foreground block",
											children: "Full Name"
										}),
										/* @__PURE__ */ jsx(Input, {
											id: "name",
											name: "name",
											placeholder: "e.g. John van der Merwe",
											value: data.name,
											onChange: (e) => setData("name", e.target.value),
											className: cn("h-12 bg-background", errors.name ? "border-destructive" : "")
										}),
										errors.name && /* @__PURE__ */ jsx("p", {
											className: "text-xs sm:text-sm text-destructive font-medium",
											children: errors.name
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-6",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ jsx("label", {
												htmlFor: "email",
												className: "text-xs font-bold uppercase tracking-wider text-foreground block",
												children: "Email Address"
											}),
											/* @__PURE__ */ jsx(Input, {
												id: "email",
												name: "email",
												type: "email",
												placeholder: "name@company.co.za",
												value: data.email,
												onChange: (e) => setData("email", e.target.value),
												className: cn("h-12 bg-background", errors.email ? "border-destructive" : "")
											}),
											errors.email && /* @__PURE__ */ jsx("p", {
												className: "text-xs sm:text-sm text-destructive font-medium",
												children: errors.email
											})
										]
									}), /* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ jsxs("label", {
												htmlFor: "phone",
												className: "text-xs font-bold uppercase tracking-wider text-foreground block",
												children: ["Phone Number ", /* @__PURE__ */ jsx("span", {
													className: "text-muted-foreground font-normal normal-case",
													children: "(Optional)"
												})]
											}),
											/* @__PURE__ */ jsx(Input, {
												id: "phone",
												name: "phone",
												type: "tel",
												placeholder: "+27 82 000 0000",
												value: data.phone,
												onChange: (e) => setData("phone", e.target.value),
												className: cn("h-12 bg-background", errors.phone ? "border-destructive" : "")
											}),
											errors.phone && /* @__PURE__ */ jsx("p", {
												className: "text-xs sm:text-sm text-destructive font-medium",
												children: errors.phone
											})
										]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ jsx("label", {
											htmlFor: "message",
											className: "text-xs font-bold uppercase tracking-wider text-foreground block",
											children: "Cargo & Route Details"
										}),
										/* @__PURE__ */ jsx(Textarea, {
											id: "message",
											name: "message",
											rows: 7,
											placeholder: "Describe your cargo dimensions, weight, origin, destination, and target dates...",
											value: data.message,
											onChange: (e) => setData("message", e.target.value),
											className: cn("min-h-36 bg-background", errors.message ? "border-destructive" : "")
										}),
										errors.message && /* @__PURE__ */ jsx("p", {
											className: "text-xs sm:text-sm text-destructive font-medium",
											children: errors.message
										})
									]
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "submit",
									size: "xl",
									className: "w-full",
									disabled: processing,
									children: processing ? "Sending Enquiry..." : "Send Message"
								})
							]
						})
					]
				})]
			}) })
		})
	] });
}
ContactUs.layout = (page) => /* @__PURE__ */ jsx(AppLayout, {
	title: "Contact Us",
	children: page
});
export { ContactUs as default };

//# sourceMappingURL=contact-us-y-5yOsJQ.js.map