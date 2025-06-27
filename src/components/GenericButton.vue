<template>
  <button
    :style="buttonStyle"
    class="generic-button"
  >
    {{ text }}
  </button>
</template>

<script>
import colors from '../utils/colors';

export default {
  name: 'GenericButton',
  props: {
    color: {
      type: String,
      default: colors.whiteColor
    },
    backgroundColor: {
      type: String,
      default: colors.whiteColor
    },
    text: {
      type: String,
      required: true
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color,
        border: this.border ? '1px solid black' : 'none'
      }
    }
  }
}
</script>

<style scoped>
.generic-button {
  padding: 10px 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease, border 0.3s ease;
}

.generic-button:hover {
  filter: brightness(90%);
}
</style>
