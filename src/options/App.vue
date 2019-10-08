<template lang="html">
  <div id="app" class="app">
    <v-title>Chrome-Extension-Webpack</v-title>
    <v-desc>Hi,I am the option page.</v-desc>
    <v-logo></v-logo>
  </div>
</template>

<script>
import VTitle from '../components/V-Title.vue'
import VDesc from '../components/V-Desc.vue'
import VLogo from '../components/V-Logo.vue'
export default {
  name: 'app',
  components: {
    VTitle,
    VDesc,
    VLogo
  }
}
</script>
<style lang="scss" scoped>
.app {
  white-space: nowrap;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
