<template>
  <v-container grid-list-xs class="white feedback py-4 px-6">
    <v-form ref="feedbackForm">
      <v-layout row wrap>
        <v-flex xs12 md7 lg7>
          <h3 class="font-weight-black">Feedback Form</h3>
          <p class="grey--text">
            We would love to hear your thoughts, suggestions, concerns or
            problems with anything so we can improve!
          </p>
          <v-divider light class="mb-4"></v-divider>
          <div>
            <h4 class="mb-2 font-weight-bold">Feedback Type:</h4>
            <v-radio-group
              class="mb-4"
              row
              :disabled="disabled"
              v-model="type"
              :rules="[formRules.required]"
              validate-on-blur
            >
              <v-radio label="Comments" value="type-1"></v-radio>
              <v-radio label="Suggestions" value="type-2"></v-radio>
              <v-radio label="Questions" value="type-3"></v-radio>
            </v-radio-group>
          </div>
          <div>
            <h4 class="mb-2 font-weight-bold">Describe Your Feedback:</h4>
            <v-textarea
              v-model="text"
              class="input"
              name="input-7-4"
              placeholder="Describe Your Feedback:"
              solo
              flat
              value="Feedback text ...."
              :rules="[formRules.required, formRules.text]"
              :disabled="disabled"
              validate-on-blur
            ></v-textarea>
          </div>
          <div>
            <h4 class="mb-2 font-weight-bold">Name:</h4>
            <div class="d-flex">
              <v-text-field
                v-model="first_name"
                solo
                flat
                label="First name"
                name="name"
                class="input"
                :rules="[formRules.required, formRules.text]"
                :disabled="disabled"
                validate-on-blur
              ></v-text-field>
              <v-divider vertical dark class="mx-2"></v-divider>
              <v-text-field
                v-model="last_name"
                solo
                flat
                label="Last name"
                name="name"
                class="input"
                :rules="[formRules.required, formRules.text]"
                :disabled="disabled"
                validate-on-blur
              ></v-text-field>
            </div>
          </div>
          <div>
            <h4 class="mb-2 font-weight-bold">Email:</h4>
            <v-text-field
              v-model="email"
              solo
              flat
              label="Email"
              name="name"
              class="input"
              type="email"
              :rules="[formRules.required, formRules.email]"
              :disabled="disabled"
              validate-on-blur
            ></v-text-field>
          </div>
          <div>
            <v-btn color="primary" @click="submitForm" :loading="loading"
              >Submit</v-btn
            >
          </div>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>
<script>
export default {
  name: 'Search',
  layout: 'app',
  data() {
    return {
      type: '',
      text: '',
      first_name: '',
      last_name: '',
      email: '',
      loading: false,
      disabled: false,
    }
  },
  mounted() {
    this.$store.commit('dashboard/setBlockName', 'Feedback')
  },
  methods: {
    submitForm() {
      const validate = this.$refs.feedbackForm.validate()
      console.log(validate)

      if (validate) {
        this.loading = true
        this.disabled = true
        setTimeout(() => {
          this.type = ''
          this.text = ''
          this.first_name = ''
          this.last_name = ''
          this.email = ''
          this.loading = this.disabled = false
        }, 1500)
      }
    },
  },
}
</script>
<style lang="scss"></style>
