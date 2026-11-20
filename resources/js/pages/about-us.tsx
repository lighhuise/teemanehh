import AppLayout from '@/layouts/app-layout';
import PageHeader from '@/components/ui/misc/page-header';

import AboutManifesto from '@/components/sections/about-manifesto';
import AboutCapabilities from '@/components/sections/about-capabilities';

import { responsiveImages } from '@/lib/responsive-images';
import Divider1 from "@/components/ui/divider-1";
import ScrollDivider from "@/components/scroll-divider";

export default function AboutUs() {
    return (
        <>
            {/* Hero Section */}
            <PageHeader
                label="About Teemane"
                className="border-transparent"
                title={
                    <>
                        Redefining What&apos;s Possible In{' '}
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-sky-500 pr-1">
                            Heavy Haulage
                        </span>
                    </>
                }
                description="Established in 2012, Teemane Heavy Haulage prides itself on countless victories across South Africa's most demanding transport routes, delivering complex, oversized machinery with absolute precision."
                image={responsiveImages.aboutHeader}
                imageAlt="Teemane Heavy Haulage Volvo FH16 transporting an industrial power transformer"
                imageClassName="object-[46%_55%]"
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
