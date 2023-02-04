<template lang="">
  <v-card>
    <v-card-title primary-title>
      Feedback
      <v-spacer></v-spacer>
      <v-btn color="primary" icon><v-icon>mdi-close</v-icon></v-btn>
    </v-card-title>
    <v-card-text>
      <v-textarea
        solo
        name="input-7-4"
        label="Solo textarea"
        :resize="false"
        hide-details
      ></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-checkbox
        label="Check here if your concern is for a software/technical issue."
      ></v-checkbox>
      <v-btn color="success">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {}
</script>
<style lang=""></style>
