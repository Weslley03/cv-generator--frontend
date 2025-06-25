<template>
  <div class="container">
    <HeaderPage />
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
      <div class="title">
        <p> Experiência profissional </p>
        <GenericButton class="button" :text="'Adicionar experiência'" :backgroundColor="colors.principalButton"/>
      </div>
      <div class="workExperience">
        <div class="flex">
          <div class="floor">
            <p> Empresa </p>
            <GenericInputRounded class="input-rounded" :placeholder="'Nome da empresa'"/> 
          </div>
          <div class="floor">
            <p> Cargo </p>
            <GenericInputRounded class="input-rounded" :placeholder="'Cargo'"/> 
          </div>
        </div>

        <div class="floor">
          <p> Período trabalhado </p>
          <GenericInputRounded class="input-rounded" :placeholder="'ex: Janeiro 2024 - Junho 2025'"/> 
        </div>

        <p> Descrição </p>
        <GenericTextArea class="description-textarea" :placeholder="'Descreve suas responsabilidades'"/> 
      </div>
    </div>

    <div class="section skils">
      <div class="floor">
      <div class="title">
        <p> Habilidades </p>
        <GenericButton class="button" :text="'Adicionar habilidade'" :backgroundColor="colors.principalButton"/>
      </div>
        <GenericTextArea :placeholder="'Descreva suas habilidades'"/> 
      </div>
    </div>

    <div class="section objectives">
      <div class="floor">
        <p> Objetivo </p>
        <GenericTextArea :placeholder="'Qual seu objetivo?'"/> 
      </div>
    </div>
    <FooterPage />
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderPage from '../components/HeaderPage.vue'
import GenericInput from '../components/GenericInput.vue'
import GenericTextArea from '../components/GenericTextArea.vue'
import colors from '../utils/colors'
import GenericButton from '../components/GenericButton.vue'
import GenericInputRounded from '../components/GenericInputRounded.vue'
import FooterPage from '../components/FooterPage.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    HeaderPage,
    GenericInput,
    GenericTextArea,
    GenericButton,
    GenericInputRounded,
    FooterPage,
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

.title {
  display: flex;
  justify-content: space-between;
}
.title > p {
  font-size: 16px;
  font-weight: 500;
}
.button {
  height: fit-content;
  width: fit-content;
}

.workExperience {
  background-color: #EDEDED;
  padding: 3px 20px;
  border-radius: 12px;
}
.workExperience .flex {
  display: flex;
}
.workExperience .floor {
  width: 50%;
}
.input-rounded {
  width: 90%;
  height: 40px;
}

.description-textarea {
  background-color: var(--whiteColor);
  border-radius: 12px;
  padding: 10px;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .section.basic-informations {
    display: flex;
    flex-direction: column;
  }

  .title {
    flex-direction: column;
    margin: 10px;
  }

  .workExperience .floor {
    width: 100%;
  }

  .workExperience .flex{
    flex-direction: column;
  }
}
</style>