/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0B1130',
        paper: '#121A44',
        'paper-soft': '#161F52',
        ink: '#F5F7FF',
        'ink-soft': '#AEB8DE',
        'ink-faint': '#6E77A8',
        blue: {
          soft: '#7BB4E8',
          deep: '#4C7FE0',
          bright: '#63A0FF',
          line: '#26305F',
          glow: '#1C2358',
        },
        rec: '#E4572E',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 10px 40px -10px rgba(76, 127, 224, 0.35)',
        'card-hover': '0 25px 70px -14px rgba(99, 160, 255, 0.5)',
        glow: '0 0 0 1px rgba(123,180,232,0.15), 0 0 40px rgba(76,127,224,0.25)',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.25 },
        },
        rise: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(14px, -18px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-16px, 14px) scale(1.05)' },
        },
        gradientPan: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        beam: {
          '0%': { transform: 'translateX(-120%) rotate(8deg)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { transform: 'translateX(220%) rotate(8deg)', opacity: 0 },
        },
      },
      animation: {
        scan: 'scan 2.5s linear infinite',
        blink: 'blink 1.6s ease-in-out infinite',
        rise: 'rise 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 11s ease-in-out infinite',
        gradientPan: 'gradientPan 6s ease infinite',
        beam: 'beam 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
