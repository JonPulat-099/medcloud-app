<template>
  <div>
    Test APP
    <v-switch v-model="isTimer" inset flat :ripple="false"></v-switch>
    <v-switch label="label" v-model="isTimer"></v-switch>
    <v-switch
      v-model="isTimer"
      inset
      :label="`Switch 1: ${isTimer.toString()}`"
    ></v-switch>
  </div>
</template>
<script>
export default {
  name: "CourseappType",
  layout: "testinterface",
  data() {
    return {
      isTimer: true
    }
  }
}
</script>
<style lang="">
  
</style>