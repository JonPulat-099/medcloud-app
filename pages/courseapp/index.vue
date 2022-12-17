<template>
  <v-layout row wrap class="mainpage">
    <v-flex class="px-2" xs4>
      <div
        class="mainpage__column d-flex flex-column justify-center rounded-lg"
      >
        <doughnut-chart :isClick="true"></doughnut-chart>
        <div class="stats-container">
          <div class="stats-row">
            <div>Total Questions:</div>
            <div>{{ total_question }}</div>
          </div>
          <div class="stats-row">
            <div>Used Questions:</div>
            <div>{{ used_questions }}</div>
          </div>
          <div class="stats-row">
            <div>Unused Questions:</div>
            <div>{{ unused_question }}</div>
          </div>
        </div>
        
        <div class="stats-container">
        <div class="stats--title">
          Tests
        </div>
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
    <v-flex class="px-2" xs8>
      <div class="mainpage__column rounded-lg">test</div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'app',
  components: {
    DoughnutChart: () => import('@/components/Charts/DoughnutChart.vue'),
  },
  data() {
    return {
      total_question: 3250,
      used_questions: 551,
      unused_question: 2699,
    }
  },
}
</script>
