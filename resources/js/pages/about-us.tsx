import AppLayout from '@/layouts/app-layout';
import PageHeader from '@/components/ui/misc/page-header';

import AboutManifesto from '@/components/sections/about-manifesto';
import AboutCapabilities from '@/components/sections/about-capabilities';

// @ts-ignore
import imgHeavy1 from '@/../images/554094071_767416502945188_8952982047091955044_n.webp';
import Divider1 from "@/components/ui/divider-1";
import ScrollDivider from "@/components/scroll-divider";

export default function AboutUs() {
    return (
        <>
            {/* Hero Section */}
            <PageHeader
                className={`border-transparent`}
                title={<>Redefining What's Possible In <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 drop-shadow-sm pr-1 pb-1">Heavy Haulage</span></>}
                description="Established in 2012, Teemane Heavy Haulage prides itself on countless victories across South Africa's most demanding transport routes, delivering complex, oversized machinery with absolute precision."
                image={imgHeavy1}
            />
            <ScrollDivider texts={[`Redefining What's Possible In Heavy Haulage`, `Redefining What's Possible In Heavy Haulage`]} />
            <AboutManifesto />
            <Divider1/>
            <AboutCapabilities />
            <Divider1/>
        </>
    );
}

AboutUs.layout = (page: React.ReactNode) => <AppLayout title="About Us">{page}</AppLayout>;
