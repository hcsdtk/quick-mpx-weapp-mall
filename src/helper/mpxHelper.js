// 做一些公用页面的事情 比如方法

import mpx from '@mpxjs/core'

mpx.mixin({
  data: {
    mixins: {
      shit: '你好'
    }
  },
  methods: {},
  tapNavTo (e) {
    console.log(e)
  }
})
