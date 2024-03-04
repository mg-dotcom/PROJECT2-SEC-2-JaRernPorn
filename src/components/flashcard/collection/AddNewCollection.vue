<script setup>
import { ref } from 'vue'

const userInput = ref('')
const collection_name = ref('')

const submitButton = () => {
  collection_name.value = userInput.value
  console.log(collection_name.value)
}
</script>

<template>
  <div>
    <h1>Add new collection</h1>
    <input type="text" class="border border-black" v-model="userInput" />
    <button class="bg-green-400" @click="submitButton">OK</button>
  </div>
</template>

<style scoped></style>
