<template>
  <v-app dark class="courseapp" v-resize="onResize">
    <v-navigation-drawer
      v-if="$route.path !== '/courseapp'"
      v-model="drawer"
      fixed
      :permanent="windowSize >= 1140"
      app
      class="courseapp__sidebar"
    >
      <div class="courseapp__sidebar--top">
        <img class="courseapp--logo" src="/logo.svg" alt="" />
        <div class="courseapp--info text-center mb-6">
          <h2 class="font-weight-bold">USMLE Step 1</h2>
          <h3 class="font-weight-regular">Question Bank</h3>
        </div>
        <v-list class="courseapp__sidebar--list">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
            multi-line
            class=""
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
            <v-list-item-icon class="my-auto mx-0">
              <v-icon> mdi-chevron-right </v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </div>
      <div class="courseapp__sidebar--bottom text-center">
        <h4 class="font-weight-regular text-body-2 mt-4">
          Expire on: May 21, 2022
        </h4>
        <v-btn class="extend--btn mt-2 px-6 rounded-lg">Extend</v-btn>

        <div class="d-flex align-center justify-center my-6">
          <img
            class="ma-1"
            width="40px"
            height="40px"
            src="/icons/globe.png"
            alt=""
          />
          <dir class="text-left">
            <p class="text-caption ma-0">www.medclouded.com</p>
            <p class="text-caption ma-0">All rights reserved</p>
          </dir>
        </div>
      </div>
    </v-navigation-drawer>
    <v-app-bar fixed app flat height="50" class="courseapp__navbar white--text">
      <v-btn
        v-if="$route.path !== '/courseapp' && windowSize <= 1140"
        icon
        plain
        @click.stop="drawer = !drawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title class="body-1">Welcome, Mr. Jon Pulat </v-toolbar-title>
      <v-spacer />

      <v-btn
        v-if="windowSize > 600"
        text
        nuxt
        elevation="0"
        class="to--dashboard text-capitalize rounded-xl"
      >
        <v-icon color="white" left>mdi-home-circle</v-icon>
        Dashboard
      </v-btn>
      <v-switch
        v-model="dark"
        flat
        inset
        :ripple="false"
        class="theme--switch ml-4"
        :class="{ dark: dark }"
      ></v-switch>
      <v-btn icon plain @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn icon plain>
        <v-icon>mdi-power</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main
      class="courseapp__content"
      :class="dark ? 'dark-theme' : 'light-theme'"
    >
      <v-container fluid style="height: 100%">
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
      class="courseapp__sidebar--right"
      :class="dark ? 'dark-theme' : 'light-theme'"
    >
      <v-btn icon @click="rightDrawer = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-list style="margin: 40px 0 0">
        <v-list-item
          v-for="(item, i) in rigth__menus"
          :key="i"
          :to="item.to"
          router
          class="right__block"
          multi-line
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      dark: false,
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          title: 'Welcome',
          to: '/courseapp/welcome',
        },
        {
          title: 'Create test',
          to: '/courseapp/createtest',
        },
        {
          title: 'Previous Test',
          to: '/courseapp/previoustest',
        },
        {
          title: 'Preformance',
          to: '/courseapp/preformance',
        },
        {
          title: 'Feedback',
          to: '/courseapp/feedback',
        },
        {
          title: 'Help',
          to: '/courseapp/help',
        },
      ],
      rigth__menus: [
        {
          title: 'Profile',
          to: '#',
        },
        {
          title: 'Dashboard',
          to: '#',
        },
        {
          title: 'Homepage',
          to: '/',
        },
        {
          title: 'Log Out',
          to: '/login',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      windowSize: 0,
    }
  },
  methods: {
    onResize() {
      this.windowSize = window.innerWidth
    },
  },
}
</script>
<style lang="scss" src="@/assets/css/components/courseapp.scss"></style>
