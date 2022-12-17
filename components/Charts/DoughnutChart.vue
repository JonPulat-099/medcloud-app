<template>
  <div class="chart">
    <div class="chart--wrapper" :style="{ width: width + 'px' }">
      <canvas id="doughnut-chart"></canvas>
      <span v-if="value" id="doughnut-chart-value">{{ value }}%</span>
    </div>
    <span class="chart--title"> {{ title }} </span>
  </div>
</template>
<script>
import Chart from 'chart.js/auto'
export default {
  name: 'DoughnutChart',
  props: {
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
      default: 'Qbank Used',
    },
  },
  data() {
    return {
      value: '',
      chartInstance: null,
    }
  },
  beforeMount() {
    this.value = this.values[0] || 0
  },
  mounted() {
    var chartjs = document.getElementById('doughnut-chart').getContext('2d')

    const data = {
      datasets: [
        {
          data: this.values,
          backgroundColor: this.background_color,
        },
      ],
    }

    this.chartInstance = new Chart(chartjs, {
      type: 'doughnut',
      data: data,
      options: {
        borderWidth: 0,
        cutout: 70,
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
