import type {CSSProperties} from 'react';
import {Link} from '@inertiajs/react';
import {ArrowRight, Mail, MapPin, Phone} from 'lucide-react';
import Wrapper from '@/components/ui/misc/wrapper';
import Logo from '@/components/ui/misc/logo';
import SpotlightCard from '@/components/SpotlightCard';

const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about-us' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact-us' },
];

export default function Footer() {
    return (
        <footer className="footer-surface text-slate-300 relative overflow-hidden pt-20 pb-10 border-t border-primary/40">
            {/* Atmospheric top-edge radial light flare matching ScrollDivider */}
            <div aria-hidden="true" className="footer-corona pointer-events-none absolute inset-0" />

            {/* Subtle precision dot grid catching top-edge light */}
            <div aria-hidden="true" className="footer-dots pointer-events-none absolute inset-0" />

            {/* Top canopy hazard micro-rail, flare hairline & subtle bottom highlight */}
            <div aria-hidden="true" className="nav-canopy-hazard pointer-events-none absolute top-0 inset-x-0 h-1.5" />
            <div aria-hidden="true" className="scroll-divider-top-edge pointer-events-none absolute top-0 inset-x-0 h-px" />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
            />

            {/* Background Typography */}
            <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden"
            >
                <span className="font-heading text-[22vw] xl:text-[320px] font-black tracking-tighter leading-none whitespace-nowrap text-white">
                    THH
                </span>
            </div>

            <Wrapper className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <Link href="/" className="cursor-pointer inline-block w-fit">
                            <Logo inverted className="h-14 w-auto" aria-label="Teemane Heavy Haulage Logo" />
                        </Link>
                        <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-sm">
                            Tailored transportation solutions for oversized cargo, heavy machinery, and industrial equipment across South Africa and the SADC region.
                        </p>
                        <div className="emergency-cta-pill inline-flex w-fit items-center gap-3 px-4 py-1.5 rounded-full text-[11px] font-black tracking-[0.2em] text-sky-300 uppercase">
                            <span aria-hidden="true" className="size-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)]" />
                            <span>Moving the Impossible</span>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="lg:col-span-3 lg:col-start-6">
                        <span className="text-[11px] font-black tracking-[0.2em] text-sky-400 uppercase mb-2 block">
                            Explore
                        </span>
                        <h3 className="text-white text-lg font-heading font-black mb-6 tracking-tight uppercase">
                            Navigation
                        </h3>
                        <ul className="flex flex-col gap-3.5">
                            {footerLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        prefetch="hover"
                                        className="cursor-pointer text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group w-fit text-sm font-medium"
                                    >
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 motion-reduce:transition-none text-sky-400" />
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-4">
                        <span className="text-[11px] font-black tracking-[0.2em] text-sky-400 uppercase mb-2 block">
                            Direct Communication
                        </span>
                        <h3 className="text-white text-lg font-heading font-black mb-6 tracking-tight uppercase">
                            Contact Us
                        </h3>
                        <ul className="flex flex-col gap-3.5">
                            <li>
                                <SpotlightCard
                                    theme="dark"
                                    spotlightColor="#38bdf8"
                                    intensity={0.22}
                                    spotlightSize={180}
                                    softness={0.7}
                                    shape="circle"
                                    borderGlow={0.85}
                                    proximity={160}
                                    smoothing={0.5}
                                    grain={0}
                                    ambient={false}
                                    flare
                                    className="footer-glass-card relative overflow-hidden rounded-2xl! p-4! flex items-start gap-3.5"
                                    style={{
                                        '--spotlight-card-surface': 'transparent',
                                        '--spotlight-card-border': 'rgba(56, 189, 248, 0.28)',
                                        '--spotlight-card-shadow': 'none',
                                    } as CSSProperties}
                                >
                                    <div aria-hidden="true" className="footer-glass-card-flare pointer-events-none absolute inset-0" />
                                    <div aria-hidden="true" className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px" />
                                    <div className="relative z-10 p-2.5 rounded-xl text-sky-300 shrink-0 mt-0.5 bg-sky-400/12 border border-sky-300/25 shadow-[inset_0_1px_0_rgba(224,242,254,0.28)]">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-[11px] font-black uppercase tracking-wider text-white mb-0.5">
                                            Head Office &amp; Depot
                                        </div>
                                        <p className="text-sm text-slate-300 leading-normal">
                                            6 Van Eck St, Bellville South
                                            <br />
                                            Cape Town, Western Cape, 7530
                                        </p>
                                    </div>
                                </SpotlightCard>
                            </li>
                            <li>
                                <SpotlightCard
                                    theme="dark"
                                    spotlightColor="#38bdf8"
                                    intensity={0.22}
                                    spotlightSize={180}
                                    softness={0.7}
                                    shape="circle"
                                    borderGlow={0.85}
                                    proximity={160}
                                    smoothing={0.5}
                                    grain={0}
                                    ambient={false}
                                    flare
                                    className="footer-glass-card relative overflow-hidden rounded-2xl! p-4! flex items-center gap-3.5"
                                    style={{
                                        '--spotlight-card-surface': 'transparent',
                                        '--spotlight-card-border': 'rgba(56, 189, 248, 0.28)',
                                        '--spotlight-card-shadow': 'none',
                                    } as CSSProperties}
                                >
                                    <div aria-hidden="true" className="footer-glass-card-flare pointer-events-none absolute inset-0" />
                                    <div aria-hidden="true" className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px" />
                                    <div className="relative z-10 p-2.5 rounded-xl text-sky-300 shrink-0 bg-sky-400/12 border border-sky-300/25 shadow-[inset_0_1px_0_rgba(224,242,254,0.28)]">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-[11px] font-black uppercase tracking-wider text-white mb-0.5">
                                            24/7 Dispatch Hotline
                                        </div>
                                        <a
                                            href="tel:0861888004"
                                            className="cursor-pointer text-base font-bold text-white hover:text-sky-300 transition-colors"
                                        >
                                            086 188 8004
                                        </a>
                                    </div>
                                </SpotlightCard>
                            </li>
                            <li>
                                <SpotlightCard
                                    theme="dark"
                                    spotlightColor="#38bdf8"
                                    intensity={0.22}
                                    spotlightSize={180}
                                    softness={0.7}
                                    shape="circle"
                                    borderGlow={0.85}
                                    proximity={160}
                                    smoothing={0.5}
                                    grain={0}
                                    ambient={false}
                                    flare
                                    className="footer-glass-card relative overflow-hidden rounded-2xl! p-4! flex items-center gap-3.5"
                                    style={{
                                        '--spotlight-card-surface': 'transparent',
                                        '--spotlight-card-border': 'rgba(56, 189, 248, 0.28)',
                                        '--spotlight-card-shadow': 'none',
                                    } as CSSProperties}
                                >
                                    <div aria-hidden="true" className="footer-glass-card-flare pointer-events-none absolute inset-0" />
                                    <div aria-hidden="true" className="nav-logo-plinth-edge pointer-events-none absolute inset-y-0 right-0 w-px" />
                                    <div className="relative z-10 p-2.5 rounded-xl text-sky-300 shrink-0 bg-sky-400/12 border border-sky-300/25 shadow-[inset_0_1px_0_rgba(224,242,254,0.28)]">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div className="relative z-10 min-w-0">
                                        <div className="text-[11px] font-black uppercase tracking-wider text-white mb-0.5">
                                            Electronic Mail
                                        </div>
                                        <a
                                            href="mailto:enquiries@teemanehh.co.za"
                                            className="cursor-pointer text-sm font-semibold text-white hover:text-sky-300 transition-colors break-all"
                                        >
                                            enquiries@teemanehh.co.za
                                        </a>
                                    </div>
                                </SpotlightCard>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom-glass relative rounded-2xl px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300/90">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 inset-x-4 h-px bg-linear-to-r from-transparent via-sky-300/40 to-transparent"
                    />
                    <p>&copy; {new Date().getFullYear()} Teemane Heavy Haulage. All rights reserved.</p>
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                        <Link href="/privacy-policy" className="cursor-pointer hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="cursor-pointer hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <span className="text-slate-600 hidden sm:inline" aria-hidden="true">|</span>
                        <span>
                            Built by{' '}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-pointer text-sky-400 hover:text-sky-300 hover:underline"
                                href="https://designbycode.co.za"
                            >
                                designbycode
                            </a>
                        </span>
                    </div>
                </div>
            </Wrapper>
        </footer>
    );
}
