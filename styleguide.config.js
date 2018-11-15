var config = {
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  },
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Montserrat, helvetica, arial, sans-serif',
        fontSize: '14px'
      }
    }
  },
  serverPort: 6061,
  ignore: [
    '**/components/__tests__/**',
    '**/components/index.js',
    '**/components/_utils/**',
    '**/**/_*.js'
  ]
}

module.exports = config
