import AppLayout from "@/layouts/app-layout";
import Hero from "@/components/hero";
import { Head } from "@inertiajs/react";
import { HomeIntroSection } from "@/components/sections/home-intro-section";
import { HomeServicesSection } from "@/components/sections/home-services-section";
import { HomeSafetySection } from "@/components/sections/home-safety-section";
import DarkCta from "@/components/sections/dark-cta";
import Divider1 from "@/components/ui/divider-1";

// @ts-ignore
import volvoBlueprintImageLeft from '@/../images/isolate-truck-trailer-load-left.webp';
// @ts-ignore
import volvoBlueprintImage from '@/../images/isolate-truck-trailer-load.webp';
export default function Home({ services }: { services: any[] }) {
    return (
        <div className="bg-background selection:bg-primary selection:text-white">
            <Head>
                <title>Heavy Haulage & Machinery Transport</title>
                <meta name="description" content="Teemane Heavy Haulage provides tailored transportation for oversized cargo, heavy equipment and industrial machinery across South Africa." />
            </Head>

            <Hero />
            <HomeIntroSection />
            <HomeServicesSection services={services} />
            <Divider1 leftImage={volvoBlueprintImageLeft} rightImage={volvoBlueprintImage} />
            <HomeSafetySection />
            <Divider1 rightImage={volvoBlueprintImage}/>
            <DarkCta />
        </div>
    );
}

Home.displayName = "Home";
Home.layout = AppLayout;
