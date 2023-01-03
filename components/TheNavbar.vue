<template>
  <v-layout row wrap v-resize="onResize">
    <v-app-bar app :fixed="!!offsetTop" dense class="app__header">
      <v-toolbar-title>
        <img src="/logo.svg" alt="" width="80px" />
      </v-toolbar-title>
      <div v-if="windowSize > 1024" class="app__header--desktop">
        <template v-for="m in menu">
          <v-menu
            class="dropdown__menu"
            v-if="m.has_child"
            open-on-hover
            bottom
            offset-y
            :key="m.name"
            rounded="0"
          >
            <template v-slot:activator="{ on, attrs }">
              <a
                href="javascript:void(0)"
                v-bind="attrs"
                v-on="on"
                class="dropdown__menu--title link uppercase"
              >
                {{ String(m.name).toUpperCase() }}
              </a>
            </template>

            <v-list class="dropdown__menu--items py-0" elevation="0">
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
      <div class="app__header--actions d-flex align-center">
        <v-menu
          open-on-hover
          bottom
          offset-y
          rounded="0"
          class="dropdown__menu"
        >
          <template v-slot:activator="{ on, attrs }">
            <a
              href="javascript:void(0)"
              v-bind="attrs"
              v-on="on"
              class="dropdown__menu--title link"
            >
              EN
            </a>
          </template>

          <v-list class="dropdown__menu--items" elevation="0" color="#0a5676">
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
        <v-btn
          v-if="windowSize > 480"
          nuxt
          to="/courseapp"
          class="to-try rounded-xl white--text mr-6"
        >
          Demo
        </v-btn>
        <v-btn icon nuxt to="/login" width="24" height="24" class="account">
          <img src="/icons/user.svg" alt="" />
        </v-btn>
        <v-btn icon nuxt to="/pricing" width="24" height="24" class="shop mx-2">
          <img src="/icons/shop.svg" alt="" />
        </v-btn>
        <v-btn
          v-if="windowSize < 1024"
          icon
          width="24"
          height="24"
          plain
          @click="drawer = true"
          class="menu white--text"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-if="windowSize < 1024"
      v-model="drawer"
      :clipped="true"
      fixed
      app
      right
      class="app__header--mobile"
    >
      <v-btn icon @click="drawer = false" class="ml-1">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-list>
        <v-list-item
          v-for="(item, i) in menu"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-if="item.has_child">
              {{ item.name }}
              <ul>
                <li v-for="(submenu, k) in item.child" :key="`child_menu-${k}`">
                  <nuxt-link :to="submenu.to" class="link">{{
                    submenu.name
                  }}</nuxt-link>
                </li>
              </ul>
            </v-list-item-title>
            <v-list-item-title v-else nuxt :to="item.to" class="link">
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="windowSize <= 480">
          <v-list-item-content>
            <v-list-item-title nuxt to="/courseapp" class="link demo">
              Demo
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>
<script>
export default {
  name: 'Header',
  props: {
    offsetTop: {
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
      drawer: false,
    }
  },

  mounted() {
    this.onResize()
  },

  methods: {
    onResize() {
      this.windowSize = window.innerWidth
    },
  },
}
</script>
<style lang="scss" src="@/assets/css/components/navbar.scss"></style>
