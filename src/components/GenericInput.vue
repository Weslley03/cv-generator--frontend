<template>
  <input
    :placeholder="placeholder"
    class="input"
    :value="modelValue"
    @input="(e: Event) => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GenericInput',
  components: {

  },
  props: {
    placeholder: { type: String, default: '' },
    modelValue: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  setup() {
    return {}
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