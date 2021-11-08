<template>
    <div id="index" ref="appRef">
         <div class="backgorund_container" >
              <!-- 顶部 -->
              <div class="header">
                 xxdfthfhf
              </div>
              <!--第一行-->
              <div>
                  <top-left/>
              </div>
         </div>
    </div>
  </template>

<script lang="ts">
import {
  reactive,
  defineComponent,
  onMounted
} from 'vue'
import useIndex from '@/utils/useDraw'
import TopLeft from '../top/topLeft/index.vue'
export default defineComponent({
  components: {
    TopLeft
  },
  setup () {
    // * 加载标识
    // const loading = ref<boolean>(true)
    // * 时间内容
    const image = reactive({

    })
    const { appRef, windowDraw } = useIndex()
    onMounted(() => {
      windowDraw()
    })
    // const timeInfo = reactive({
    // })
    return {
      image,
      appRef
    }
  }
})
</script>

  <style lang="scss" scoped>
   @import '~@/assets/scss/index.scss';
  </style>
