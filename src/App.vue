<script setup>
import { ref } from 'vue'
// import folder from './components/folder.vue'
const flashCard = ref([])
const formInput = ref(false)
const nameFolder = ref('')

const createNewFolder = () => {
  const newFolder = { name: nameFolder.value }
  flashCard.value.push(newFolder)
  formInput.value = false
  console.log(nameFolder.value)
  console.log(flashCard.value)

  nameFolder.value = ''
}

const openForm = () => {
  formInput.value = true
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">FLASHCARD</h1>
    <button class="border-2 border-black mt-10" @click="openForm">
      Add New Folder
    </button>
  </div>

  <div>
    <!-- <img src="/Folder.svg" class="w-40 mt-10" /> -->

    <div v-for="(folder, index) in flashCard">
      <div
        class="bg-gray-200 border border-gray-300 rounded-md shadow-md w-60 h-52 mt-10 ml-10"
      >
        <button class="text-2xl">...</button>
        <h1 class="flex justify-center mt-16 text-3xl">{{ folder.name }}</h1>
      </div>
    </div>
  </div>

  <section form v-if="formInput" class="flex justify-center">
    <div
      class="border border-gray-300 rounded-lg w-64 h-36 bg-white flex flex-col items-center"
    >
      <input
        type="text"
        class="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
        placeholder="Name Folder"
        v-model="nameFolder"
      />
      <button
        class="bg-blue-500 text-white py-2 px-4 rounded-lg"
        @click="createNewFolder"
      >
        Done
      </button>
    </div>
  </section>
</template>

<style scoped></style>
