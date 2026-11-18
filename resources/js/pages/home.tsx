import AppLayout from "@/layouts/app-layout";
import Hero from "@/components/hero";
import {Head} from "@inertiajs/react";
import {HomeIntroSection} from "@/components/sections/home-intro-section";
import {HomeServicesSection} from "@/components/sections/home-services-section";
import {HomeSafetySection} from "@/components/sections/home-safety-section";
import DarkCta from "@/components/sections/dark-cta";
import Divider1 from "@/components/ui/divider-1";

// @ts-ignore
import volvoBlueprintImageLeft from '@/../images/isolate-truck-trailer-load-left.webp';
// @ts-ignore
import volvoBlueprintImage from '@/../images/isolate-truck-trailer-load.webp';
import {Building2, CalendarClock, ClipboardCheck, Clock, Compass, HardHat, ShieldCheck, Truck} from "lucide-react";
import ScrollDivider from "@/components/scroll-divider";

export default function Home({ services }: { services: any[] }) {
    return (
        <div className="bg-background selection:bg-primary selection:text-white">
            <Head>
                <title>Heavy Haulage & Machinery Transport</title>
                <meta name="description" content="Teemane Heavy Haulage provides tailored transportation for oversized cargo, heavy equipment and industrial machinery across South Africa." />
            </Head>

            <Hero />
            <ScrollDivider
                texts={[
                    <>
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Building2 className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Bellville South Headquarters</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Truck className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Modern Multi-Axle Fleet</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Compass className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Detailed Pre-Load Site Evaluations</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <ShieldCheck className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Comprehensive Liability &amp; Equipment Cover</span>
                        </span>
                    </>,
                    <>
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <HardHat className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Dedicated On-Site Load Supervisors</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <ClipboardCheck className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Audit-Ready Contractor Documentation</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <CalendarClock className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Flexible Short- &amp; Long-Term Packages</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Clock className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Western Cape &amp; Nationwide Dispatch</span>
                        </span>
                    </>
                ]}
            />
            <HomeIntroSection />
            <HomeServicesSection services={services} />
            <Divider1 leftImage={volvoBlueprintImageLeft} rightImage={volvoBlueprintImage} />
            <HomeSafetySection />
            <Divider1 />
            <DarkCta />
        </div>
    );
}

Home.displayName = "Home";
Home.layout = AppLayout;
