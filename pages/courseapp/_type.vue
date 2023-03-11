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
                    v-for="(t, i) in titles"
                    :key="`${t}__${i}--${answers[i].id}`"
                    v-html="t"
                    style="width: 33%"
                    class="text-center font-weight-bold"
                  ></td>
                </tr>
              </td>
            </tr>
            <tr v-for="(v, i) in answers" :key="`vairant_${v.id}`">
              <td class="left__td">
                <v-icon
                  v-if="
                    isChecked &&
                    (isChecked.selected == v.id ||
                      isChecked.selected != v.id) &&
                    v.is_correct
                  "
                  color="green"
                  >mdi-check</v-icon
                >
                <v-icon
                  v-else-if="
                    isChecked && isChecked.selected == v.id && !v.is_correct
                  "
                  color="red"
                  >mdi-close</v-icon
                >

                <span v-else></span>
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
        <button
          v-if="isChecked == false"
          class="submit__btn"
          @click="submitAnswer"
        >
          Submit
        </button>
        <div v-if="isChecked" id="question__stats--bar" class="correct my-8">
          <test-result :is_correct="isCorrect"></test-result>
        </div>
        <explanation
          v-if="isChecked && (!isSplitScreen || show_lab_values)"
          :items="isChecked.explanation"
        ></explanation>
      </div>
    </div>
    <div
      v-show="
        (show_lab_values || (isChecked && isSplitScreen)) && windowSize > 768
      "
      class="resize"
      id="mouse-resize"
    ></div>
    <div
      v-show="
        (show_lab_values || (isChecked && isSplitScreen)) && windowSize > 768
      "
      class="section__dialog"
    >
      <LabValues v-if="show_lab_values" />
      <explanation
        v-if="show_lab_values == false && isChecked && isSplitScreen"
        :items="isChecked.explanation"
      ></explanation>
    </div>
    <!-- ================= DIALOGS ================= -->
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

    <v-dialog
      v-model="exhibit__display"
      scrollable
      persistent
      hide-overlay
      max-width="700px"
      transition="dialog-transition"
      content-class="exhibit--display"
    >
      <v-card>
        <v-card-title primary-title>
          Exhibit Display
          <v-spacer></v-spacer>
          <v-btn icon @click="exhibit__display = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <image-viewer :image="image_url"></image-viewer>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- ================= DIALOGS ================= -->
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
      import(
        /* webpackPrefetchL true */ '@/components/LaunchTest/Explanation.vue'
      ),
    ImageViewer: () =>
      import(
        /* webpackPrefetchL true */ '@/components/LaunchTest/ImageViewer.vue'
      ),
    TestResult: () =>
      import(
        /* webpackPrefetchL true */ '@/components/LaunchTest/TestResult.vue'
      ),
  },
  data() {
    return {
      variants: ['A.', 'B.', 'C.', 'D.', 'E.'],
      variant_id: '',
      disabled_events: ['contextmenu', 'cut', 'copy', 'paste'],
      windowSize: 0,
      dialog: false,
      is_submit: false,
      exhibit__display: false,
      image_url: '',
    }
  },
  computed: {
    show_lab_values() {
      return this.$store.state.tests.labvalues
    },
    question() {
      this.variant_id = ""
      this.$nextTick(() => {
        if (process.client) {
          const links = window?.document
            ?.getElementById('question__text')
            ?.querySelectorAll('a')

          links.forEach((el) => {
            el.addEventListener('click', (e) => {
              this.image_url = el.href
              e.preventDefault()
              this.exhibit__display = true
            })
          })
        }
      })
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
    isChecked() {
      const result = this.$store.getters['tests/isChecked']
      if (result) {
        this.variant_id = result.selected
        this.$nextTick(() => {
          if (process.client) {
            console.log(11)
            const links = document
              ?.getElementById('explanation__content')
              ?.querySelectorAll('a')
            console.log(links)
            links?.forEach((el) => {
              el.addEventListener('click', (e) => {
                e.preventDefault()
                console.log(el)
                this.exhibit__display = true
                this.image_url = el.href
              })
            })
          }
        })
      }
      return result
    },
    isCorrect() {
      return this.isChecked
        ? this.answers.find((x) => x.id == this.isChecked.selected)?.is_correct
        : false
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

    // Shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.code === 'KeyA') {
        this.variant_id = this.answers[0].id
      } else if (e.code === 'KeyB') {
        this.variant_id = this.answers[1].id
      } else if (e.code === 'KeyC') {
        this.variant_id = this.answers[2].id
      } else if (e.code === 'KeyD') {
        this.variant_id = this.answers[3].id
      }
    })
  },
  methods: {
    onResize() {
      this.windowSize = window.innerWidth
    },
    submitAnswer() {
      if (this.variant_id) {
        this.$store.commit('tests/setAnswer', this.variant_id)
        this.is_submit = true
      }
    },
    closeLabValues() {
      this.$store.commit('tests/setLabvaluesStatus', false)
      this.dialog = false
    },
  },
}
</script>
<style lang="scss"></style>
