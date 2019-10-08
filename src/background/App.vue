<template lang="html">
  <div id="app" class="app">
    <v-title>Chrome-Extension-Webpack</v-title>
    <v-desc>Hi,I am the background page.</v-desc>
    <v-logo></v-logo>
  </div>
</template>

<script>
import browser from 'webextension-polyfill'
import VTitle from '../components/V-Title.vue'
import VDesc from '../components/V-Desc.vue'
import VLogo from '../components/V-Logo.vue'
export default {
  name: 'app',
  components: {
    VTitle,
    VDesc,
    VLogo
  },
  methods: {
    openBackgroundPage (message) {
      browser.tabs.create({
        url: message
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    browser.runtime.onMessage.addListener(this.openBackgroundPage)
  }
}
</script>
<style lang="scss" scoped>
.app {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  white-space: nowrap;
  height: 70vh;
  width: 100vw;
  font-size: 16px;
  justify-content: center;
}
</style>
