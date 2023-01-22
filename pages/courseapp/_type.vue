<template>
  <section class="test__layout d-flex">
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
                <span></span>
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
      </div>
    </div>
    <div class="resize" id="mouse-resize"></div>
    <div class="section__dialog">
      <LabValues v-if="show_lab_values" />
    </div>
  </section>
</template>
<script>
export default {
  name: 'LaunchTest',
  layout: 'testinterface',
  components: {
    LabValues: () =>
      import(/* webpackPrefetchL true */ '@/components/LaunchTest/LabValues'),
  },
  data() {
    return {
      variants: ['A.', 'B.', 'C.', 'D.', 'E.'],
      variant_id: '',
      disabled_events: ['contextmenu', 'cut', 'copy', 'paste'],
    }
  },
  computed: {
    show_lab_values() {
      return this.$attrs
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
  },
  methods: {
    submitAnswer() {
      this.$store.commit('tests/setAnswer', this.variant_id)
    },
  },
}
</script>
<style lang="scss"></style>
