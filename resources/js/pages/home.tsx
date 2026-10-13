import AppLayout from "@/layouts/app-layout";
import Hero from "@/components/hero";
import { Head } from "@inertiajs/react";
import { HomeIntroSection } from "@/components/sections/home-intro-section";
import { HomeServicesSection } from "@/components/sections/home-services-section";
import { HomeSafetySection } from "@/components/sections/home-safety-section";
import DarkCta from "@/components/sections/dark-cta";

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
            <HomeSafetySection />
            <DarkCta />
        </div>
    );
}

Home.displayName = "Home";
Home.layout = AppLayout;
