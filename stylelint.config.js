/**
 * https://stylelint.io/
 * @type {Object}
 */
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['v-deep']
    }]
  }
}
