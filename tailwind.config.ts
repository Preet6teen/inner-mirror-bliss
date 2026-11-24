import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1240px",
      },
    },
    extend: {
      maxWidth: {
        content: "1240px",
      },
      colors: {
        // Strict Design Direction Color Tokens
        primary: {
          DEFAULT: "#552878", // Primary Deep Spiritual Purple
          hover: "#431E5F",
          dark: "#351044",    // Deep Plum
          light: "#6E359B",
          50: "#FAF6FC",
          100: "#F1E6F6",     // Light Lavender
          200: "#DFC8EC",
          300: "#C8A5E8",     // Lavender
          400: "#A775D4",
          500: "#864DB8",
          600: "#6B3798",
          700: "#552878",
          800: "#411E5D",
          900: "#351044",
        },
        plum: {
          DEFAULT: "#351044",
          deep: "#280A34",
          soft: "#4E2061",
        },
        lavender: {
          DEFAULT: "#C8A5E8",
          light: "#F1E6F6",
          mist: "#F7F0FA",
          dark: "#9E6FCC",
        },
        blush: {
          DEFAULT: "#F5DFE9",
          soft: "#FBF0F5",
          rose: "#E8BFD2",
        },
        ivory: {
          DEFAULT: "#FFF9F1",
          cream: "#FAF4EB",
          warm: "#F5EDE0",
        },
        gold: {
          DEFAULT: "#D6B36A", // Champagne Gold
          light: "#F3E3BC",
          hover: "#C39E52",
          dark: "#A38037",
          metallic: "#D6B36A",
        },
        body: {
          DEFAULT: "#45364D", // Deep Plum-Charcoal for reading
          dark: "#2A1E31",
        },
        muted: {
          DEFAULT: "#897A8E", // Elegant Muted Lavender-Gray
          light: "#B2A7B6",
          dark: "#66586C",
        },
        card: {
          DEFAULT: "#FFFFFF",
          ivory: "#FFFDF9",
          lavender: "#FAF5FC",
          blush: "#FCF5F8",
        },
        border: {
          DEFAULT: "rgba(85, 40, 120, 0.12)",
          gold: "rgba(214, 179, 106, 0.4)",
          subtle: "rgba(85, 40, 120, 0.08)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-lato)", "Lato", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        script: ["var(--font-great-vibes)", "Great Vibes", "cursive"],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '30': '120px',
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(85, 40, 120, 0.06)",
        card: "0 8px 30px -4px rgba(85, 40, 120, 0.08)",
        cardHover: "0 16px 40px -6px rgba(85, 40, 120, 0.14)",
        gold: "0 6px 24px -2px rgba(214, 179, 106, 0.3)",
        goldHover: "0 10px 32px -4px rgba(214, 179, 106, 0.45)",
        floating: "0 20px 50px -10px rgba(53, 16, 68, 0.16)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F3E3BC 0%, #D6B36A 50%, #B89246 100%)",
        "gold-shimmer": "linear-gradient(90deg, #D6B36A 0%, #FFF9F1 50%, #D6B36A 100%)",
        "primary-gradient": "linear-gradient(135deg, #552878 0%, #351044 100%)",
        "lavender-subtle": "linear-gradient(180deg, #FFF9F1 0%, #F1E6F6 100%)",
        "blush-subtle": "linear-gradient(180deg, #FFF9F1 0%, #F5DFE9 100%)",
        "card-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 249, 241, 0.95) 100%)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
