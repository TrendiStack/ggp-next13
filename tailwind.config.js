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
        primary: {
          light: '#252422',
          DEFAULT: '#252422',
          dark: '#252422',
        },
        secondary: {
          light: '#F7FAFA',
          DEFAULT: '#F7FAFA',
          dark: '#F7FAFA',
        },
        accent: {
          light: '#DB504A',
          DEFAULT: '#DB504A',
          dark: '#DB504A',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundImage: {
        img1: "url('https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-delivery-icons/ggp-wood-bg.jpg')",
      },
      screens: {
        mob: '355px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
        laptopl: '1440px',
        desktopl: '1920px',
      },
    },
  },
  plugins: [],
};
