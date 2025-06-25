<template>
  <div id="app"> 
    <router-view /> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import colors from './utils/colors.ts'

export default defineComponent({
  name: 'App',
  components: { },
  setup() {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value)
    })
  }
})
</script>

<style>
html, body, #app {
  background-color: #EDEDED;
  margin: 10px;
  font-family: Arial, Helvetica, sans-serif;
  min-width: 330px;
}
</style>
