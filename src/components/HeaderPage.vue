<template>
  <div class="HeaderPage-container">
    <div class="logo">
      <img src="/public/file-icon.png" class="file-icon">
      <p class="title"> Curriculum Builder </p>
    </div>
    <div class="actions-buttons">
      <slot name="actions">
        <!-- fallback content -->
      <GenericButton :text="'Download'" :backgroundColor="colors.principalButton"/>
      <GenericButton :text="'Preview'" :color="'black'" :border="true"/>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GenericButton from './GenericButton.vue'
import colors from '../utils/colors'

export default defineComponent({
  name: 'HeaderPage',
  components: {
    GenericButton,
  },
  setup() {
    return {
      colors,
    }
  }
})
</script>

<style scoped>
.HeaderPage-container {
  height: 60px;
  background-color: var(--whiteColor);
  padding: 10px 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
}
.file-icon {
  max-width: 22px;
  margin-bottom: 4px;
}
.title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}
.actions-buttons {
  display: flex;
  gap: 10px;
}

@media (max-width: 768px) {
  .HeaderPage-container {
    display: flex;
    flex-direction: column;
    height: 100px;
    gap: 12px;
  }
}
</style>