<template>
  <div>
    <v-card class="mt-4" elevation="0">
      <v-card-title>
        <div class="select d-flex align-center">
          <div class="grey--text text-body-1 font-weight-medium">Show:</div>
          <v-select
            class="ml-4"
            label="Select position"
            v-model="select_position"
            :items="position_items"
            single-line
          />
        </div>
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          style="max-width: 300px"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="previous"
        :search="search"
        :items-per-page="10"
      >
        <template #item.score="{ item }">
          <v-chip> {{ item.score }}% </v-chip>
        </template>
        <template #item.actions="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" @click="$router.push('/courseapp/test-1')">
                <v-icon color="#0194D6">mdi-play-circle-outline</v-icon>
              </v-btn>
            </template>
            <span>Resume</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" @click.prevent="goResults">
                <v-icon color="#0194D6">mdi-format-list-checks</v-icon>
              </v-btn>
            </template>
            <span>Results</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn @click.prevent="goAnalysis" icon v-bind="attrs" v-on="on">
                <v-icon color="#0194D6">mdi-finance</v-icon>
              </v-btn>
            </template>
            <span>Analysis</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'PreviousTest',
  layout: 'app',
  data() {
    return {
      select_position: 'Columns',
      search: '',
      position_items: ['Columns', 'Rows', 'All'],
      headers: [
        { text: 'SCORE', value: 'score', align: 'start', sortable: false },
        { text: 'NAME', value: 'name', sortable: true },
        { text: 'DATE', value: 'date', sortable: false },
        { text: 'MODE', value: 'mode', sortable: false },
        { text: 'Q-POOL', value: 'pool', sortable: false },
        { text: 'SUBJECTS', value: 'subjects', sortable: false },
        { text: 'SYSTEMS', value: 'systems', sortable: false },
        { text: '# QS', value: 'qs', sortable: false },
        { text: 'ACTIONS', value: 'actions', align: 'center', sortable: false },
      ],
      previous: [
        {
          score: '10',
          name: 'John Doe',
          date: 'Sep 01, 2022',
          mode: 'Tutor',
          pool: 'Custom',
          subjects: 'Multiple',
          systems: 'Multiple',
          qs: '10',
        },
        {
          score: '50',
          name: 'Markus Luis',
          date: 'Feb 17, 2022',
          mode: 'Tutor',
          pool: 'Custom',
          subjects: 'Multiple',
          systems: 'Multiple',
          qs: '35',
        },
        {
          score: '46',
          name: 'Li Kim',
          date: 'Dec 23, 2022',
          mode: 'Tutor',
          pool: 'Custom',
          subjects: 'Multiple',
          systems: 'Multiple',
          qs: '12',
        },
      ],
    }
  },
  methods: {
    goResults() {
      this.$router.push('/courseapp/previoustest/result')
      this.$store.commit('test_result/updateCurrentTab', 0)
    },
    goAnalysis() {
      this.$router.push('/courseapp/previoustest/analysis')
      this.$store.commit('test_result/updateCurrentTab', 1)
    },
  },
  mounted() {
    this.$store.commit('dashboard/setBlockName', 'Previous Test')
  },
}
</script>
<style lang="scss"></style>
