/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {

   
    extend: {
     animation : {
      rotating: 'rotating 2s ease-in-out infinte',
      scale: 'scaleUp 2s ease-in-out infinite',
      wiggle: 'wiggle 1s ease-in-out infinite',
     },

     keyframes:{
      rotating:{
        '0% ,100%': { tranform: 'rotate(0deg)'},
        '50%': {tranform : 'rotate(360deg)'},
        
      },
      scaleUp:{
        '0% , 100%': {tranform :'scale(1)'},
           '50%' : {tranform: 'scale(1.5)'}
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
     }
    },
  },
 
  plugins: [],
}

