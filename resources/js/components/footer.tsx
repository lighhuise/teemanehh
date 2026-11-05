import { Link } from '@inertiajs/react';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import Wrapper from "@/components/ui/misc/wrapper";
import Logo from '@/components/ui/misc/logo';

export default function Footer() {
    return (
        <footer className="bg-muted  z-5 text-muted-foreground relative overflow-hidden pt-24 pb-12 border-t-6 border-primary">
            {/* Background Typography */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-[1%] pointer-events-none select-none overflow-hidden">
                <h2 className="text-[20vh] xl:text-[300px] font-black tracking-tighter leading-none whitespace-nowrap text-foreground">THH</h2>
            </div>

            <Wrapper className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <Link href="/" className="inline-block">
                            <Logo className="h-16 w-auto" aria-label="Teemane Heavy Haulage Logo" />
                        </Link>
                        <p className="text-muted-foreground leading-relaxed max-w-sm">
                            Tailored transportation solutions for oversized cargo, heavy machinery, and industrial equipment across South Africa.
                        </p>
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex items-center gap-4 text-sm font-bold tracking-widest text-foreground uppercase">
                                <div className="h-px w-8 bg-primary"></div>
                                Moving the Impossible
                            </div>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="lg:col-span-3 lg:col-start-6">
                        <h3 className="text-foreground text-lg font-black mb-8 tracking-tighter uppercase">Navigation</h3>
                        <ul className="flex flex-col gap-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Services', href: '/services' },
                                { name: 'About Us', href: '/about-us' },
                                { name: 'FAQ', href: '/faq' },
                                // { name: 'Our Team', href: '/our-team' },
                                { name: 'Contact Us', href: '/contact-us' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group w-fit font-medium">
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-4">
                        <span className="text-xs font-black tracking-widest text-primary uppercase mb-2 block">Direct Communication</span>
                        <h3 className="text-foreground text-xl font-black mb-7 tracking-tighter uppercase">Contact Us</h3>
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-start gap-3.5">
                                <div className="p-2.5 rounded-lg text-primary shrink-0 mt-0.5 bg-muted border border-border transition-all">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="text-xs font-black uppercase tracking-wider text-foreground mb-0.5">Head Office & Depot</div>
                                    <p className="text-sm text-muted-foreground leading-normal">
                                        6 Van Eck St, Bellville South<br />
                                        Cape Town, Western Cape, 7530
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3.5">
                                <div className="p-2.5 rounded-lg text-primary shrink-0 bg-muted border border-border transition-all">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="text-xs font-black uppercase tracking-wider text-foreground mb-0.5">Telephone Hotline</div>
                                    <a href="tel:0861888004" className="text-base font-bold text-foreground hover:text-primary transition-colors">
                                        086 188 8004
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3.5">
                                <div className="p-2.5 rounded-lg text-primary shrink-0 bg-muted border border-border transition-all">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="text-xs font-black uppercase tracking-wider text-foreground mb-0.5">Electronic Mail</div>
                                    <a href="mailto:enquiries@teemanehh.co.za" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                                        enquiries@teemanehh.co.za
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-medium">
                    <p>&copy; {new Date().getFullYear()} Teemane Heavy Haulage. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Wrapper>
            <Wrapper className={`pt-8 border-t border-border text-center`}>
                Designed and developed by  <a target={`_blank`} className={`text-primary hover:underline inline`} href="https://designbycode.co.za">designbycode</a>
            </Wrapper>
        </footer>
    );
}
