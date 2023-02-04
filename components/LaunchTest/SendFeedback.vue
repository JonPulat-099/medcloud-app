<template lang="">
  <v-card>
    <v-card-title primary-title>
      Feedback
      <v-spacer></v-spacer>
      <v-btn color="primary" icon @click="closeModal"><v-icon>mdi-close</v-icon></v-btn>
    </v-card-title>
    <v-card-text>
      <v-textarea
        v-model="text"
        solo
        name="input-7-4"
        label="Solo textarea"
        :resize="false"
        hide-details
      ></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-checkbox
      v-model="check"
        label="Check here if your concern is for a software/technical issue."
      ></v-checkbox>
      <v-btn color="success" depressed @click="submitFeedback">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'Feedback',
  data() {
    return {
      text: '',
      check: false,
    }
  },
  methods: {
    closeModal() {
      this.text = ''
      this.check = false
      this.$emit('close')
    },

    submitFeedback() {
      this.$snotify.simple({
        body: 'My Notification Body',
        title: 'Notification Title',
        config: {},
      })
    },
  },
}
</script>
<style lang=""></style>
