<template>
  <div class="container">
    
    <Header />

    <div class="section basic-informations">
      <div class="first-column">
        <div class="floor">
          <p> Nome </p>
          <GenericInput :placeholder="'Insira seu nome'"/>
        </div>
        <div class="floor">
          <p> Número </p>
          <GenericInput :placeholder="'Insira seu número'"/>
        </div>
      </div>
      <div class="second-column">
        <div class="floor">
          <p> Cidade </p>
          <GenericInput :placeholder="'Insira sua cidade'"/>
        </div>
        <div class="floor">
          <p> Email </p>
          <GenericInput :placeholder="'Insira seu email'"/>
        </div>
      </div>
    </div>
    
    <div class="section aboutMe">
      <div class="floor">
        <p> Sobre mim </p>
        <GenericTextArea :placeholder="'Escreva um pouco sobre você'"/> 
      </div>
    </div>

 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './Header.vue'
import GenericInput from './GenericInput.vue'
import GenericTextArea from './GenericTextArea.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    Header,
    GenericInput,
    GenericTextArea,
  },
  setup() { return { } }
})
</script>

<style scoped>
.container {
  background-color: #F2F2F2;
  border-radius: 8px;
}

.section {
  margin: 30px;
  padding: 20px;
  background-color: var(--whiteColor);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 12px;
}

.section.basic-informations {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.first-column,
.second-column {
  flex: 1;
}

.floor > p {
  font-size: 16px;
  font-weight: 500;
}

.aboutMe {
  
}
</style>