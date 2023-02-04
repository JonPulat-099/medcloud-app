<template>
  <section class="test__layout d-flex" v-resize="onResize">
    <div class="section__content">
      <div id="question__information">
        <div
          id="question__text"
          :style="`font-size: ${font_size}px !important;`"
          v-html="question"
        ></div>
        <div
          id="question__answer"
          :style="`font-size: ${font_size}px !important;`"
        >
          <table>
            <tr v-if="titles">
              <td style="padding: 0 0 0 83px">
                <tr style="width: 475px">
                  <td
                    v-for="t in titles"
                    :key="t"
                    v-html="t"
                    style="width: 33%"
                    class="text-center font-weight-bold"
                  ></td>
                </tr>
              </td>
            </tr>
            <tr v-for="(v, i) in answers" :key="`vairant_${v.id}`">
              <td class="left__td">
                <!-- <v-icon color="red">mdi-close</v-icon> -->
                <v-icon color="green">mdi-check</v-icon>
                <label>
                  <input
                    type="radio"
                    v-model="variant_id"
                    :value="v.id"
                    :name="v.id"
                  />
                  <span class="radio"></span>
                </label>
                {{ variants[i] }}
              </td>
              <td v-if="!checkArray(v.text)">
                <span>
                  {{ v.text }}
                </span>
              </td>
              <td v-else>
                <tr style="width: 475px">
                  <td
                    v-for="k in v.text"
                    :key="k"
                    style="width: 33%"
                    class="text-center"
                  >
                    <span>
                      {{ k }}
                    </span>
                  </td>
                </tr>
              </td>
            </tr>
          </table>
        </div>
        <button class="submit__btn" @click="submitAnswer">Submit</button>
        <div id="question__stats--bar" class="correct">
          <v-layout row wrap justify-space-between>
            <v-flex xs3>
              <p class="type">Incorrect</p>
              <small>Correct Answer</small>
              <p>D</p>
            </v-flex>
            <v-flex xs3 class="d-flex align-center">
              <aside>
                <v-icon>mdi-chart-box-outline</v-icon>
              </aside>
              <aside>
                <p>70%</p>
                <small>Answered correctly</small>
              </aside>
            </v-flex>
            <v-flex xs3 class="d-flex align-center">
              <aside>
                <v-icon>mdi-clock-time-four-outline</v-icon>
              </aside>
              <aside>
                <p>06 secs</p>
                <small>Time Spent</small>
              </aside>
            </v-flex>
            <v-flex xs3 class="d-flex align-center">
              <aside>
                <v-icon>mdi-calendar-month-outline</v-icon>
              </aside>
              <aside>
                <p>2022</p>
                <small>Version</small>
              </aside>
            </v-flex>
          </v-layout>

        </div>
        <explanation v-if="is_submit && (!isSplitScreen || show_lab_values)" :items="question"></explanation>
      </div>
    </div>
    <div
      v-show="(show_lab_values || (is_submit && isSplitScreen)) && windowSize > 768"
      class="resize"
      id="mouse-resize"
    ></div>
    <div v-show="(show_lab_values || (is_submit && isSplitScreen)) && windowSize > 768" class="section__dialog">
      <LabValues v-if="show_lab_values" />
      <explanation v-if="show_lab_values == false && is_submit && isSplitScreen" :items="question"></explanation>
    </div>
    <v-dialog
      v-model="dialog"
      scrollable
      fullscreen
      persistent
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon color="primary" @click="closeLabValues">
            <v-icon color="primary">mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <LabValues />
        </v-card-text>
      </v-card>
    </v-dialog>
  </section>
</template>
<script>
export default {
  name: 'LaunchTest',
  layout: 'testinterface',
  components: {
    LabValues: () =>
      import(/* webpackPrefetchL true */ '@/components/LaunchTest/LabValues'),
    Explanation: () =>
      import(/* webpackPrefetchL true */ '@/components/LaunchTest/Explanation.vue'),
  },
  data() {
    return {
      variants: ['A.', 'B.', 'C.', 'D.', 'E.'],
      variant_id: '',
      disabled_events: ['contextmenu', 'cut', 'copy', 'paste'],
      windowSize: 0,
      dialog: false,
      is_submit: false,
    }
  },
  computed: {
    show_lab_values() {
      return this.$store.state.tests.labvalues
    },
    question() {
      return this.$store.getters['tests/get_question']
    },
    answers() {
      return this.$store.getters['tests/get_answers'] ?? []
    },
    titles() {
      return this.$store.getters['tests/get_answers_title'] ?? false
    },
    seleted() {
      const answer = this.$store.getters['tests/get_selected_variant'] ?? ''
      this.variant_id = answer
      return answer
    },
    font_size() {
      return this.$store.state.tests.font_size || 16
    },
    current_highlight() {
      return this.$store.state.tests.current_color
    },
    isSplitScreen() {
      return this.$store.state.tests.is_split_screen
    },
  },
  watch: {
    show_lab_values(val) {
      if (val === false && this.windowSize > 768) {
        const section = document.querySelector('.section__content')
        section.style.width = '75%'
      } else if (val === true && this.windowSize <= 768) {
        this.dialog = true
      }
    },
  },
  mounted() {
    // disabled right click
    this.disabled_events.forEach((el) => {
      document.addEventListener(
        el,
        function (e) {
          e.preventDefault()
        },
        false
      )
    })
    // mark selection words
    const questions = document.getElementById('question__text')
    questions?.addEventListener('dblclick', () => {
      var sel, range
      if (window.getSelection) {
        sel = window.getSelection()
        if (sel.getRangeAt && sel.rangeCount) {
          range = window.getSelection().getRangeAt(0)
          var html =
            `<span style="background-color: ${this.current_highlight}">` +
            range +
            '</span>'
          range.deleteContents()
          var el = document.createElement('div')
          el.innerHTML = html
          var frag = document.createDocumentFragment(),
            node,
            lastNode
          while ((node = el.firstChild)) {
            lastNode = frag.appendChild(node)
          }
          range.insertNode(frag)
          range.collapse(false)
        }
      } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange()
        range.collapse(false)
        range.pasteHTML(html)
      }
    })
    this.onResize()
  },
  methods: {
    onResize() {
      this.windowSize = window.innerWidth
    },
    submitAnswer() {
      this.$store.commit('tests/setAnswer', this.variant_id)
      this.is_submit = true
    },
    closeLabValues() {
      this.$store.commit('tests/setLabvaluesStatus', false)
      this.dialog = false
    },
  },
}
</script>
<style lang="scss"></style>
