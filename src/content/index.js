import Vue from 'vue'
import App from './App.vue'
import Wc from './wc'

const app = new Vue({
  render: h => h(App)
}).$mount()

new Wc({
  app: app,
  name: 'chrome-extension'
}).mount(document.body)
