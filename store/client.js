export const state = () => ({})

export const mutations = {}

export const actions = {
  clientRegistrations(_, payload) {
    const { data, isCompleted } = payload
    this.$axios
      .$post('/api/registration', data)
      .then((res) => {
        isCompleted(res)
      })
      .catch((err) => {
        isCompleted(err)
      })
  },
}
