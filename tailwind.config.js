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
        'blur-background': 'url("/background.svg")',
      },
      fontSize: {
        '40xl': '2.5rem'
      },
      colors: {
        'green-darkerr': '#015F43',
        'greenn': '#00875F',
        'green-lighterr': '#00B37E',
        'bluerr': '#81D8F7',
        'warningrr': '#FBA94C',
        'red error': '#F75A68',
        'grayrr1': '#09090A',
        'grayrr2': '#121214',
        'grayrr4': '#323238',
        'grayrr5': '#E1E1E6',
        'grayrr6': '#C4C4CC',
        'grayrr6': '#8D8D99',
        'whitee': '#FFFFFF',
      },
    },
    fontFamily: {
      'roboto': ['Roboto'],
    }
  },
  plugins: [],
}
