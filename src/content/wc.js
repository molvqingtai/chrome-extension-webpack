import '@webcomponents/webcomponentsjs'

export default class WebComponent {
  constructor ({ app, name }) {
    class CustomElement extends HTMLElement {
      constructor () {
        super()
        this.attachShadow({ mode: 'open' }).appendChild(app.$el)
      }
    }
    customElements.define(name, CustomElement)
    this.el = new CustomElement()
  }

  mount (root) {
    root.appendChild(this.el)
    return this
  }
}
