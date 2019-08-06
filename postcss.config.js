/**
 * https://postcss.org/
 * @type {Object}
 */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 3
    }),
    require('cssnano')({
      preset: 'default'
    }),
    require('postcss-reporter')({
      clearReportedMessages: true
    })
  ]
}
