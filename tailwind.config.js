import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    theme: {
        extend: {
            colors: {
                border: 'var(--border)',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: {
                    DEFAULT: '(var(--text-primary)',
                    foreground: '(var(--bg-none)',
                },
                secondary: {
                    DEFAULT: 'var(--text-secondary)',
                    foreground: '(var(--bg-none)',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'var(--accent)'
                },
            },
            borderRadius: {
                lg: 'var(--radius-lg)',
                sm: 'var(--radius-sm)',
            },
            fontFamily: {
            sans: ['Akt Variable', 'sans-serif'],
            mono: ['IBM Plex Mono', 'monospace'],
        },
        },
    },
    plugins: [forms],
};
