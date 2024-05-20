/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    theme: {
        fontSize: {
            xs: ['12px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
            sm: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
            lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
            xl: ['24px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
            '2xl': ['36px', { lineHeight: '48px', letterSpacing: '-0.032em' }],
            '3xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em' }],
            '4xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.032em' }],
            '5xl': ['80px', { lineHeight: '80px', letterSpacing: '-0.032em' }],
        },
        container: {
            center: true,
            screens: {
                sm: "100%",
                md: "100%",
                lg: "720px",
                xl: "720px"
            },
            padding: {
                DEFAULT: '1rem',
                sm: '1rem',
                md: '2rem',
                lg: '2rem',
            },
        },
        extend: {
            colors: {
                primary: "hsl(var(--primary) / <alpha-value>)",
                secondary: "hsl(var(--secondary) / <alpha-value>)",
                text: "hsl(var(--text) / <alpha-value>)",
                background: "hsl(var(--background) / <alpha-value>)",
                navbar: "hsl(var(--navbar) / <alpha-value>)",
                tabsBg: "hsl(var(--tabsBg) / <alpha-value>)",
                tabsSelected: "hsl(var(--tabsSelected) / <alpha-value>)",
                border: "hsl(var(--border) / <alpha-value>)",
                input: "hsl(var(--input) / <alpha-value>)",
                ring: "hsl(var(--ring) / <alpha-value>)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
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
