<template lang="html">
  <div class="">
    <h1>{{ msg }}</h1>
    <img src="../assets/images/test.png">
    <img src="../assets/images/icon-32.png">
  </div>
</template>

<script>
import browser from 'webextension-polyfill'
import chunk from 'lodash/chunk'
export default {
  name: 'Background',
  data () {
    return {
      msg: 'Hi,I am the background page.',
      value: ''
    }
  },
  mounted () {
    browser.browserAction.onClicked.addListener(this.handleIconClick)
    console.log('挂载成功！')
    // console.log([['0', 'a'], ['1', 'b'], ['2', 'c']].flat())
    // console.log(Object.fromEntries([['0', 'a'], ['1', 'b'], ['2', 'c']]))
    //
    // import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    //   console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
    // })
    console.log(chunk(['a', 'b', 'c', 'd'], 2))
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
  }

}
</script>
<style lang="css" scoped>
img {
  max-width: 50%;
}
</style>
