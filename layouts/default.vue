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
</style>
