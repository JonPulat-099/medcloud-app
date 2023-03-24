export const state = () => ({
  user_info: {},
})

export const mutations = {}

export const actions = {
  getClientInfo() {
    this.$axios
      .$get('/api/user/details')
      .then((res) => {
        if (res?.success) {
          console.log(res)
        }
      })
      .catch((err) => {
        // do nothing
      })
  },

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
