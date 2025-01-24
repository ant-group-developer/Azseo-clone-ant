import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                secondText: 'var(--secondTextColor)',
                bgSidebar: 'hsl(var(--sidebar-background))',
                titleColor: 'var(--title-color',
            },
        },
    },
    plugins: [],
} satisfies Config;
