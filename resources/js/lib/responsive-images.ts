// @ts-ignore
import heavyHaulage01Orig from '@/../images/heavy-haulage-01.webp';
// @ts-ignore
import heavyHaulage01_480 from '@/../images/responsive/heavy-haulage-01-480w.webp';
// @ts-ignore
import heavyHaulage01_768 from '@/../images/responsive/heavy-haulage-01-768w.webp';
// @ts-ignore
import heavyHaulage01_1024 from '@/../images/responsive/heavy-haulage-01-1024w.webp';

// @ts-ignore
import heavyHaulage02Orig from '@/../images/heavy-haulage-02.webp';
// @ts-ignore
import heavyHaulage02_480 from '@/../images/responsive/heavy-haulage-02-480w.webp';
// @ts-ignore
import heavyHaulage02_768 from '@/../images/responsive/heavy-haulage-02-768w.webp';
// @ts-ignore
import heavyHaulage02_1024 from '@/../images/responsive/heavy-haulage-02-1024w.webp';

// @ts-ignore
import heavyHaulage03Orig from '@/../images/heavy-haulage-03.webp';
// @ts-ignore
import heavyHaulage03_480 from '@/../images/responsive/heavy-haulage-03-480w.webp';
// @ts-ignore
import heavyHaulage03_768 from '@/../images/responsive/heavy-haulage-03-768w.webp';
// @ts-ignore
import heavyHaulage03_1024 from '@/../images/responsive/heavy-haulage-03-1024w.webp';

// @ts-ignore
import lineupOrig from '@/../images/lineup.webp';
// @ts-ignore
import lineup_480 from '@/../images/responsive/lineup-480w.webp';
// @ts-ignore
import lineup_768 from '@/../images/responsive/lineup-768w.webp';
// @ts-ignore
import lineup_1024 from '@/../images/responsive/lineup-1024w.webp';

// @ts-ignore
import aboutHeaderOrig from '@/../images/554094071_767416502945188_8952982047091955044_n.webp';
// @ts-ignore
import aboutHeader_480 from '@/../images/responsive/about-header-480w.webp';
// @ts-ignore
import aboutHeader_768 from '@/../images/responsive/about-header-768w.webp';
// @ts-ignore
import aboutHeader_1024 from '@/../images/responsive/about-header-1024w.webp';

// @ts-ignore
import servicesHeaderOrig from '@/../images/480681841_599071983112975_7334336084460441989_n.webp';
// @ts-ignore
import servicesHeader_480 from '@/../images/responsive/services-header-480w.webp';
// @ts-ignore
import servicesHeader_768 from '@/../images/responsive/services-header-768w.webp';
// @ts-ignore
import servicesHeader_1024 from '@/../images/responsive/services-header-1024w.webp';

// @ts-ignore
import contactHeaderOrig from '@/../images/469880431_546677775019063_8311794249468884922_n.webp';
// @ts-ignore
import contactHeader_480 from '@/../images/responsive/contact-header-480w.webp';
// @ts-ignore
import contactHeader_768 from '@/../images/responsive/contact-header-768w.webp';
// @ts-ignore
import contactHeader_1024 from '@/../images/responsive/contact-header-1024w.webp';

// @ts-ignore
import faqHeaderOrig from '@/../images/576907135_805628229124015_6667111443022305155_n.webp';
// @ts-ignore
import faqHeader_480 from '@/../images/responsive/faq-header-480w.webp';
// @ts-ignore
import faqHeader_768 from '@/../images/responsive/faq-header-768w.webp';
// @ts-ignore
import faqHeader_1024 from '@/../images/responsive/faq-header-1024w.webp';

// @ts-ignore
import volvoBlueprintRightOrig from '@/../images/Abnormal Volvo FH16 Empty Low-Loader Blueprint.webp';
// @ts-ignore
import volvoBlueprintRight_480 from '@/../images/responsive/volvo-blueprint-right-480w.webp';
// @ts-ignore
import volvoBlueprintRight_768 from '@/../images/responsive/volvo-blueprint-right-768w.webp';

// @ts-ignore
import volvoBlueprintLeftOrig from '@/../images/Inverted Volvo FH16 Haulage Blueprint.webp';
// @ts-ignore
import volvoBlueprintLeft_480 from '@/../images/responsive/volvo-blueprint-left-480w.webp';
// @ts-ignore
import volvoBlueprintLeft_768 from '@/../images/responsive/volvo-blueprint-left-768w.webp';

// @ts-ignore
import spaceNebulaBgOrig from '@/../images/space-nebula-bg.webp';
// @ts-ignore
import spaceNebulaBg_480 from '@/../images/responsive/space-nebula-bg-480w.webp';
// @ts-ignore
import spaceNebulaBg_768 from '@/../images/responsive/space-nebula-bg-768w.webp';

export interface ResponsiveImageAsset {
    src: string;
    srcSet: string;
    width: number;
    height: number;
}

export type ImageSource = string | ResponsiveImageAsset;

function buildSrcSet(entries: Array<[string, number]>): string {
    return entries.map(([url, width]) => `${url} ${width}w`).join(', ');
}

export const responsiveImages = {
    heavyHaulage01: {
        src: heavyHaulage01Orig,
        srcSet: buildSrcSet([
            [heavyHaulage01_480, 480],
            [heavyHaulage01_768, 768],
            [heavyHaulage01_1024, 1024],
            [heavyHaulage01Orig, 1400],
        ]),
        width: 1400,
        height: 934,
    },
    heavyHaulage02: {
        src: heavyHaulage02Orig,
        srcSet: buildSrcSet([
            [heavyHaulage02_480, 480],
            [heavyHaulage02_768, 768],
            [heavyHaulage02_1024, 1024],
            [heavyHaulage02Orig, 1400],
        ]),
        width: 1400,
        height: 934,
    },
    heavyHaulage03: {
        src: heavyHaulage03Orig,
        srcSet: buildSrcSet([
            [heavyHaulage03_480, 480],
            [heavyHaulage03_768, 768],
            [heavyHaulage03_1024, 1024],
            [heavyHaulage03Orig, 1400],
        ]),
        width: 1400,
        height: 934,
    },
    lineup: {
        src: lineupOrig,
        srcSet: buildSrcSet([
            [lineup_480, 480],
            [lineup_768, 768],
            [lineup_1024, 1024],
            [lineupOrig, 1400],
        ]),
        width: 1400,
        height: 1050,
    },
    aboutHeader: {
        src: aboutHeaderOrig,
        srcSet: buildSrcSet([
            [aboutHeader_480, 480],
            [aboutHeader_768, 768],
            [aboutHeader_1024, 1024],
            [aboutHeaderOrig, 1260],
        ]),
        width: 1260,
        height: 960,
    },
    servicesHeader: {
        src: servicesHeaderOrig,
        srcSet: buildSrcSet([
            [servicesHeader_480, 480],
            [servicesHeader_768, 768],
            [servicesHeader_1024, 1024],
            [servicesHeaderOrig, 1260],
        ]),
        width: 1260,
        height: 960,
    },
    contactHeader: {
        src: contactHeaderOrig,
        srcSet: buildSrcSet([
            [contactHeader_480, 480],
            [contactHeader_768, 768],
            [contactHeader_1024, 1024],
            [contactHeaderOrig, 1260],
        ]),
        width: 1260,
        height: 960,
    },
    faqHeader: {
        src: faqHeaderOrig,
        srcSet: buildSrcSet([
            [faqHeader_480, 480],
            [faqHeader_768, 768],
            [faqHeader_1024, 1024],
            [faqHeaderOrig, 1400],
        ]),
        width: 1400,
        height: 1050,
    },
    volvoBlueprintRight: {
        src: volvoBlueprintRightOrig,
        srcSet: buildSrcSet([
            [volvoBlueprintRight_480, 480],
            [volvoBlueprintRight_768, 768],
            [volvoBlueprintRightOrig, 1400],
        ]),
        width: 1400,
        height: 700,
    },
    volvoBlueprintLeft: {
        src: volvoBlueprintLeftOrig,
        srcSet: buildSrcSet([
            [volvoBlueprintLeft_480, 480],
            [volvoBlueprintLeft_768, 768],
            [volvoBlueprintLeftOrig, 1400],
        ]),
        width: 1400,
        height: 700,
    },
    spaceNebulaBg: {
        src: spaceNebulaBgOrig,
        srcSet: buildSrcSet([
            [spaceNebulaBg_480, 480],
            [spaceNebulaBg_768, 768],
            [spaceNebulaBgOrig, 1376],
        ]),
        width: 1376,
        height: 768,
    },
} as const satisfies Record<string, ResponsiveImageAsset>;

export function isResponsiveImageAsset(source: ImageSource): source is ResponsiveImageAsset {
    return typeof source === 'object' && source !== null && 'src' in source && 'srcSet' in source;
}
