import Vue from 'vue'

export default ({}, ctx, inject) => {
  Vue.mixin({
    computed: {
      formRules() {
        return {
          required: (val) => (!!val ? true : "It's required field"),
          text: (val) =>
            !!val && !/^[0-9a-zA-Zа-яА-ЯёЁ]+.*/.test(val) ? 'Wrong text' : true,
          email: (val) =>
            !!val &&
            !/^[-._a-zA-Z0-9]+@(?:[a-zA-Z0-9][-a-zA-Z0-9]+.)+[a-zA-Z]{2,6}$/.test(
              val
            )
              ? 'Wrong email'
              : true,
        }
      },
    },
    methods: {
      checkArray(array) {
        return Array.isArray(array) && array?.length ? true : false
      },
      hasFields(field, ...items) {
        if (typeof field === 'undefined' || field === null) {
          return false
        }
        let args = items
        for (let i in args) {
          let item = args[i]
          if (typeof field[item] !== 'undefined') {
            field = field[item]
          } else {
            return false
          }
        }
        return true
      },
      objHasFields(object, ...items) {
        if (typeof object === 'undefined' || object === null) {
          return false
        }

        let args = items
        for (let i in args) {
          let item = args[i]
          if (!item || typeof object[item] === 'undefined') {
            return false
          }
        }
        return true
      },
    },
  })
}
