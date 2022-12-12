<template>
<v-layout row wrap>
  <v-flex class="px-2" xs4>
    <div class="info__columns white rounded-lg">
      <doughnut-chart ></doughnut-chart>
    </div>
  </v-flex>
  <v-flex class="px-2" xs8>
    <div class="info__columns white rounded-lg">
      test
    </div>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'app',
  components: {
    DoughnutChart: () => import("@/components/Charts/DoughnutChart.vue")
  }
}
</script>
