<template>
  <div class="container">
    <HeaderPage>
      <template #actions>
        <GenericButton :text="'Download'" :backgroundColor="colors.principalButton" />
        <GenericButton @click="preview" :text="'Preview'" :color="'black'" :border="true" />
      </template>
    </HeaderPage>
    <div class="section basic-informations">
      <div class="first-column">
        <div class="floor">
          <p> Nome </p>
          <GenericInput v-model="curriculumData.name" class="input-normal" :placeholder="'Insira seu nome'"/>
        </div>
        <div class="floor">
          <p> Número </p>
          <GenericInput v-model="curriculumData.number" class="input-normal" :placeholder="'Insira seu número'"/>
        </div>
      </div>
      <div class="second-column">
        <div class="floor">
          <p> Cidade </p>
          <GenericInput v-model="curriculumData.city" class="input-normal" :placeholder="'Insira sua cidade'"/>
        </div>
        <div class="floor">
          <p> Email </p>
          <GenericInput v-model="curriculumData.email" class="input-normal" :placeholder="'Insira seu email'"/>
        </div>
      </div>
    </div>
    
    <div class="section aboutMe">
      <div class="floor">
        <p> Sobre mim </p>
        <GenericTextArea v-model="curriculumData.aboutMe" :placeholder="'Escreva um pouco sobre você'"/> 
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
            <GenericInputRounded v-model="curriculumData.workExperience[0].company" class="input-rounded" :placeholder="'Nome da empresa'"/> 
          </div>
          <div class="floor">
            <p> Cargo </p>
            <GenericInputRounded v-model="curriculumData.workExperience[0].cargo" class="input-rounded" :placeholder="'Cargo'"/> 
          </div>
        </div>

        <div class="floor">
          <p> Período trabalhado </p>
          <GenericInputRounded v-model="curriculumData.workExperience[0].workPeriod" class="input-rounded" :placeholder="'ex: Janeiro 2024 - Junho 2025'"/> 
        </div>

        <p> Descrição </p>
        <GenericTextArea v-model="curriculumData.workExperience[0].description" class="description-textarea" :placeholder="'Descreve suas responsabilidades'"/> 
      </div>
    </div>

    <div class="section skils">
      <div class="floor">
      <div class="title">
        <p> Habilidades </p>
        <GenericButton class="button" :text="'Adicionar habilidade'" :backgroundColor="colors.principalButton"/>
      </div>
        <GenericTextArea v-model="curriculumData.skills[0].description" :placeholder="'Descreva suas habilidades'"/> 
      </div>
    </div>

    <div class="section objectives">
      <div class="floor">
        <p> Objetivo </p>
        <GenericTextArea v-model="curriculumData.objective[0].description" :placeholder="'Qual seu objetivo?'"/> 
      </div>
    </div>
    <FooterPage />
 </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
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

    const log = (value: unknown) => console.log(value)

    const curriculumData = reactive({
      name: "",
      city: "",
      number: "",
      email: "",
      aboutMe: "",
      workExperience: [ { company: "", cargo: "", workPeriod: "", description: "" } ],
      skills: [ { description: "" } ],
      objective: [ { description: "" } ]
    });

    const preview = () => {
      log(curriculumData)
    }
    return { 
      colors,
      curriculumData,
      preview,
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
.input-normal {
  width: 90%;
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