/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aura: {
          /** Primary — deep black */
          black: "#0a0a0a",
          /** Accent — soft antique gold (low saturation, not yellow) */
          gold: "#958673",
          /** Lighter gold for type on dark surfaces — still restrained */
          "gold-soft": "#b0a38e",
          /** Near-white section surfaces */
          porcelain: "#f7f6f4",
          /** Hairlines and dividers */
          line: "#e6e5e2",
          /** Secondary body copy */
          stone: "#5c5c5c",
        },
      },
      fontFamily: {
        sans: [
          '"Poppins"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
        /** Headings — elegant serif */
        display: [
          '"Cormorant Garamond"',
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};
