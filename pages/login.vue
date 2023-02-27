<template>
  <div class="login__page">
    <v-container grid-list-xs>
      <v-row v-if="hasCard" justify="end">
        <v-btn color="primary" rounded="lg" nuxt to="/pricing?step=2">
          <v-icon>mdi-cart-outline</v-icon>
          View Card - {{ hasCard }}
        </v-btn>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="12" lg="5" md="6" class="mb-16">
          <h3>Login</h3>
          <span class="d-block mb-10">Sign in using MedCloud account</span>
          <v-text-field name="name" label="Email" type="email"></v-text-field>
          <v-text-field
            name="name"
            label="Password"
            type="password"
          ></v-text-field>
          <div class="d-flex justify-space-between">
            <v-btn color="primary" @click="forgot = !forgot"
              >Forgot password ?</v-btn
            >
            <v-btn color="primary">Login</v-btn>
          </div>

          <div v-if="forgot" class="mt-16">
            <h3>Forgot Password</h3>
            <div class="d-flex">
              <v-text-field
                name="name"
                label="Email"
                type="email"
              ></v-text-field>
              <v-btn color="primary">Submit</v-btn>
            </div>
          </div>
        </v-col>
        <v-divider
          vertical
          light
          class="d-none d-lg-inline d-md-inline"
        ></v-divider>
        <v-col cols="12" lg="5" md="6">
          <h3>Register</h3>
          <div class="d-flex mb-10">
            <a
              href="javascript:void(0)"
              :class="{ grey: national == 'uzb' }"
              @click="national = 'uzb'"
              >Uzbekistan user</a
            >
            <v-divider vertical light class="mx-3"></v-divider>
            <a
              href="javascript:void(0)"
              :class="{ grey: national != 'uzb' }"
              @click="national = 'other'"
              >Internation user</a
            >
          </div>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-text-field
                name="name"
                label="First Name"
                class="pr-6"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field name="name" label="Last Name"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field name="name" label="Email"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field
                name="name"
                label="Password"
                class="pr-6"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field name="name" label="Confirm Password"></v-text-field>
            </v-flex>
          </v-layout>
          <p class="mt-5 mb-10">
            By clicking "Register", I confirm that I am over the age of 13 and
            agree to UWorld's
            <a href="/resources" target="_blank"> Terms of Use</a>
            and
            <a href="/resources" target="_blank">Privacy Policy.</a>
          </p>
          <v-btn color="primary">Register</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  layout: 'landing',
  data() {
    return {
      forgot: false,
      national: 'uzb',
    }
  },
  computed: {
    hasCard() {
      const seleted = this.$store.state.shopping.selected ?? []
      return seleted?.length
    },
  },
}
</script>
<style lang="scss">
.login__page {
  padding-top: 80px;
  a.grey {
    color: #9e9e9e;
    background: none !important;
  }
}
</style>
