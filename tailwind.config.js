// Extend the default sans font family and add Roboto to it instead of wiping it out by Roboto font only
// we get the defaut Tailwinscss theme in a variabla then we extract font Family sans array
const defaultTheme = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
         sans:["Roboto", ...defaultTheme.fontFamily.sans],
         Roboto:["Roboto",'sans-serif'],
      },
      colors :{
        Tomato: 'hsl(4, 100%, 67%)',
        DarkSlateGrey: 'hsl(234, 29%, 20%)',
        CharcoalGrey: 'hsl(235, 18%, 26%)',
        CustomGrey: 'hsl(231, 7%, 60%)',
        White: 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
};
