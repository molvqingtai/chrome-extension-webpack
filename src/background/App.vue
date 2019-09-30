<template lang="html">
  <div id="app" class="app">
    <v-title></v-title>
    <v-desc></v-desc>
    <v-logo></v-logo>
  </div>
</template>

<script>
import browser from 'webextension-polyfill'
import VTitle from './component/V-Title.vue'
import VDesc from './component/V-Desc.vue'
import VLogo from './component/V-Logo.vue'
export default {
  name: 'Background',
  components: {
    VTitle,
    VDesc,
    VLogo
  },
  methods: {
    handleIconClick (e) {
      browser.tabs.create({
        url: 'background.html'
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    browser.browserAction.onClicked.addListener(this.handleIconClick)
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
}
</style>
