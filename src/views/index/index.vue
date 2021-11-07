<template>
    <div id="index" ref="appRef">
          <h1>xxx</h1>
    </div>
  </template>
  
  <script lang="ts">
  import {
    ref,
    reactive,
    defineComponent
  } from 'vue'
 
  
  export default defineComponent({
    components: {
    },
    setup() {
      // * 加载标识
      const loading = ref<boolean>(true)
      // * 时间内容
      const timeInfo = reactive({
      })
      return {
    
      }
    }
  })
  </script>
  
  <style lang="scss" scoped>
    @import '../../assets/scss/index.scss';
  </style>
  