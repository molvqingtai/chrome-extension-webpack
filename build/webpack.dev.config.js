const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')
const WriteFileWebpackPlugin = require('write-file-webpack-plugin')
// const WebpackExtensionReloader = require('webpack-extension-reloader')
const webpack = require('webpack')
const { createHash } = require('crypto')
module.exports = merge(baseConfig, {
  mode: 'development',
  watch: true,
  devtool: 'source-map',
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
