---
name: Teemane Heavy Haulage
description: Industrial heavy lifting, crane hire, and abnormal transport design system
colors:
  primary: "#1d4e89"
  neutral-bg: "#ffffff"
  neutral-fg: "#0f172a"
  accent: "#8b8577"
  destructive: "#dc2626"
  muted: "#f1f5f9"
  border: "#e2e8f0"
typography:
  display:
    fontFamily: "Montserrat Variable, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Montserrat Variable, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Geist Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "8px 16px"
---

# Design System: Teemane Heavy Haulage

## Overview

**Creative North Star: "The Heavy Rigging Monolith"**

Teemane's visual system evokes the raw kinetic power, calculated engineering precision, and immense scale of heavy haulage and 440-ton crane lifts. It avoids fragile decorative flourishes in favor of structural density, high-contrast industrial surfaces, and authoritative typography.

The interface pairs muscular display typography with photographic authenticity—depicting real hydraulic booms, multi-axle trailers, and Cape Town industrial worksites under heavy load. Depth is reinforced through structural masks, architectural container notches, and tonal layers rather than gratuitous drop shadows.

**Key Characteristics:**
- **Industrial Scale & Punch:** Ultra-bold uppercase headings with tight tracking anchor every viewport with undeniable physical weight.
- **Engineered Restraint:** Clean utilitarian layouts structured for fast scanning by field engineers, logistics directors, and site supervisors.
- **Material Realism:** Real machinery photography framed by industrial cutout container silhouettes and metallic accents.

## Colors

The palette draws directly from industrial rigging, heavy steel equipment, and marine transport.

### Primary
- **Industrial Navy / Deep Hydraulic Blue** (`#1d4e89` / `oklch(0.469344 0.112698 242.6308)`): The core corporate identity color. Used for primary CTAs, active states, key brand badges, and high-impact accents.

### Accent
- **Machine Steel Ochre** (`#8b8577` / `oklch(0.603 0.019 79.16)`): A warm metallic accent grounding technical badges, secondary highlights, and subtle equipment metadata.

### Neutral
- **Deep Steel Black / Foreground** (`#0f172a` / `oklch(0.205 0 0)`): Heavy-duty contrast for text, cards, and dark industrial sections.
- **Pure Canvas / Background** (`#ffffff` / `oklch(1 0 0)`): High-legibility base canvas for effortless daylight reading on field tablets and mobile devices.
- **Muted Steel / Surface Layering** (`#f1f5f9` / `oklch(0.97 0 0)`): Neutral background tint for service cards, stat blocks, and technical specs.
- **Rigging Border** (`#e2e8f0` / `oklch(0.922 0 0)`): Precision dividing lines structuring cards and grid tables.

### Named Rules
**The Authority Rule.** The primary blue and dark steel tones dominate all structural viewports; saturated alert colors are strictly reserved for emergency dispatch lines and safety credentials.

## Typography

**Display Font:** Montserrat Variable (`font-heading`)
**Body Font:** Geist Variable (`font-sans`)

**Character:** Muscular, geometric, and ultra-authoritative headings paired with a crisp, hyper-legible modern sans for technical specifications and data tables.

### Hierarchy
- **Display** (Montserrat 900, `clamp(2.5rem, 6vw, 4.5rem)`, 1.0): Hero headlines and major tonnage numbers. Always uppercase and tightly tracked.
- **Headline** (Montserrat 900, `clamp(1.75rem, 4vw, 2.5rem)`, 1.1): Section titles and equipment category titles.
- **Title** (Montserrat 800, `1.25rem - 1.5rem`, 1.2): Service card headers and feature highlights.
- **Body** (Geist 400, `1rem`, 1.5): Standard descriptive copy, narrative paragraphs, and technical details. Max line length 65ch.
- **Label** (Geist 600, `0.75rem - 0.875rem`, tracking-wider, uppercase): Equipment capacity tags, badges, and metadata labels.

### Named Rules
**The Monolith Header Rule.** All section headers and hero titles MUST be uppercase Montserrat with bold or black weights and negative letter-spacing (`tracking-tighter`).

## Layout

- Built on a structured 12-column responsive grid with consistent container wrappers (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
- Generous vertical breathing room between operational sections (`py-16 sm:py-24`) balanced with compact, high-density data tables inside cards.
- Mobile-first responsiveness ensuring rapid emergency calling and quote requests from job sites.

## Elevation & Depth

Surfaces rely primarily on tonal layering, sharp borders, and tactile gradients rather than diffused shadows.

### Shadow Vocabulary
- **Tactile Hover** (`shadow-sm hover:shadow`): Subtle lifting on actionable service cards and primary action buttons.
- **Container Notch Mask**: Physical depth achieved by cutting container silhouettes out of hero sections (`CutoutBox`).

### Named Rules
**The Flat-Steel Rule.** Elements sit flat and grounded on the grid canvas; elevation is only triggered on user interaction or sticky emergency bars.

## Shapes

- Rounded corners follow a restrained scale: base radius is `0.625rem` (10px), buttons and badges use `8px` (`var(--radius-md)`).
- Distinctive container notch silhouette (`CutoutBox`) applied to major banner transitions.

## Components

### Buttons
- **Shape:** Rounded-lg (8px to 10px).
- **Primary:** Gradient from primary to primary/70 with white text, font-medium, and slight active depression (`active:translate-y-px`).
- **Outline / Secondary:** Crisp border with subtle hover background shifts.

### Service Cards
- **Structure:** Clean rounded containers with high-contrast imagery, bold Montserrat titles, and clear technical feature bullets.
- **Interaction:** Smooth zoom and border highlight on hover.

### Emergency CTA & Stats Bar
- **Distinctive Role:** High-contrast banners highlighting 24/7/365 availability, emergency telephone hotline, and 440-ton fleet statistics.

## Do's and Don'ts

### Do:
- **Do** use real fleet photography with industrial worksite context.
- **Do** maintain uppercase, heavy-weight Montserrat headings for all primary section headers.
- **Do** make emergency contact numbers and quote CTAs prominent and accessible on all viewport sizes.
- **Do** highlight concrete operational numbers (440-ton capacity, 24/7 availability, 100+ years experience).

### Don't:
- **Don't** use pastel, playful, or whimsical decorative motifs.
- **Don't** dilute industrial authority with generic stock photography of clean corporate boardrooms.
- **Don't** hide emergency contact options behind multi-step menus.
