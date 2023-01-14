<template>
  <v-app>
    <div :class="`test__interface ${parent__class}`">
      <v-navigation-drawer
        v-model="drawer"
        clipped
        absolute
        app
        width="60"
        :permanent="true"
        class="left-navigator"
        floating
      >
        <table class="question">
          <tbody>
            <tr
              v-for="(t, i) in tests"
              :key="`test_${i}`"
              :class="{ active: t.id == curr_test_id }"
              @click="selectTest(t.id, i + 1)"
            >
              <td>
                <span data-v-4f40f054="" class="question__status"
                  ><span data-v-4f40f054=""> . </span></span
                >
                <span class="question__index"> {{ i + 1 }} </span>
                <span v-show="t.is_mark" class="question__marked"></span>
              </td>
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
        <div
          class="question__bookmark d-flex align-center"
          @click="setIsMarkTest(is_mark)"
        >
          <span><input v-model="is_mark" type="checkbox" /></span>
          <span class="flag"></span>
        </div>
        <v-spacer />
        <v-btn id="toggle-fullscreen" class="header-nav__actions" icon>
          <img v-if="!isFullscreen" src="/icons/fullscreen.svg" alt="" />
          <v-icon v-else>mdi-fullscreen-exit</v-icon>
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
      <v-main class="test-content">
        <v-container>
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
        <div class="user__settings">
          <v-btn icon @click="rightDrawer = false">
            <v-icon class="black--text font-weight-bold"
              >mdi-window-close</v-icon
            >
          </v-btn>

          <div class="user__settings--section">
            <span class="title"> Interface </span>
            <div class="tools">
              <div class="tool">
                <aside>
                  <span>Font Size</span>
                </aside>
                <aside>
                  <button>
                    <span class="minus"></span>
                  </button>
                  <button>
                    <span class="plus"></span>
                  </button>
                </aside>
              </div>
              <div class="tool theme">
                <aside>
                  <span>Theme</span>
                </aside>
                <aside>
                  <button
                    v-for="(t, i) in themes"
                    :key="t.name"
                    :class="{ active: i == 0 }"
                  >
                    <v-icon :color="t.color">mdi-circle</v-icon>
                    <v-icon v-if="i == 0" color="#fff" class="current"
                      >mdi-check</v-icon
                    >
                  </button>
                </aside>
              </div>
              <div class="tool">
                <aside>
                  <span>Timer</span>
                </aside>
                <aside>
                  <input v-model="isTimer" type="checkbox" id="switch" />
                  <label for="switch"></label>
                </aside>
              </div>
              <div class="tool">
                <aside>
                  <span>Screen split</span>
                </aside>
                <aside>
                  <input v-model="isTimer" type="checkbox" id="switch" />
                  <label for="switch"></label>
                </aside>
              </div>
              <div class="tool">
                <aside>
                  <span>Confirm answer</span>
                </aside>
                <aside>
                  <input v-model="isTimer" type="checkbox" id="switch" />
                  <label for="switch"></label>
                </aside>
              </div>
              <div class="tool theme">
                <aside>
                  <span>Highlight</span>
                </aside>
                <aside>
                  <button
                    v-for="(t, i) in highlights"
                    :key="t"
                    :class="{ active: i == 0 }"
                  >
                    <v-icon :color="t">mdi-circle</v-icon>
                    <v-icon v-if="i == 0" color="#000" class="current"
                      >mdi-check</v-icon
                    >
                  </button>
                </aside>
              </div>
            </div>
          </div>
          <div class="user__settings--section shortcuts">
            <span class="title"> Shortcuts </span>
            <div class="tools">
              <div class="tool">
                <aside>
                  <span>A,B,C,D</span>
                </aside>
                <aside>Answer Choice</aside>
              </div>
              <div class="tool">
                <aside>
                  <span>Alt + M</span>
                </aside>
                <aside>Mark</aside>
              </div>
              <div class="tool">
                <aside>
                  <span>Alt + P</span>
                </aside>
                <aside>Previous Question</aside>
              </div>
              <div class="tool">
                <aside>
                  <span>Alt + N</span>
                </aside>
                <aside>Next Question</aside>
              </div>
              <div class="tool">
                <aside>
                  <span>Alt + L</span>
                </aside>
                <aside>Lab Values</aside>
              </div>
              <div class="tool">
                <aside>
                  <span>F11</span>
                </aside>
                <aside>Full Screen</aside>
              </div>
              <div class="tool">
                <aside>
                  <span>Alt + C</span>
                </aside>
                <aside>Close Window</aside>
              </div>
            </div>
          </div>
        </div>
      </v-navigation-drawer>
      <v-footer
        :absolute="true"
        app
        height="52"
        class="footer-nav elevation-5"
        elevation="5"
      >
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
          <v-flex xs4 class="center--tools">
            <v-btn
              class="feedback__btn elevation-0 rounded-0"
              tile
              text
              mx-auto
            >
              <img class="lab" src="/icons/feedback.png" alt="" />
              Feedback
            </v-btn>
          </v-flex>
          <v-flex xs4 class="right--tools">
            <v-spacer></v-spacer>
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
  </v-app>
</template>

<script>
export default {
  name: 'TestInterface',
  data() {
    return {
      drawer: true,
      rightDrawer: false,
      isTimer: false,
      isScreenSplit: false,
      isConfirmAnswer: false,
      themes: [
        {
          name: 'theme-light',
          color: '#0E4687',
        },
        {
          name: 'theme-blue',
          color: '#2B2A29',
        },
        {
          name: 'theme-sepia',
          color: '#E6DAC1',
        },
        {
          name: 'theme-dark',
          color: '#1E1E1E',
        },
        {
          name: 'theme-brown',
          color: '#3D4A5E',
        },
      ],
      isFullscreen: false,
    }
  },
  computed: {
    parent__class() {
      return this.$store.state.tests.theme
    },
    total_test() {
      return this.$store.state.tests.test_count
    },
    curr_test_numb() {
      return this.$store.state.tests.test_numb
    },
    curr_test_id() {
      return this.$store.state.tests.test_id
    },
    is_mark() {
      return this.$store.getters['tests/is_mark']
    },
    tests() {
      return this.$store.state.tests.tests
    },
    font_size() {
      return this.$store.state.tests.font_size || 16
    },
    highlights() {
      return this.$store.state.tests.highlight
    },
    current_highlight() {
      return this.$store.state.tests.current_color
    },
  },
  mounted() {
    document
      .getElementById('toggle-fullscreen')
      .addEventListener('click', (event) => {
        const el = document.documentElement
        if (document.fullscreenElement) {
          document.exitFullscreen()
        } else {
          el.requestFullscreen()
        }
      })

    document.onfullscreenchange = (event) => {
      if (document.fullscreenElement) {
        this.isFullscreen = true
      } else {
        this.isFullscreen = false
      }
    }
  },
  methods: {
    startCallBack: function (x) {
      console.log(x)
    },
    endCallBack: function (x) {
      console.log(x)
    },
    selectTest(id, numb) {
      this.$store.commit('tests/setCurrentTest', { id, numb })
    },
    setIsMarkTest(val) {
      this.$store.commit('tests/setIsMarkTest', val)
    },
  },
}
</script>
<style lang="scss" src="@/assets/css/components/test.scss"></style>
