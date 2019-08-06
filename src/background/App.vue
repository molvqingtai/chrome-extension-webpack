<template lang="html">
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'Background',
  data () {
    return {
      msg: 'Hi,I am the background page.'
    }
  },
  mounted () {
    console.log('挂载成功！')
    console.log([['0', 'a'], ['1', 'b'], ['2', 'c']].flat())
    console.log(Object.fromEntries([['0', 'a'], ['1', 'b'], ['2', 'c']]))
  }
}
</script>
<style lang="css" scoped>
  h1 {
    color: red;
  }
</style>
