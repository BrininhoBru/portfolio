import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom green palette - non-tiring shades
        sage: {
          50: '#f6f8f6',
          100: '#e3ebe3',
          200: '#c7d7c7',
          300: '#a3bda3',
          400: '#7a9d7a',
          500: '#5a825a',
          600: '#486848',
          700: '#3a533a',
          800: '#2f432f',
          900: '#283828',
        },
        mint: {
          50: '#f0fdf9',
          100: '#ccfbef',
          200: '#9af6e1',
          300: '#5feacf',
          400: '#2dd4b8',
          500: '#14b89e',
          600: '#0d9482',
          700: '#0f766a',
          800: '#115e56',
          900: '#134e48',
        },
        forest: {
          50: '#f3f6f3',
          100: '#e3ebe3',
          200: '#c7d8c7',
          300: '#9fbc9f',
          400: '#6f9570',
          500: '#4f7750',
          600: '#3c5e3d',
          700: '#314b32',
          800: '#2a3f2b',
          900: '#253525',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
