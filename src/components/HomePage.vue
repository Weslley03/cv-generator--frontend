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

    <div class="section floor">
      <p> Experiência profissional </p>
      <GenericButton :text="'Adicionar experiência'" :backgroundColor="colors.principalButton"/>
      <div class="workExperience">
        <p> Empresa </p>
        <GenericInput :placeholder="'Nome da empresa'"/> 
        <p> Cargo </p>
        <GenericInput :placeholder="'Cargo'"/> 
        <p> Período trabalhado </p>
        <GenericInput :placeholder="'ex: Janeiro 2024 - Junho 2025'"/> 
        <p> Descrição </p>
        <GenericInput :placeholder="'Descreve suas responsabilidades'"/> 
      </div>
    </div>

    <div class="section skils">
      <div class="floor">
        <p> Habilidades </p>
        <GenericButton :text="'Adicionar habilidade'" :backgroundColor="colors.principalButton"/>
        <GenericTextArea :placeholder="'Descreva suas habilidades'"/> 
      </div>
    </div>

    <div class="section objectives">
      <div class="floor">
        <p> Objetivo </p>
        <GenericTextArea :placeholder="'Qual seu objetivo?'"/> 
      </div>
    </div>

 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './Header.vue'
import GenericInput from './GenericInput.vue'
import GenericTextArea from './GenericTextArea.vue'
import colors from '../utils/colors'
import GenericButton from './GenericButton.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    Header,
    GenericInput,
    GenericTextArea,
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

.workExperience {
  background-color: #EDEDED;
  padding: 3px 20px;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .section.basic-informations {
    display: flex;
    flex-direction: column;
  }
  }
</style>