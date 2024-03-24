<script setup>
import { onMounted, reactive, ref } from 'vue'
import Header from '../Header.vue'
import Content from './Content.vue'
import {
  getFlashcard,
  addFlashcard,
  deleteFlashcardById
} from '../../libs/fetchFlashcard'
import {
  addNewFlashcard,
  deleteFlashcard,
  editFlashcard
} from '../../libs/flashcard-libs/FlashCardModal.js'
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

const flashcards = ref(addNewFlashcard())

// get ข้อมูลจาก backend http://localhost:5000/collections
onMounted(async () => {
  const items = await getFlashcard(import.meta.env.VITE_BASE_URL)
  flashcards.value.addFlashcard(items)
})

// // flow => front ส่ง req to backend if status ok
// const removeCard = async (removeId) => {
//   //backend, deleteItemById(url, id)
//   const statusCode = await deleteFlashcardById(
//     import.meta.env.VITE_BASE_URL,
//     removeId
//   )
//   if (statusCode === 200) {
//     //frontend updates myTodos
//     myTodos.value.removeTodo(removeId)
//   }
// }
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
