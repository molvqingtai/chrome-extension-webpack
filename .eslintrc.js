/**
 * https://cn.eslint.org/
 * https://eslint.vuejs.org
 * @type {Object}
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser:'babel-eslint'
  }
}
