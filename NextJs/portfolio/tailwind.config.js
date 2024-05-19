/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    theme: {
        fontSize: {
            xs: ['12px', {lineHeight: '24px', letterSpacing: '-0.03em'}],
            sm: ['16px', {lineHeight: '28px', letterSpacing: '-0.03em'}],
            lg: ['18px', {lineHeight: '28px', letterSpacing: '-0.03em'}],
            xl: ['24px', {lineHeight: '36px', letterSpacing: '-0.03em'}],
            '2xl': ['36px', {lineHeight: '48px', letterSpacing: '-0.032em'}],
            '3xl': ['48px', {lineHeight: '56px', letterSpacing: '-0.032em'}],
            '4xl': ['56px', {lineHeight: '64px', letterSpacing: '-0.032em'}],
            '5xl': ['80px', {lineHeight: '80px', letterSpacing: '-0.032em'}],
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
                DEFAULT: '1rem', // Padding por defecto
                sm: '1rem',      // Padding para pantallas pequeñas (sm)
                md: '2rem',      // Padding para pantallas medianas (md)
                lg: '2rem'  // Padding para pantallas extra grandes (xl)
            },
        },
        extend: {
            colors: {

                primary: {
                    DEFAULT: "var(--primary)"
                },
                secondary: "var(--secondary)",
                text: "var(--text)",
                background: "var(--background)",
                tabs: "var(--tabsBg)",
                tabsSelected: "var(--tabs-selected)",
                navbar: "var(--navbar)",

                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",

            },
            /*borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },*/
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