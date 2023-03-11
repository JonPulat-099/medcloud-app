import { tests } from './mock_data'
export const state = () => ({
  theme: 'theme-blue',
  highlight: ['#FFFF67', '#B2FF59', '#85FEFF', '#F5B2B6', '#FFAC00'],
  current_color: '#FFFF67',
  font_size: 16,
  test_count: 10,
  test_numb: 1,
  test_id: 12346,
  tests: tests,
  labvalues: false,
  is_split_screen: false,
  is_tutor: false,
  is_timed: false,
})

export const mutations = {
  setFontSize(state, size) {
    state.font_size = size
  },
  setTests(state, tests) {
    state.tests = tests ?? []
  },

  setCurrentTest(state, { id, numb }) {
    state.test_id = id || 1
    state.test_numb = numb || 1
  },

  setIsMarkTest(state, is_mark) {
    state.tests.forEach((el) => {
      if (el.id == state.test_id) el.is_mark = !is_mark
    })
  },

  prevTest(state) {
    state.test_numb--
    if (!state.test_numb) {
      state.test_numb = 1
    }
    mutations.setTestId(state)
  },

  nextTest(state) {
    state.test_numb++

    if (state.test_count < state.test_numb) {
      state.test_numb = state.test_count
    }
    mutations.setTestId(state)
  },

  setTestId(state) {
    state.test_id = state.tests[state.test_numb - 1].id
  },

  setTheme(state, theme) {
    state.theme = theme
  },

  setAnswer(state, id) {
    state.tests[state.test_numb - 1].selected = id
    state.tests[state.test_numb - 1].is_done = true
    // mutations.nextTest(state)
  },

  setHighlightColor(state, color) {
    state.current_color = color
  },

  setLabvaluesStatus(state, status) {
    state.labvalues = status
  },

  setSplitScreen(state, status) {
    state.is_split_screen = status
  },

  submitTest(state, { id, answers }) {
    state.tests = state.tests.map((x) => {
      if (x.id === id) {
        return {
          ...x,
          is_done: true,
          selected: answers,
        }
      }
      return x
    })
  },
}

export const actions = {
  getTest({ commit }) {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(tests)
      }, 2000)
    }).then((res) => {
      commit('setTests', res)
    })
  },
}

export const getters = {
  is_mark: (state) =>
    state.tests.find((x) => x.id == state.test_id).is_mark || false,
  get_question: (state) => state.tests[state.test_numb - 1].question,
  get_answers: (state) => state.tests[state.test_numb - 1].answers,
  get_answers_title: (state) => state.tests[state.test_numb - 1].answers__title,
  get_selected_variant: (state) => state.tests[state.test_numb - 1].selected,
  isChecked: (state) => {
    const current_test = state.tests[state.test_numb - 1]
    const is_done = current_test.is_done
    if (is_done) {
      return {
        selected: current_test.selected,
        explanation: current_test.explanation,
      }
    }
    return false
  },
}
