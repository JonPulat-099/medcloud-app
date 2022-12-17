<template>
  <div class="chart">
    <div class="chart--wrapper" :style="{ width: width + 'px' }">
      <canvas :id="id"></canvas>
      <span id="doughnut-chart-value" :style="{fontSize: font_size + 'px'}"
        >{{ value }}%</span
      >
    </div>
    <span v-if="title" class="chart--title"> {{ title }} </span>
  </div>
</template>
<script>
import Chart from 'chart.js/auto'
export default {
  name: 'DoughnutChart',
  props: {
    id: {
      type: String,
      default: 'doughnut-chart',
    },
    width: {
      type: Number,
      default: 170,
    },
    isClick: {
      type: Boolean,
      default: false,
    },
    values: {
      type: Array,
      default: () => [74, 26],
    },
    background_color: {
      type: Array,
      default: () => ['#008DD2', '#ACB4C0'],
    },
    hover: {
      type: Array,
      default: () => ['#009846', '#E31E24'],
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      value: "",
      chartInstance: null,
    }
  },
  computed: {
    font_size() {
      return this.width / 5.6
    },
  },
  beforeMount() {
    this.value = this.values[0] || 0
  },
  mounted() {
    var chartjs = document.getElementById(this.id).getContext('2d')

    const data = {
      datasets: [
        {
          data: this.values.map(x => !x ? 100 : x ),
          backgroundColor: this.background_color,
        },
      ],
    }

    this.chartInstance = new Chart(chartjs, {
      type: 'doughnut',
      data: data,
      options: {
        borderWidth: 0,
        cutout: this.width / 2.45,
        responsive: true,
        plugins: {
          tooltip: {
            enabled: false, // <-- this option disables tooltips
          },
        },
        onClick: this.clickChart,
        onHover: (event, chartElement) => {
          if (this.isClick) {
            event.native.target.style.cursor = chartElement[0]
              ? 'pointer'
              : 'default'
          }
        },
      },
    })
  },
  methods: {
    clickChart(point, event) {
      if (event?.length && this.isClick) {
        const index = event[0]?.index
        this.value = this.values[index]

        this.chartInstance.data.datasets[0].backgroundColor =
          this.background_color.map((x, i) =>
            i == index ? this.hover[index] : '#ACB4C0'
          )
        this.chartInstance.update()
      }
    },
  },
}
</script>
<style lang="scss">
.chart {
  text-align: center;

  &--wrapper {
    position: relative;
    margin: 0 auto;
  }

  #doughnut-chart-value {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -32%);
    font-size: 30px;
    line-height: 1;
    font-weight: 500;
  }

  &--title {
    display: block;
    margin: 20px 0;
    font-weight: 500;
  }
}
</style>
