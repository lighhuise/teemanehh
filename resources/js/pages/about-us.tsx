import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import PageHeader from '@/components/ui/misc/page-header';

import AboutManifesto from '@/components/sections/about-manifesto';
import AboutCapabilities from '@/components/sections/about-capabilities';

// @ts-ignore
import imgHeavy1 from '@/../images/lineup.webp';

export default function AboutUs() {
    return (
        <>
            {/* Hero Section */}
            <PageHeader

                title={<>Redefining What's Possible In <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 drop-shadow-sm pr-1 pb-1">Heavy Haulage</span></>}
                description="Established in 2012, Teemane Heavy Haulage prides itself on countless victories across South Africa's most demanding transport routes, delivering complex, oversized machinery with absolute precision."
                image={imgHeavy1}
            />

            <AboutManifesto />
            <AboutCapabilities />
        </>
    );
}

AboutUs.layout = (page: React.ReactNode) => <AppLayout title="About Us">{page}</AppLayout>;
