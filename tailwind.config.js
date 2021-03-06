module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {},
    fill: {
      white: '#FFFFFF'
    },
    colors: {
      fontColor: '#343434',
      backgroundColor: '#F8FAFC',
      primaryColor: '#4952FC',
      secondaryColor: '#5183F5',
      backgroundHoverColor: '#F2F2F2',
      darkBackgroundHoverColor: '#1A1A1A',
      fontSecondaryColor: '#FFFFFF',
      linkColor: '#5183F5',
      textWhite: '#FFFFFF',
      lineColor: '#E2E8F0',
      darkBackground: '#202020'
    },
    fontFamily: {
      sans: ['Inter']
    }
  },
  variants: {},
  plugins: []
}
