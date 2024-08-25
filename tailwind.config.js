/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {

   
    extend: {
      screens:{
       'xs': '480px',
       'tab':"1225px"  ,
         'md': '815px',
      },
     animation : {
      
      wiggle: 'wiggle 1s ease-in-out infinite',
     },

     keyframes:{
     
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
     }
    },
  },
 
  plugins: [],
}

