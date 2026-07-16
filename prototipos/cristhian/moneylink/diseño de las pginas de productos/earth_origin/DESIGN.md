---
name: Earth & Origin
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#4d4540'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#7e756f'
  outline-variant: '#cfc4bd'
  surface-tint: '#635d5a'
  primary: '#181512'
  on-primary: '#ffffff'
  primary-container: '#2d2926'
  on-primary-container: '#96908b'
  inverse-primary: '#cdc5c0'
  secondary: '#7c5730'
  on-secondary: '#ffffff'
  secondary-container: '#fdcb9b'
  on-secondary-container: '#79542d'
  tertiary: '#2e0900'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b1b08'
  on-tertiary-container: '#c77f65'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9e1dc'
  primary-fixed-dim: '#cdc5c0'
  on-primary-fixed: '#1e1b18'
  on-primary-fixed-variant: '#4b4642'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#eebd8e'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#61401b'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#6f3722'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
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
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The brand personality is rooted in "Informed Luxury"—a bridge between the raw, high-altitude origins of Bolivian gourmet goods and the disciplined, minimalist aesthetic of the Japanese high-end market. The design system avoids cliché cultural tropes, opting instead for a tactile, editorial experience that mirrors the quality of the physical product.

The style is a fusion of **Minimalism** and **Tactile Sophistication**. It prioritizes generous negative space to allow products to breathe, combined with a structural rigor that evokes trust and heritage. The emotional response should be one of quiet confidence, authenticity, and refined craft.

## Colors
The palette is derived from natural source materials: Cacao, Clay, and Sand. 

*   **Primary (Charcoal - #2D2926):** Used for primary typography and deep structural elements. It provides the grounding force of the brand.
*   **Secondary (Soft Gold - #A67C52):** Used sparingly for accents, icons, and subtle calls to action to denote premium quality.
*   **Tertiary (Terracotta - #D98E73):** Represents the earth of the Andes, used for highlights and warm UI interactions.
*   **Neutral (Ivory/Sand - #F9F7F2):** The primary background color. It is warmer than pure white, providing a more artisanal and organic feel.
*   **Accents:** Use a deep Cacao Brown (#3C2A21) for hover states and secondary text to maintain warmth.

## Typography
The typographic strategy relies on a high-contrast pairing. **Playfair Display** provides the editorial authority, used for large display headlines and section titles. Its elegant serifs convey heritage and luxury.

**Hanken Grotesk** is used for all functional and body text. It is a clean, contemporary sans-serif that ensures clarity and professionalism, especially when presenting technical product details or logistical information. 

Large display type should utilize slight negative letter-spacing for a more compact, modern feel. Labels and small navigation items should always use the `label-caps` style with increased tracking for legibility.

## Layout & Spacing
This design system utilizes a **Fixed Grid** philosophy for desktop to maintain the integrity of editorial compositions, while transitioning to a fluid model for smaller viewports.

*   **Desktop:** 12-column grid with a 1280px max-width. Margins are intentionally wide (64px) to create a frame around the content, emphasizing the "gallery" feel.
*   **Rhythm:** An 8px base unit governs all padding and margins. Use larger vertical increments (80px, 120px, 160px) between sections to enforce the "intentional negative space" requirement.
*   **Mobile:** 4-column grid with 20px side margins. Padding inside cards and containers should be reduced to 16px to maximize screen real estate for imagery.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

*   **Surfaces:** Use subtle shifts between the neutral background (#F9F7F2) and a slightly darker "Stone" tint (#F0EDE6) to define secondary containers or cards.
*   **Borders:** Use very thin (1px) borders in #DED9D1 for cards and input fields. This provides structure without visual clutter.
*   **Shadows:** When necessary for interactivity (e.g., a hovered card), use a single, highly diffused "Ambient Shadow": `0 12px 40px rgba(45, 41, 38, 0.04)`.
*   **Glassmorphism:** To be used exclusively for sticky navigation bars, using a light backdrop blur (12px) and 80% opacity of the neutral background color.

## Shapes
The shape language is **Soft (Level 1)**. Elements like buttons and cards feature a 4px (0.25rem) radius. This creates a subtle hint of approachability while maintaining the sharp, clean lines expected in a high-end luxury brand. 

Avoid fully circular buttons (except for icon-only buttons); instead, use the soft-cornered rectangular aesthetic for all primary calls to action.

## Components
*   **Buttons:** Primary buttons are solid Charcoal (#2D2926) with Ivory text. Secondary buttons use a Charcoal border with no fill. All buttons use the `label-caps` typography.
*   **Cards:** Minimal containers with 1px borders. Images should be the hero of the card, often bleeding to the top and sides, with text content padded generously at the bottom.
*   **Input Fields:** Ghost-style inputs with a bottom-border only or a very light 1px wrap. Focus states use the Soft Gold (#A67C52) border.
*   **Chips/Tags:** Used for product categories (e.g., "Single Origin"). Rectangular with a 2px radius, utilizing the Terracotta tint (#D98E73) at 10% opacity for the background.
*   **Line Art:** Use 1pt weight strokes for all icons and maps. Avoid fills; icons should be open and airy.
*   **Lists:** Editorial style with ample line-height and thin horizontal dividers between items.