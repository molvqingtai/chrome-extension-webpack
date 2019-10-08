<template lang="html">
  <div id="app" class="app" v-draggable>
    <v-title>Chrome-Extension-Webpack</v-title>
    <v-desc>Hi,I am the content page.</v-desc>
    <v-logo></v-logo>
    <v-button @click="handleClick">Open background page</v-button>
  </div>
</template>

<script>
import browser from 'webextension-polyfill'
import { Draggable } from 'draggable-vue-directive'
import VTitle from '../components/V-Title.vue'
import VDesc from '../components/V-Desc.vue'
import VLogo from '../components/V-Logo.vue'
import VButton from '../components/V-Button.vue'
export default {
  name: 'app',
  directives: {
    Draggable
  },
  components: {
    VTitle,
    VDesc,
    VLogo,
    VButton
  },
  methods: {
    handleClick (e) {
      browser.runtime.sendMessage('background.html')
    }
  }
}
</script>

<style lang="scss" scoped>

.app {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0 10px 0 #ddd;
  white-space: nowrap;
  border-radius: 5px;
  width: 700px;
  padding: 100px;
  position: fixed;
  top: 20vh;
  left: calc(50vw - 450px);
  z-index: 999;
  cursor: grab;
}
</style>
