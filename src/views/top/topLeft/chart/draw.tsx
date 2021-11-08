import { defineComponent, watch, shallowReactive } from 'vue'
// 声明类型
const PropsType = {
  cdata: {
    type: Object,
    require: true
  }
} as const
// interface paramsType{
//     tooltip: Object,
//     legend:Object,
//     grid:Object,
//     toolbox:Object,
//     xAxis:Object,
//     yAxis:Object,
//     series:Object
// }
// 定义主体
export default defineComponent({
  props: PropsType,
  setup (props) {
    // 配置项
    let options = shallowReactive<any>({})

    watch(
      () => props.cdata,
      (val: any) => {
        options = {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true
            }
          ]
        }
      },
      {
        immediate: true,
        deep: true
      }
    )

    return () => {
      const height = '382px'
      const width = '128px'

      return <div>
        <echart options={options} height={height} width={width} />
      </div>
    }
  }
})
