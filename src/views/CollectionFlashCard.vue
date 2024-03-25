<script setup>
import { reactive } from 'vue'
import Header from '../components/Header.vue'
import Content from '../components/collectionFlashcard/Content.vue'

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
</script>

<template>
  <!-- Flashcard Page -->
  <section class="flashcard-page overflow-hidden" v-show="page.flashcard">
    <div class="min-h-screen w-screen bg-main-bgColor" @click.self="close">
      <Header :closeOption="closeOption" :title="'Flashcard'">
        <template #title> </template>
      </Header>
      <Content :closeOption="closeOption" :popup="popup"> </Content>
    </div>
  </section>
</template>

<style scoped></style>
