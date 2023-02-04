export const state = () => ({
  timed: false,
  is_tutor: false,
  questions_count: 0,
  all_subject: false,
  all_system: false,
  tests: [
    {
      id: 1,
      name: 'Unused',
      total: 526,
      status: true,
      type: 'unused',
    },
    {
      id: 2,
      name: 'Used',
      total: 1870,
      status: false,
      type: 'used',
    },
    {
      id: 3,
      name: 'Incorrect',
      total: 340,
      status: false,
      type: 'incorrect',
    },
    {
      id: 4,
      name: 'Marked',
      total: 126,
      status: false,
      type: 'marked',
    },
    {
      id: 5,
      name: 'All',
      total: 3000,
      status: false,
      type: 'all',
    },
  ],
  subjects: [
    {
      id: 1,
      name: 'Embryology',
      available: 223,
      used: 223,
      status: true,
    },
    {
      id: 2,
      name: 'Anatomy',
      available: 344,
      used: 344,
      status: true,
    },
    {
      id: 3,
      name: 'History',
      available: 545,
      used: 545,
      status: false,
    },
    {
      id: 4,
      name: 'Neuroanatomy',
      available: 454,
      used: 454,
      status: true,
    },
    {
      id: 5,
      name: 'Physiology',
      available: 223,
      used: 223,
      status: true,
    },
    {
      id: 6,
      name: 'Genetics',
      available: 223,
      used: 223,
      status: true,
    },
    {
      id: 7,
      name: 'Immunology',
      available: 223,
      used: 223,
      status: true,
    },
    {
      id: 8,
      name: 'Microbiology',
      available: 223,
      used: 223,
      status: true,
    },
    {
      id: 9,
      name: 'Microbiology',
      available: 223,
      used: 223,
      status: true,
    },
    {
      id: 10,
      name: 'Microbiology',
      available: 223,
      used: 223,
      status: true,
    },
    {
      id: 11,
      name: 'Microbiology',
      available: 223,
      used: 223,
      status: true,
    },
    {
      id: 12,
      name: 'Microbiology',
      available: 223,
      used: 223,
      status: true,
    },
    {
      id: 13,
      name: 'Microbiology',
      available: 223,
      used: 223,
      status: true,
    },
  ],
})

export const mutations = {
  setTimed(state, val) {
    state.timed = val
  },

  setIsTutor(state, val) {
    state.is_tutor = val
  },

  setQuestionCount(state, count) {
    state.questions_count = count
  },

  setTests(state, { active_test, status }) {
    state.tests.forEach((x) => {
      if (x.id == active_test) {
        x.status = status
      }
    })
  },

  setSubject(state, { active_subject, status }) {
    state.subjects.forEach((x) => {
      if (x.id == active_subject) x.status = status
    })
  },
}

export const actions = {}

export const getters = {}
