<template>
  <div class="footer-container">
    <div class="rights">
      <p> © 2025 Curriculum Builder. All rights reserved. </p>
    </div>
    <div class="links">
      <p> weslleydev </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import colors from '../utils/colors'

export default defineComponent({
  name: 'FooterPage',
  components: {

  },
  setup() {
    return {
      colors,
    }
  }
})
</script>

<style scoped>
.footer-container {
  background-color: var(--whiteColor);
  padding: 10px 40px;
  border-radius: 8px;
  display: flex;
}

.rights {
  color: gray;
}

.links {
  display: flex;
  margin-left: auto;
  gap: 12px;
}

@media (max-width: 768px) {
  .footer-container {}
}
</style>