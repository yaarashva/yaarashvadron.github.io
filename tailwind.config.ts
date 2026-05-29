import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        sand: {
          50: '#FAFAF8',
          100: '#F5F1EA',
          200: '#EAE4D8',
          300: '#D8CFBF',
          400: '#C0B49F',
          500: '#A0907A',
          600: '#7D6E5A',
          700: '#5C5041',
          800: '#3C342A',
          900: '#201C16',
          950: '#100E0A',
        },
        accent: {
          light: '#D4A878',
          DEFAULT: '#C08850',
          dark: '#A06830',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'grain': 'grain 8s steps(10) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(24px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-1%, -2%)' },
          '20%': { transform: 'translate(-3%, 1%)' },
          '30%': { transform: 'translate(2%, -2%)' },
          '40%': { transform: 'translate(-1%, 3%)' },
          '50%': { transform: 'translate(-2%, 1%)' },
          '60%': { transform: 'translate(1%, -2%)' },
          '70%': { transform: 'translate(-1%, 2%)' },
          '80%': { transform: 'translate(3%, 2%)' },
          '90%': { transform: 'translate(-1%, -1%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      typography: {
        stone: {
          css: {
            '--tw-prose-body': '#5C5041',
            '--tw-prose-headings': '#201C16',
            '--tw-prose-links': '#C08850',
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
