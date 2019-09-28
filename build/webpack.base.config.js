const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Fiber = require('fibers')
const Sass = require('sass')
const webpack = require('webpack')
const { createHash } = require('crypto')
const HASH = createHash('sha256').update(Math.random().toString()).digest('hex').slice(0, 8)

module.exports = {
  entry: {
    popup: './src/popup/index.js',
    options: './src/options/index.js',
    content: './src/content/index.js',
    background: './src/background/index.js'
  },
  output: {
    publicPath: './',
    path: path.resolve(__dirname, '../dist'),
    // filename: 'js/[name].[hash:6].js',
    // chunkFilename: 'js/[name].[hash:6].js'

    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        sideEffects: true,
        use: [
          {
            loader: 'style-loader',
            options: {
              attributes: {
                'data-style-id': HASH
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
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 9999999,
              name: '[name].[hash:6].[ext]',
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 9999999,
              name: '[name].[hash:6].[ext]',
              outputPath: 'medias'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 9999999,
              name: '[name].[hash:6].[ext]',
              outputPath: 'fonts'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader', {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin({
      shadowMode: true
    }),
    new HtmlWebpackPlugin({
      title: 'options',
      filename: 'options.html',
      template: 'public/index.html',
      chunks: ['options', 'vendors']
    }),
    new HtmlWebpackPlugin({
      title: 'popup',
      filename: 'popup.html',
      template: 'public/index.html',
      chunks: ['popup', 'vendors']
    }),
    // new HtmlWebpackPlugin({
    //   title: 'content',
    //   filename: 'content.html',
    //   template: 'public/index.html',
    //   chunks: ['content', 'vendors']
    // }),
    new HtmlWebpackPlugin({
      title: 'background',
      filename: 'background.html',
      template: 'public/index.html',
      chunks: ['background', 'vendors']
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist')
      }
    ]),
    new webpack.DefinePlugin({
      'process.env.HASH': JSON.stringify(HASH)
    })
  ]
}
