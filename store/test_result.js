export const state = () => ({
    current_tab: 0,
  })
  export const mutations = {
    updateCurrentTab(state, id) {
      state.current_tab = id
    },
  }