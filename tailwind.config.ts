/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          bg: '#ffffff',
          sidebar: '#f7f6f3',
          hover: '#efeee9',
          border: '#e3e2e0',
          text: '#37352f',
          subtle: '#787774',
          badge: '#f1f1ef',
          accent: '#2383e2',
          black: '#191919',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Helvetica',
          '"Apple Color Emoji"',
          'Arial',
          'sans-serif',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        serif: [
          'Lyon-Text',
          'Georgia',
          'ui-serif',
          'serif',
        ],
        mono: [
          'iawriter-mono',
          'Nitti',
          'Menlo',
          'Courier',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
