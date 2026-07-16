---
name: Altiplano Export Prime
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#50443f'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#82746e'
  outline-variant: '#d4c3bc'
  surface-tint: '#795746'
  primary: '#43271a'
  on-primary: '#ffffff'
  primary-container: '#5c3d2e'
  on-primary-container: '#d3a895'
  inverse-primary: '#eabda9'
  secondary: '#5f5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2dd'
  on-secondary-container: '#656461'
  tertiary: '#1e330f'
  on-tertiary: '#ffffff'
  tertiary-container: '#344a23'
  on-tertiary-container: '#9fb988'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#eabda9'
  on-primary-fixed: '#2d1509'
  on-primary-fixed-variant: '#5f3f30'
  secondary-fixed: '#e5e2dd'
  secondary-fixed-dim: '#c9c6c2'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#d0ebb6'
  tertiary-fixed-dim: '#b4cf9c'
  on-tertiary-fixed: '#0c2001'
  on-tertiary-fixed-variant: '#374d26'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The visual identity is anchored in "Export-Grade Sophistication," bridging the raw, organic richness of Bolivian resources with the precise, minimalist aesthetic valued in the Japanese corporate sector. This design system communicates reliability, heritage, and meticulous quality control.

The style is **Minimalist / Corporate**, utilizing generous whitespace to evoke a sense of premium "breathing room." By stripping away unnecessary decorative elements, the focus remains on the high-quality products and the logistical integrity of the operation. The emotional response is one of quiet confidence and established trust—less "startup" and more "legacy partner."

## Colors

The palette is a curated selection of earthy, natural tones that reflect the source of the products.
- **Cocoa Brown (#5C3D2E):** The primary anchor. Used for typography and key UI elements to establish strength and warmth.
- **Light Beige (#F5F2ED):** The foundational background, providing a softer, more organic feel than pure white.
- **Organic Green (#5A7247):** Used for growth-related indicators, success states, and secondary call-to-actions.
- **Bolivian Accents:** Earthy Red and Gold are used strictly for micro-interactions, decorative icon details, or "New" badges to pay homage to the national flag without compromising the professional restraint of the interface.

## Typography

The typography strategy employs a "High-Contrast Pairing" to balance elegance with utility.
- **Playfair Display** (Headings): Chosen for its editorial quality and traditional serif roots, suggesting heritage and "export-grade" excellence.
- **Manrope** (Body/Labels): A modern, geometric sans-serif that provides exceptional legibility in professional contexts. It feels more "engineered" and reliable than softer sans-serifs, catering to the precision of Japanese corporate standards.

All labels and small metadata should utilize high letter-spacing and uppercase styling to create a systematic, organized appearance.

## Layout & Spacing

This design system follows a **Fixed Grid** model for desktop to ensure a controlled, premium presentation, transitioning to a fluid model for mobile devices.

- **Desktop:** 12-column grid, 1280px max width. Centered with large 64px side margins to emphasize exclusivity.
- **Spacing Rhythm:** Based on an 8px base unit. Section vertical spacing should be aggressive (80px - 120px) to maintain the minimalist aesthetic and separate distinct service offerings.
- **Mobile:** 4-column grid with 16px margins. Content cards should utilize full-width patterns to maximize legibility of high-quality product photography.

## Elevation & Depth

Depth is achieved through **Tonal Layering** rather than heavy shadows. The UI remains largely flat to feel modern and clean.

- **Surface Tiers:** Backgrounds use `#F5F2ED`, while elevated cards or sections use pure white `#FFFFFF` or the lighter `#FAF9F6`.
- **Low-Contrast Outlines:** Instead of shadows, use 1px borders in a slightly darker shade of the background (e.g., 10% opacity Cocoa Brown) to define containers.
- **Selective Focus:** A single, very soft ambient shadow (15% opacity, 20px blur) may be used for primary action menus or hover states on product cards to indicate interactivity.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding removes the clinical "sharpness" of pure corporate grids, adding a touch of organic warmth that aligns with the "Cocoa" and "Green" palette.

- **Buttons:** Use `rounded-lg` (0.5rem) to feel approachable but intentional.
- **Product Imagery:** Should maintain sharp or very slightly rounded edges (4px) to preserve the "professional" and "exact" feel of a logistics/export firm.
- **Input Fields:** Standard `rounded` (0.25rem) to maintain a systematic appearance.

## Components

### Buttons
Primary buttons use a solid Cocoa Brown background with White text. Secondary buttons use a Cocoa Brown outline with a transparent background. All buttons feature a subtle 200ms transition on hover, deepening the background color slightly.

### Cards
Product and logistics cards use the tonal layering approach. They feature a white background against the beige page surface with a 1px soft border. Product images within cards should be high-resolution, using a "Hero" style with natural lighting.

### Input Fields
Fields are minimalist: a bottom-border only or a very light 4-sided stroke. Labels always use the `label-caps` typography style for a structured, architectural look.

### Chips & Status Indicators
Used for tracking export stages (e.g., "In Transit," "Quality Checked"). These use the Organic Green or Earthy Gold as subtle background tints with dark text to ensure high legibility and a professional demeanor.

### Navigation
The header should be transparent on scroll-up and solidify to the off-white background on scroll-down, keeping the navigation unobtrusive and content-focused.