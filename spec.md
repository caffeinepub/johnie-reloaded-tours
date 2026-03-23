# Ainomugisha John Labera — Tour Guide Resume Website

## Current State
New project. No existing application files.

## Requested Changes (Diff)

### Add
- Full single-page resume website for a professional Ugandan tour guide
- Hero section: full-width landscape background, name, role, tagline, Call/Email CTA buttons, Instagram/Facebook icons
- About section: biography paragraph, short pull quote, profile photo
- Services/Specialties section: 5 cards — Wildlife Safaris, Cultural Tours, Gorilla Trekking, Birding Safaris, Adventure Hikes — each with icon and short description
- Experience & Certifications: vertical timeline — Monkey Adventures, Authentic Africa Safaris, Birdnest Resort Tours & Travel Ltd (2018–Present); Level One Guiding Certificate from African Institute of Tourism and Field Guiding
- Education: vertical timeline — Kampala International University, Kigezi College Butobere, Kabale Brainstorm High School, St. Maria Goretti Nursery & Preparatory School
- Testimonials: auto-scrolling carousel with 3 placeholder guest quotes and star ratings
- Contact: phone, email, social links, simple booking inquiry form (name, email, message, submit), static map visual for Kabale/Kampala region
- Sticky/minimal navigation bar linking to all sections
- Footer with name, tagline, and contact info

### Modify
N/A

### Remove
N/A

## Implementation Plan
- Backend: store booking form submissions (name, email, message, timestamp)
- Frontend:
  - Color tokens: forest green #0B5A3A, earth brown #7A4B2A, golden #D4A017, sand #F6F1EA
  - Google Fonts: display font (e.g. Playfair Display) for headings, Inter/Lato for body
  - Hero with gradient overlay on landscape background image (generated)
  - Profile photo from uploaded asset
  - Services grid with SVG/emoji icons
  - Timeline components for experience and education
  - Testimonial carousel with placeholder quotes
  - Static SVG map placeholder showing Uganda with Kabale and Kampala pinned
  - Booking form wired to backend canister
  - Fully responsive, mobile-first layout
  - All content in a single data/constants file for easy dev editing
