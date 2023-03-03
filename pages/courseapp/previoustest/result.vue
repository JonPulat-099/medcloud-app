<template>
    <v-card elevation="0" class="mt-6 rounded-lg mb-6">
    <previous-test-type></previous-test-type>
      <v-card-text>
        <v-card flat>
          <v-card-text class="px-0">
            <v-row>
              <v-col class="d-flex justify-center">
                <div class="score">
                  <div class="text-h6 text-capitalize mb-8">Your Score</div>
                  <v-progress-linear
                    v-model="score"
                    height="30"
                    class="rounded-xl"
                    color="#69C869"
                    style="pointer-events: none"
                  >
                    <strong class="text-body-1 font-weight-medium"
                      >{{ Math.ceil(score) }}%</strong
                    >
                  </v-progress-linear>
                </div>
              </v-col>
              <v-col class="d-flex flex-column align-center">
                <div class="settings">
                  <div class="text-h6 text-capitalize mb-4">test settings</div>
                  <div class="d-flex justify-space-between align-center">
                    <span class="text-body-1 font-weight-medium">Mode</span>
                    <v-chip color="#F4F5F7">Timed</v-chip>
                  </div>
                  <v-divider class="my-3" />
                  <div class="d-flex justify-space-between align-center">
                    <span class="text-body-1 font-weight-medium"
                      >Question Pool</span
                    >
                    <v-chip color="#F4F5F7">Custom</v-chip>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-data-table
              :headers="headers"
              :items="questions"
              :items-per-page="5"
              hide-default-footer
            >
              <template #top>
                <v-toolbar elevation="0">
                  <v-toolbar-title class="show-select d-flex justify-end">
                    <div class="d-flex align-center">
                      <span class="grey--text mr-4">show:</span>
                      <v-select
                        label="None"
                        single-line
                        :items="show_data"
                        v-model="showed_data"
                        multiple
                        dense
                        class="mt-4"
                        style="width: 300px"
                      />
                    </div>
                  </v-toolbar-title>
                </v-toolbar>
              </template>
              <template #item.system="{ item }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <div
                      class="text-truncate"
                      style="width: 170px"
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ item.system }}
                    </div>
                  </template>
                  <span>{{ item.system }}</span>
                </v-tooltip>
              </template>
              <template #item.categories="{ item }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <div
                      class="text-truncate"
                      style="width: 170px"
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ item.categories }}
                    </div>
                  </template>
                  <span>{{ item.categories }}</span>
                </v-tooltip>
              </template>
              <template #item.topics="{ item }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <div
                      class="text-truncate"
                      style="width: 170px"
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ item.topics }}
                    </div>
                  </template>
                  <span>{{ item.topics }}</span>
                </v-tooltip>
              </template>
              <template #item.icon="{ item }">
                <v-icon :color="item.status ? 'green' : '#2296F3'">
                  mdi-{{ item.status ? 'check' : 'minus-circle-outline' }}
                </v-icon>
              </template>
              <template #item.arrow="{ item }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">mdi-chevron-right</v-icon>
                  </template>
                  <span class="text-capitalize">review test</span>
                </v-tooltip>
              </template>
            </v-data-table>
            <v-divider />
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
</template>
<script>
export default {
  components: {
    PreviousTestType: () => import(/*webpackPrefetch: true*/ "@/components/CourseApp/PreviousTestType.vue")
  },
  layout: 'app',
  data() {
    return {
      name_progress: 10,

      singleExpand: false,
      show_data: ['Correct', 'Incorrect', 'Marked', 'Omitted'],
      showed_data: [],
      score: 10,

      headers: [
        { text: '', align: 'start', value: 'icon' },
        { text: 'ID', align: 'start', value: 'id' },
        { text: 'SUBJECT', value: 'subject' },
        { text: 'SYSTEM', value: 'system' },
        { text: 'CATEGORIES', value: 'categories' },
        { text: 'TOPICS', value: 'topics' },
        { text: '% CORRECT OTHER', value: 'correct' },
        { text: 'TIME SPENT', value: 'spent' },
        { text: '', value: 'arrow' },
      ],
      questions: [
        {
          id: '1 - 610',
          subject: 'Pathophysiology',
          system: 'Endocrine, Diabetes & Metabolism',
          categories: 'Congenital and developmental anomalies',
          topics: 'Congenital adrenal hyperplasia',
          correct: '66%',
          spent: '20sec',
          status: true,
        },
        {
          id: '1 - 219',
          subject: 'Pathophysiology',
          system: 'Endocrine, Diabetes & Metabolism',
          categories: 'Congenital and developmental anomalies',
          topics: 'Congenital adrenal hyperplasia',
          correct: '66%',
          spent: '20sec',
          status: true,
        },
        {
          id: '1 - 613',
          subject: 'Pathophysiology',
          system: 'Endocrine, Diabetes & Metabolism',
          categories: 'Congenital and developmental anomalies',
          topics: 'Congenital adrenal hyperplasia',
          correct: '66%',
          spent: '20sec',
          status: false,
        },
        {
          id: '1 - 615',
          subject: 'Pathophysiology',
          system: 'Endocrine, Diabetes & Metabolism',
          categories: 'Congenital and developmental anomalies',
          topics: 'Congenital adrenal hyperplasia',
          correct: '66%',
          spent: '20sec',
          status: false,
        },
        {
          id: '1 - 664',
          subject: 'Pathophysiology',
          system: 'Endocrine, Diabetes & Metabolism',
          categories: 'Congenital and developmental anomalies',
          topics: 'Congenital adrenal hyperplasia',
          correct: '66%',
          spent: '20sec',
          status: true,
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.notes {
  margin-right: 20px;
  color: #2296f3;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
}

.text-info {
  width: 100%;
}

.settings {
  width: 400px;
}

.score {
  min-width: 350px;
}
</style>
