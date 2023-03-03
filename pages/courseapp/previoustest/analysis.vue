<template>
  <v-card elevation="0" class="mt-6 rounded-lg mb-6">
    <previous-test-type></previous-test-type>
    <v-card-text>
      <v-row>
        <v-col class="text-center" cols="12" md="4">
          <v-progress-circular
            :rotate="270"
            :size="180"
            :width="15"
            :value="correct"
            color="#69C869"
          >
            <div class="text-center">
              <div class="text-h4 font-weight-medium black--text">
                {{ correct }}%
              </div>
              <div class="grey--text text-body-1">Correct</div>
            </div>
          </v-progress-circular>
        </v-col>
        <v-col>
          <div class="font-weight-medium text-h6 mb-5">Your Score</div>
          <div class="size d-flex align-center justify-space-between">
            <span class="text-body-1 font-weight-medium grey--text"
              >Total Correct</span
            >
            <v-chip small color="#E8E8E8">1</v-chip>
          </div>
          <v-divider class="my-2" />
          <div class="size d-flex align-center justify-space-between">
            <span class="text-body-1 font-weight-medium grey--text"
              >Total Incorrect</span
            >
            <v-chip small color="#E8E8E8">8</v-chip>
          </div>
          <v-divider class="my-2" />
          <div class="size d-flex align-center justify-space-between">
            <span class="text-body-1 font-weight-medium grey--text"
              >Total Omitted</span
            >
            <v-chip small color="#E8E8E8">1</v-chip>
          </div>
          <v-divider class="my-2" />
        </v-col>
        <v-col>
          <div class="font-weight-medium text-h6 mb-5">Answer Changes</div>
          <div class="size d-flex align-center justify-space-between">
            <span class="text-body-1 font-weight-medium grey--text"
              >Correct to Incorrect</span
            >
            <v-chip small color="#E8E8E8">0</v-chip>
          </div>
          <v-divider class="my-2" />
          <div class="size d-flex align-center justify-space-between">
            <span class="text-body-1 font-weight-medium grey--text"
              >Incorrect to Correct</span
            >
            <v-chip small color="#E8E8E8">0</v-chip>
          </div>
          <v-divider class="my-2" />
          <div class="size d-flex align-center justify-space-between">
            <span class="text-body-1 font-weight-medium grey--text"
              >Incorrect to Incorrect</span
            >
            <v-chip small color="#E8E8E8">0</v-chip>
          </div>
          <v-divider class="my-2" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-toolbar elevation="0" class="mt-4">
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
        <v-expansion-panels multiple accordion v-model="opened_expand">
          <v-expansion-panel v-model="opened_expand">
            <v-expansion-panel-header
              class="grey--text text--darken-1 px-0 text-h6 font-weight-medium"
              >Subject</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-data-table
                :headers="subject_headers"
                :items="subject_data"
                :items-per-page="10"
                hide-default-footer
                :expanded.sync="expanded"
                item-key="name"
                show-expand
              >
                <template v-slot:expanded-item="{ headers, item }">
                  <td :colspan="headers.length">
                    More info about {{ item.name }}
                  </td>
                </template>
                <template v-slot:item.data-table-expand="{ item, isExpanded }">
                  <v-icon
                    @click="handleExpansion(item, isExpanded)"
                    color="grey"
                  >
                    {{ isExpanded ? 'mdi-minus' : 'mdi-plus' }}
                  </v-icon>
                </template>
                <template #item.name="{ item }">
                  <div class="clipboard">
                    <div class="mb-2">
                      {{ item.name }}
                      <v-icon
                        size="20"
                        class="icon ml-2"
                        color="#2296F3"
                        @click="getName(item)"
                        >mdi-clipboard-list-outline</v-icon
                      >
                    </div>
                    <div>
                      <v-progress-linear
                        rounded
                        height="8"
                        :color="item.progress <= 0 ? '#cbcaca' : '#69C869'"
                        :value="item.progress"
                      />
                    </div>
                  </div>
                </template>
                <template #item.correct="{ item }">
                  {{ item.correct }}
                  <span class="ml-1">({{ item.correct > 0 ? 100 : 0 }}%)</span>
                </template>
                <template #item.incorrect="{ item }">
                  {{ item.incorrect }}
                  <span class="ml-1"
                    >({{ item.incorrect > 0 ? 100 : 0 }}%)</span
                  >
                </template>
                <template #item.omitted="{ item }">
                  {{ item.omitted }}
                  <span class="ml-1">({{ item.omitted > 0 ? 100 : 0 }}%)</span>
                </template>
              </v-data-table>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
              class="grey--text text--darken-1 px-0 text-h6 font-weight-medium"
              >System</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-data-table
                :headers="subject_headers"
                :items="subject_data"
                :items-per-page="10"
                hide-default-footer
                :expanded.sync="expanded"
                item-key="name"
                show-expand
              >
                <template v-slot:expanded-item="{ headers, item }">
                  <td :colspan="headers.length">
                    More info about {{ item.name }}
                  </td>
                </template>
                <template v-slot:item.data-table-expand="{ item, isExpanded }">
                  <v-icon
                    @click="handleExpansion(item, isExpanded)"
                    color="grey"
                    >{{ isExpanded ? 'mdi-minus' : 'mdi-plus' }}</v-icon
                  >
                </template>
                <template #item.name="{ item }">
                  <div class="clipboard">
                    <div class="mb-2">
                      {{ item.name }}
                      <v-icon
                        size="20"
                        class="icon ml-2"
                        color="#2296F3"
                        @click="getName(item)"
                        >mdi-clipboard-list-outline</v-icon
                      >
                    </div>
                    <div>
                      <v-progress-linear
                        rounded
                        height="8"
                        :color="item.progress <= 0 ? '#cbcaca' : '#69C869'"
                        :value="item.progress"
                      />
                    </div>
                  </div>
                </template>
                <template #item.correct="{ item }">
                  {{ item.correct }}
                  <span class="ml-1">({{ item.correct > 0 ? 100 : 0 }}%)</span>
                </template>
                <template #item.incorrect="{ item }">
                  {{ item.incorrect }}
                  <span class="ml-1"
                    >({{ item.incorrect > 0 ? 100 : 0 }}%)</span
                  >
                </template>
                <template #item.omitted="{ item }">
                  {{ item.omitted }}
                  <span class="ml-1">({{ item.omitted > 0 ? 100 : 0 }}%)</span>
                </template>
              </v-data-table>
            </v-expansion-panel-content>
            <v-divider />
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-card-text>
    <v-dialog max-width="700" v-model="review_dialog">
      <v-card>
        <v-card-title class="text-capitalize text-h5 d-flex">
          review {{ current_item.name }}
          <v-spacer />
          <v-icon color="#757575">mdi-close</v-icon>
        </v-card-title>
        <v-divider class="my-4" />
        <v-card-text>
          <div class="text-capitalize text-h6 grey--text text--darken-1">
            question pool
          </div>
          <v-row>
            <v-col>
              <v-checkbox
                label="Correct"
                :value="true"
                :disabled="current_item.correct >= 0"
              >
                <template #label>
                  <div class="d-flex align-end">
                    <span>Correct</span> <span class="circle">0</span>
                  </div>
                </template>
              </v-checkbox>
            </v-col>
            <v-col>
              <v-checkbox
                label="Incorrect"
                :value="true"
                :disabled="current_item.incorrect > 2"
              >
                <template #label>
                  <div class="d-flex align-end">
                    <span>Correct</span> <span class="circle">2</span>
                  </div>
                </template>
              </v-checkbox>
            </v-col>
            <v-col>
              <v-checkbox
                label="Omitted"
                :value="true"
                :disabled="current_item.omitted >= 0"
              >
                <template #label>
                  <div class="d-flex align-end">
                    <span>Correct</span> <span class="circle">0</span>
                  </div>
                </template>
              </v-checkbox>
            </v-col>
          </v-row>
          <div class="d-flex justify-end mb-4">
            <v-btn
              class="text-capitalize font-weight-medium mt-3"
              rounded
              dark
              elevation="0"
              color="#2296F3"
              >review question</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
export default {
  components: {
    PreviousTestType: () =>
      import(
        /*webpackPrefetch: true*/ '@/components/CourseApp/PreviousTestType.vue'
      ),
  },
  layout: 'app',
  data() {
    return {
      correct: 10,
      expanded: [],
      subject_headers: [
        { text: 'NAME', align: 'start', value: 'name', width: 300 },
        { text: 'TOTAL Q', value: 'total' },
        { text: 'CORRECT', value: 'correct' },
        { text: 'INCORRECT', value: 'incorrect' },
        { text: 'OMITTED', value: 'omitted' },
      ],
      subject_data: [
        {
          name: 'Anatomy',
          total: 2,
          correct: 0,
          incorrect: 2,
          omitted: 0,
          progress: 0,
        },
        {
          name: 'Biochemistry',
          total: 2,
          correct: 0,
          incorrect: 2,
          omitted: 0,
          progress: 10,
        },
      ],
      show_data: ['Correct', 'Incorrect', 'Marked', 'Omitted'],
      showed_data: [],
      opened_expand: [0, 1],
      review_dialog: false,
      current_item: {
        name: '',
        total: 0,
        correct: '',
        incorrect: '',
        omitted: '',
        progress: 0,
      },
    }
  },
  methods: {
    getName(item) {
      this.review_dialog = true
      this.current_item = item
    },
    handleExpansion(item, state) {
      const itemIndex = this.expanded.indexOf(item)
      state ? this.expanded.splice(itemIndex, 1) : this.expanded.push(item)
    },
  },
}
</script>
<style lang="scss">
.circle {
  height: 21px;
  border: 1px solid #ddd;
  border-radius: 11px;
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 1px;
  margin-left: 5px;
  font-size: 12px;
  font-weight: 600;
  color: #2196f3;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.show-select {
  width: 100%;
}
.size {
  width: 100%;
}
.v-expansion-panel::before {
  box-shadow: none !important;
}
.v-data-table__expanded.v-data-table__expanded__content {
  box-shadow: none !important;
}
.clipboard .icon {
  transition: all linear 0.2s;
  opacity: 0;
}
.clipboard:hover .icon {
  opacity: 1;
  cursor: pointer;
}
</style>
