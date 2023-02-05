import { subjects, systems } from './mock_data'

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
  subjects: JSON.parse(JSON.stringify(subjects)),
  systems: JSON.parse(JSON.stringify(systems)),
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
  setStatusAllSubjects(state, { type, id, value }) {
    state.subjects = state.subjects.map((x) => ({
      ...x,
      status: type ? value : id && x.id == id ? value : x.status,
    }))
  },
  setStatusAllSystems(state, { type, id, value = true }) {
    state.systems = state.systems.map((x) => ({
      ...x,
      status: type ? value : id && x.id == id ? value : x.status,
    }))
  },
}

export const actions = {}

export const getters = {}
