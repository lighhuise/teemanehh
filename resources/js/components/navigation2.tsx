import {Link, usePage} from '@inertiajs/react';
import {ArrowRight, Menu, PhoneCall} from 'lucide-react';
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import Logo from '@/components/ui/misc/logo';
import {ModeToggle} from '@/components/mode-toggle';
import {buttonVariants} from '@/components/ui/button';
import {home} from '@/routes';

const navLinks = [
    { name: 'Home', href: home.url() },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about-us' },
    { name: 'FAQ', href: '/faq' },
];

export default function Navigation2() {
    const { url } = usePage();

    const isActive = (href: string) =>
        href === '/' ? url === '/' : url.startsWith(href);

    const navContent = (
        <nav aria-label="Main navigation" className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
                {/* Brand Plinth */}
                <Link
                    href="/"
                    prefetch="hover"
                    className="cursor-pointer flex isolate items-center gap-2 group relative shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
                >
                    <div className="nav-logo-plinth absolute h-20 sm:h-24 w-70 sm:w-115 lg:w-170 -z-5 -right-3 sm:-right-4 rounded-br-2xl sm:rounded-br-3xl -skew-x-18 overflow-hidden pointer-events-none">
                        <div aria-hidden="true" className="nav-logo-plinth-flare absolute inset-0" />
                        <div aria-hidden="true" className="nav-logo-plinth-dots absolute inset-0" />
                        <div aria-hidden="true" className="nav-logo-plinth-edge absolute inset-y-0 right-0 w-px" />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-2.5 md:-translate-x-2">
                        <span className="font-heading text-3xl sm:text-5xl lg:text-[3.25rem] leading-none text-white -skew-x-18 tracking-tight font-black">
                            THH
                        </span>
                        <span className="-skew-x-18 w-1.5 sm:w-2 h-8 sm:h-11 bg-primary shrink-0" />
                        <span className="text-[11px] sm:text-sm text-white/95 -skew-x-18 font-semibold leading-tight tracking-wide">
                            Teemane <br />
                            <span className="whitespace-nowrap text-sky-300 font-bold">Heavy Haulage</span>
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-7">
                    {navLinks.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                prefetch="hover"
                                className={`cursor-pointer text-xs font-bold tracking-[0.18em] whitespace-nowrap uppercase transition-colors duration-200 px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm ${
                                    active
                                        ? 'nav-link-active'
                                        : 'text-slate-200 hover:text-white'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    {/* Contact Us CTA */}
                    <Link
                        href="/contact-us"
                        prefetch="hover"
                        className="cursor-pointer group inline-flex items-center gap-2 text-xs font-black whitespace-nowrap tracking-[0.16em] uppercase bg-linear-to-r from-primary to-sky-600 hover:from-sky-600 hover:to-primary text-white transition-all duration-200 shadow-md shadow-primary/25 hover:shadow-lg px-5 py-2.5 -skew-x-18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                        <span className="skew-x-18 inline-flex items-center gap-2">
                            Request a Quote
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                        </span>
                    </Link>

                    <div className="pl-4 border-l-2 border-primary/80 -skew-x-18">
                        <div className="skew-x-18">
                            <ModeToggle className="text-slate-200 hover:text-white hover:bg-white/10" />
                        </div>
                    </div>
                </div>

                {/* Mobile / Tablet Navigation */}
                <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
                    <ModeToggle className="text-slate-200 hover:text-white hover:bg-white/10" />
                    <Sheet>
                        <SheetTrigger
                            className="cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[82vw] max-w-sm bg-background border-l border-border flex flex-col p-0">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                            {/* Sheet Header with Logo */}
                            <div className="flex items-center gap-3 px-6 py-5 border-b border-border bg-muted/30">
                                <Logo className="h-9 w-auto" aria-label="Teemane Heavy Haulage Logo" />
                            </div>

                            {/* Links */}
                            <nav aria-label="Mobile navigation" className="flex flex-col px-4 py-6 gap-1.5">
                                {navLinks.map((link) => {
                                    const active = isActive(link.href);
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            prefetch="hover"
                                            className={`cursor-pointer flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs font-black tracking-[0.18em] uppercase transition-colors duration-200 ${
                                                active
                                                    ? 'text-primary bg-primary/10 border border-primary/20'
                                                    : 'text-foreground hover:text-primary hover:bg-muted'
                                            }`}
                                        >
                                            {active && <span className="w-1.5 h-4 rounded-full bg-primary shrink-0" />}
                                            {link.name}
                                        </Link>
                                    );
                                })}

                                {/* Contact Us CTA - Mobile */}
                                <Link
                                    href="/contact-us"
                                    prefetch="hover"
                                    className={buttonVariants({ size: 'lg', className: 'mt-4 w-full justify-between' })}
                                >
                                    <span>Request a Quote</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </nav>

                            <div className="mt-auto px-6 pb-8 space-y-4">
                                <div className="h-px w-full bg-border" />
                                <a
                                    href="tel:0861888004"
                                    className="cursor-pointer flex items-center gap-3 p-3.5 rounded-xl bg-muted/70 border border-border hover:border-primary/40 transition-colors"
                                >
                                    <div className="size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                        <PhoneCall className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                                            24/7 Dispatch Hotline
                                        </span>
                                        <span className="block text-sm font-black text-foreground">086 188 8004</span>
                                    </div>
                                </a>
                                <div>
                                    <p className="text-[11px] font-black tracking-[0.2em] text-primary uppercase">
                                        TEEMANE HEAVY HAULAGE
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-0.5">Moving the Impossible Since 2012</p>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );

    return (
        <header className="nav-canopy-surface fixed top-0 inset-x-0 z-50 w-full transition-colors duration-300 backdrop-blur-md">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="nav-canopy-glow absolute inset-0" />
                <div className="nav-canopy-dots absolute inset-0" />
                <div className="nav-canopy-hazard absolute inset-x-0 top-0 h-1.5" />
                <div className="nav-canopy-top-line absolute inset-x-0 top-0 h-px" />
                <div className="nav-canopy-bottom-line absolute inset-x-0 bottom-0 h-px" />
            </div>
            {navContent}
        </header>
    );
}
