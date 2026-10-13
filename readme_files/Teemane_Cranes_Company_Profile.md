# Teemane Heavy Haulage — Company Profile & Website Content Architecture

> Consolidated and structured master document for **Teemane Heavy Haulage (THH)**. This guide outlines the **Services Portfolio** (for database seeders and service offerings) and the **Website Page Content** (Home, About, Services, Contact, and Global Elements).
>
> **Scope:** Dedicated exclusively to **Abnormal Transport, Heavy Haulage, Route Planning & Escorts, and Cross-Border Logistics**. All legacy references to crane hire and general lifting operations have been retired.

---

# Table of Contents

- [Part 1: Brand & Core Identity](#part-1-brand--core-identity)
- [Part 2: Services Directory (Database & Service Offerings)](#part-2-services-directory-database--service-offerings)
  - [1. Heavy Haulage & Abnormal Transport](#1-heavy-haulage--abnormal-transport)
  - [2. Route Planning & Escort Services](#2-route-planning--escort-services)
  - [3. Technical Transport Planning & CAD Engineering](#3-technical-transport-planning--cad-engineering)
  - [4. Multi-Axle Modular Lowbed Transport](#4-multi-axle-modular-lowbed-transport)
  - [5. Cross-Border Transport Logistics](#5-cross-border-transport-logistics)
  - [6. Machinery Relocation & Industrial Transit](#6-machinery-relocation--industrial-transit)
  - [7. Fleet Specifications & Equipment Guide](#7-fleet-specifications--equipment-guide)
- [Part 3: Website Pages & Content Architecture](#part-3-website-pages--content-architecture)
  - [Page 1: Home Page (`/`)](#page-1-home-page-)
  - [Page 2: About Us Page (`/about-us`)](#page-2-about-us-page-about-us)
  - [Page 3: Services Index & Detail Pages (`/services`, `/services/{slug}`)](#page-3-services-index--detail-pages-services-servicesslug)
  - [Page 4: Contact Us Page (`/contact-us`)](#page-4-contact-us-page-contact-us)
  - [Page 5: Frequently Asked Questions (`/faq`)](#page-5-frequently-asked-questions-faq)
  - [Page 6: Our Team Page (`/our-team`)](#page-6-our-team-page-our-team)
- [Part 4: Global Website Elements](#part-4-global-website-elements)
  - [Notification Bar (Top Ticker)](#notification-bar-top-ticker)
  - [Header & Sticky Navigation](#header--sticky-navigation)
  - [Emergency Call-To-Action Floating Bar](#emergency-call-to-action-floating-bar)
  - [Footer](#footer)
  - [SEO & Metadata Baseline](#seo--metadata-baseline)
- [Part 5: Database Seeder Reference (`ServiceSeeder.php`)](#part-5-database-seeder-reference-serviceseederphp)
- [Part 6: Source Notes & Scope Policy](#part-6-source-notes--scope-policy)

---

# Part 1: Brand & Core Identity

## Company Name
**Teemane Heavy Haulage (THH)**

## Official Tagline
**A Cut Above The Rest**

## Primary Brand Statements
- **Moving the Impossible Across Borders**
- **Unmatched Excellence in the Most Demanding Operations**
- **When the Scale is Extraordinary, Experience Makes the Difference**
- **Built on Experience. Defined by Our Reputation.**
- **Technical Expertise Behind the Extraordinary**
- **The Nation's Largest Projects. The Only Name Trusted to Perform.**

---

# Part 2: Services Directory (Database & Service Offerings)

*The services below form the active abnormal transport service catalog seeded in `database/seeders/ServiceSeeder.php` and managed via the administrative backend.*

```
Services Overview
├── 1. Heavy Haulage & Abnormal Transport
├── 2. Route Planning & Escort Services
├── 3. Technical Transport Planning & CAD Engineering
├── 4. Multi-Axle Modular Lowbed Transport
├── 5. Cross-Border Transport Logistics
└── 6. Machinery Relocation & Industrial Transit
```

---

## 1. Heavy Haulage & Abnormal Transport

- **Slug:** `heavy-haulage-abnormal-transport`
- **Short Description:** Specialised transport solutions for oversized machinery, abnormal loads, and complex transport logistics across the SADC region.

### Overview
Heavy haulage and abnormal transport are at the heart of what we do. When the scale is extraordinary, experience makes the difference. Our reputation has been built on years of industry experience, an extensive fleet of multi-axle modular trailers and heavy-duty prime movers, and the proven ability to manage some of the most challenging transport requirements to date.

### Scope & Capabilities
- **Cross-Border Transport:** Turnkey logistics spanning South Africa and the greater SADC region (Namibia, Botswana, Zimbabwe, Mozambique, Zambia).
- **Oversized & Super-Loads:** Tailored configurations for transformers, mining plant, wind turbine components, pressure vessels, and industrial earthmovers.
- **Client Partnership:** We work with leading local and international clients who expect an established industry partner with the resources, technical expertise, and proven ability to deliver certainty in high-risk transport environments.
- **Big Picture Approach:** This responsibility goes beyond simply moving loads. It is about understanding the bigger picture and delivering the level of professionalism that has made THH a recognised name within the industry.

---

## 2. Route Planning & Escort Services

- **Slug:** `route-planning-escort-services`
- **Short Description:** Comprehensive route assessments, obstacle mitigation, permit clearance, and experienced escort drivers with real-time GPS tracking.

### Overview
The route we choose plays a significant role in the safe transportation of every load, requiring thorough preparation and an understanding of what lies ahead before the journey begins.

### Scope & Capabilities
- **Road Network Analysis:** Identification of the safest, most practical routes, evaluating load weight/dimensions, bridge weight formulas, overhead wire clearances, turning radiuses, and road gradient conditions.
- **Obstacle & Delay Mitigation:** Advance route reconnaissance to eliminate bottlenecks, arrange municipal and electrical clearances, and ensure drivers have complete visual and technical road briefings.
- **Certified Escort Operations:** Dedicated abnormal escort vehicles and certified drivers maintaining live radio communication, pilot warnings, and traffic management to guide other motorists safely around oversized convoys.
- **Real-Time Fleet GPS Tracking:** Our entire fleet is equipped with advanced GPS tracking technology, providing real-time visibility of vehicle locations, speed monitoring, and route progress oversight.
- **Public & Crew Safety:** The safety of everyone involved—from our drivers and logistics crew to the motoring public—remains our uncompromising priority throughout every journey.

---

## 3. Technical Transport Planning & CAD Engineering

- **Slug:** `technical-transport-planning`
- **Short Description:** Detailed CAD drawings, 3D simulations, and engineered route feasibility studies for exceptionally complex and oversized loads.

### Overview
Some loads require a level of technical expertise that extends far beyond conventional transport. Our technical knowledge plays an integral role in our ability to undertake highly complex and exceptionally oversized loads.

### Scope & Capabilities
- **CAD Route & Transport Drawings:** Custom 2D and 3D engineered drawings illustrating axle weight distributions, center of gravity analysis, and vehicle swept-path simulations.
- **Transport Feasibility Studies:** Pre-trip engineering verifying turning envelopes, ground pressure thresholds, and bridge structural loading capabilities.
- **Regulatory Approvals:** Engineered drawings prepared specifically for provincial and national road transport permit authorities.
- **Specialised Access:** Combining advanced technical planning with extensive industry experience allows us to confidently transport loads that fall outside conventional transport parameters.

---

## 4. Multi-Axle Modular Lowbed Transport

- **Slug:** `multi-axel-heavy-transport`
- **Short Description:** High-capacity multi-axle modular hydraulic trailers and lowbeds configured for extreme weight distribution and superload transit.

### Overview
When moving payloads that challenge legal road boundaries, multi-axle hydraulic platform trailers offer the stability, hydraulic leveling, and payload distribution required to move mega-cargo safely.

### Scope & Capabilities
- **Modular Combinations:** Expandable line combinations allowing custom axle configurations to comply with bridge formula restrictions.
- **Steerable Axles & Hydraulic Suspension:** Independent hydraulic steering and height adjustment to navigate sharp curves, uneven terrain, and bridge approaches.
- **High Payload Capacity:** Heavy-duty transport engineered for payloads in excess of 250 tons.
- **Industrial Applications:** Mining excavators, mill shells, transformers, refinery vessels, and structural components.

---

## 5. Cross-Border Transport Logistics

- **Slug:** `cross-border-transport`
- **Short Description:** Seamless abnormal transport logistics and customs clearance across South Africa, Namibia, Botswana, Zimbabwe, Mozambique, and Zambia.

### Overview
Moving abnormal freight across African borders demands deep regulatory knowledge, bonded transport capabilities, and coordination with regional road authorities.

### Scope & Capabilities
- **SADC Regional Coverage:** Reliable abnormal freight transport across all primary transit corridors throughout the Southern African Development Community.
- **Permit & Customs Facilitation:** Comprehensive management of cross-border abnormal load permits, border escorts, and customs transit documentation.
- **Bilingual Convoys & Local Agents:** Dedicated corridor coordinators ensuring zero delays at international border posts.
- **Convoy Tracking:** End-to-end satellite tracking from origin to destination across international borders.

---

## 6. Machinery Relocation & Industrial Transit

- **Slug:** `machinery-relocation`
- **Short Description:** Safe and efficient extraction, dismantling, transport, and precision positioning of industrial plant machinery.

### Overview
From factory relocations to heavy-duty plant equipment moves, we transport, extract, and transit industrial machinery with absolute precision.

### Scope & Capabilities
- **Turnkey Plant Moves:** Complete mechanical staging, transport, and site repositioning for industrial operations.
- **Confined Space Extractions:** Hydraulic jacking, heavy-duty industrial skates, and winch systems to maneuver massive machinery out of existing buildings with tight clearances onto transport trailers.
- **Minimal Disruption:** Scheduled round-the-clock weekend or plant shutdown transport execution to minimise operational downtime for manufacturing clients.

---

## 7. Fleet Specifications & Equipment Guide

| Fleet Category | Configuration / Capacity | Typical Abnormal Transport Application |
|---|---|---|
| **Multi-Axle Modular Trailers** | Up to 250T+ Payload, Hydraulic Platform | Superloads, transformers, mining equipment, ball mills |
| **Heavy-Duty Prime Movers** | 6x4 & 8x4 High-Torque Heavy Tractors | High-mass pulling and pushing for abnormal transport convoys |
| **Step-Deck & Well-Deck Trailers** | Extendable, Low-Profile Decks | Tall industrial tanks, agricultural machinery, high cargo |
| **Extendable Lowbeds** | Telescopic length expansion | Extra-long structural bridge beams, wind turbine blades |
| **Pilot & Escort Vehicles** | Custom Rigged with Beacons, Comms & Signs | Abnormal load traffic management, driver warnings, convoy pilots |
| **Tracking Systems** | Real-Time Fleet-Wide GPS | Constant location visibility, speed oversight, live customer tracking |

---

# Part 3: Website Pages & Content Architecture

---

## Page 1: Home Page (`/`)

### 1. Hero Section
- **Headline:** MOVING THE IMPOSSIBLE
- **Gradient Accent:** Across Borders
- **Paragraph:** South Africa's most trusted heavy haulage experts. We specialize in abnormal loads, oversized machinery, and complex transport logistics.
- **Call-to-Action 1 (Primary):** Request A Quote (`/contact-us`)
- **Call-to-Action 2 (Secondary):** View Fleet & Services (`/services`)
- **Hero Image:** `resources/images/heavy-haulage-02.webp` (Wide abnormal transport convoy with escort and Komatsu excavator)
- **Trust Badges:**
  - Fully Insured
  - Nationwide & SADC Routes
  - 24/7 Response

### 2. Who We Are / Intro Section
- **Label:** Who We Are
- **Title:** THE ONLY NAME TRUSTED TO PERFORM
- **Copy:**
  - Established in 2012, Teemane Heavy Haulage prides itself on countless victories across South Africa's most demanding worksites. From high-stakes logistics to complex routing operations, we have redefined what's possible in abnormal load transport.
  - Backed by a state-of-the-art fleet of multi-axle modular trailers, high-capacity prime movers, and over 100 years of combined management experience, we bring the precise engineering, control, and capability required to deliver certainty in high-risk environments.
- **Button:** Our Story (`/about-us`)
- **Floating Stat Card:** 100+ Years Combined Management Experience

### 3. Core Highlights & Company Statistics
- **250T+** Max Payload Capacity
- **100+** Years Combined Management Experience
- **500+** Successful Abnormal Transport Projects Executed
- **24/7** Dispatch & Emergency Service Support

### 4. Industries We Serve (Showcase Grid)
1. **Construction & Infrastructure:** Oversized precast bridge beams, earthmoving machinery, civil infrastructure, and structural steel.
2. **Energy & Power:** Electrical transformers, wind turbine components, generator sets, and substation equipment.
3. **Mining & Resources:** Dragline parts, mill shells, dump truck chassis, processing plants, and oversized excavators.
4. **Manufacturing & Industrial:** Complete factory relocations, autoclaves, storage tanks, and heavy machinery.
5. **Ports & Maritime:** Shipyard abnormal cargo, container handling equipment, vessel propulsion, and harbour project freight.
6. **Aerospace & Telecommunications:** Antenna masts, specialized modular shelters, and high-value industrial freight.

### 5. Services Grid
Showcase cards displaying active abnormal transport services linking to `/services/{slug}` with featured imagery and quick quote buttons.

### 6. Dark CTA Banner
- **Title:** Ready to Move the Impossible?
- **Text:** Contact our transport logistics specialists today for certified route surveys, transport engineering, and competitive quotations.
- **CTA:** Contact Our Team (`/contact-us`)

---

## Page 2: About Us Page (`/about-us`)

### 1. Page Header
- **Title:** Redefining What's Possible In **Heavy Haulage**
- **Description:** Established in 2012, Teemane Heavy Haulage prides itself on countless victories across South Africa's most demanding transport routes, delivering complex, oversized machinery with absolute precision.
- **Hero Banner:** `resources/images/heavy-haulage-01.webp`

### 2. Core Narrative: Built on Experience. Defined by Our Reputation.
> **BUILT ON EXPERIENCE. DEFINED BY OUR REPUTATION.**

- **Paragraph 1 (Reputation Earned Over Time):**
  Within this industry, a reputation is earned over time. Ours has been built through years of hands-on experience, extensive industry knowledge and an unwavering dedication to the work we do. It is a reputation shaped by the standards we hold ourselves to, the relationships we have established and the consistent performance that has earned us the trust of our clients.

- **Paragraph 2 (Passion & Behind-the-Scenes Expertise):**
  There is far more to what we do than simply getting the job done. We have a genuine passion for our work, investing an immense amount of time, thought and expertise in every project we undertake. Our knowledge extends far beyond the practicalities of transporting a load. It comes from years of experience, understanding the finer details of our industry and knowing how to bring together the right solutions to achieve the best possible outcome.

- **Paragraph 3 (Planning & Lasting Relationships):**
  We take great pride in the work that happens behind the scenes. The hours devoted to planning, the attention given to every requirement and the satisfaction of seeing everything come together successfully. It is this personal commitment that has helped us build lasting relationships with those who recognise the value of having an experienced transport partner who is genuinely invested in their success.

- **Paragraph 4 (Uncompromising Responsibility):**
  We understand the importance of the loads entrusted to us and the responsibility that comes with being part of projects of significant scale. Our clients expect an exceptional level of service, and that is exactly what we strive to deliver. It is a commitment we stand behind, regardless of the size or complexity of the project.

### 3. Our Story & Management Depth
- Founded in 2012 in South Africa.
- Over **100 years of combined senior management experience** in abnormal transport, superload logistics, and cross-border transport.
- Dedicated leadership committed to engineered safety, modern equipment investment, and flawless execution.

### 4. Technical Expertise Behind the Extraordinary
> **TECHNICAL EXPERTISE BEHIND THE EXTRAORDINARY**

- Some loads require a level of technical expertise that extends far beyond conventional transport.
- Our technical knowledge plays an integral role in our ability to undertake highly complex and exceptionally oversized loads. With years of practical industry experience behind us, we understand the intricacies involved in transporting loads of extraordinary scale and dimensions.
- For loads of this magnitude, we utilise detailed CAD drawings and specialised transport planning, bringing an additional level of technical insight and preparation to the transport process.
- Combining advanced technical planning with extensive industry experience allows us to confidently transport loads that fall outside conventional transport parameters, giving our clients access to the specialised expertise required for transport of this calibre.

### 5. Accreditations, Governance & Safety Standards
- **B-BBEE Certified:** Proud contributor to South African economic transformation and local enterprise development.
- **Safety Accreditations:** ISO 9001 (Quality Management), ISO 14001 (Environmental), and OHSAS 45001 / ISO 45001 (Occupational Health & Safety).
- **Fleet Tracking Oversight:** Fleet-wide real-time GPS tracking, speed governed engines, and 24/7 movement monitoring.
- **Permit & Road Safety:** Complete compliance with South African National Roads Agency (SANRAL) and provincial abnormal load regulations.
- **Insurance:** Comprehensive Goods in Transit (GIT) and third-party public liability coverage.

---

## Page 3: Services Index & Detail Pages (`/services`, `/services/{slug}`)

### 1. Services Index (`/services`)
- **Title:** Comprehensive Heavy Haulage & Abnormal Transport Services
- **Subtitle:** Engineered transport solutions tailored to the scale, specifications, and individual needs of projects across the SADC region.
- **Service Cards:** Interactive grid showing all active services with title, summary, and direct link to detailed service page.

### 2. Service Detail Template (`/services/{slug}`)
- **Header:** Service Title, Subtitle, Breadcrumbs, Quick Action: Request a Quote.
- **Description:** In-depth service explanation.
- **Content Blocks System:**
  - `rich_text`: In-depth technical specifications, transport methodology, and safety checklists.
  - `image` / `gallery`: High-resolution photos of abnormal convoys with captions and lightbox zoom.
  - `media_text`: Split section with stat cards and convoy imagery.
  - `cta`: Dedicated quote request call-out block.

---

## Page 4: Contact Us Page (`/contact-us`)

### 1. Contact Information
- **Phone:** 084 263 7690
- **Email:** `enquiries@teemanehh.co.za`
- **Availability:** 24 Hours / 365 Days a Year
- **Head Office Address:** 1 Van Eck Street, Bellville South, Cape Town, 7530
- **Operating Territories:** Western Cape, Gauteng, KwaZulu-Natal, Northern Cape, and cross-border SADC transit routes.

### 2. Enquiry Form Fields
- Name
- Company / Organization
- Email Address
- Contact Number
- Service Required (Dropdown populated from active abnormal transport services)
- Origin & Destination
- Cargo Dimensions (Length, Width, Height) & Gross Weight
- Message / Project Details

---

## Page 5: Frequently Asked Questions (`/faq`)

Common client inquiries covering:
1. What permits are required for abnormal loads in South Africa?
2. How far in advance should route surveys and feasibility studies be conducted?
3. What is the maximum payload capacity THH can transport?
4. Do you supply certified escort vehicles and coordinate police escorts?
5. What cross-border SADC countries does THH service?
6. How does real-time GPS tracking work for clients during transit?

---

## Page 6: Our Team Page (`/our-team`)

Showcase of executive management, route logistics coordinators, transport engineers, and certified escort pilots.

---

# Part 4: Global Website Elements

### Notification Bar (Top Ticker)
- **Left Item:** 📍 Operating across South Africa & SADC
- **Right Item:** ⏰ Available 24/7 Transport Support: **084 263 7690**

### Header & Sticky Navigation
- **Logo:** Teemane Heavy Haulage Vector SVG Logo
- **Links:** Home (`/`), Services (`/services`), About Us (`/about-us`), FAQ (`/faq`), Contact Us (`/contact-us`)
- **CTA Button:** Contact Us
- **Theme:** Light / Dark Mode Toggle

### Emergency Call-To-Action Floating Bar
- **Heading:** 24/7 Breakdown & Urgent Abnormal Transport Dispatch
- **Direct Line:** 084 263 7690

### Footer
- **Company Summary:** Teemane Heavy Haulage — Moving the Impossible Across Borders.
- **Quick Links:** Services, About Us, Fleet, Safety & Credentials, Privacy Policy, Terms of Service.
- **Direct Contacts:** Phone, Email, Physical Address.
- **Copyright:** &copy; Teemane Heavy Haulage. All rights reserved.

### SEO & Metadata Baseline
- **Default Title:** Teemane Heavy Haulage — Heavy Haulage & Abnormal Transport
- **Meta Description:** Teemane Heavy Haulage provides tailored abnormal transport, heavy haulage, route surveys, and escort services across South Africa and the SADC region.
- **OpenGraph & Twitter Card:** Configured with `heavy-haulage-02.webp` featured image.

---

# Part 5: Database Seeder Reference (`ServiceSeeder.php` & `FaqSeeder.php`)

All abnormal transport services are defined in `database/seeders/ServiceSeeder.php`:

```php
// Active database records seeded:
1. Heavy Haulage & Abnormal Transport    (slug: heavy-haulage-abnormal-transport)
2. Route Planning & Escort Services      (slug: route-planning-escort-services)
3. Technical Transport Planning          (slug: technical-transport-planning)
4. Multi-Axle Modular Lowbed Transport   (slug: multi-axel-heavy-transport)
5. Cross-Border Transport Logistics      (slug: cross-border-transport)
6. Machinery Relocation                  (slug: machinery-relocation)
```

Abnormal transport FAQs are defined in `database/seeders/FaqSeeder.php`:
- Permits & regulations under the National Road Traffic Act
- Maximum payload capacity (250T+ modular hydraulic trailers)
- Route surveys, obstacle mitigation & certified escorts
- Cross-border SADC transit corridors
- Real-time fleet GPS tracking
- Advance planning & feasibility timeline
- 24/7 emergency response & operations
- Transport quotation requirements

To re-seed or refresh services and FAQs in development:
```bash
php artisan db:seed --class=ServiceSeeder
php artisan db:seed --class=FaqSeeder
```

---

# Part 6: Source Notes & Scope Policy

1. **Scope Policy:** The business focus of Teemane Heavy Haulage is strictly centered on **Heavy Haulage, Abnormal Transport, Route Planning, Escorts, and Cross-Border Freight**. All historical references to mobile cranes, crane hire, and crane rentals have been permanently decommissioned.
2. **Foundational History:** Established in 2012 with 100+ years combined management experience in abnormal transport and heavy logistics.
3. **Payload Capacity:** Modular hydraulic platform trailers capable of handling payloads in excess of 250 tons.
4. **Geographic Coverage:** Full South African national routes and key SADC cross-border transit corridors.
