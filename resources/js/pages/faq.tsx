import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import PageHeader from '@/components/ui/misc/page-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, PhoneCall } from 'lucide-react';
import LogoMark from '@/components/ui/misc/logo-mark';
import Divider1 from '@/components/ui/divider-1';
import ScrollDivider from '@/components/scroll-divider';
import { responsiveImages } from '@/lib/responsive-images';

export default function FaqPage({ faqs }: { faqs: any[] }) {
    return (
        <AppLayout title="Frequently Asked Questions">
            <PageHeader
                label="Knowledge Base"
                title={
                    <>
                        FREQUENTLY ASKED{' '}
                        <span className="bg-linear-to-r from-primary to-sky-500 bg-clip-text pr-1 text-transparent">
                            QUESTIONS
                        </span>
                    </>
                }
                description="Find answers to common questions about our heavy haulage services, equipment, permits, and SADC operations."
                image={responsiveImages.faqHeader}
                imageAlt="Teemane Heavy Haulage abnormal convoy hauling a large catamaran yacht"
                imageClassName="object-[52%_52%]"
            />
            <ScrollDivider
                texts={[
                    <>
                        <span className="inline-flex items-center font-heading uppercase">
                            Abnormal Load Permits
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center font-heading uppercase">
                            250T+ Payload Capacity
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center font-heading uppercase">
                            Route Surveys &amp; Escort Pilots
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center font-heading uppercase">
                            SADC Cross-Border Corridors
                        </span>
                    </>,
                    <>
                        <span className="inline-flex items-center font-heading uppercase">
                            24/7 Live GPS Fleet Tracking
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center font-heading uppercase">
                            CAD &amp; Bridge Engineering Studies
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center font-heading uppercase">
                            24/7/365 Emergency Dispatch
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center font-heading uppercase">
                            Engineered Transport Quotations
                        </span>
                    </>,
                ]}
            />

            <section className="capabilities-glass-stage relative isolate overflow-clip py-20 md:py-32">
                {/* Ambient CAD Dot Matrix for Glass Refraction */}
                <div aria-hidden="true" className="capabilities-stage-dots pointer-events-none absolute inset-0" />
                <div
                    aria-hidden="true"
                    className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px opacity-50"
                />
                <div
                    aria-hidden="true"
                    className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-40"
                />

                <Wrapper className="relative z-10">
                    <div className="mx-auto max-w-4xl">
                        {faqs.length > 0 ? (
                            <Accordion className="w-full gap-3.5">
                                {faqs.map((faq, index) => (
                                    <AccordionItem
                                        key={faq.id}
                                        value={`item-${faq.id}`}
                                        className="group/item bento-glass-card relative overflow-hidden rounded-2xl px-5 transition-all duration-300 data-open:border-primary/45 md:px-8 dark:data-open:border-sky-300/55"
                                    >
                                        <div
                                            aria-hidden="true"
                                            className="bento-glass-card-flare pointer-events-none absolute inset-0"
                                        />
                                        <div
                                            aria-hidden="true"
                                            className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-75"
                                        />

                                        <AccordionTrigger className="relative z-10 cursor-pointer items-center gap-4 border-none py-5 text-left text-base font-bold transition-colors hover:text-primary hover:no-underline group-aria-expanded/accordion-trigger:text-primary sm:text-lg md:py-6 md:text-xl dark:hover:text-sky-300 dark:group-aria-expanded/accordion-trigger:text-sky-300 **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-primary dark:**:data-[slot=accordion-trigger-icon]:text-sky-300">
                                            <span className="bento-glass-icon inline-flex shrink-0 items-center justify-center rounded-lg px-2.5 py-1 font-mono text-xs font-bold tracking-wider text-primary transition-all duration-200 group-data-open/item:border-sky-300/60 group-data-open/item:bg-primary group-data-open/item:bg-none group-data-open/item:text-white group-data-open/item:shadow-[0_6px_18px_-4px_rgba(0,100,190,0.65)] dark:text-sky-300">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="flex-1 leading-snug text-foreground transition-colors group-hover/accordion-trigger:text-primary group-data-open/item:text-primary dark:group-hover/accordion-trigger:text-sky-200 dark:group-data-open/item:text-sky-200">
                                                {faq.question}
                                            </span>
                                        </AccordionTrigger>
                                        <AccordionContent className="relative z-10 pt-1 pb-7">
                                            <div
                                                className="prose max-w-[68ch] pl-0 text-base leading-relaxed text-muted-foreground prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 md:pl-12 md:text-lg dark:prose-invert dark:prose-a:text-sky-300"
                                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                                            />
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        ) : (
                            <div className="bento-glass-card relative overflow-hidden rounded-2xl p-12 text-center">
                                <div
                                    aria-hidden="true"
                                    className="bento-glass-card-flare pointer-events-none absolute inset-0"
                                />
                                <div className="relative z-10">
                                    <p className="text-xl font-medium text-muted-foreground">
                                        No FAQs have been added yet.
                                    </p>
                                    <p className="mt-2 text-muted-foreground">Please check back later.</p>
                                </div>
                            </div>
                        )}

                        {/* Still Have Questions CTA — Signature Dark Steel Brand Plinth */}
                        <div className="scroll-divider-surface relative mt-16 overflow-hidden rounded-3xl border border-sky-400/35 p-8 text-center text-white shadow-2xl md:mt-24 md:p-12">
                            <div aria-hidden="true" className="footer-corona pointer-events-none absolute inset-0" />
                            <div aria-hidden="true" className="footer-dots pointer-events-none absolute inset-0" />
                            <div
                                aria-hidden="true"
                                className="nav-canopy-hazard pointer-events-none absolute inset-x-0 top-0 h-1.5"
                            />
                            <div
                                aria-hidden="true"
                                className="scroll-divider-top-edge pointer-events-none absolute inset-x-0 top-0 h-px"
                            />
                            <div
                                aria-hidden="true"
                                className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px opacity-85"
                            />
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute top-0 left-0 -translate-x-1/3 opacity-[0.09]"
                            >
                                <LogoMark className="h-auto w-64 text-sky-400 md:w-76" />
                            </div>

                            <div className="relative z-10">
                                <span className="emergency-cta-pill mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-sky-200 sm:text-xs">
                                    <span
                                        aria-hidden="true"
                                        className="size-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"
                                    />
                                    Direct Support
                                </span>
                                <h3 className="mb-3 font-heading text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                                    Still have questions?
                                </h3>
                                <p className="mx-auto mb-8 max-w-2xl text-base text-sky-100/80 sm:text-lg">
                                    Can&apos;t find the answer you&apos;re looking for? Our heavy haulage experts are available 24/7 to assist you with your project requirements.
                                </p>
                                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                                    <Link
                                        href="/contact-us"
                                        prefetch="hover"
                                        className="emergency-cta-glass group relative inline-flex h-12 w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl px-7 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="emergency-cta-glass-flare pointer-events-none absolute inset-0"
                                        />
                                        <Mail className="relative z-10 h-4 w-4 text-sky-200" />
                                        <span className="relative z-10">Contact Us</span>
                                    </Link>
                                    <a
                                        href="tel:0861888004"
                                        className="globe-hud-glass globe-hud-glass-btn inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl px-7 text-sm font-bold uppercase tracking-wider text-sky-100 transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
                                    >
                                        <PhoneCall className="h-4 w-4 text-sky-300" />
                                        <span>086 188 8004</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </section>
            <Divider1 />
        </AppLayout>
    );
}
