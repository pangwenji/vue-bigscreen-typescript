<template>
    <div class="box">
        <dv-border-box-1>
            <p>任务总量</p>
            <div>
                <Chart />
            </div>
        </dv-border-box-1>
    </div>
  </template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
import Chart from './chart/index'
export default defineComponent({
  components: {
    Chart
  },
  setup () {
    return {

    }
  }
})
</script>

  <style lang="scss" scoped>
      .box{
          width: 458px;
          height: 258px;
      }
  </style>
