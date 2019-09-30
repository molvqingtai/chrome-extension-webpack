const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
const Fiber = require('fibers')
const Sass = require('sass')
const webpack = require('webpack')
const { createHash } = require('crypto')

const HASH = createHash('md5').update(Math.random().toString()).digest('hex').slice(0, 8)

const htmlWebpackPluginConfig = ({ entry, ignore, chunks }) => {
  return Object.keys(entry).filter(name => !ignore.includes(name)).map(name => {
    return new HtmlWebpackPlugin({
      title: name,
      filename: `${name}.html`,
      template: 'public/index.html',
      chunks: [...chunks, name]
    })
  })
}

const commonConfig = {
  entry: {
    popup: './src/popup/index.js',
    options: './src/options/index.js',
    content: './src/content/index.js',
    background: './src/background/index.js'
  },
  output: {
    publicPath: './',
    path: path.resolve(__dirname, '../dist'),
    // filename: 'js/[name].[hash:6].js',7
    // chunkFilename: 'js/[name].[hash:6].js'

    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      images: '@/assets/images',
      styles: '@/assets/styles',
      fonts: '@/assets/fonts'
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
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
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
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist')
      }
    ]),
    new webpack.DefinePlugin({
      'process.env.HASH': JSON.stringify(HASH)
    }),
    new WebpackBuildNotifierPlugin()
  ]
}

commonConfig.plugins = [
  ...commonConfig.plugins,
  ...htmlWebpackPluginConfig({
    entry: commonConfig.entry,
    ignore: ['content'],
    chunks: ['vendors']
  })
]

module.exports = commonConfig
