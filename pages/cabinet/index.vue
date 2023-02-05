<template>
  <section class="dashboard d-flex flex-column justify-space-between mx-auto">
    <v-layout row wrap flex-grow-0 justify-space-around>
      <v-flex xs12>
        <h2 class="dashboard__title">Dashboard and Active Subscriptions</h2>
      </v-flex>
      <v-flex v-for="(item, i) in items" :key="'item_' + i" xs12 sm6 md4>
        <div class="dashboard__item">
          <div
            class="dashboard__item--title font-weight-medium text-center"
            :style="`background: ${item.color}`"
          >
            {{ item.title }}
          </div>
          <div
            class="dashboard__item--subtitle font-weight-medium text-center my-3"
          >
            {{ item.subtitle }}
          </div>
          <div class="dashboard__item--content">
            <div>
              <doughnut-chart
                :id="`chart-id-${i}`"
                :width="95"
                :values="item.values"
                :background_color="item.background_color"
              ></doughnut-chart>
              <div class="text-center my-2 body-2">Completed</div>
            </div>
            <div>
              <div class="stats-container">
                <div
                  v-for="(s, k) in item.stats"
                  :key="'stats__' + k"
                  class="stats-row"
                >
                  <div>{{ s.name }}</div>
                  <div :class="{ 'blue--chip-1': k == 1 }">{{ s.value }}</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="item.is_demo" class="dashboard__item--actions">
            <v-btn
              class="dashboard__item--btn rounded-xl"
              elevation="0"
              color="#d9dada"
              >Buy</v-btn
            >
            <v-btn
              class="dashboard__item--btn rounded-xl"
              elevation="0"
              color="#A2D9F7"
              @click="$router.push('/courseapp/')"
              >Demo</v-btn
            >
          </div>
          <div v-else class="dashboard__item--actions">
            <v-btn
              class="dashboard__item--btn rounded-xl"
              elevation="0"
              color="#d9dada"
              >Extend</v-btn
            >
            <v-btn
              class="dashboard__item--btn rounded-xl"
              elevation="0"
              :color="item.color"
              @click="$router.push('/courseapp/')"
              >Resume</v-btn
            >
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-footer class="pa-0 dashboard__bottom">
      <div class="text-center">
        <div class="d-flex align-center justify-center">
          <img
            class="ma-0 mr-1"
            width="40px"
            height="40px"
            src="/icons/globe.png"
            alt=""
          />
          <dir class="text-left">
            <p class="caption ma-0">www.medclouded.com</p>
            <p class="caption ma-0">All rights reserved</p>
          </dir>
        </div>
      </div>
    </v-footer>
  </section>
</template>
<script>
export default {
  layout: 'app',
  components: {
    DoughnutChart: () => import('@/components/Charts/DoughnutChart.vue'),
  },
  data() {
    return {
      items: [
        {
          id: 1,
          is_demo: false,
          title: 'USMLE Step 1 Question Bank',
          subtitle: 'Expire on: May 21, 2022',
          values: [74, 26],
          background_color: ['#008DD2', '#ACB4C0'],
          color: '#A2D9F7',
          stats: [
            {
              name: 'Total Questions',
              value: '3250',
            },
            {
              name: 'Used Questions',
              value: '551',
            },
            {
              name: 'Unused Questions',
              value: '3250',
            },
          ],
          chart_color: '#008DD2',
        },
        {
          id: 2,
          is_demo: false,
          title: 'Basic Sciences Videolectures',
          subtitle: 'Expire on: May 21, 2022',
          values: [74, 26],
          color: '#D2CDE7',
          background_color: ['#008DD2', '#ACB4C0'],
          stats: [
            {
              name: 'Lessons',
              value: '143',
            },
            {
              name: 'Watched',
              value: '87',
            },
            {
              name: 'Unseen',
              value: '56',
            },
          ],
          chart_color: '#D2CDE7',
        },
        {
          id: 3,
          is_demo: true,
          title: 'Clinical Sciences Videolectures',
          subtitle: 'Expires on: May 21, 2022',
          values: [0],
          color: '#F5B2B6',
          background_color: ['#8996AC'],
          stats: [
            {
              name: 'Lessons',
              value: '143',
            },
            {
              name: 'Watched',
              value: '0',
            },
            {
              name: 'Unseen',
              value: '143',
            },
          ],
          chart_color: '#8996AC',
        },
      ],
    }
  },
}
</script>
<style lang=""></style>
