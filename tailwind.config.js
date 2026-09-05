/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#08090F',
          900: '#0E111A',
          850: '#131725',
          800: '#191E30',
          700: '#242B42',
        },
        ink: {
          50: '#F5F6F9',
          100: '#E9EBF2',
          300: '#AEB4C7',
          500: '#7A8197',
        },
        signal: {
          DEFAULT: '#5B6EF5',
          soft: '#8A97FF',
          dim: '#2E3684',
        },
        mint: {
          DEFAULT: '#2FE6B0',
          dim: '#12503F',
        },
        amber: {
          DEFAULT: '#FF9B4D',
          dim: '#5A3A1E',
        },
        paper: {
          50: '#FBFAF7',
          100: '#F2F0EA',
          300: '#D8D5CC',
          500: '#8B8778',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35)',
        glow: '0 0 40px rgba(91,110,245,0.25)',
      },
      borderRadius: {
        pill: '999px',
        tile: '22px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
}
