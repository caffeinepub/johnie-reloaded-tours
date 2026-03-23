# Johnie Reloaded Tours

## Current State
Full resume website with Navbar, Hero, About, Services, Experience, Education, Testimonials, Contact, and Footer sections. No download functionality exists.

## Requested Changes (Diff)

### Add
- `html2pdf.js` dependency for client-side PDF generation with styles preserved
- "Download PDF" button in the Navbar (desktop) and mobile menu
- `usePdfDownload` hook that triggers html2pdf on the full page content, hiding the navbar and download button during capture

### Modify
- `Navbar.tsx`: Add Download PDF button next to the BOOK A SAFARI button
- `package.json`: Add html2pdf.js dependency

### Remove
- Nothing

## Implementation Plan
1. Install `html2pdf.js` and its types (`@types/html2pdf.js`)
2. Create a `usePdfDownload` hook that:
   - Hides the navbar and PDF button (via a CSS class or ref)
   - Calls html2pdf on `document.body` or the `<main>` wrapper
   - Uses options: format A4, jsPDF with portrait, preserves CSS, scale 2 for sharpness
   - Restores hidden elements after generation
3. Add a "Download PDF" button to Navbar (desktop inline with BOOK A SAFARI; mobile menu at bottom)
4. Validate and build
