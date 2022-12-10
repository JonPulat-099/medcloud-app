<template>
  <v-app dark>
    <the-navbar></the-navbar>
    <v-container>
      <Nuxt />
    </v-container>
    <the-footer></the-footer>
  </v-app>
</template>
<script>
export default {
  name: 'DefaultLayout',
  components: {
    TheNavbar: () => import('@/components/TheNavbar.vue'),
    TheFooter: () => import('@/components/TheFooter.vue'),
  },
}
</script>
<style lang="scss" src="@/assets/css/pages/landing.scss"></style>
