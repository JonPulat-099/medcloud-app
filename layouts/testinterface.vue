<template>
  <div :class="`test__interface ${parent__class}`">
    <v-navigation-drawer
      v-model="drawer"
      clipped
      absolute
      app
      width="60"
      :permanent="true"
      class="left-navigator"
    >
      <table>
        <tbody>
          <tr v-for="i in 20" :key="`test_${i}`">
            <td>{{ i }}</td>
          </tr>
        </tbody>
      </table>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app height="52" class="header-nav">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <div class="question__details">
        Item {{ 10 }} of {{ 10 }}
        <br />
        <span class="question__id"> QID: {{ 11255 }} </span>
      </div>
      <div class="question__bookmark d-flex align-center">
        <span><input type="checkbox" /></span>
        <span class="flag"></span>
      </div>
      <v-spacer />
      <v-btn class="header-nav__actions" icon>
        <img src="/icons/fullscreen.svg" alt="" />
      </v-btn>
      <v-btn class="header-nav__actions" icon>
        <img class="lab" src="/icons/lab.png" alt="" />
      </v-btn>
      <v-btn
        class="header-nav__actions"
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <img class="lab" src="/icons/calc.svg" alt="" />
      </v-btn>
      <v-btn
        class="header-nav__actions"
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <img class="lab" src="/icons/settings.png" alt="" />
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container class="test-content">
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      right
      temporary
      fixed
      class="right-navigator"
    >
      right side bar
    </v-navigation-drawer>
    <v-footer :absolute="true" app height="52" class="footer-nav">
      <v-layout row justify-space-between align-center>
        <v-flex xs4 class="left--tools">
          <v-icon color="white">mdi-timer-outline</v-icon>
          <vue-countdown-timer
            @start_callback="startCallBack('event started')"
            @end_callback="endCallBack('event ended')"
            :start-time="new Date()"
            :end-time="new Date().getTime() + 98000000"
            :interval="1000"
            :start-label="'Until start:'"
            label-position="begin"
            :end-text="'Event ended!'"
          >
            <template slot="countdown" slot-scope="scope">
              <span>{{ scope.props.hours }}</span
              ><i>{{ scope.props.hourTxt }}</i>
              <span>{{ scope.props.minutes }}</span
              ><i>{{ scope.props.minutesTxt }}</i>
              <span>{{ scope.props.seconds }}</span>
            </template>
          </vue-countdown-timer>
          <v-btn class="stop" icon>
            <img class="lab" src="/icons/stop.png" alt="" />
          </v-btn>
          <v-btn icon>
            <img class="lab" src="/icons/pause.png" alt="" />
          </v-btn>
        </v-flex>
        <v-flex xs4 class="text-center">
          <v-btn class="d-block mx-auto" mx-auto>
            <img class="lab" src="/icons/feedback.png" alt="" />
            Feedback
          </v-btn>
        </v-flex>
        <v-flex xs4 class="text-right">
          <v-btn icon class="ml-auto">
            <img class="lab" src="/icons/previous.svg" alt="" />
          </v-btn>
          <v-btn icon>
            <img class="lab" src="/icons/next.svg" alt="" />
          </v-btn>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'TestInterface',
  data() {
    return {
      drawer: true,
      rightDrawer: false,
    }
  },
  computed: {
    parent__class() {
      return this.$store.state.tests.theme
    },
  },
  methods: {
    startCallBack: function (x) {
      console.log(x)
    },
    endCallBack: function (x) {
      console.log(x)
    },
  },
}
</script>
<style lang="scss" src="@/assets/css/components/test.scss"></style>
