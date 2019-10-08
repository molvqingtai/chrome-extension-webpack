<template lang="html">
  <button class="button" type="button" name="button" @click="$emit('click',$event)">
    <slot>Link Button</slot>
  </button>
</template>

<script>
export default {
  name: 'VButton'
}
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 20px;
  border: none;
  background-color: #1b78bf;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #1b78bfcc;
  }

  &:active {
    background-color: #1b78bfff;
  }
}
</style>
