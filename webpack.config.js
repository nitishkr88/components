var webpack = require('webpack')
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

var env = process.env.NODE_ENV

var config = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    library: 'Components',
    libraryTarget: 'umd'
  },
  plugins: [
    new LodashModuleReplacementPlugin({
      shorthands: true,
      paths: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
}

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

module.exports = config
