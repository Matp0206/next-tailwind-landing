// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        default: '#474747',
        light: '#F7F7F7',
        title: '#ECECEC',
        dark: '#1F1F1F',
        side: '#C8C8C8',
      },
      screens: {
        sm: '600px',
        md: '960px',
        lg: '1280px',
        xl: '1920px',
        'sm-max': { max: '600px' },
        'md-max': { max: '960px' },
        'lg-max': { max: '1280px' },
        'xl-max': { max: '1920px' },
      },
      zIndex: {
        '-2': '-2',
      },
      spacing: {
        '2x': 'calc(200%)',
        '3x': 'calc(300%)',
        '4x': 'calc(400%)',
        '5x': 'calc(500%)',
        '6x': 'calc(600%)',
        '7x': 'calc(700%)',
      },
      margin: {
        '-1/2': '-50%',
      },
      height: {
        half: '50vh'
      },
      backgroundSize: {
        '120': '30rem',
      },
      fontSize: {
        xs: ['.75rem', 'inherit'],
        '10xl': '13rem',
        '11xl': '15rem',
        '12xl': '17rem',
        
      },
      keyframes: {
        change: {
          '0%': { opacity: 0, color: 'white'},
          '80%': { opacity: 1, color: 'white'},
          '100%': {opacity: 1, color: 'white'},
        }
      }
    },
    animation: {
      change: 'change 5s'
    },
    cursor: {
      crosshair: 'crosshair',
      'zoom-in': 'zoom-in',
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      width: ['first'],
      height: ['first'],
      position: ['first'],
      animation: ['responsive', 'motion-safe', 'motion-reduce']
    },
    // mixBlendMode: ['hover', 'focus'],
    blur: ['hover', 'focus'],
    // scale: ['active', 'group-hover'],
    cursor: ['hover', 'focus'],
  },
}
