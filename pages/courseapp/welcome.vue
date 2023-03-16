<template>
  <v-layout row wrap class="mainpage">
    <v-flex class="px-2" lg4 md4 sm12>
      <div
        class="mainpage__column d-flex flex-row flex-md-column flex-wrap flex-md-nowrap justify-space-around justify-md-start rounded-lg"
      >
        <doughnut-chart :isClick="true" style="width: 100%"></doughnut-chart>
        <div class="stats-container">
          <div class="stats--title">Qbank Used</div>
          <div class="stats-row">
            <div>Total Questions:</div>
            <div>{{ total_question }}</div>
          </div>
          <div class="stats-row">
            <div>Used Questions:</div>
            <div class="blue--chip-1">{{ used_questions }}</div>
          </div>
          <div class="stats-row">
            <div>Unused Questions:</div>
            <div>{{ unused_question }}</div>
          </div>
        </div>

        <div class="stats-container">
          <div class="stats--title">Tests</div>
          <div class="stats-row">
            <div>Created</div>
            <div>56</div>
          </div>
          <div class="stats-row">
            <div>Completed</div>
            <div>54</div>
          </div>
          <div class="stats-row">
            <div>Suspended</div>
            <div>2</div>
          </div>
        </div>
      </div>
    </v-flex>
    <v-flex class="px-2" lg8 md8 sm12>
      <div class="mainpage__column rounded-lg">
        <div class="d-flex flex-wrap flex-sm-nowrap justify-space-around">
          <doughnut-chart
            id="correct-answers"
            :width="100"
            :background_color="['#009846', '#ACB4C0']"
            :values="[74, 26]"
            title="Correct"
          ></doughnut-chart>
          <doughnut-chart
            id="incorrect-answers"
            :width="100"
            :background_color="['#ACB4C0', '#E31E24']"
            :values="[74, 26]"
            title="Incorrect"
          ></doughnut-chart>
          <doughnut-chart
            id="average"
            :width="100"
            :background_color="['#008DD2', '#ACB4C0']"
            :values="[76, 24]"
            title="Average"
          ></doughnut-chart>
        </div>
        <div class="d-flex">
          <svg-chart></svg-chart>
        </div>
        <div class="d-flex flex-wrap flex-md-nowrap justify-space-around">
          <aside>
            <div class="stats-container">
              <div class="stats-row">
                <div>Median Score</div>
                <div class="blue--chip">63 %</div>
              </div>
              <div class="stats-row">
                <div>Your Score</div>
                <div class="green--chip">74 %</div>
              </div>
            </div>
          </aside>
          <aside>
            <div class="stats-container">
              <div class="stats-row">
                <div>Your Average Time Spent</div>
                <div class="static--chip">56 sec</div>
              </div>
              <div class="stats-row">
                <div>Other’s Average Time Spent</div>
                <div class="static--chip">62 sec</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'app',
  components: {
    DoughnutChart: () => import('@/components/Charts/DoughnutChart.vue'),
    SvgChart: () => import('@/components/Charts/SvgChart.vue'),
  },
  data() {
    return {
      total_question: 3250,
      used_questions: 551,
      unused_question: 2699,
    }
  },
  beforeMount() {
    this.$store.dispatch('performance/getStats')
  },
}
</script>
