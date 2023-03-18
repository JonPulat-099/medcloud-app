import { products as Products } from './products_data'

export const state = () => ({
  products: Products,
  selected: [],
  item_tariffs: {},
})

export const getters = {
  hasProduct: (state) => (id) => {
    return state.selected.some((x) => x.id == id)
  },
}

export const mutations = {
  setSelectedProduct(state, data) {
    const { type, product } = data
    state.selected.push({
      id: type.id,
      name: type.title,
      product,
    })
  },

  removeSelectedProduct(state, id) {
    const selected = state.selected
    state.selected = selected.filter((x) => x.id != id)
  },

  setItemTariffs(state, list) {
    state.item_tariffs = list
  },
}

export const actions = {
  async getProductItemTariffs({ commit }, id) {
    await this.$axios
      .$get('/api/product/item/get/' + id)
      .then((res) => {
        if (Array.isArray(res && res?.tariff)) commit('setItemTariffs', res)
      })
      .catch((err) => {
        // do nothing
        console.log(err)
      })
  },
}
