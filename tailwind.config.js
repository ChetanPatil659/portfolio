/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      '9xl' : ['12rem' , '11rem'],
      'xl' :  ['2.5rem' , '2.4rem'],
      'base': ['1rem' , '1.2rem'],
      'sm': ['0.75rem' , '1rem'],
      'lg': '2rem',
      'xs': '1.5rem'
    }
  },
  plugins: [],
}
