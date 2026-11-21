import AppLayout from "@/layouts/app-layout";
import Hero from "@/components/hero";
import {Head} from "@inertiajs/react";
import {HomeIntroSection} from "@/components/sections/home-intro-section";
import {HomeServicesSection} from "@/components/sections/home-services-section";
import {HomeSafetySection} from "@/components/sections/home-safety-section";
import DarkCta from "@/components/sections/dark-cta";
import ScrollDivider from "@/components/scroll-divider";
import {Building2, CalendarClock, ClipboardCheck, Clock, Compass, HardHat, ShieldCheck, Truck} from "lucide-react";
import Divider3 from "@/components/ui/divider-3";
import Globe from "@/components/globe";
import {Service} from "@/components/service-card";
import IconSpacer from "@/components/sections/icon-spacer";

export default function Home({ services }: { services: Service[] }) {
    return (
        <div className="bg-background selection:bg-primary selection:text-white">
            <Head>
                <title>Heavy Haulage &amp; Machinery Transport</title>
                <meta
                    name="description"
                    content="Teemane Heavy Haulage provides tailored transportation for oversized cargo, heavy equipment and industrial machinery across South Africa."
                />
            </Head>

            <Hero />

            <ScrollDivider

                className={`border-y-2  border-primary`}
                texts={[
                    <>
                        <span className="flex justify-center items-center gap-3 uppercase font-heading">
                            <Building2 className="size-6 sm:size-18 text-sky-400 shrink-0 mr-3" strokeWidth={2.25} />
                            <span className={`inline-block`}>Bellville South Headquarters</span>
                        </span>
                        <span className="mx-3 inline-flex items-center text-sky-400/60">•</span>
                        <span className="flex justify-center items-center gap-3 uppercase font-heading">
                            <Truck className="size-6 sm:size-18 text-sky-400 shrink-0 mr-3" strokeWidth={2.25} />
                            <span className={`inline-block`}>Modern Multi-Axle Fleet</span>
                        </span>
                        <span className="mx-3 inline-flex items-center text-sky-400/60">•</span>
                        <span className="flex justify-center items-center gap-3 uppercase font-heading">
                            <Compass className="size-6 sm:size-18 text-sky-400 shrink-0 mr-3" strokeWidth={2.25} />
                            <span className={`inline-block`}>Detailed Pre-Load Site Evaluations</span>
                        </span>
                        <span className="mx-3 inline-flex items-center text-sky-400/60">•</span>
                        <span className="flex justify-center items-center gap-3 uppercase font-heading">
                            <ShieldCheck className="size-6 sm:size-18 text-sky-400 shrink-0 mr-3" strokeWidth={2.25} />
                            <span className={`inline-block`}>Comprehensive Liability &amp; Equipment Cover</span>
                        </span>
                    </>,
                    <>
                        <span className="flex justify-center items-center gap-3 uppercase font-heading">
                            <HardHat className="size-6 sm:size-18 text-sky-400 shrink-0 mr-3" strokeWidth={2.25} />
                            <span className={`inline-block`}>Dedicated On-Site Load Supervisors</span>
                        </span>
                        <span className="mx-3 inline-flex items-center text-sky-400/60">•</span>
                        <span className="flex justify-center items-center gap-3 uppercase font-heading">
                            <ClipboardCheck className="size-6 sm:size-18 text-sky-400 shrink-0 mr-3" strokeWidth={2.25} />
                            <span className={`inline-block`}>Audit-Ready Contractor Documentation</span>
                        </span>
                        <span className="mx-3 inline-flex items-center text-sky-400/60">•</span>
                        <span className="flex justify-center items-center gap-3 uppercase font-heading">
                            <CalendarClock className="size-6 sm:size-18 text-sky-400 shrink-0 mr-3" strokeWidth={2.25} />
                            <span className={`inline-block`}>Flexible Short- &amp; Long-Term Packages</span>
                        </span>
                        <span className="mx-3 inline-flex items-center text-sky-400/60">•</span>
                        <span className="flex justify-center items-center gap-3 uppercase font-heading">
                            <Clock className="size-6 sm:size-18 text-sky-400 shrink-0 mr-3" strokeWidth={2.25} />
                            <span className={`inline-block`}>Western Cape &amp; Nationwide Dispatch</span>
                        </span>
                    </>,
                ]}
            />

            <HomeIntroSection />
            <IconSpacer/>
            <HomeServicesSection services={services} />
            <Divider3 />
            <HomeSafetySection />
            <Globe />
            <DarkCta />
        </div>
    );
}

Home.displayName = "Home";
Home.layout = AppLayout;
