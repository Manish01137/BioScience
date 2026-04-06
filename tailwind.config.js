/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:       '#1A292F',
        'navy-mid': '#243a41',
        'b-teal':   '#6B8E99',
        'teal-dark':'#4a6e78',
        gold:       '#C5A059',
        'gold-light':'#e8c879',
        coral:      '#FF6B6B',
        'body-bg':  '#F8FAFB',
        'alt-bg':   '#F0F4F5',
        'b-text':   '#333333',
        meta:       '#7F8C8D',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        waPulse: {
          '0%,100%': { boxShadow: '0 4px 20px rgba(37,211,102,0.4)' },
          '50%':      { boxShadow: '0 4px 32px rgba(37,211,102,0.65), 0 0 0 8px rgba(37,211,102,0.1)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'wa-pulse': 'waPulse 2.8s ease-in-out infinite',
        'fade-up':  'fadeUp 0.6s ease forwards',
      },
      boxShadow: {
        card:    '0 4px 24px rgba(26,41,47,0.07)',
        'card-lg':'0 12px 48px rgba(26,41,47,0.12)',
        panel:   '0 8px 44px rgba(26,41,47,0.09)',
      },
    },
  },
  plugins: [],
}
