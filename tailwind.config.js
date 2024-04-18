/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './index-dist.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './test/*.ts',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
