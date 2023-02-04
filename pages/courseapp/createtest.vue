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

          <v-row v-for="m in testing_mode" :key="`type__${m.type}`" class="state__tests">
            <v-col sm="8">
              <div class="d-flex align-end">
                <v-switch
                  v-model="types[m.type]"
                  inset
                  color="blue"
                  background-color="#FFFFFF"
                  hide-details
                  class="custom__switch--2"
                  @change="chooseTest(m.type)"
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
            <input type="text" />
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
                v-model="ex11"
                inset
                color="blue"
                background-color="#FFFFFF"
                hide-details
                class="custom__switch--2"
              ></v-switch>
              <span> Mixed </span>
            </div>
          </v-layout>
          <v-layout column wrap class="subjects">
            <v-row>
              <v-col sm="6"></v-col>
              <v-col sm="3"><p>Available</p></v-col>
              <v-col sm="3"><p class="black--text">Used</p></v-col>
            </v-row>
            <v-row v-for="s in subjects" :key="`subject__${s.id}`">
              <v-col sm="6">
                <div class="d-flex align-end">
                  <v-switch
                    inset
                    color="blue"
                    background-color="#FFFFFF"
                    hide-details
                    :value="s.id"
                    class="custom__switch--1"
                  ></v-switch>
                  <span> {{ s.name }} </span>
                </div>
              </v-col>
              <v-col sm="3">
                <p>{{ s.available }}</p>
              </v-col>
              <v-col sm="3">
                <p>{{ s.used }}</p>
              </v-col>
            </v-row>
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
                inset
                color="blue"
                background-color="#FFFFFF"
                hide-details
                class="custom__switch--2"
              ></v-switch>
              <span> Mixed </span>
            </div>
          </v-layout>
          <v-layout column wrap class="subjects">
            <v-row>
              <v-col sm="6"></v-col>
              <v-col sm="3"><p>Available</p></v-col>
              <v-col sm="3"><p class="black--text">Used</p></v-col>
            </v-row>
            <v-row v-for="s in subjects" :key="`system__${s.id}`">
              <v-col sm="6">
                <div class="d-flex align-end">
                  <v-switch
                    inset
                    color="blue"
                    background-color="#FFFFFF"
                    hide-details
                    :value="s.id"
                    class="custom__switch--1"
                  ></v-switch>
                  <span> {{ s.name }} </span>
                </div>
              </v-col>
              <v-col sm="3">
                <p>{{ s.available }}</p>
              </v-col>
              <v-col sm="3">
                <p>{{ s.used }}</p>
              </v-col>
            </v-row>
          </v-layout>
        </div>
        <v-btn v-if="false" class="launch__tutorial rounded-lg">Launch Tutorial</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Createtest',
  layout: 'app',
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
    }
  },
  computed: {
    testing_mode() {
      return this.$store.state.create__test.tests
    },
    subjects() {
      return this.$store.state.create__test.subjects
    },
  },
  mounted() {
    this.$store.commit('dashboard/setBlockName', 'Create Test')
  },
  methods: {
    goToTest() {
      this.$router.push('/launchtest')
    },
    chooseTest(type) {
      if(type === 'all') {
        for (let val in this.types) {
          this.types[val] = true
        }
      }
    },
  },
}
</script>

<style lang="scss" src="@/assets/css/_create_test.scss"></style>
