import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';

export default function PrivacyPolicy() {
    return (
        <AppLayout title="Privacy Policy">
            <div className="bg-background selection:bg-primary selection:text-white">
                <section className="relative overflow-hidden isolate pt-28 sm:pt-36 lg:pt-44 pb-14 sm:pb-16 border-b border-border">
                    <div aria-hidden="true" className="page-header-radial absolute inset-0 pointer-events-none select-none -z-10" />
                    <Wrapper className="relative z-10">
                        <SectionHeading
                            label="Legal Documentation"
                            title="Privacy Policy"
                            align="center"
                        >
                            Your privacy is critically important to us. Learn how Teemane Heavy Haulage collects, safeguards, and handles your information.
                        </SectionHeading>
                    </Wrapper>
                </section>

                <section className="py-14 sm:py-20 lg:py-24 bg-background">
                    <Wrapper>
                        <article className="max-w-3xl mx-auto rounded-3xl bg-card border border-border p-6 sm:p-10 md:p-12 shadow-sm">
                            <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed">
                                <h2>1. Information We Collect</h2>
                                <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we&rsquo;re collecting it and how it will be used.</p>

                                <h2>2. How We Use Your Information</h2>
                                <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we&rsquo;ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>

                                <h2>3. Third-Party Sharing</h2>
                                <p>We don&rsquo;t share any personally identifying information publicly or with third-parties, except when required to by law.</p>

                                <h2>4. External Links</h2>
                                <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>

                                <h2>5. Your Choices</h2>
                                <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>

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
