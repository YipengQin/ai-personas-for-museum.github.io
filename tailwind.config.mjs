/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#000044',
                secondary: '#021d60',
                white: '#ffffff',
                black: '#000000',
                gray: {
                    100: '#f7f7f7',
                    200: '#f0f0f0',
                    300: '#e3e3e3',
                    400: '#c1c1c1',
                    500: '#a1a1a1',
                    600: '#6e6e6e',
                    700: '#4a4a4a',
                    800: '#2d2d2d',
                    900: '#1a1a1a',
                },
            },
            backgroundColor: '#021d60',
            textColor: "#ffffff"
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require("daisyui")
    ],
}
