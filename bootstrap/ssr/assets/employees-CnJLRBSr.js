import { t as AppLayout, u as Wrapper } from "./app-layout-4wljOYs7.js";
import { t as team } from "./team-DogQMkRJ.js";
import { t as Input } from "./input-DQo0-Skb.js";
import { t as SectionHeading } from "./section-heading-8zOEVGTQ.js";
import { t as ResponsiveImage } from "./responsive-image-CxkYlq3p.js";
import { InfiniteScroll, Link, router } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Building2, MapPin, Search } from "lucide-react";
// resources/js/pages/employees/index.tsx
function EmployeeCardSkeleton() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-card border border-border rounded-2xl flex flex-col items-center text-center p-6 sm:p-8 animate-pulse",
		children: [
			/* @__PURE__ */ jsx("div", { className: "w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-muted mb-6 shrink-0" }),
			/* @__PURE__ */ jsx("div", { className: "h-5 w-36 rounded bg-muted mb-3" }),
			/* @__PURE__ */ jsx("div", { className: "h-3 w-24 rounded bg-muted mb-6" }),
			/* @__PURE__ */ jsx("div", { className: "w-full h-px bg-border mb-6" }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-3 w-full items-center",
				children: [/* @__PURE__ */ jsx("div", { className: "h-3 w-32 rounded bg-muted" }), /* @__PURE__ */ jsx("div", { className: "h-3 w-28 rounded bg-muted" })]
			})
		]
	});
}
function EmployeeGrid({ employees }) {
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8",
		children: employees.map((employee) => /* @__PURE__ */ jsxs(Link, {
			href: team.show.url(employee.slug),
			className: "cursor-pointer group relative bg-card border border-border rounded-2xl flex flex-col items-center text-center p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-6 border-4 border-muted group-hover:border-primary transition-colors duration-300 bg-muted",
					children: employee.image_url ? /* @__PURE__ */ jsx(ResponsiveImage, {
						source: employee.image_url,
						srcSet: employee.image_srcset || void 0,
						sizes: "(max-width: 639px) 112px, 128px",
						width: 128,
						height: 128,
						alt: `${employee.first_name} ${employee.last_name}`,
						className: "w-full h-full object-cover object-top"
					}) : /* @__PURE__ */ jsx("div", {
						className: "w-full h-full bg-muted flex items-center justify-center",
						children: /* @__PURE__ */ jsxs("span", {
							className: "text-3xl font-bold tracking-wider text-muted-foreground/50",
							children: [employee.first_name.charAt(0), employee.last_name.charAt(0)]
						})
					})
				}),
				/* @__PURE__ */ jsxs("h3", {
					className: "text-xl font-black text-foreground group-hover:text-primary transition-colors",
					children: [
						employee.first_name,
						" ",
						employee.last_name
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm font-bold text-primary tracking-wider uppercase mt-2 mb-6",
					children: employee.role
				}),
				/* @__PURE__ */ jsx("div", { className: "w-full h-px bg-border mb-6 group-hover:bg-primary/20 transition-colors" }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-3 w-full text-sm text-muted-foreground",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ jsx(Building2, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: employee.department })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: employee.branch_location })]
					})]
				})
			]
		}, employee.id))
	});
}
function Index({ employees, filters }) {
	const [search, setSearch] = useState(filters?.search || "");
	const [isMounted, setIsMounted] = useState(false);
	const initialRender = useRef(true);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
			return;
		}
		const timeoutId = setTimeout(() => {
			router.get(team.index.url(), { search }, {
				preserveState: true,
				preserveScroll: true,
				replace: true
			});
		}, 300);
		return () => clearTimeout(timeoutId);
	}, [search]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden isolate bg-background pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 border-b border-border",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": "true",
			className: "page-header-radial absolute inset-0 pointer-events-none select-none -z-10"
		}), /* @__PURE__ */ jsxs(Wrapper, {
			className: "relative z-10",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				label: "The THH Family",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"OUR",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500",
						children: "TEAM"
					})
				] }),
				align: "center",
				children: "Meet the skilled professionals behind Teemane Heavy Haulage. From our operators to our engineers, our people are our greatest asset and the foundation of our success."
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative w-full max-w-md mx-auto mt-10",
				children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" }), /* @__PURE__ */ jsx(Input, {
					type: "search",
					"aria-label": "Search team members by name, role, or department",
					placeholder: "Search by name, role, or department...",
					value: search,
					onChange: (e) => setSearch(e.target.value),
					className: "pl-12 h-13 text-sm sm:text-base rounded-full shadow-sm bg-card border-border"
				})]
			})]
		})]
	}), /* @__PURE__ */ jsx("section", {
		className: "py-16 sm:py-24 bg-background",
		children: /* @__PURE__ */ jsx(Wrapper, { children: isMounted ? /* @__PURE__ */ jsx(InfiniteScroll, {
			data: "employees",
			children: ({ loading, hasMore }) => {
				return /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsx(EmployeeGrid, { employees: employees.data }),
					loading && /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8",
						children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsx(EmployeeCardSkeleton, {}, i))
					}),
					!loading && !hasMore && employees.data.length > 0 && /* @__PURE__ */ jsx("p", {
						className: "text-center text-sm text-muted-foreground mt-16 font-medium tracking-widest uppercase",
						children: "— All team members loaded —"
					})
				] });
			}
		}) : /* @__PURE__ */ jsx(EmployeeGrid, { employees: employees.data }) })
	})] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, {
	title: "Our Team",
	children: page
});
export { Index as default };

//# sourceMappingURL=employees-CnJLRBSr.js.map