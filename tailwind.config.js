module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilites: true,
  },
  purge: {
    mode: 'layers',
    content: [
      './src/**/*.ts',
      './src/**/*.js',
      './src/**/*.tsx',
      './src/**/*.jsx',
      './src/**/*.html',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        body: 'Roboto',
      },
      colors: {
        'regal-blue': 'var(--regal-blue)',
      },
    },
  },
  variants: {},
  plugins: [],
}
