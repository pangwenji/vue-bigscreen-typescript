import { defineComponent, reactive } from 'vue'
import Draw from './draw'

export default defineComponent({
  components: {
    Draw
  },
  setup () {
    const cdata = reactive({
      xData: ['2021-Q1', '2021-Q2', '2021-Q3', '2021-Q4'],
      seriesData: [
        {
          name: 'hong',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134]
        },
        {
          name: 'hei',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234]
        }
      ]
    })

    return () => {
      return <div>
        <Draw cdata={cdata} />
      </div>
    }
  }
})
