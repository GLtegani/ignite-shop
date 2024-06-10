import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#111111',

      gray50: '#F9FAFB',
      gray100: '#e1e1e6',
      gray300: '#c4c4cc',
      gray800: '#202024',
      gray900: '#121214',

      green500: '#00875f',
      green300: '#00b37e',
      zinc500: '#71717A',
      zinc700: '#3F3F46',
      zinc900: '#18181B',


    },
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)']
      }
    },
  },
  plugins: [],
};
export default config;
