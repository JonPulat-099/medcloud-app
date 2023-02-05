<template>
  <div class="createtest grid-list-xs">
    <v-layout row wrap justify-space-between>
      <v-flex lg4 md6 xs12 class="createtest__container">
        <div class="content">
          <v-layout
            row
            wrap
            align-end
            justify-space-between
            py-5
            class="content__header"
          >
            <h3>Testing Mode</h3>
          </v-layout>
          <div class="mode">
            <div class="d-flex align-end mb-4">
              <v-switch
                v-model="timed"
                inset
                color="blue"
                background-color="#FFFFFF"
                hide-details
                class="custom__switch--2"
              ></v-switch>
              <span> Timed </span>
            </div>
            <div class="d-flex align-end">
              <v-switch
                v-model="tutor"
                inset
                color="blue"
                background-color="#FFFFFF"
                hide-details
                class="custom__switch--2"
              ></v-switch>
              <span> Tutor </span>
            </div>
          </div>

          <v-row
            v-for="m in testing_mode"
            :key="`type__${m.type}`"
            class="state__tests"
          >
            <v-col sm="8">
              <div class="d-flex align-end">
                <v-switch
                  v-model="types[m.type]"
                  inset
                  color="blue"
                  background-color="#FFFFFF"
                  hide-details
                  class="custom__switch--2"
                  @change="chooseTest($event, m.type)"
                ></v-switch>
                <span> {{ m.name }} </span>
              </div>
            </v-col>
            <v-col sm="4">
              {{ m.total }}
            </v-col>
          </v-row>

          <v-layout row wrap justify-center align-center class="set__test">
            <label for=""> Questions per Block </label>
            <v-text-field
              outlined
              v-model="questions"
              class="quetions__count"
              :rules="[rules.max_quetision]"
            ></v-text-field>
          </v-layout>
        </div>

        <v-btn class="generate__test rounded-lg" @click="goToTest"
          >Generate Test</v-btn
        >
      </v-flex>
      <v-flex lg4 md6 xs12 class="createtest__container">
        <div class="content">
          <v-layout
            row
            wrap
            align-end
            justify-space-between
            py-5
            class="content__header"
          >
            <h3>By Subject</h3>
            <div class="d-flex align-end">
              <v-switch
                v-model="selected_all_subjects"
                inset
                color="blue"
                background-color="#FFFFFF"
                :value="selected_all_subjects"
                hide-details
                class="custom__switch--2"
                @change="changeSubjectsStatus($event, 'all')"
              ></v-switch>
              <span> Mixed </span>
            </div>
          </v-layout>
          <v-layout column wrap class="subjects">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th></th>
                    <th>Available</th>
                    <th>Used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="s in subjects" :key="`subject__${s.id}`">
                    <td>
                      <div class="d-flex align-end">
                        <v-switch
                          inset
                          background-color="#FFFFFF"
                          hide-details
                          :value="s.status"
                          class="custom__switch--1"
                          :class="s.status ? 'active__item' : ''"
                          @click="changeSubjectsStatus(!s.status, null, s.id)"
                        ></v-switch>
                        <span> {{ s.name }} </span>
                      </div>
                    </td>
                    <td>{{ s.available }}</td>
                    <td>{{ s.used }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-layout>
        </div>
      </v-flex>
      <v-flex lg4 md6 xs12 class="createtest__container">
        <div class="content">
          <v-layout
            row
            wrap
            align-end
            justify-space-between
            px-3
            py-5
            class="content__header"
          >
            <h3>By System</h3>
            <div class="d-flex align-end">
              <v-switch
                v-model="selected_all_systems"
                inset
                color="blue"
                background-color="#FFFFFF"
                hide-details
                :value="selected_all_systems"
                class="custom__switch--2"
                @change="changeSystemsStatus($event, 'all')"
              ></v-switch>
              <span> Mixed </span>
            </div>
          </v-layout>
          <v-layout column wrap class="subjects">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th></th>
                    <th>Available</th>
                    <th>Used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="s in systems" :key="`subject__${s.id}`">
                    <td>
                      <div class="d-flex align-end">
                        <v-switch
                          inset
                          color="blue"
                          background-color="#FFFFFF"
                          hide-details
                          :value="s.status"
                          class="custom__switch--1"
                          :class="s.status ? 'active__item' : ''"
                          @click="changeSystemsStatus(!s.status, null, s.id)"
                        ></v-switch>
                        <span> {{ s.name }} </span>
                      </div>
                    </td>
                    <td>{{ s.available }}</td>
                    <td>{{ s.used }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-layout>
        </div>
        <v-btn v-if="false" class="launch__tutorial rounded-lg"
          >Launch Tutorial</v-btn
        >
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Createtest',
  layout: 'app',
  components: {
    InsetSwitch: () => import('@/components/InsetSwitch.vue'),
  },
  data() {
    return {
      ex11: false,
      timed: false,
      tutor: false,
      types: {
        used: false,
        unused: false,
        incorrect: false,
        marked: false,
        all: false,
      },
      by_subject: false,
      by_system: false,
      questions: 0,
      selected_all_subjects: false,
      selected_all_systems: false,
      rules: {
        max_quetision: (val) =>
          (!!val && val <= 40) || 'Max questions count 40',
      },
    }
  },
  computed: {
    testing_mode() {
      return this.$store.state.create__test.tests
    },
    subjects() {
      return this.$store.state.create__test.subjects
    },
    systems() {
      return this.$store.state.create__test.systems
    },
  },
  mounted() {
    this.$store.commit('dashboard/setBlockName', 'Create Test')
  },
  methods: {
    goToTest() {
      if (this.rules.max_quetision(this.questions) == true) {
        this.$router.push('/courseapp/test-1')
      } else {
        var a = document.getElementsByClassName("quetions__count")[0]
        a?.focus()
      }
    },
    chooseTest(e, type) {
      if (type === 'all') {
        for (let val in this.types) {
          this.types[val] = e
        }
      } else {
        this.types['all'] = false
      }
    },

    changeSubjectsStatus(e, type, id) {
      if (type !== 'all') {
        this.selected_all_subjects = false
      }
      this.$store.commit('create__test/setStatusAllSubjects', {
        type: type,
        id: id,
        value: e,
      })
    },

    changeSystemsStatus(e, type, id) {
      if (type !== 'all') {
        this.selected_all_systems = false
      }
      this.$store.commit('create__test/setStatusAllSystems', {
        type: type,
        id: id,
        value: e,
      })
    },
  },
}
</script>

<style lang="scss" src="@/assets/css/_create_test.scss"></style>
