import {Link, usePage} from '@inertiajs/react';
import {Menu} from 'lucide-react';
import {Sheet, SheetContent, SheetTitle, SheetTrigger,} from '@/components/ui/sheet';
import Logo from '@/components/ui/misc/logo';
import {ModeToggle} from '@/components/mode-toggle';
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

  return (
    <>

      {/* Navigation - Sticky */}
      <nav className="fixed top-0  z-50 w-full transition-all duration-300 bg-linear-to-b from-[#000d1e] to-[#001027]">
          <div className={`absolute h-1 w-full bg-linear-to-r from-primary/20 blur-sm from-30% via-primary to-transparent bottom-0 inset-x-0`}></div>
          <div className={`absolute h-px w-full bg-linear-to-r from-transparent  from-40% via-primary to-transparent bottom-0 inset-x-0`}></div>
        <div className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6">
            {/* Logo */}
            <Link href="/" prefetch="hover" className="flex isolate items-center gap-2 group relative">
              {/*<Logo className="h-9 sm:h-11 z-0 w-auto relative transition-transform duration-300 group-hover:scale-105" aria-label="Teemane Heavy Haulage Logo" />*/}
                <div className={`absolute h-28 w-300 -z-5 -right-20 bg-linear-to-b border-ee-emerald-300 from-[#00102a] backdrop-blur-xs to-[#012148]/80 rounded-br-3xl -skew-x-18`}></div>
                <div className={`flex space-x-2 items-center`}>
                    <div className={`text-6xl text-white -skew-x-18 tracking-tight font-black`}>THH</div>
                    <div className={`-skew-x-18 w-2 h-11 bg-[#0064be]`}></div>
                    <div className={`text-white -skew-x-18 font-semibold`}>
                        Teemane <br/>
                        Heavy Haulage
                    </div>
                </div>
            </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch="hover"
                  className={`text-sm text-white font-bold tracking-widest uppercase transition-colors px-2 py-1  ${
                    active
                      ? 'text-primary border-b-[#0064be]'
                      : 'hover:text-primary'
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
              className="text-sm font-bold tracking-widest uppercase inline-flex items-center gap-2 bg-[#0064be] hover:from-primary/90 hover:to-primary text-primary-foreground transition-all shadow-sm hover:shadow px-5 py-2.5 -skew-x-18"
            >
              Request a Quote
            </Link>

            <div className="pl-4 border-l-4 border-[#0064be] -skew-x-18">
                <div className={`skew-x-18`}>
                    <ModeToggle />
                </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <Sheet>
              <SheetTrigger
                className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-87.5 bg-background border-l border-border flex flex-col p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                {/* Sheet Header with Logo */}
                <div className="flex items-center gap-3 px-6 py-5 border-b border-border">
                  <Logo className="h-9 w-auto" aria-label="Teemane Heavy Haulage Logo" />
                </div>

                {/* Links */}
                <nav className="flex flex-col px-4 py-6 gap-1">
                  {navLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        prefetch="hover"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold tracking-widest uppercase transition-all duration-200 ${
                          active
                            ? 'text-primary bg-primary/10'
                            : 'text-foreground hover:text-primary hover:bg-accent'
                        }`}
                      >
                        {active && <span className="w-1 h-4 rounded-full bg-primary shrink-0" />}
                        {link.name}
                      </Link>
                    );
                  })}

                  {/* Contact Us CTA - Mobile */}
                  <Link
                    href="/contact-us"
                    prefetch="hover"
                    className="mt-3 flex items-center justify-start gap-2 px-4 py-3 rounded-xl text-sm font-bold tracking-widest uppercase bg-linear-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all shadow-sm hover:shadow"
                  >
                      Request a Quote
                  </Link>
                </nav>

                <div className="mt-auto px-6 pb-8 space-y-2">
                  <div className="h-px w-full bg-border mb-4"></div>
                  <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">TEEMANE HEAVY HAULAGE</p>
                  <p className="text-sm text-muted-foreground">A Cut Above The Rest</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      </nav>
    </>
  );
}
