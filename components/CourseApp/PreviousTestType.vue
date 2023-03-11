<template>
  <div>
    <v-card-title>
      <nuxt-link to="/courseapp/previoustest" class="notes">
        <v-btn color="#2296F3" text>
          <v-icon size="18">mdi-arrow-left</v-icon>
          Back
        </v-btn>
      </nuxt-link>
      <v-spacer />
      <div class="d-flex align-center">
        <div class="notes">
          <v-btn color="#2296F3" text>
            <v-icon size="18">mdi-format-list-bulleted</v-icon>
            Questions
          </v-btn>
        </div>
        <div class="review-btn ml-3">
          <v-btn class="text-capitalize" elevation="0" color="primary" dark
            >review test</v-btn
          >
        </div>
      </div>
    </v-card-title>
    <div class="d-flex align-center justify-space-between mt-5">
      <v-tabs v-model="tab" class="tabs">
        <v-tab
          v-for="(title, idx) in tabs_list"
          :key="idx"
          @click="changeTabs(idx)"
          >{{ title }}</v-tab
        >
      </v-tabs>
      <v-spacer />
      <div class="text-info black--text d-flex justify-end">
        Custom Test Id: 200561420
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-on="on"
              v-bind="attrs"
              size="20"
              class="ml-2"
              color="#2296F3"
              >mdi-information-outline</v-icon
            >
          </template>
          <span class="text-no-wrap"
            >Unique ID to be used when creating custom test</span
          >
        </v-tooltip>
      </div>
    </div>
    <v-divider />
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      tabs_list: ['Test Results', 'Test Analysis'],
      tab: '',
    }
  },
  computed: {
    curr_type() {
      return this.$route.path.split("/").slice(-1)[0]
    },
    curr_tab() {
      const id = this.$store.state.test_result.current_tab
      this.tab = id
      return id
    }
  },
  watch: {
    curr_tab(val) {
      this.tab = val
    }
  },
  beforeMount() {
    if (this.curr_type == 'result') {
      this.$store.commit('test_result/updateCurrentTab', 0)
    } else {
      this.$store.commit('test_result/updateCurrentTab', 1)
    }
  },
  methods: {
    changeTabs(id) {
      if (id == 1) {
        this.$store.commit('test_result/updateCurrentTab', 1)
        this.$router.push("/courseapp/previoustest/analysis")
      } else {
        this.$store.commit('test_result/updateCurrentTab', 0)
        this.$router.push("/courseapp/previoustest/result")
      }
    },
  },
}
</script>
<style lang="scss">

.tabs {
  width: 100%;
}
</style>