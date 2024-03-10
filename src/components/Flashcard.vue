<script setup>
import { ref } from 'vue'
const noCollectionAdded = ref(false)
const noCardAdded = ref(false)
const flashcard = ref(true)
const addNewCollection = ref(false)

const isAddNewCollectionValid = () => {
  const flashcard = ref(flase)
  const addNewCollection = ref(true)
}
</script>

<template>
  <!-- flashcard page -->
  <div class="w-full h-screen bg-main-bgColor">
    <div class="flex justify-between items-center p-2 md:p-4 lg:px-10 lg:py-12">
      <div>
        <img
          src="/flashcard/back-button.svg"
          alt="back button"
          class="w-16 cursor-pointer lg:w-20"
        />
      </div>
      <div>
        <h1
          class="text-4xl font-alkatra text-title font-semibold md:text-5xl lg:text-6xl"
        >
          FLASHCARD
        </h1>
      </div>
      <div>
        <img
          src="/flashcard/setting vector.svg"
          alt="setting"
          class="w-8 cursor-pointer lg:w-10"
        />
      </div>
    </div>
    <div class="flex flex-col px-4 md:px-6 lg:px-14">
      <div class="flex justify-between">
        <button
          class="font-outfit font-medium md:text-xl lg:text-2xl hover:text-title"
          @click="isAddNewCollectionValid"
        >
          Add new +
        </button>
        <img
          src="/flashcard/menu.svg"
          alt="menu"
          class="w-1 lg:w-1.5 cursor-pointer"
        />
      </div>
      <p class="border border-b-0 border-gray-border"></p>
      <div
        class="font-outfit text-gray-border flex justify-center items-center text-md"
        v-show="noCollectionAdded"
      >
        No collection add yet
      </div>

      <div
        class="font-outfit text-gray-border flex justify-center items-center text-md"
        v-show="noCardAdded"
      >
        No flashcard add yet
      </div>
    </div>
    <!-- <div class="flex gap-2 p-2">
    <p>Add new collection</p>
    <input type="text" class="border" v-model="input" />
    <div class="flex gap-1">
      <button class="bg-gray-200 p-2" @click="addNew">ADD</button>
      <button class="bg-gray-200 p-2" @click="remove">REMOVE</button>
    </div>
    {{}}
  </div> -->
  </div>
</template>

<style scoped></style>
