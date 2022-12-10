<template>
  <v-layout
    row
    wrap
    class="app__header"
    :class="{ sticky: scrollY, white: isLogin }"
    v-resize="onResize"
  >
    <v-flex xs12 align-center>
      <v-toolbar elevation="0" class="app__header--toolbar" >
        <v-toolbar-title>
          <a href="/" class="to--main link">
            <img src="/logo-med.png" alt="" width="100" />
          </a>
        </v-toolbar-title>
        <div v-if="windowSize > 1024" class="app__header--desktop">
          <template v-for="m in menu">
            <v-menu
              v-if="m.has_child"
              open-on-hover
              bottom
              offset-y
              :key="m.name"
            >
              <template v-slot:activator="{ on, attrs }">
                <a
                  href="javascript:void(0)"
                  v-bind="attrs"
                  v-on="on"
                  class="link uppercase"
                >
                  {{ String(m.name).toUpperCase() }}
                </a>
              </template>

              <v-list class="child--link pa-0" elevation="0" color="#0a5676">
                <v-list-item
                  v-for="(item, index) in m.child"
                  :key="`child__${index}`"
                  to="#"
                >
                  <v-list-item-title nuxt to="#" class="white--text">{{
                    item.name
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <nuxt-link v-else to="" :key="m.name" class="link">
              {{ String(m.name).toUpperCase() }}
            </nuxt-link>
          </template>
        </div>
        <div class="app__header--actions">
          <v-menu open-on-hover bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <a
                href="javascript:void(0)"
                v-bind="attrs"
                v-on="on"
                class="link"
              >
                EN
              </a>
            </template>

            <v-list class="child--link" elevation="0" color="#0a5676">
              <v-list-item>
                <v-list-item-title nuxt to="#" class="white--text">
                  UZ
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title nuxt to="#" class="white--text">
                  RU
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn class="mx-4" color="error" nuxt to="/courseapp">DEMO</v-btn>
          <v-btn
            icon
            nuxt
            to="/login"
            :plain="true"
            width="24"
            height="24"
            class="account"
          >
            <v-icon>mdi-account-box-outline</v-icon>
          </v-btn>
          <v-btn
            icon
            nuxt
            to="/pricing"
            :plain="true"
            width="24"
            height="24"
            class="shop"
          >
            <v-badge v-if="hasCard" color="primary" :content="hasCard">
              <v-icon>mdi-shopping-outline</v-icon>
            </v-badge>
            <v-icon v-else>mdi-shopping-outline</v-icon>
          </v-btn>
          <v-btn
            v-if="windowSize < 1024"
            icon
            nuxt
            to="#"
            @click="mobile__menu = true"
            plain
            width="24"
            height="24"
            class="menu"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
      </v-toolbar>
    </v-flex>
    <v-navigation-drawer
      v-model="mobile__menu"
      right
      temporary
      fixed
      width="330"
    >
    </v-navigation-drawer>
  </v-layout>
</template>
<script>
export default {
  name: 'Header',
  props: {
    scrollY: {
      type: [String, Number],
      default: 0,
    },
  },
  data() {
    return {
      menu: [
        {
          name: 'Products',
          has_child: true,
          to: '#',
          child: [
            {
              name: 'USMLE Step 1',
              to: '#',
            },
            {
              name: 'Basic Scienses',
              to: '#',
            },
            {
              name: 'Clinical Sciences',
              to: '#',
            },
          ],
        },
        {
          name: 'About Us',
          has_child: true,
          to: '#',
          child: [
            {
              name: 'Team',
              to: '#',
            },
            {
              name: 'History',
              to: '#',
            },
          ],
        },
        {
          name: 'Students',
          has_child: false,
          to: '#',
          child: [],
        },
        {
          name: 'How to start',
          has_child: true,
          to: '#',
          child: [
            {
              name: 'How to Start',
              to: '#',
            },
            {
              name: 'USMLE',
              to: '#',
            },
          ],
        },
        {
          name: 'Price',
          has_child: true,
          to: '#',
          child: [
            {
              name: 'Try for Free',
              to: '#',
            },
            {
              name: 'Individual Plans',
              to: '#',
            },
            {
              name: 'Institutional Plans',
              to: '#',
            },
          ],
        },
      ],
      windowSize: 0,
      mobile__menu: false,
    }
  },
  computed: {
    isLogin() {
      return (
        this.$route.fullPath == '/login' ||
        this.$route.fullPath.includes('/pricing') ||
        this.$route.fullPath == '/resources'
      )
    },
    hasCard() {
    //   const select = this.$store.state.shopping.selected ?? []
      return 0
    },
  },

  mounted() {
    this.onResize()
  },

  methods: {
    onResize() {
      this.windowSize = window.innerWidth
      console.log(1)
    },
  },
}
</script>
<style lang="scss" src="@/assets/css/components/navbar.scss"></style>
