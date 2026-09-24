import CutoutBox from "@/components/ui/misc/cutout-box";
import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";
// @ts-ignore
import heroBgImage from "@/../images/trucks-loaded.webp";

export default function Hero() {
    return (
        <div className=" px-4 sm:px-6 pt-28 pb-14 -mt-26 relative z-0 drop-shadow-lg drop-shadow-black/30" >
            <CutoutBox
                asWrapper
                position="bottom"
                className="w-full rounded-3xl relative overflow-hidden flex flex-col justify-center"
            >
                {/* Background Image inside the Cutout mask */}
                <div className="absolute inset-0 bg-background">
                    <img
                        src={heroBgImage}
                        alt="Teemane Heavy Haulage"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 sm:px-12 py-16 sm:py-24 max-w-4xl mx-auto text-center space-y-8">
                    <div className="space-y-4 drop-shadow-lg drop-shadow-black/30">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                            Heavy Haulage. <br/>
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-cyan-600 ">Precisely Planned.</span> <br/>
                            Reliably Delivered.
                        </h1>
                        <p className="text-lg sm:text-xl text-white font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                            Specialised transportation solutions for machinery, oversized equipment and some of the most demanding abnormal loads.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center text-sm justify-center gap-4 pt-4">
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
        </div>
    );
}
