<template>
  <v-app :class="parent__class">
    <!-- <v-container> -->
    <Nuxt />
    <!-- </v-container> -->
  </v-app>
</template>
<script>
export default {
  name: 'DefaultLayout',
  computed: {
    parent__class() {
      return this.$store.state.tests.theme
    },
  },
}
</script>
<style lang="scss">
* {
  scrollbar-color: #555 #f5f5f5;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #555;
    border: 1px solid transparent;
    background-clip: content-box;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
}
</style>
