<script setup>
import { reactive, ref, defineProps, watch } from 'vue'
import Header from '../Header.vue'
import Content from './Content.vue'
import { useRoute } from 'vue-router'

const showFlashCard = ref(true)

const popup = reactive({
  newFlashcard: false,
  optionFlashcard: false,
  renameFlashcard: false
})

const closeOption = () => {
  popup.optionFlashcard = false
}

const route = useRoute()
const collectionName = ref(route.params.name)

watch(
  () => route.params.name,
  (newName) => {
    collectionName.value = newName
  }
)
</script>

<template>
  <div class="bg-main-bgColor min-h-screen w-full" @click.self="closeOption">
    <section v-if="showFlashCard" @click.self="closeOption">
      <Header :closeOption="closeOption" :title="collectionName">
        <template #title>{{ collectionName }}</template>
      </Header>
      <Content :popup="popup" :closeOption="closeOption"></Content>
    </section>
  </div>
</template>

<style scoped></style>
