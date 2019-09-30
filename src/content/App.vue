<template lang="html">
  <div id="app" class="app" v-draggable>
    <v-title></v-title>
    <v-desc></v-desc>
    <v-logo></v-logo>
  </div>
</template>

<script>
import { Draggable } from 'draggable-vue-directive'
import VTitle from './component/V-Title.vue'
import VDesc from './component/V-Desc.vue'
import VLogo from './component/V-Logo.vue'
export default {
  name: 'app',
  directives: {
    Draggable
  },
  components: {
    VTitle,
    VDesc,
    VLogo
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
  top: 20vw;
  left: calc(50vw - 450px);
  z-index: 999;
  cursor: grab;
}
</style>
