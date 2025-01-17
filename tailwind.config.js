/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
	  typography: {
              DEFAULT: {
		  css: {
		      pre: {
			  backgroundColor: 'inherit',
			  color: 'inherit',
			  padding: 'inherit',
		      },
		      code: {
			  backgroundColor: 'inherit',
			  padding: 'inherit',
		      }
		  }
	      }
	  },   
	    fontFamily: {
		'young': ['Young Serif', 'serif'],
		'quicksand': ['Quicksand', 'sans-serif'],
		'poppins': ['Poppins', 'sans-serif'],
		'comfortaa': ['Comfortaa', 'sans-serif'],
		'comm': ['Commissioner', 'sans-serif'],
	    },
      },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...other plugins
  ],
}
