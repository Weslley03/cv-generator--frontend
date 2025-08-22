<template>
  <div v-if="!previewHtml" class="container">

    <HeaderPage>
      <template #actions>
        <GenericButton @click="handleClick('download')" :text="'Download'" :backgroundColor="colors.principalButton" />
        <GenericButton @click="handleClick('preview')" :text="'Preview'" :color="'black'" :border="true" />
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
        <div style="height: 150px;">
          <GenericTextArea v-model="curriculumData.aboutMe" :placeholder="'Escreva um pouco sobre você'"/> 
        </div>
      </div>
    </div>

    <div class="section floor" v-for="(exp, index) in curriculumData.workExperience" :key="index">
      <div class="title">
        <p> Experiência profissional </p>
        <GenericButton @click="addWorkExperience" class="button" :text="'Adicionar experiência'" :backgroundColor="colors.principalButton"/>
      </div>
      <div class="workExperience">
        <div class="flex">
          <div class="floor">
            <p> Empresa </p>
            <GenericInputRounded v-model="exp.company" class="input-rounded" :placeholder="'Nome da empresa'"/> 
          </div>
          <div class="floor">
            <p> Cargo </p>
            <GenericInputRounded v-model="exp.cargo" class="input-rounded" :placeholder="'Cargo'"/> 
          </div>
        </div>

        <div class="floor">
          <p> Período trabalhado </p>
          <GenericInputRounded v-model="exp.workPeriod" class="input-rounded" :placeholder="'ex: Janeiro 2024 - Junho 2025'"/> 
        </div>

        <p> Descrição </p>
        <div style="height: 120px; margin-bottom: 20px;">
          <GenericTextArea v-model="exp.description" class="description-textarea" :placeholder="'Descreve suas responsabilidades'"/> 
        </div>
      </div>
    </div>

    <div class="section skils">
      <div class="floor" v-for="(s, index) in curriculumData.skills" :key="index">
        <div class="title">
          <p> Habilidades </p>
          <GenericButton @click="addSkills" class="button" :text="'Adicionar habilidade'" :backgroundColor="colors.principalButton"/>
        </div>
        <div style="height: 150px;">
          <GenericTextArea v-model="s.description" :placeholder="'Descreva suas habilidades'"/> 
        </div>
      </div>
    </div>

    <div class="section objectives">
      <div class="floor">
        <p> Objetivo </p>
        <div style="height: 150px;">
          <GenericTextArea v-model="curriculumData.objective[0].description" :placeholder="'Qual seu objetivo?'"/> 
        </div>
      </div>
    </div>
    <FooterPage />
 </div>
 <div v-if="previewHtml"> <GenericButton @click="previewHtml = ''" class="button" :text="'voltar'"
    :backgroundColor="colors.principalButton"/> </div>
 <div v-if="previewHtml" v-html="previewHtml" class="curriculum-preview" />
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue'
import HeaderPage from '../components/HeaderPage.vue'
import GenericInput from '../components/GenericInput.vue'
import GenericTextArea from '../components/GenericTextArea.vue'
import colors from '../utils/colors'
import GenericButton from '../components/GenericButton.vue'
import GenericInputRounded from '../components/GenericInputRounded.vue'
import FooterPage from '../components/FooterPage.vue'
import { config_env_data } from '../utils/config'

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
    const allInputsFilled = ref(false)
    const previewHtml = ref("")
    type optionClick = 'preview' | 'download'

    const curriculumData = reactive({
      name: "",
      city: "",
      number: "",
      email: "",
      aboutMe: "",
      workExperience: [ { company: "", cargo: "", workPeriod: "", description: "" } ],
      skills: [ { description: "" } ],
      objective: [ { description: "" } ]
    })

    const handleClick = (caller: optionClick) => {
      if (!allInputsFilled.value) { 
        alert('empty datas')
        return
      } 

      switch (caller) {
        case 'preview':
          return preview()
        case 'download':
          return download()
      }
    }

    const preview = async () => {
      try {
        const data = cleanEmptyArrayItems(curriculumData)

        const response = await fetch(config_env_data.API + '/view', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        const html = await response.text()
        previewHtml.value = html
      } catch (error) {
        console.error('erro ao gerar preview:', error)
      }
    }

    const download = () => {
      const data = cleanEmptyArrayItems(curriculumData)

      fetch(config_env_data.API + '/pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'curriculum.pdf')
          document.body.appendChild(link)
          link.click()
          link.remove()
        })
        .catch(error => {
          console.error('erro ao baixar o PDF:', error)
        })
    } 

    const checkAllFieldsFilled = (data: typeof curriculumData): boolean => {
      const basicFields = ['name', 'city', 'number', 'email', 'aboutMe'];
      for (const key of basicFields) {
        if (!data[key as keyof typeof data]) return false;
      }

      const someWorkFilled = data.workExperience.some(w =>
        w.company && w.cargo && w.workPeriod && w.description
      )

      const someSkillsFilled = data.skills.some(s => s.description)
      const allObjectivesFilled = data.objective.every(o => o.description)

      return someWorkFilled && someSkillsFilled && allObjectivesFilled
    }

    const cleanEmptyArrayItems = (data: typeof curriculumData) => {
      data.workExperience = data.workExperience.filter(w =>
        w.company || w.cargo || w.workPeriod || w.description
      )

      data.skills = data.skills.filter(s => s.description)

      data.objective = data.objective.filter(o => o.description)

      return data
    }

    const addWorkExperience = () => {
      curriculumData.workExperience.push({
        company: "",
        cargo: "",
        workPeriod: "",
        description: ""
      });
    }

    const addSkills = () => {
      curriculumData.skills.push({
        description: ""
      });
    }

    watch(
      () => curriculumData,
      (newvalue) => {
        allInputsFilled.value = checkAllFieldsFilled(newvalue)
      }, { immediate: true, deep: true }
    )

    return { 
      colors,
      curriculumData,
      handleClick,
      preview,
      previewHtml,
      addWorkExperience,
      addSkills,
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

.curriculum-preview {
  border: 1px solid #ccc;
  margin-top: 20px;
  padding: 15px;
  background: #fff;
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