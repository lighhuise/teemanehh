import { PhoneCall, AlertTriangle } from 'lucide-react';
import Wrapper from './ui/misc/wrapper';
import LogoMark from '@/components/ui/misc/logo-mark';

export default function EmergencyCta() {
    return (
        <section className="py-16 sm:py-24 relative overflow-hidden  isolate border-y border-border">
            <div aria-hidden="true" className="absolute top-30 left-0 pointer-events-none opacity-10 md:opacity-[0.1] -translate-x-1/2  mix-blend-luminosity">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-180 h-180 rounded-full blur-[80px] bg-primary/50  pointer-events-none" />
                <LogoMark className="w-64 md:w-96 h-auto" />

            </div>

            <Wrapper>
                <div className="relative overflow-hidden rounded-3xl bg-card text-card-foreground shadow-xl border border-border">
                    {/* The Logo Watermark - Scaled down and positioned top-right inside the card */}
                    <div aria-hidden="true" className="absolute top-0 right-0 pointer-events-none opacity-10 md:opacity-[0.1] translate-x-1/2  mix-blend-luminosity">
                        <LogoMark className="w-80 md:w-110 h-auto" />
                    </div>

                    {/* Abstract decorative background glows using theme colors */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/20 blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/20 blur-[80px] pointer-events-none" />

                    <div className="relative z-10 px-6 py-16 sm:px-16 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">

                        <div className="flex-1 space-y-6 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full text-foreground shadow-sm">
                                <AlertTriangle className="w-5 h-5 text-primary" />
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">24/7 Rapid Response</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter text-foreground leading-[1.1]">
                                Emergencies Don't Wait For <br className="hidden lg:block"/>
                                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1 pb-1">Business Hours.</span>
                            </h2>

                            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                Unexpected equipment failures and critical incidents demand immediate action. Our specialised rapid-response teams are on standby 24/7 to provide urgent heavy haulage and transport solutions, minimizing your downtime.
                            </p>
                        </div>

                        <div className="shrink-0 w-full lg:w-auto">
                            <a href="tel:0861888004" className="group overflow-clip isolate relative flex items-center justify-center gap-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-8 py-6 rounded-xl w-full lg:w-auto shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <div className="bg-background/20 p-4 rounded-full group-hover:scale-110 transition-transform duration-500">
                                    <PhoneCall className="w-7 h-7 text-primary-foreground" />
                                </div>
                                <div className="text-left">
                                    <span className="block text-xs font-black uppercase tracking-[0.2em] text-primary-foreground/80 mb-1">Direct Line</span>
                                    <span className="block text-2xl md:text-4xl font-heading font-black uppercase tracking-tighter text-primary-foreground">086 188 8004</span>
                                </div>
                                <div aria-hidden={`true`} className="absolute inset-0 -z-10 opacity-10 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#000_4px,#000_8px)]"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
