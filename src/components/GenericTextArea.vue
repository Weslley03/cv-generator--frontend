<template>
  <div class="encapsulating">
    <textarea
      :placeholder="placeholder"
      class="textarea"
      :value="modelValue"
      @input="(e: Event) => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GenericTextArea',
  components: {

  },
  props: {
    placeholder: { type: String, default: '' },
    modelValue: { type: String, default: '' },
  },
  setup() {
    return {

    }
  }
})
</script>

<style scoped>
.encapsulating {
  width: 100%;
  height: 100%;
}
.textarea {
  border: none;
  outline: none;
  box-shadow: none;
  resize: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  font-size: 16px;
  letter-spacing: -0.08em;
  color: var(--grayColor);
}
</style>