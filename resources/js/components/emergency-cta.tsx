import { PhoneCall, AlertTriangle } from 'lucide-react';
import Wrapper from './ui/misc/wrapper';

export default function EmergencyCta() {
    return (
        <section className="py-16 sm:py-24 relative overflow-hidden bg-background">
            <Wrapper>
                <div className="relative overflow-hidden rounded-[2rem] bg-card text-card-foreground shadow-xl border border-border">
                    {/* Abstract decorative background glows using theme colors */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
                    
                    <div className="relative z-10 px-6 py-16 sm:px-16 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
                        
                        <div className="flex-1 space-y-6 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full text-foreground shadow-sm">
                                <AlertTriangle className="w-5 h-5 text-primary" />
                                <span className="font-semibold tracking-wide text-sm uppercase">24/7 Rapid Response</span>
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15]">
                                Emergencies Don't Wait For <span className="text-primary">Business Hours.</span>
                            </h2>
                            
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Unexpected equipment failures and critical incidents demand immediate action. Our specialised rapid-response teams are on standby 24/7 to provide urgent heavy haulage and transport solutions, minimizing your downtime.
                            </p>
                        </div>

                        <div className="shrink-0 w-full lg:w-auto">
                            <a href="tel:0842637690" className="group flex items-center justify-center gap-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-8 py-6 rounded-2xl w-full lg:w-auto shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <div className="bg-background/20 p-4 rounded-full group-hover:scale-110 transition-transform duration-500">
                                    <PhoneCall className="w-7 h-7 text-primary-foreground" />
                                </div>
                                <div className="text-left">
                                    <span className="block text-xs font-bold uppercase tracking-widest text-primary-foreground/80 mb-1">Emergency Hotline</span>
                                    <span className="block text-2xl md:text-3xl font-black tracking-tight text-primary-foreground">084 263 7690</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
