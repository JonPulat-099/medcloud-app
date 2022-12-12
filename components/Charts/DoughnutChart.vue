<template>
  <!-- <div id="doughnut-chart" ref="doughnut"></div> -->
  <div style="height: 150px; width: 150px">
    <canvas id="doughnut-chart"></canvas>
    <span>76%</span>
  </div>
</template>
<script>
import Chart from 'chart.js/auto'
export default {
  name: 'DoughnutChart',
  data() {
    return {}
  },
  mounted() {
    var chartjs = document.getElementById('doughnut-chart').getContext('2d')
    //   gradient = chartjs.createLinearGradient(0, 0, 0, 450)

    // gradient.addColorStop(0, 'rgba(0, 124, 199, 0.5)')
    // gradient.addColorStop(0.5, 'rgba(0, 124, 199, 0.25)')
    // gradient.addColorStop(1, 'rgba(0, 124, 199, 0)')

    const data = {
      datasets: [
        {
          data: [74, 26],
          backgroundColor: ['#008DD2', '#ACB4C0'],
        },
      ],
    }

    var chartInstance = new Chart(chartjs, {
      type: 'doughnut',
      data: data,
      options: {
        borderWidth: 0,
        cutout: 60,
        hoverBackgroundColor: ['#00ff00', '#ff0000'],
        responsive: true,
        plugins: {
          tooltip: {
            enabled: false, // <-- this option disables tooltips
          },
        },
      },
    })
  },
}
</script>
<style lang=""></style>
