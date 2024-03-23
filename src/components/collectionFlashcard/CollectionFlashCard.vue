<script setup>
import { onMounted, reactive } from 'vue'
import Header from '../Header.vue'
import Content from './Content.vue'
// import fetchUtils from '../../libs/flashcard-libs/FetchUtils'
// import { getCollections } from '../../libs/flashcard-libs/FetchUtils' //destruct

const page = reactive({
  flashcard: true
})

const popup = reactive({
  newCollection: false,
  optionCollection: false,
  editCollection: false,
  renameCollection: false,
  Setting: false
})

const closeOption = () => {
  popup.optionCollection = false
}

// onMounted(async () => {
//   await getCollections(import.meta.env.VITE_BASE_URL)
// })
</script>

<template>
  <!-- Flashcard Page -->
  <section class="flashcard-page overflow-hidden" v-show="page.flashcard">
    <div class="min-h-screen w-screen bg-main-bgColor" @click.self="close">
      <Header :closeOption="closeOption">
        <template #title> Flashcard </template>
      </Header>

      <Content :closeOption="closeOption" :popup="popup"> </Content>
    </div>
  </section>
</template>

<style scoped></style>
