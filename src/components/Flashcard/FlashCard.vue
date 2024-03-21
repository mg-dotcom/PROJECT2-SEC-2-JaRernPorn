<script setup>

import { reactive, ref } from 'vue'
import Header from '../Header.vue'
import Content from './ContentFcPage.vue'

const showFlashCard = ref(true)

const popup = reactive({
  newFlashcard: false,
  //Setting
  optionFlashcard: false,
  renameFlashcard: false
})

const closeOption = () => {
  popup.optionFlashcard = false
}

</script>

<template>
  <div class="bg-main-bgColor min-h-screen w-full" @click.self="closeOption">
    <section v-if="showFlashCard" @click.self="closeOption">
      <Header :closeOption="closeOption">
        <template #title> </template>
      </Header>

      <Content :popup="popup" :closeOption="closeOption"></Content>
    </section>
  </div>
</template>

<style scoped></style>
