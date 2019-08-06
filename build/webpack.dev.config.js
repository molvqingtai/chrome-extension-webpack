const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const Fiber = require('fibers')
const Sass = require('sass')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const ExtensionReloader = require('webpack-extension-reloader')

module.exports = merge(baseConfig, {
  mode: 'development',
  watch: true,
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: Sass,
              fiber: Fiber
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }

        ]
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({
      files: ['**/*.{html,vue,css,scss}'],
      cache: true
    })
    // new ExtensionReloader()
  ]
})
