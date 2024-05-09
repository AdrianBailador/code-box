/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    fontSize: {
      xs: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em'}],
      sm: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em'}],
      lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.03em'}],
      xl: ['24px', { lineHeight: '36px', letterSpacing: '-0.03em'}],
      '2xl': ['36px', { lineHeight: '48px', letterSpacing: '-0.032em'}],
      '3xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em'}],
      '4xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.032em'}],
      '5xl': ['80px', { lineHeight: '80px', letterSpacing: '-0.032em'}],
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "720px",
        xl: "720px"
      },
      padding: '2rem',
    },
    extend: {
      colors: {
        primaryMain: "#4CAF50",
        secondaryMain: "#087F23",
        accentMain: "#FF5722",
        backgroundDark: "#0C151D",
        backgroundLight: "#F1F2F4",
        bgNav: "hsl(var(--bg-nav))",
        n700: "hsl(var(--n700))",
        silver: {
          n0: "#FFFFFF",
          n20: "#F1F2F4",
          n60: "#C3C7CB",
          n80: "#A3ABB2",
          n300: "#6D6D6D",
          n500: "#555555",
          n700: "#171F26",
          n900: "#222222",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        tabsContainer: {
          DEFAULT: "hsl(var(--tabs-container))",
          foreground: "hsl(var(--tabs-container-foreground))",
        },
        tabs: {
          DEFAULT: "hsl(var(--tabs))",
          foreground: "hsl(var(--tabs-foreground))",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {height: "0"},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: "0"},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}