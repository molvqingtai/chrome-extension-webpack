import '@webcomponents/webcomponentsjs'

class CustomElement extends HTMLElement {
  constructor (el) {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    const styles = document.querySelectorAll(`style[data-style-id='${process.env.HASH}']`)
    shadow.append(...styles)
    shadow.appendChild(el)
  }
}

export default class WebComponent {
  constructor ({ app, name }) {
    customElements.define(name, CustomElement)
    this.el = new CustomElement(app.$el)
  }

  mount (selector) {
    document.querySelector(selector).appendChild(this.el)
    return this
  }
}
