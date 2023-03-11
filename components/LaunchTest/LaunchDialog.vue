<template lang="">
  <v-dialog
    v-model="dialog"
    persistent
    max-width="250px"
    transition="dialog-transition"
    content-class="launch__dialog"
  >
    <v-card class="launch__dialog--card" :flat="false">
      <v-card-title :style="{ background: color }" align-center>
        {{ title }}
      </v-card-title>
      <v-card-text>
        {{ text }}
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn depressed @click="$emit('cancelAction')">No</v-btn>
        <v-btn depressed @click="$emit('confirmAction')">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'LaunchDialog',
  props: {
    title: {
      type: String,
      default: 'End Test',
    },
    text: {
      type: String,
      default: 'Do you want to end this block ?',
    },
    color: {
      type: String,
      default: '#E31E24',
    },
  },
  data() {
    return {
      dialog: true,
    }
  },
}
</script>
<style lang="scss">
.launch__dialog {
  box-shadow: none !important;
  &--card {
    box-shadow: none !important;
    .v-card__title {
      display: block;
      color: #fff;
      text-transform: uppercase;
      text-align: center !important;
      padding: 8px 0 !important;
      font-weight: 600 !important;
    }

    .v-card__text {
      color: #000 !important;
      padding: 20px 0 30px !important;
      text-align: center;
      font-size: 16px;
      max-width: 150px;
      margin: 0 auto !important;
      border: none !important;
      font-weight: 400;
    }

    .v-card__actions {
      padding: 0 0 30px 0 !important;
    }

    .v-btn {
      color: #fff;
      text-transform: capitalize;
      padding: 0 25px !important;
      font-weight: 400 !important;
      border-radius: 12px;
      &:first-child {
        background: #acb4c0 !important;
      }

      &:last-child {
        background: #0e4687 !important;
      }
    }
  }
}
</style>
