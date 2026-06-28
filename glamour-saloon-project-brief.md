# Glamour Saloon — Project Brief & Developer Handoff
**Version:** V3 (Latest Design)
**Date:** June 2025
**Prepared by:** Abdullah (Project Owner)
**For:** Antigravity (Development & Design Team)

---

## 1. Project Overview

Glamour Saloon is a premium men's (and ladies') grooming salon located in **Bahria Town Phase 4, Rawalpindi, Pakistan**. The goal is to build a **high-conversion, professionally designed website** that serves as the salon's primary digital presence — attracting new clients, reducing phone-call load, displaying services and fixed pricing clearly, and routing all bookings through WhatsApp.

This is **Phase 1 (MVP)** of a longer roadmap that will eventually become a **SaaS product for small salons across Pakistan**.

**Google Maps listing:** [Glamour Saloon — Bahria Town Phase 4](https://maps.app.goo.gl/4WqNhSRX6VNE82DM7)

---

## 2. Business Context

| Item | Detail |
|---|---|
| Salon name | Glamour Saloon |
| Type | Men's & Ladies' grooming salon |
| Location | Malik Heights, 82 Plaza, Civic Center, Bahria Town Phase 4, Rawalpindi |
| Landmark | Near Manjoo Restaurant |
| Hours | Monday–Saturday, 10:00 AM – 9:00 PM (Sundays by appointment) |
| Phone / WhatsApp | TBD — to be confirmed by owner |
| Google rating | 4.8★ |
| Established | ~2016 (8+ years) |

### Core Problem
The owner currently relies on phone calls and WhatsApp only. The salon suffers from:
- No online visibility or discoverability
- Repeated customer queries about prices and availability
- No booking system — everything is manual
- Uncontrolled discounts (customers negotiate)
- Zero customer data or retention mechanism
- No digital presence or gallery

### Solution
A fully responsive website that:
- Shows services and **fixed pricing** clearly (no negotiation)
- Has a booking form that sends requests to WhatsApp
- Builds trust via gallery, testimonials, and Google rating
- Keeps WhatsApp as the main communication channel
- Sets the stage for a future booking calendar and CRM

---

## 3. Design System

### Fonts
| Role | Font | Weights |
|---|---|---|
| Headings / Display | Cormorant Garamond | 300, 400 italic, 600 |
| Body / UI | Inter | 300, 400, 500, 600 |

Both loaded via Google Fonts.

### Colour Palette
| Name | Hex | Usage |
|---|---|---|
| Ink (near-black) | `#0C0C0A` | Backgrounds, nav, footer, dark sections |
| Ivory | `#FAF8F5` | Main page background, light sections |
| Warm Mid | `#F0EBE3` | Alternate section backgrounds, cards |
| Taupe | `#8B7355` | Section eyebrows, labels, muted text |
| Taupe Light | `#C4B49A` | Dividers, ticker text, stat labels |
| Gold | `#B8956A` | Primary accent — prices, borders, hover states |
| Gold Light | `#D4AF7A` | Hero heading accent, hover fills |

### Hero Overlay
Dark warm-ink gradient overlay on real photography:
```css
background: linear-gradient(160deg, rgba(12,12,10,.15) 0%, rgba(12,12,10,.5) 50%, rgba(12,12,10,.85) 100%);
```
This is the same technique used by [House of Salons](https://houseofsalons.pk) — `rgba(12,12,10)` at ~55% opacity, heavier at the bottom so white text reads cleanly.

### Design Inspiration
| Reference | What we borrowed |
|---|---|
| [houseofsalons.pk](https://houseofsalons.pk) | Section headings/structure, hero overlay style, accordion price menu, Ladies/Gents tabs, FAQ section, typography tone |
| [laspada.co](https://www.laspada.co) | Fullscreen hero with video/photo, scrolling ticker strip, cinematic feel |
| Original Glamour V1 | Charcoal + gold colour story, stat cards in hero, WhatsApp-first booking |

### Design Principles
- **Light and professional** — Ivory base, not heavy dark everywhere
- **Serif + sans pairing** — Cormorant for editorial feel, Inter for UI clarity
- **Minimal, never minimal-boring** — gold accents give warmth without clutter
- **Photo-first** — real photography is the most powerful trust signal; replace Unsplash placeholders with real salon shots ASAP
- **WhatsApp everywhere** — every CTA either books via WhatsApp or opens a form that confirms on WhatsApp

---

## 4. Page Structure & Sections

The following sections exist in the current V3 design in order:

### 4.1 Navigation (Sticky)
- Logo: "GLAMOUR" in Cormorant + tagline "Men's Salon · Bahria Town Phase 4, Rwp"
- Links: Services | Gallery | Offers | FAQs | Find Us
- CTA button: "Book Now" → scrolls to booking section
- Behaviour: transparent initially, becomes dark ink + blur on scroll

### 4.2 Hero
- Full-width photo with dark gradient overlay (replace with real salon photo or looping video)
- Eyebrow: "Bahria Town Phase 4 · Rawalpindi · Est. 2016"
- H1: *"The art of looking your finest."* (Cormorant italic, 54px)
- Supporting desc + two CTAs: "Book via WhatsApp" and "View the Menu"
- Right column: 3 stat cards (500+ clients, 4.8★, 8+ years)

### 4.3 Animated Ticker
- Continuous scrolling strip on dark ink background
- Services listed: Haircuts · Beard Craft · Facials · Keratin · Manicure & Pedicure · Grooming Packages · Hair Colour · Massage · Bahria Town Phase 4 · Rawalpindi

### 4.4 About / Our Story
- 50/50 split: real salon photo (left) | text panel on warm-mid background (right)
- Headline: *"Where every cut tells a story."*
- 4 stat boxes: 8+ Years · 500+ Clients · 4.8★ · Fixed Pricing

### 4.5 Services & Price Guide *(most important section)*
- Section heading: "The menu / Services & price guide"
- **Gents / Ladies tab switcher**
- Numbered accordion — one category open at a time
- Accordion categories listed below (§5)
- Footer note: "Prices are indicative. Final quotes follow a quick consultation."

### 4.6 Gallery
- Dark ink background
- Asymmetric grid: 1 tall cell (spans 2 rows) + 4 standard cells
- Hover reveals service label
- Placeholder: Unsplash barbershop photos → **replace with real photos**

### 4.7 What Clients Say
- 3-column testimonial cards on warm-mid background
- Quote mark in gold, star rating, italic body text, client name + location
- 3 placeholder reviews (replace with real Google reviews)

### 4.8 Current Promotions / Offers
- Dark ink background with 3 offer cards
- Cards: 30% Off First Visit | Glamour Special Package | Groom Package
- Badge labels, price display, CTA button per card

### 4.9 Frequently Asked Questions
- 6 accordion questions (one open at a time)
- Questions adapted from HoS FAQ style, content specific to Glamour

### 4.10 Book a Consultation
- 50/50 split: salon photo (left, with tinted overlay) | dark ink booking panel (right)
- Form fields: Name, WhatsApp number, Service (grouped select: Gents/Ladies), Preferred date & time
- Primary CTA: "Send Booking Request"
- OR divider → WhatsApp direct button (green)
- Note: "We reply within 15 minutes during working hours"

### 4.11 Contact & Find Us
- 50/50 split: contact details (left) | map + call (right)
- Details: Address, Hours, WhatsApp button
- Map box: click → opens Google Maps link
- Phone number placeholder (TBD)

### 4.12 Footer
- 3-column: Brand + about text | Quick links | Connect (social + address)
- Social icons: Instagram, Facebook, WhatsApp
- Copyright line

---

## 5. Full Service & Pricing Data

> All prices confirmed by salon owner. Estimated prices for ladies services are marked *(est.)*.

### GENTS MENU

#### 01 — Hair Cutting & Styling
| Service | Price |
|---|---|
| Regular Haircut | Rs. 700 |
| Beard Styling | Rs. 500 |
| Baby Haircut | Rs. 500 |
| Signature Haircut | Rs. 1,500 |
| Head Wash & Styling | Rs. 700 |
| Hair Styling (Fibre) | Rs. 500 |
| Hair Styling (Regular) | Rs. 1,000 |
| Shave | Rs. 500 |
| Beard Trim | Rs. 500 |

#### 02 — Hair Colour & Beard Colour
| Service | Price |
|---|---|
| L'Oréal Hair Colour | Rs. 3,000 |
| Keune Hair Colour | Rs. 2,500 |
| Just For Man Hair Colour | Rs. 3,000 |
| L'Oréal Beard Colour | Rs. 1,500 |
| Keune Beard Colour | Rs. 1,200 |
| Just For Man Beard Colour | Rs. 1,500 |

#### 03 — Keratin & Hair Treatments
| Service | Price |
|---|---|
| Keratin — Top Hair Crown (5 inch) | Rs. 7,000 |
| Keratin — Medium Length | Rs. 12,000 |
| Keratin — Shoulder Length | Rs. 18,000 |
| Hair Rebonding | Rs. 10,000 |
| Protein Treatment | Rs. 3,000 |
| Hair Shine & Boost | Rs. 3,000 |

#### 04 — Hair Perming
| Service | Price |
|---|---|
| Hair Perming — 5 Inches | Rs. 10,000 |
| Hair Perming — Medium Length | Rs. 14,000 |
| Hair Perming — Shoulder Length | Rs. 20,000 |

#### 05 — Facials & Skincare
| Service | Price |
|---|---|
| Imported Facial (Johnson) | Rs. 8,000 |
| Cuteplus Facial | Rs. 7,000 |
| Hi Left Facial | Rs. 6,000 |
| Dermacos Facial | Rs. 5,000 |
| Whitening Face Polisher | Rs. 2,500 |
| Cleansing | Rs. 1,500 |
| Black & Whitehead Removing | Rs. 1,000 |
| Face Steam | Rs. 500 |
| Face Mineral Mask | Rs. 1,000 |

#### 06 — Manicure & Pedicure
| Service | Price |
|---|---|
| Manicure Basic | Rs. 2,500 |
| Pedicure Basic | Rs. 3,000 |
| Manicure Whitening with Massage | Rs. 4,000 |
| Pedicure Whitening with Massage | Rs. 4,000 |

#### 07 — Massage Therapy
| Service | Price |
|---|---|
| Shoulder & Head Massage (20 min) | Rs. 1,500 |
| Foot Massage | Rs. 1,500 |

#### 08 — Grooming Packages
| Package | Price | Includes |
|---|---|---|
| Glamour Special | Rs. 5,500 | Haircut · Beard · Cleansing · Whitehead Removing · Black Mask · Head Wash · Styling · Head Massage |
| Glamour Premium | Rs. 5,000 | Whitening Face Polisher · Cleansing · Black & Whitehead Removing · Face Steam · Face Mineral Mask · Haircut & Beard · Head Wash & Styling |
| Groom Package — Signature | Rs. 20,000 | Haircut · Beard · Whitening Facial · Manicure · Pedicure · Protein Treatment · Polish + Make Up |

---

### LADIES MENU

#### 01 — Hair Cuts & Styling *(est.)*
| Service | Price |
|---|---|
| Haircut without Blow Dry | Rs. 2,500 |
| Wash & Blow Dry | Rs. 2,000 |
| Signature Haircut | Rs. 3,500 |
| Hair Trimming | Rs. 1,200 |
| Female Child Cut | Rs. 1,500 |
| Blow Dry (Inward / Outward) | Rs. 1,500 |
| Simple Iron | Rs. 1,500 |
| Hair Wash & Scalp Treatment | Rs. 1,500 |

#### 02 — Hair Treatments *(est.)*
| Service | Price |
|---|---|
| Intensive Hair Mask Treatment | Rs. 3,000 |
| Protein Treatment | Rs. 3,500 |
| Remedy for Dry & Damaged Hair | Rs. 4,000 |
| Herbal Treatment & Oiling | Rs. 1,500 |

#### 03 — Keratin & Botox *(est.)*
| Service | Price |
|---|---|
| Keratin / Botox — Shoulder Length | Rs. 10,000 |
| Keratin / Botox — Medium Length | Rs. 14,000 |
| Keratin / Botox — Elbow Length | Rs. 18,000 |
| Keratin / Botox — Waist Length | Rs. 22,000 |
| Keratin / Botox — Full Length | Rs. 28,000 |

#### 04 — Hair Colour & Highlights *(est.)*
| Service | Price |
|---|---|
| Full Colour — Shoulder Length | Rs. 6,000 |
| Full Colour — Medium Length | Rs. 8,000 |
| Full Colour — Elbow / Full Length | Rs. 10,000 |
| Highlights — Shoulder Length | Rs. 10,000 |
| Highlights — Medium Length | Rs. 13,000 |
| Highlights — Elbow / Full Length | Rs. 16,000 |
| Balayage / Ombré — Shoulder Length | Rs. 12,000 |
| Balayage / Ombré — Medium Length | Rs. 15,000 |
| Balayage / Ombré — Elbow / Full Length | Rs. 18,000 |
| Root Touch Up (1.5 inch) | Rs. 2,500 |

#### 05 — Facials & Skincare *(prices confirmed)*
| Service | Price |
|---|---|
| Imported Facial (Johnson) | Rs. 8,000 |
| Cuteplus Facial | Rs. 7,000 |
| Hi Left Facial | Rs. 6,000 |
| Dermacos Facial | Rs. 5,000 |
| Whitening Facial | Rs. 5,000 |
| Deep Cleansing | Rs. 2,000 |
| Black & Whitehead Removing | Rs. 1,500 |
| Whitening Glowing Polish | Rs. 2,500 |
| Face & Neck Polisher | Rs. 2,000 |

#### 06 — Threading & Waxing *(est.)*
| Service | Price |
|---|---|
| Full Face Threading | Rs. 800 |
| Eyebrows Threading | Rs. 200 |
| Upper Lip Threading | Rs. 150 |
| Full Face Hot Wax | Rs. 1,500 |
| Full Arms Fruit Wax | Rs. 2,000 |
| Full Legs Fruit Wax | Rs. 3,000 |
| Full Body Fruit Wax | Rs. 7,500 |
| Under Arms Wax | Rs. 1,200 |

#### 07 — Manicure & Pedicure *(prices confirmed)*
| Service | Price |
|---|---|
| Manicure Basic | Rs. 2,500 |
| Pedicure Basic | Rs. 3,000 |
| Manicure Whitening with Massage | Rs. 4,000 |
| Pedicure Whitening with Massage | Rs. 4,000 |
| Gel Nail Colour | Rs. 2,000 |
| Simple Nail Colour | Rs. 400 |
| Nail Art | Rs. 2,500 |

#### 08 — Makeup *(est.)*
| Service | Price |
|---|---|
| Party Makeup | Rs. 5,000 |
| Signature Party Makeup | Rs. 7,000 |
| Bridal Makeup | Rs. 25,000 |
| Nikah / Engagement Makeup | Rs. 18,000 |
| Walima Makeup | Rs. 22,000 |
| Bridal Mehndi Makeup | Rs. 15,000 |

#### 09 — Massage Therapy *(est.)*
| Service | Price |
|---|---|
| Head & Shoulder Massage (20 min) | Rs. 1,500 |
| Foot Massage | Rs. 1,500 |
| Full Body Massage (60 min) | Rs. 5,000 |
| Full Body Scrubbing | Rs. 5,000 |
| Whitening Bleach | Rs. 1,500 |

#### 10 — Ladies Packages *(est.)*
| Package | Price | Includes |
|---|---|---|
| Glamour Special — Ladies | Rs. 6,500 | Haircut · Blow Dry · Cleansing · Whitehead Removing · Face Steam · Head Massage · Styling |
| Bridal Package — Full | Rs. 35,000 | Bridal Makeup · Hairdo · Whitening Facial · Manicure & Pedicure · Mehndi Setup |

---

## 6. Tech Stack (Planned)

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS only |
| Fonts | Google Fonts (Cormorant Garamond + Inter) |
| WhatsApp integration | wa.me deep link |
| Deployment | Vercel |
| Images | Real salon photos (TBD from owner) |
| Phase 2 backend | Supabase (bookings, customer data) |

> **Note:** Keep code beginner-friendly. No advanced patterns, no additional libraries beyond Next.js and Tailwind. Every component must be a clean, standalone Next.js component.

---

## 7. Content Still Needed from Owner

Before going live, the following must be collected from the salon owner:

- [ ] Real WhatsApp number (for wa.me links and display)
- [ ] Real phone number
- [ ] Real salon photos — interior, barbers at work, before/after cuts (minimum 8–10 photos)
- [ ] Confirmed business hours
- [ ] Real customer Google reviews (3–5 for testimonials section)
- [ ] Instagram / Facebook page handles
- [ ] Confirmation of ladies services availability
- [ ] Final price confirmation for estimated services (marked *est.* above)

---

## 8. Phase Roadmap

### Phase 1 — MVP (Current scope)
- [x] Responsive landing page
- [x] Fixed service & price menu (Gents + Ladies tabs)
- [x] WhatsApp booking integration
- [x] Gallery section
- [x] Testimonials
- [x] Promotions / Offers
- [x] FAQ accordion
- [x] Contact + Google Maps
- [ ] Real photos from owner
- [ ] Real WhatsApp number connected

### Phase 2 — Growth
- [ ] Booking calendar with time slots
- [ ] Customer accounts
- [ ] SMS/WhatsApp appointment reminders
- [ ] Loyalty / repeat-visit system
- [ ] Admin panel (manage services, view bookings)
- [ ] Marketing automation

### Phase 3 — SaaS
- [ ] Multi-salon onboarding
- [ ] Per-salon subdomains or custom domains
- [ ] Unified admin dashboard
- [ ] Analytics per salon
- [ ] Subscription pricing model

---

## 9. Design Improvement Suggestions for Antigravity

The following are deliberate upgrade opportunities left open for Antigravity to address:

### Critical
1. **Replace all Unsplash placeholder photos** with real Glamour Saloon photos — interior shots, barbers in action, close-up cuts. This single change will have the highest impact on conversion.
2. **Hero video loop** — Replace the hero still image with a short (10–15s) looping `.mp4` of the salon interior or a barber at work, muted autoplay, exactly like [laspada.co](https://www.laspada.co). The poster image should be a high-quality still from the video.
3. **Mobile responsiveness** — the current design is desktop-first. Every section needs proper Tailwind responsive breakpoints (`sm:`, `md:`, `lg:`). The hero grid, services accordion, gallery grid, booking split, and footer grid all need mobile stacks.

### High Priority
4. **WhatsApp sticky button** — A persistent floating WhatsApp button in the bottom-right corner (visible at all times) with a subtle pulse animation. This is the single highest-converting element for Pakistani salon audiences.
5. **Micro-animations** — Add scroll-triggered fade-in animations using Tailwind + Intersection Observer or Framer Motion. Sections should animate in as the user scrolls down rather than all loading at once.
6. **Nav active states** — highlight the current section in the nav as user scrolls (Intersection Observer-based scroll spy).
7. **Real Google Maps embed** — replace the placeholder map box with an actual embedded Google Maps iframe for Malik Heights, 82 Plaza, Bahria Town Phase 4.

### Medium Priority
8. **Instagram feed integration** — add a live Instagram grid section ("Follow our work @glamoursalon") pulling the latest 6–9 posts via Instagram Basic Display API.
9. **Service card images** — add small thumbnail images inside each accordion service category header (e.g., a fade cut photo next to "Hair Cutting & Styling").
10. **Testimonials pull from Google** — replace placeholder reviews with a widget or static pull from the salon's Google Business profile reviews.
11. **Page loading performance** — use Next.js `<Image>` component with lazy loading, blur placeholder, and proper `sizes` attribute for all photos.
12. **SEO metadata** — add proper `<title>`, `<meta description>`, Open Graph tags, and local business JSON-LD schema for Glamour Saloon Bahria Town Phase 4.

### Nice to Have
13. **Before/After slider** — a horizontal drag slider showing haircut transformations. Very high engagement for a salon audience.
14. **Offer countdown timer** — add a subtle countdown on the "30% off first visit" offer card to create urgency.
15. **Dark/light mode toggle** — the colour system supports it; ivory + ink can invert cleanly.

---

## 10. Prompt for Antigravity

> Copy and paste this prompt when handing off to Antigravity:

---

**PROMPT TO GIVE ANTIGRAVITY:**

```
You are a senior UI/UX engineer and Next.js developer. I am building a professional salon website for Glamour Saloon — a premium men's and ladies' grooming salon in Bahria Town Phase 4, Rawalpindi, Pakistan.

I have a fully designed V3 mockup (interactive HTML/CSS) that we need to convert into a production Next.js 14 + Tailwind CSS website, and then improve the design further.

---

DESIGN SYSTEM:
- Fonts: Cormorant Garamond (serif, headings) + Inter (sans, body/UI) via Google Fonts
- Colours:
  - Ink: #0C0C0A (dark backgrounds, nav, footer)
  - Ivory: #FAF8F5 (main page background)
  - Warm Mid: #F0EBE3 (alternate sections)
  - Taupe: #8B7355 (labels, eyebrows)
  - Taupe Light: #C4B49A (muted text, dividers)
  - Gold: #B8956A (primary accent)
  - Gold Light: #D4AF7A (hero highlights, hover)
- Style references: houseofsalons.pk (structure + overlay) + laspada.co (hero video + ticker)
- Design feel: Light, professional, editorial — NOT dark barbershop cliché

---

PAGE SECTIONS (in order):
1. Sticky Nav — logo + links + Book Now CTA (dark on scroll)
2. Hero — fullscreen photo/video with warm-ink gradient overlay, headline in Cormorant italic, stat cards
3. Animated ticker strip — scrolling service list on dark background
4. About / Our Story — 50/50 split photo + stat boxes
5. Services & Price Guide — Gents/Ladies tab switcher + numbered accordion per category
6. Gallery — asymmetric grid (2fr 1fr 1fr, 2 rows), hover labels
7. What Clients Say — 3 testimonial cards
8. Current Promotions / Offers — 3 offer cards on dark background
9. Frequently Asked Questions — accordion
10. Book a Consultation — 50/50 split photo + dark booking panel with form + WhatsApp button
11. Contact & Find Us — address, hours, Google Maps embed
12. Footer — 3-column with links + social icons

---

FULL SERVICE DATA: [attach the services markdown table from the project brief]

---

WHAT I NEED FROM YOU:
1. Convert the V3 design into clean Next.js 14 (App Router) components, one per section
2. Use Tailwind CSS only — no additional CSS frameworks or component libraries
3. Keep code beginner-friendly and well-commented
4. Make it fully mobile-responsive (mobile-first approach)
5. Improve these specific design areas:
   a. Add a looping hero video (mp4, muted, autoplay) with poster image fallback
   b. Add a persistent floating WhatsApp button (bottom-right, pulse animation)
   c. Add scroll-triggered fade-in animations for each section using Intersection Observer
   d. Add scroll-spy navigation (highlight active section in nav)
   e. Embed real Google Maps iframe for Bahria Town Phase 4 location
   f. Add Next.js Image optimization for all photos
   g. Add SEO metadata + local business JSON-LD schema
   h. Add a before/after haircut drag slider in the gallery section
6. The booking form should generate a pre-filled WhatsApp message when submitted (wa.me link with encoded message)
7. All placeholder photos are from Unsplash — they will be replaced with real salon photos later. Use Next.js <Image> with Unsplash URLs as temporary src values.

---

CONSTRAINTS:
- Next.js 14 App Router only
- Tailwind CSS only (no shadcn, no MUI, no Chakra)
- No TypeScript required — plain JavaScript is fine
- Vercel deployment target
- WhatsApp is the primary booking channel — every form must route to WhatsApp
- Keep it simple and practical for a non-technical salon owner to update content later

---

BUSINESS CONTEXT:
This is Phase 1 of a larger SaaS product for small salons in Pakistan. The design should feel premium enough to justify a paid SaaS offering when we scale. Think: House of Salons quality, Glamour Saloon identity.
```

---

*End of project brief. Version: V3. Last updated: June 2025.*
