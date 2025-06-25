<template>
  <input
    :placeholder="placeholder"
    class="input"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GenericInput',
  components: {

  },
  props: {
    placeholder: { type: String, default: '' }
  },
  setup() {
    return {

    }
  }
})
</script>

<style scoped>
.input {
  border: none;
  outline: none;
  padding: 10px;
  background-color: transparent;
  font-size: 16px;
  color: var(--grayColor);
}
</style>