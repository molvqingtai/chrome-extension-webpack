<template lang="html">
  <div class="">
    <h1>{{ msg }}</h1>
    <img src="../assets/images/test.png">
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      msg: 'Hi,I am the content page.'
    }
  },
  mounted () {
    console.log(process.env.HASH)
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    color: blue;
  }

  img {
    width: 50%;
  }
</style>
