
# KCL Printing and Photocopy Shop

**Live Site:** https://github.com/c20245709lozano-debug/Printing-and-Photocopy-Shop.git

## About the Project

KCL Printing and Photocopy Shop is a simple and responsive website for a local printing and photocopying business. It introduces the shop's services and provides information for students, teachers, workers, and local residents who need printing and photocopying services.

## Design System

### Color Palette (60-30-10 Rule)

| Role | Percentage | Color | Hex Code | Usage |
|---|---:|---|---|---|
| Dominant | 60% | Pastel Blue | `#DCEBFA` | Main page background |
| Secondary | 30% | Pastel Pink | `#F8DDE8` | Cards and content sections |
| Accent | 10% | Pastel Yellow | `#FFF0B8` | Buttons, highlights, and footer |

### Visual Style

**Style:** Soft Pastel Minimalism

**Rationale:** I chose a soft pastel color palette to make the website look friendly, welcoming, and organized. The simple layout and blue headings help users navigate the About, Services, and Contact sections. Dark mode gives users another viewing option, while GSAP animations make the website more interactive.

### Accessibility and Contrast

- **Light-mode body text:** `#1E293B`
- **Light-mode background:** `#DCEBFA`
- **Contrast ratio:** To be verified
- **Verification tool:** To be added after testing

Dark mode uses dark backgrounds with light text. Both themes should be checked to ensure that text remains readable.

## Features

### Commit 1 — Basic Static Website

- [x] Basic HTML page structure
- [x] Tailwind CSS styling
- [x] Responsive layout
- [x] Header and navigation links
- [x] Hero section
- [x] About section
- [x] Printing and photocopying services
- [x] Contact form layout
- [x] Footer with pastel yellow background

### Commit 2 — Dark Mode

- [x] Dark mode toggle
- [x] Switch between light and dark themes

### Commit 3 — GSAP Animations

- [x] GSAP intro animation timeline
- [x] Timeline defaults for duration and easing
- [x] Staggered hero button animation
- [x] Overlapping timeline animations
- [x] Replay intro animation button
- [x] Scroll reveal animations using ScrollTrigger
- [x] Individual ScrollTrigger for every `.reveal` section

### Commit 4 — Planned Features

- [ ] Scroll progress bar using scrub
- [ ] Reduced-motion support using `gsap.matchMedia()`
- [ ] Final animation cleanup and testing
- [ ] Verify text contrast ratio is at least 4.5:1

## Built With

- HTML
- Tailwind CSS
- JavaScript
- GSAP
- ScrollTrigger

## Project Status

**Current Stage:** Commit 3 — GSAP Animations

This version includes the basic website, dark mode, an animated hero section with a replay button, and scroll reveal animations. Scroll progress, reduced-motion support, and final cleanup will be completed in Commit 4.
