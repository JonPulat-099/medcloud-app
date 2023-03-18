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
          <v-text-field
            v-model="user_data.phone"
            label="Email"
            type="email"
          ></v-text-field>
          <v-text-field
            v-model="user_data.password"
            label="Password"
            type="password"
          ></v-text-field>
          <div class="d-flex justify-space-between">
            <v-btn color="primary" @click="forgot = !forgot"
              >Forgot password ?</v-btn
            >
            <v-btn color="primary" @click="signIn">Login</v-btn>
          </div>

          <div v-if="forgot" class="mt-16">
            <h3>Forgot Password</h3>
            <div class="d-flex">
              <v-text-field label="Email" type="email"></v-text-field>
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
                v-model="registration.name"
                label="Name"
                class="pr-6"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field
                v-model="registration.surname"
                label="Surname"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="registration.phone"
                label="Phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="registration.email"
                label="Email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field
                v-model="registration.password"
                label="Password"
                class="pr-6"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field
                v-model="registration.password_confirmation"
                label="Confirm Password"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <p class="mt-5 mb-10">
            By clicking "Register", I confirm that I am over the age of 13 and
            agree to UWorld's
            <a href="/resources" target="_blank"> Terms of Use</a>
            and
            <a href="/resources" target="_blank">Privacy Policy.</a>
          </p>
          <v-btn color="primary" @click="registrationClien()">Register</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  layout: 'landing',
  auth: false,
  data() {
    return {
      forgot: false,
      national: 'uzb',
      user_data: {
        phone: '',
        password: '',
      },
      registration: {
        name: '',
        surname: '',
        patronym: 'xxx',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
      },
    }
  },
  computed: {
    hasCard() {
      const seleted = this.$store.state.shopping.selected ?? []
      return seleted?.length
    },
  },
  methods: {
    async signIn() {
      try {
        if (this.user_data.phone && this.user_data.password) {
          let resp = await this.$auth.loginWith('local', {
            data: this.user_data,
          })
          if (resp.status === 200) {
            const token = resp.data
            this.$auth.setUserToken(token?.access_token, token?.refresh_token)
            this.$router.push('/cabinet')
          }
        }
      } catch (err) {
        console.log(err)
      }
    },
    registrationClien() {
      // rules
      const payload = {
        data: this.registration,
        isCompleted: (res) => {
          console.log(res)
          if (res?.success) {
            this.$toast.success(res.success?.message)
          } else {
            this.$toast.error(res?.message)
          }
        },
      }

      this.$store.dispatch('client/clientRegistrations', payload)
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
