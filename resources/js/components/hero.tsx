import CutoutBox from "@/components/ui/misc/cutout-box";
import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";
// @ts-ignore
import heroBgImage from "@/../images/heavy-haulage-02.webp";

export default function Hero() {
    return (

            <CutoutBox
                position="bottom"
                className="px-4 sm:px-6 pt-0 pb-8 relative grid place-content-center z-0 drop-shadow-lg drop-shadow-black/30 min-h-screen"
            >
                {/* Background Image inside the Cutout mask */}
                <div className="absolute inset-0 bg-background">
                    <img
                        src={heroBgImage}
                        alt="Teemane Heavy Haulage"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-primary/30 to-transparent" />
                </div>

                {/* Content - Drastically reduced Y-padding here to make it much shorter */}
                <div className="relative z-10 px-6 sm:px-12 py-10 sm:py-16 max-w-4xl mx-auto text-center space-y-6">
                    <div className="space-y-4 drop-shadow-lg drop-shadow-primary/30">
                        <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
                            Heavy Haulage. <br/>
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500">Precisely Planned.</span> <br/>
                            Reliably Delivered.
                        </h1>
                        <p className="text-base sm:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                            Specialised transportation solutions for machinery, oversized equipment and some of the most demanding abnormal loads.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center text-sm justify-center gap-4 pt-2">
                        <Link
                            href="/contact-us"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-widest uppercase px-6 py-3 rounded-lg shadow-sm transition-all"
                        >
                            Plan Your Transport
                        </Link>
                        <Link
                            href="/services"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-background/70 hover:bg-background border-2 border-primary/20 hover:border-primary text-foreground font-bold tracking-widest uppercase px-6 py-3 rounded-lg backdrop-blur-sm transition-all"
                        >
                            Explore Our Services
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </CutoutBox>

    );
}
