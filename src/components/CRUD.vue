<script setup>
import { ref, reactive, computed } from 'vue'

// const categories = ref([])
// const newCollection = ref('')
// const editForm = ref(false)
// const editCard = ref(false)
const collections = ref([])
const newCard = ref('')

const addNew = () => {
  if (newCard.value?.trim()) {
    collections.value.push(newCard.value)
    // console.log('New Word Added!')
    newCard.value = ''
  } else if (!newCard.value) {
    return ''
    // console.log('No word')
  }
}

const removeAllCard = () => {
  collections.value.splice(collections.value)
  // console.log('All cards removed!')
}

const removeCard = (card) => {
  collections.value.splice(card, 1)

  // const indexOfCard = collections.value.indexOf(card)
  // // return -1 if it is not present
  // if (indexOfCard !== -1) {
  //   collections.value.splice(indexOfCard, 1)
  //   // console.log('Remove word success!')
  // } else {
  //   // console.log('No word remove')
  // }
}
</script>

<template>
  <div>
    <div class="flex flex-col gap-2 p-7 items-center justify-center">
      <div class="flex gap-1 items-center">
        <p>Add new word</p>
        <input type="text" class="border h-8" v-model="newCard" />
        <button
          class="bg-gray-200 p-2 hover:bg-pink-300"
          @click="addNew"
          @keyup.enter="addNew"
        >
          ADD
        </button>
        <button
          class="bg-gray-200 p-2 hover:bg-blue-300"
          @click="removeAllCard"
        >
          REMOVE ALL
        </button>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="flex flex-col justify-start px-5">
        <p
          class="flex items-center py-1 gap-x-5"
          v-for="(card, index) in collections"
          :key="index"
          v-show="!editForm"
        >
          {{ card }}
          <button
            class="bg-yellow-300 p-1"
            @click="editCard(card) && editForm === true"
          >
            EDIT
          </button>
          <button class="bg-red-300 p-1" @click="removeCard(card)">
            REMOVE
          </button>
        </p>
      </div>
      <div
        class="flex justify-center p-2 bg-gray-200 w-1/4 h-20"
        v-show="editForm"
      >
        <div>
          <p>Edit your card</p>
          <div class="flex gap-x-2 items-center">
            <input type="text" class="border h-8" v-model="newCard" />
            <button class="bg-gray-600 p-2" @click="editCard">DONE</button>
            <button class="bg-gray-600 p-2" @click="e">CANCEL</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
