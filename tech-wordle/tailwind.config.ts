// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/hooks/**/*.{js,ts,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'wordle-correct': '#6aaa64',
                'wordle-present': '#c9b458',
                'wordle-absent': '#787c7e',
            },
            animation: {
                'bounce-short': 'bounce 0.5s ease-in-out 1',
            },
            keyframes: {
                flipInX: {
                    '0%': { transform: 'rotateX(90deg)', opacity: '0' },
                    '100%': { transform: 'rotateX(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};

export default config;