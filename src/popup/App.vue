<template lang="html">
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'Options',
  data () {
    return {
      msg: 'Hi,I am the popup page.'
    }
  },
  mounted () {
    console.log('挂载成功！')
  }
}
</script>
