const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.config')
const WriteFileWebpackPlugin = require('write-file-webpack-plugin')
// const WebpackExtensionReloader = require('webpack-extension-reloader')

module.exports = merge.smart(commonConfig, {
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(css|scss)$/,
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }]
  },
  plugins: [
    new WriteFileWebpackPlugin()
    // new webpack.HotModuleReplacementPlugin()
    // new WebpackExtensionReloader()
  ]
})
