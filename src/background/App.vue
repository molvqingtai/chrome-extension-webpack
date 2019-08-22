<template lang="html">
  <div class="">
    <h1>{{ msg }}</h1>
    <input
      v-model="value"
      class="text"
      type="text"
    >
    <button
      class="button"
      @click="handleCopy"
    >
      点击复制
    </button>
    <img src="../assets/images/test.png">
    <img src="../assets/images/icon-32.png">
  </div>
</template>

<script>
import clipboard from 'clipboard-polyfill'
import qs from 'qs'
import axios from 'axios'
export default {
  name: 'Background',
  data () {
    return {
      msg: 'Hi,I am the background page.',
      value: ''
    }
  },
  mounted () {
    console.log('挂载成功！')
    // console.log([['0', 'a'], ['1', 'b'], ['2', 'c']].flat())
    // console.log(Object.fromEntries([['0', 'a'], ['1', 'b'], ['2', 'c']]))
    //
    // import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    //   console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
    // })
  },
  methods: {
    postMessage () {
      axios({
        method: 'post',
        url: 'http://xncs.dajiaok.com/after-sale-checkin/web/api/linkAdd',
        headers: {
          'x-auth-token': '8713f0f6-57c0-4740-930f-28d60ca2d560',
          token: '0a20279fea1977524f48b8a4077dc31b'
        },
        data: qs.stringify({
          tid: 45634456446,
          shopId: 9,
          categoryId: 1
        })
      })
    },
    async handleCopy () {
      await this.postMessage()
      clipboard.writeText(this.value).then(function (res) {
        alert('复制成功！')
      }, function () {
        alert('复制失败！')
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
