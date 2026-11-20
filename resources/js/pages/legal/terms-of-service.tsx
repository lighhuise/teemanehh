import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';

export default function TermsOfService() {
    return (
        <AppLayout title="Terms of Service">
            <div className="bg-background selection:bg-primary selection:text-white">
                <section className="relative overflow-hidden isolate pt-28 sm:pt-36 lg:pt-44 pb-14 sm:pb-16 border-b border-border">
                    <div aria-hidden="true" className="page-header-radial absolute inset-0 pointer-events-none select-none -z-10" />
                    <Wrapper className="relative z-10">
                        <SectionHeading
                            label="Legal Documentation"
                            title="Terms of Service"
                            align="center"
                        >
                            Please read these terms carefully before using our website and heavy haulage services.
                        </SectionHeading>
                    </Wrapper>
                </section>

                <section className="py-14 sm:py-20 lg:py-24 bg-background">
                    <Wrapper>
                        <article className="max-w-3xl mx-auto rounded-3xl bg-card border border-border p-6 sm:p-10 md:p-12 shadow-sm">
                            <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed">
                                <h2>1. Terms</h2>
                                <p>By accessing the website at Teemane Heavy Haulage, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>

                                <h2>2. Use License</h2>
                                <p>Permission is granted to temporarily download one copy of the materials (information or software) on Teemane Heavy Haulage&apos;s website for personal, non-commercial transitory viewing only.</p>

                                <h2>3. Disclaimer</h2>
                                <p>The materials on Teemane Heavy Haulage&apos;s website are provided on an &apos;as is&apos; basis. Teemane Heavy Haulage makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                                <h2>4. Limitations</h2>
                                <p>In no event shall Teemane Heavy Haulage or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Teemane Heavy Haulage&apos;s website.</p>

                                <h2>5. Revisions and Errata</h2>
                                <p>The materials appearing on Teemane Heavy Haulage&apos;s website could include technical, typographical, or photographic errors. Teemane Heavy Haulage does not warrant that any of the materials on its website are accurate, complete or current.</p>

                                <p className="mt-10 pt-6 border-t border-border text-muted-foreground text-xs font-bold uppercase tracking-widest">
                                    Effective as of {new Date().getFullYear()} &bull; Teemane Heavy Haulage
                                </p>
                            </div>
                        </article>
                    </Wrapper>
                </section>
            </div>
        </AppLayout>
    );
}
