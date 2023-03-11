<template>
  <div class="explanation" id="explanation__content">
    <h4>Explanation</h4>
    <div
      id="question__text"
      :style="`font-size: ${font_size}px !important;`"
      v-html="items"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Explanation',
  props: {
    items: {
      type: String,
      default: '',
    },
  },
  computed: {
    font_size() {
      return this.$store.state.tests.font_size || 16
    },
  },
}
</script>

<style lang="scss">
.explanation {
  margin-top: 30px;
  h4 {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px 5px 0 0;
    border: 1px solid var(--nav-row-odd);
    border-bottom: 1px solid var(--background);
    margin-bottom: -1px;
    background: var(--background);
    color: var(--font) !important;
  }

  #question__text {
    border-top: 1px solid var(--nav-row-odd);
  }
}
</style>