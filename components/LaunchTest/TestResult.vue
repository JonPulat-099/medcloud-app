<template>
  <v-layout row wrap justify-space-between>
    <v-flex xs12 sm6 md4 lg3>
      <p class="type">
        <v-icon v-if="is_correct" color="#69C869">mdi-check-circle</v-icon>
        <v-icon v-else color="#E31E24">mdi-close-circle</v-icon>
        {{ is_correct ? 'Correct' : 'Incorrect' }}
      </p>
    </v-flex>
    <v-flex xs12 sm6 md4 lg3 class="d-flex align-center">
      <p>
        <v-icon color="#8996AC">mdi-chart-box-outline</v-icon>
        Answered correctly
        <v-chip class="ml-2" small color="#7EC291">65%</v-chip>
      </p>
    </v-flex>
    <v-flex xs12 sm6 md4 lg3 class="d-flex align-center">
      <p>
        <v-icon color="#8996AC">mdi-clock-time-four-outline</v-icon>
        Time Spent
        <v-chip class="ml-2" small color="#A2D9F7">1 min, 20 sec</v-chip>
      </p>
    </v-flex>
    <v-flex xs12 sm6 md4 lg3 class="d-flex align-center">
      <p>
        <v-icon color="#8996AC">mdi-calendar-month-outline</v-icon>
        Updated
        <v-chip class="ml-2" small color="#D2CDE7">Dec, 2020</v-chip>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'TestResult',
  props: {
    "is_correct": {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {}
  },
}
</script>

<style></style>
