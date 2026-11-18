---
seo_title: Services - Teemane Heavy Haulage
seo_description: We understand that every lifting project demands precision, reliability and efficiency. Our services offer the flexibility and strength needed to tackle any challenge.
---

# Page: Services (Overview)

Please fill out the content for each block below. 

---

## Block 1: Page Header

**Label:** Our Capabilities
**Heading:** SPECIALISED TRANSPORT SOLUTIONS
**Description:** We understand that every heavy haulage project demands precision, reliability and rigorous planning. Our capabilities provide the flexibility and strength needed to tackle the most demanding abnormal loads.

---

## Block 2: ScrollDivider (All Services Marquee)

Displays all active services dynamically across two counter-scrolling velocity rows (`resources/js/components/scroll-divider.tsx`):

**Row 1:**
- **Heavy Haulage & Abnormal Transport** (`heavy-haulage-abnormal-transport`)
- **Route Planning & Escort Services** (`route-planning-escort-services`)
- **Technical Transport Planning** (`technical-transport-planning`)

**Row 2:**
- **Multi-Axle Modular Lowbed Transport** (`multi-axel-heavy-transport`)
- **Cross-Border Transport Logistics** (`cross-border-transport`)
- **Machinery Relocation & Industrial Transit** (`machinery-relocation`)

---

## Block 3: Services Showcase Grid

Each service item is displayed using the standardised `ServiceCard` (`resources/js/components/service-card.tsx`):
- **Card Container:** Clean rounded container (`rounded-2xl`) with border highlight and tactile elevation on hover.
- **Image Header:** High-visibility 16:10 fleet imagery with smooth hover scale (`group-hover:scale-105`), supporting dynamic backend media and authentic local fleet fallback.
- **Content:** Bold Montserrat uppercase title, truncated description text, and a streamlined "Learn More" link trigger.
- **Grid Layout:** Responsive multi-column grid (`sm:grid-cols-2 lg:grid-cols-4` / `lg:grid-cols-3`) providing consistent visual hierarchy across devices.

---

*(Note: The individual services shown in this showcase on this page are pulled dynamically. You can edit the content for specific services in their respective folders inside `services/`)*
