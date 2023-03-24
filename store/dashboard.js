export const state = () => ({
  user_products: [],
  all_products: [],
})

export const mutations = {
  setUserProducts(state, products) {
    state.user_products = products
  },
  setAllProducts(state, list) {
    state.all_products = list
  },
}

export const actions = {
  getProducts({ commit }) {
    this.$axios
      .$get('/api/product/by/user')
      .then((res) => {
        if (res?.success && res?.success?.data) {
          commit('setUserProducts', res.success.data)
        }
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
