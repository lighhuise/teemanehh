import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import PageHeader from '@/components/ui/misc/page-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PhoneCall, Mail } from 'lucide-react';
import LogoMark from '@/components/ui/misc/logo-mark';
import Divider1 from "@/components/ui/divider-1";
import SectionBackdrop from "@/components/ui/misc/section-backdrop";
import ScrollDivider from "@/components/scroll-divider";
import { buttonVariants } from '@/components/ui/button';
import { responsiveImages } from '@/lib/responsive-images';

export default function FaqPage({ faqs }: { faqs: any[] }) {
    return (
        <AppLayout title="Frequently Asked Questions">
            <PageHeader
                label="Knowledge Base"
                title={
                    <>
                        FREQUENTLY ASKED{' '}
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1">
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
                        <span className="inline-flex items-center uppercase font-heading">
                            Abnormal Load Permits
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center uppercase font-heading">
                            250T+ Payload Capacity
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center uppercase font-heading">
                            Route Surveys &amp; Escort Pilots
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center uppercase font-heading">
                            SADC Cross-Border Corridors
                        </span>
                    </>,
                    <>
                        <span className="inline-flex items-center uppercase font-heading">
                            24/7 Live GPS Fleet Tracking
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center uppercase font-heading">
                            CAD &amp; Bridge Engineering Studies
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center uppercase font-heading">
                            24/7/365 Emergency Dispatch
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center uppercase font-heading">
                            Engineered Transport Quotations
                        </span>
                    </>,
                ]}
            />

            <section className="py-20 md:py-32 bg-background relative overflow-clip isolate">
                {/* Ambient Glows */}
                {/*<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none -z-10">*/}
                {/*    <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>*/}
                {/*    <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-sky-500/5 blur-[120px] rounded-full"></div>*/}
                {/*</div>*/}

                <SectionBackdrop reticules={`both`}   />

                <Wrapper>
                    <div className="max-w-4xl mx-auto">
                        {faqs.length > 0 ? (
                            <Accordion className="w-full gap-3">
                                {faqs.map((faq, index) => (
                                    <AccordionItem
                                        key={faq.id}
                                        value={`item-${faq.id}`}
                                        className="group/item bg-card border border-border/70 rounded-2xl px-5 md:px-8 shadow-xs hover:border-primary/40 hover:shadow-md data-open:border-primary/40 data-open:bg-primary/[0.015] data-open:shadow-md transition-all duration-200"
                                    >
                                        <AccordionTrigger className="cursor-pointer text-left font-bold text-base sm:text-lg md:text-xl py-5 md:py-6 hover:no-underline hover:text-primary transition-colors group-aria-expanded/accordion-trigger:text-primary border-none items-center gap-4 **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-primary">
                                            <span className="shrink-0 inline-flex items-center justify-center rounded-lg px-2.5 py-1 text-xs font-mono font-bold tracking-wider bg-primary/10 text-primary group-data-open/item:bg-primary group-data-open/item:text-primary-foreground transition-colors">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="flex-1 leading-snug text-foreground group-hover/accordion-trigger:text-primary group-data-open/item:text-primary transition-colors">
                                                {faq.question}
                                            </span>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-7 pt-1">
                                            <div
                                                className="pl-0 md:pl-12 text-muted-foreground leading-relaxed text-base md:text-lg prose dark:prose-invert max-w-[68ch] prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80"
                                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                                            />
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        ) : (
                            <div className="text-center bg-card border border-border rounded-2xl p-12 shadow-sm">
                                <p className="text-xl text-muted-foreground font-medium">No FAQs have been added yet.</p>
                                <p className="text-muted-foreground mt-2">Please check back later.</p>
                            </div>
                        )}

                        {/* Still Have Questions CTA */}
                        <div className="mt-16 md:mt-24 bg-card border border-border rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-lg">
                            <div aria-hidden="true" className="absolute top-0 left-0 pointer-events-none opacity-[0.07] -translate-x-1/3">
                                <LogoMark className="w-64 md:w-76 h-auto text-primary" />
                            </div>
                            <div className="relative z-10">
                                <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full border bg-primary/10 text-primary border-primary/20 mb-4">
                                    <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
                                    Direct Support
                                </span>
                                <h3 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tight text-foreground mb-3">
                                    Still have questions?
                                </h3>
                                <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Can&apos;t find the answer you&apos;re looking for? Our heavy haulage experts are available 24/7 to assist you with your project requirements.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                                    <Link
                                        href="/contact-us"
                                        prefetch="hover"
                                        className={buttonVariants({ size: 'xl', className: 'w-full sm:w-auto' })}
                                    >
                                        <Mail className="w-4 h-4" />
                                        <span>Contact Us</span>
                                    </Link>
                                    <a
                                        href="tel:0861888004"
                                        className={buttonVariants({ variant: 'outline', size: 'xl', className: 'w-full sm:w-auto' })}
                                    >
                                        <PhoneCall className="w-4 h-4 text-primary" />
                                        <span>086 188 8004</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </Wrapper>
            </section>
            <Divider1/>
        </AppLayout>
    );
}
