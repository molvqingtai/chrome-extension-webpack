const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const Fiber = require('fibers')
const Sass = require('sass')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')
const WriteFileWebpackPlugin = require('write-file-webpack-plugin')
// const WebpackExtensionReloader = require('webpack-extension-reloader')

module.exports = merge(baseConfig, {
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    host: '0.0.0.0',
    open: true
  },
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
              importLoaders: 2,
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
    new StylelintWebpackPlugin({
      files: ['src/**/*.{html,vue,css,scss}'],
      cache: true
    }),
    new WriteFileWebpackPlugin()
    // new webpack.HotModuleReplacementPlugin()
    // new WebpackExtensionReloader()

  ]
})
