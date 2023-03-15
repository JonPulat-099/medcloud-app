export const state = () => ({
  user_products: [],
  all_products: [],
})

export const mutations = {
  setAllProducts(state, list) {
    state.all_products = list
  },
}

export const actions = {
  getProducts({ commit }) {
    this.$axios
      .$get('/api/product/by/user')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        // do nothing
        console.log(err)
      })
  },

  getAllProducts({ commit }) {
    this.$axios
      .$get('/api/product/all')
      .then((res) => {
        if (Array.isArray(res)) commit('setAllProducts', res)
      })
      .catch((err) => {
        // do nothing
        console.log(err)
      })
  },
}
