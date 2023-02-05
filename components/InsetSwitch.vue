<template>
  <div class="usmle-switch d-flex align-center">
    <template v-if="isTitle">SI References</template>
    <label class="switch ml-2">
      <input type="checkbox" v-model="isChecked" @change="changeCheck" />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'InsetSwitch',
  props: {
    isTitle: {
      typy: Boolean,
      default: true
    }
  },
  data() {
    return {
      isChecked: false,
    }
  },
  methods: {
    changeCheck(event) {
      this.$emit('input', this.isChecked)
    },
  },
}
</script>

<style lang="scss">
.usmle-switch {
  font-weight: 500;
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
}
</style>