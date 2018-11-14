var config = {
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://d36263b6wju30t.cloudfront.net/theme/v1.0.1/css/basefont.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://s3-us-west-1.amazonaws.com/tekion-ui-theme/v1.0.1/fonts/tekionicon/style.css'
        }
      ]
    }
  },
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Proxima-Nova-Regular',
        fontSize: '14px'
      }
    }
  },
  ignore: [
    '**/components/__tests__/**',
    '**/components/index.js',
    '**/components/_utils/**',
    '**/components/context/**',
    '**/components/atoms/_input/**',
    '**/components/atoms/_clickaway-listener/**',
    '**/components/atoms/_popover/**',
    '**/components/atoms/_action-text/**',
    '**/**/_*.js'
  ]
}

module.exports = config
