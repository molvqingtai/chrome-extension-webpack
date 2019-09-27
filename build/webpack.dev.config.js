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
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        sideEffects: true,
        use: [
          {
            loader: 'style-loader',
            options: {
              // sourceMap: true,
              insert: (element) => {
                console.log(element)
                return document.body
              }
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
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: Sass,
              fiber: Fiber
            }
          }

        ]
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
