<template>
  <v-app dark>
    <the-navbar :offsetTop="offsetTop"></the-navbar>
      <Nuxt />
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
  data: () => ({
    offsetTop: 0,
  }),

  mounted() {
    document.addEventListener('scroll', (e) => {
      this.offsetTop = window.scrollY
    })
  },
}
</script>
<style lang="scss" src="@/assets/css/pages/landing.scss"></style>
