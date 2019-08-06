/**
 * https://www.babeljs.cn/
 * @type {Object}
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: {
          version: 3,
          proposals: true
        },
        targets: {
          esmodules: true
        }
      }
    ]
  ]
}
