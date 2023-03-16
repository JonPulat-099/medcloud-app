export const state = () => ({
  prodcut_stats: {},
})

export const mutations = {
  setStats(state, stats) {
    state.prodcut_stats = stats
  },
}

export const actions = {
  getStats({ commit }, id = 44) {
    this.$axios
      .$get('/api/test/welcome/' + id)
      .then((res) => {
        console.log(res)
        if (res?.success) {
        }
      })
      .catch((err) => {})
  },
}
