<script setup>
import { ref } from 'vue'
// import folder from './components/folder.vue'
const flashCard = ref([])

const createNewFolder = () => {
  const newFolder = { name: nameFolder }
  flashCard.value.push(newFolder)
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">FLASHCARD</h1>
    <button class="border-2 border-black mt-10" @click="createNewFolder">
      Add New Folder
    </button>
  </div>

  <div>
    <!-- <img src="/Folder.svg" class="w-40 mt-10" /> -->
    <div
      class="bg-gray-200 border border-gray-300 rounded-md shadow-md w-60 h-52 mt-10 ml-10"
    >
      <button class="text-2xl">...</button>
      <div v-for="(fish, index) in flashCard">
        <h1 class="flex justify-center mt-16 text-3xl">{{ fish.name }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
