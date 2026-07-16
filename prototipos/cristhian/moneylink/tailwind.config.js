/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./es/**/*.html",
    "./en/**/*.html",
    "./ja/**/*.html",
    "./index.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#084C95",
        "on-primary": "#ffffff",
        "primary-container": "#008CA6",
        "on-primary-container": "#53D1E5",
        "primary-fixed": "#D6E3FF",

        "secondary": "#5A6270",
        "on-secondary": "#ffffff",
        "secondary-container": "#DEE2EA",
        "on-secondary-container": "#5F6570",

        "tertiary": "#00A5C5",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#005C72",
        "on-tertiary-container": "#53D1E5",
        "tertiary-fixed": "#53D1E5",
        "tertiary-fixed-dim": "#008CA6",
        "on-tertiary-fixed": "#001C42",
        "on-tertiary-fixed-variant": "#005C72",

        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        "background": "#FFFFFF",
        "on-background": "#1a1c1e",
        "surface": "#FFFFFF",
        "on-surface": "#1a1c1e",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f4f6",
        "surface-container": "#eceef1",
        "surface-container-high": "#e6e8eb",
        "surface-container-highest": "#e0e2e5",

        "outline": "#74787F",
        "outline-variant": "#C4C7CF",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "margin-mobile": "4vw",
        "unit": "0.5rem",
        "margin-desktop": "clamp(2rem, 5vw, 4rem)",
        "gutter": "clamp(1rem, 2vw, 1.5rem)",
        "container-max": "80rem"
      },
      fontFamily: {
        "headline-xl": ["DM Serif Display", "Noto Serif JP", "serif"],
        "headline-lg": ["DM Serif Display", "Noto Serif JP", "serif"],
        "headline-lg-mobile": ["DM Serif Display", "Noto Serif JP", "serif"],
        "body-sm": ["Outfit", "Noto Sans JP", "sans-serif"],
        "body-md": ["Outfit", "Noto Sans JP", "sans-serif"],
        "label-caps": ["Outfit", "Noto Sans JP", "sans-serif"]
      },
      fontSize: {
        "headline-xl": ["clamp(2.25rem, 4vw, 3rem)", { "lineHeight": "1.15", "letterSpacing": "-0.02em", "fontWeight": "400" }],
        "headline-lg": ["clamp(1.5rem, 2.5vw, 2rem)", { "lineHeight": "1.25", "fontWeight": "400" }],
        "headline-lg-mobile": ["clamp(1.5rem, 5vw, 1.75rem)", { "lineHeight": "1.3", "fontWeight": "400" }],
        "body-sm": ["clamp(0.8rem, 1.2vw, 0.875rem)", { "lineHeight": "1.5", "fontWeight": "400" }],
        "body-md": ["clamp(0.875rem, 1.4vw, 1rem)", { "lineHeight": "1.6", "fontWeight": "400" }],
        "label-caps": ["clamp(0.65rem, 1vw, 0.75rem)", { "lineHeight": "1.35", "letterSpacing": "0.1em", "fontWeight": "700" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
