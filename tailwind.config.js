/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '968px',
    xl: '1440px',
  },
  theme: {
    extend: {
      colors: {
        LightGreen: 'hsl(148, 38%, 91%)',
        Green: 'hsl(169, 82%, 27%)',
        Red: 'hsl(0, 66%, 56%)',
        White: 'hsl(0, 0%, 100%)',
        mediumGrey: 'hsl(186, 15%, 59%)',
        darkGrey: 'hsl(187, 24%, 22%)',
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
