<template>
  <v-app v-resize="onResize">
    <div :class="`test__interface ${parent__class}`">
      <v-navigation-drawer
        v-model="drawer"
        clipped
        absolute
        app
        width="60"
        :permanent="windowSize >= 960"
        class="left-navigator"
        floating
        hide-overlay
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
        <v-app-bar-nav-icon
          v-if="windowSize < 960"
          @click.stop="drawer = !drawer"
        />
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
        <v-btn class="header-nav__actions" icon @click="toggleLabValues">
          <img class="lab" src="/icons/lab.png" alt="" />
        </v-btn>
        <v-btn
          class="header-nav__actions"
          icon
          @click="calculator = !calculator"
        >
          <img class="lab" src="/icons/calc.svg" alt="" />
        </v-btn>
        <v-btn
          class="header-nav__actions"
          icon
          @click="rightDrawer = !rightDrawer"
        >
          <img class="lab" src="/icons/settings.png" alt="" />
        </v-btn>
      </v-app-bar>
      <v-main class="test-content">
        <v-container>
          <Nuxt :labvalues="labValue" />
        </v-container>
      </v-main>
      <v-navigation-drawer
        v-model="rightDrawer"
        right
        temporary
        fixed
        hide-overlay
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
                  <button :disabled="font_size <= 16" @click="lowerText">
                    <span class="minus"></span>
                  </button>
                  <button :disabled="font_size >= 22" @click="upperText">
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
                    :class="{ active: t.name == parent__class }"
                    @click="changeTheme(t.name)"
                  >
                    <v-icon :color="t.color">mdi-circle</v-icon>
                    <v-icon
                      v-if="t.name == parent__class"
                      color="#fff"
                      class="current"
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
                  <input v-model="showTimer" type="checkbox" id="switch" />
                  <label for="switch"></label>
                </aside>
              </div>
              <div class="tool">
                <aside>
                  <span>Screen split</span>
                </aside>
                <aside>
                  <input
                    v-model="screen_split"
                    type="checkbox"
                    id="split"
                    @change="changeSplitScreen"
                  />
                  <label for="split"></label>
                </aside>
              </div>
              <div class="tool">
                <aside>
                  <span>Confirm answer</span>
                </aside>
                <aside>
                  <input type="checkbox" id="switch" />
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
                    :class="{ active: t == current_highlight }"
                    @click="changeHighlight(t)"
                  >
                    <v-icon :color="t">mdi-circle</v-icon>
                    <v-icon v-if="t == current_highlight" color="#000" class="current"
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
            <v-icon :style="`opacity: ${showTimer ? 1 : 0};`" color="white"
              >mdi-timer-outline</v-icon
            >
            <vue-countdown-timer
              :style="`opacity: ${showTimer ? 1 : 0};`"
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
    <v-dialog
      v-model="calculator"
      persistent
      hide-overlay
      max-width="160"
      transition="dialog-transition"
    >
      <calculator @close="calculator = false"></calculator>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  name: 'TestInterface',
  components: {
    Calculator: () =>
      import(/* webpackPrefetchL true */ '@/components/LaunchTest/Calculator'),
  },
  data() {
    return {
      drawer: true,
      rightDrawer: false,
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
      calculator: false,
      windowSize: 0,
      showTimer: true,
      screen_split: false
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
    labValue() {
      return this.$store.state.tests.labvalues
    },
    isSplitScreen() {
      return this.$store.state.tests.is_split_screen
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

    // Query the element
    const resizer = document.getElementById('mouse-resize')
    const leftSide = resizer.previousElementSibling
    const rightSide = resizer.nextElementSibling

    // The current position of mouse
    let x = 0
    let y = 0

    // Width of left side
    let leftWidth = 0

    // Handle the mousedown event
    // that's triggered when user drags the resizer
    const mouseDownHandler = function (e) {
      // Get the current mouse position
      x = e.clientX
      y = e.clientY
      leftWidth = leftSide.getBoundingClientRect().width

      // Attach the listeners to `document`
      document.addEventListener('mousemove', mouseMoveHandler)
      document.addEventListener('mouseup', mouseUpHandler)
    }

    // Attach the handler
    resizer.addEventListener('mousedown', mouseDownHandler)

    const mouseMoveHandler = function (e) {
      document.body.style.cursor = 'col-resize'
      leftSide.style.userSelect = 'none'
      leftSide.style.pointerEvents = 'none'

      rightSide.style.userSelect = 'none'
      rightSide.style.pointerEvents = 'none'
      // How far the mouse has been moved
      const dx = e.clientX - x
      const dy = e.clientY - y

      const container = resizer.parentNode.getBoundingClientRect().width
      // if (leftWidth > 500) {
      const newLeftWidth = leftWidth + dx
      if (newLeftWidth <= 390) {
        leftSide.style.width = '390px'
      } else {
        leftSide.style.width = `${newLeftWidth}px`
      }

      console.log(leftWidth, dx, newLeftWidth, container)
      // }
    }

    const mouseUpHandler = function () {
      resizer.style.removeProperty('cursor')
      document.body.style.removeProperty('cursor')

      leftSide.style.removeProperty('user-select')
      leftSide.style.removeProperty('pointer-events')

      rightSide.style.removeProperty('user-select')
      rightSide.style.removeProperty('pointer-events')

      // Remove the handlers of `mousemove` and `mouseup`
      document.removeEventListener('mousemove', mouseMoveHandler)
      document.removeEventListener('mouseup', mouseUpHandler)
    }
    this.onResize()
  },
  methods: {
    onResize() {
      this.windowSize = window.innerWidth
    },
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
    toggleLabValues() {
      this.$store.commit('tests/setLabvaluesStatus', !this.labValue)
    },
    changeTheme(theme) {
      this.$store.commit('tests/setTheme', theme)
    },
    upperText() {
      this.$store.commit('tests/setFontSize', this.font_size + 1)
    },
    lowerText() {
      this.$store.commit('tests/setFontSize', this.font_size - 1)
    },
    changeSplitScreen() {
      this.$store.commit('tests/setSplitScreen', this.screen_split)
    },
    changeHighlight(color) {
      if (this.current_highlight !== color) {
        this.$store.commit('tests/setHighlightColor', color)
      }
    },
  },
}
</script>
<style lang="scss" src="@/assets/css/components/test.scss"></style>
