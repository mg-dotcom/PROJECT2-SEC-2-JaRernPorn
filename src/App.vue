<script setup>
import { ref } from 'vue'
// import folder from './components/folder.vue'
const flashCard = ref([])
const formInput = ref(false)
const formInputInFolder = ref(false)
const nameFolder = ref('')
const thisFolder = ref(null)

//edit
const oldName = ref('')
const editForm = ref(false)

const createNewFolder = () => {
  if (!nameFolder.value) {
    //include null, undefined, 0, an empty string '', NaN, and false.
    alert('Name smth beach')
    return ''
  }
  const newFolder = { name: nameFolder.value }
  flashCard.value.push(newFolder)
  closeForm()
  console.log(nameFolder.value)
  console.log(flashCard.value)

  nameFolder.value = ''
}

const openForm = () => {
  formInput.value = true
}

const closeForm = () => {
  formInput.value = false
  editForm.value = false
}

const closeFormInFolder = () => {
  formInputInFolder.value = false
}

const openFormWithinFolder = (index) => {
  formInputInFolder.value = true
  thisFolder.value = index //เก็บindex
  console.log(thisFolder.value)
}

const makeItGone = () => {
  console.log(flashCard.value)
  flashCard.value.splice(thisFolder.value, 1) //ตัวที่จะลบ,จำนวนที่จะลบ
  formInputInFolder.value = false
}

const editThisFolder = () => {
  editForm.value = true
  console.log(flashCard.value[thisFolder.value].name)
  oldName.value = flashCard.value[thisFolder.value].name
}
</script>

<template>
  <div class="h-screen w-full relative">
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ 'background-image': 'url(/dorajung.jpg)' }"
    ></div>

    <div
      class="absolute inset-0 flex flex-col items-center justify-start p-8 overflow-y-auto"
    >
      <h1 class="text-3xl font-bold text-white">FLASHCARD</h1>
      <button
        class="bg-[#b13f54] text-white font-bold py-2 px-4 rounded mt-4"
        @click="openForm"
      >
        Add New Folder
      </button>

      <div>
        <!-- <img src="/Folder.svg" class="w-40 mt-10" /> -->
        <div class="grid grid-cols-5 gap-24 mt-8">
          <div
            v-for="(folder, index) in flashCard"
            :key="index"
            class="bg-gray-200 border border-gray-300 rounded-md shadow-md w-60 h-52"
          >
            <button class="text-2xl" @click="openFormWithinFolder(index)">
              ...
            </button>
            <h1 class="flex justify-center mt-16 text-3xl">
              {{ folder.name }}
            </h1>
          </div>
        </div>
      </div>

      <section
        v-if="formInput"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        @click.self="closeForm"
      >
        <div class="bg-white rounded-lg p-8">
          <input
            type="text"
            class="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            placeholder="Name Folder"
            v-model="nameFolder"
            @keyup.enter="createNewFolder"
          />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="createNewFolder"
          >
            Done
          </button>
        </div>
      </section>

      <section
        v-if="formInputInFolder"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        @click.self="closeFormInFolder"
      >
        <div class="bg-white rounded-lg p-8">
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            @click="makeItGone(index)"
          >
            Delete
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            @click="editThisFolder"
          >
            Edit
          </button>
        </div>
      </section>

      <section
        v-if="editForm"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        @click.self="closeForm"
      >
        <div>
          <input
            type="text"
            class="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            :placeholder="oldName"
            v-model="newName"
          />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            @click="editThisFolder"
          >
            Finish
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
