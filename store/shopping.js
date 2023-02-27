import { products as Products } from './products_data'

export const state = () => ({
  products: Products,
  current_product: [],
  selected: [],
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
      name: type.name,
      product,
    })
  },

  setCurrentProduct(state, product) {
    state.current_product = product
  },

  removeSelectedProduct(state, id) {
    const selected = state.selected
    state.selected = selected.filter(x => x.id != id)
  },
}

export const actions = {}