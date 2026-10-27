import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import PageHeader from '@/components/ui/misc/page-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PhoneCall, Mail } from 'lucide-react';
import LogoMark from '@/components/ui/misc/logo-mark';
import Divider1 from "@/components/ui/divider-1";

export default function FaqPage({ faqs }: { faqs: any[] }) {
    return (
        <AppLayout title="Frequently Asked Questions">
            <PageHeader
                title={<>FREQUENTLY ASKED <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1 pb-1">QUESTIONS</span></>}
                description="Find answers to common questions about our heavy haulage services, equipment, and operations."
            />

            <section className="py-20 md:py-32 bg-background relative overflow-hidden isolate">
                {/* Ambient Glows */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none -z-10">
                    <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-sky-500/5 blur-[120px] rounded-full"></div>
                </div>

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
                                        <AccordionTrigger className="text-left font-bold text-lg md:text-xl py-5 md:py-6 hover:no-underline hover:text-primary transition-colors group-aria-expanded/accordion-trigger:text-primary border-none items-center gap-4 **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-primary">
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
                            <div className="text-center bg-card border border-border/50 rounded-3xl p-12 shadow-sm">
                                <p className="text-xl text-muted-foreground font-medium">No FAQs have been added yet.</p>
                                <p className="text-muted-foreground mt-2">Please check back later.</p>
                            </div>
                        )}

                        {/* Still Have Questions CTA */}
                        <div className="mt-16 md:mt-24 bg-linear-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm">
                            <div aria-hidden="true" className="absolute top-0 left-0 pointer-events-none opacity-10 md:opacity-[0.1] -translate-x-1/3  ">
                                <LogoMark className="w-64 md:w-76 h-auto text-primary" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-4">Still have questions?</h3>
                                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Can't find the answer you're looking for? Our heavy haulage experts are available 24/7 to assist you with your project requirements.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                                    <Link
                                        href="/contact-us"
                                        className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 px-8 py-4 rounded-xl font-bold tracking-widest uppercase text-sm"
                                    >
                                        <Mail className="w-4 h-4" />
                                        Contact Us
                                    </Link>
                                    <a
                                        href="tel:0861888004"
                                        className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-background hover:bg-accent text-foreground transition-all duration-300 shadow-sm border border-border hover:-translate-y-0.5 px-8 py-4 rounded-xl font-bold tracking-widest uppercase text-sm"
                                    >
                                        <PhoneCall className="w-4 h-4 text-primary" />
                                        086 188 8004
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
