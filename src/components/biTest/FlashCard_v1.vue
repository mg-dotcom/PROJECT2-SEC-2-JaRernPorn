<script setup>
import { ref } from 'vue'
import CollectionDisplay from './CollectionDisplay.vue';
const newCollectionName = ref('')
const createdCollectionName = ref('')

const createCollection = () => {
  createdCollectionName.value = newCollectionName.value
}
</script>

<template>
  <div>
    <h1>Create a new Collection</h1>
    <form @submit.prevent="createCollection">
      <label for="collectionName">Collection Name:</label>
      <input type="text" v-model="newCollectionName" class="border border-black"/>
      <button type="submit" class="bg-green-500">Create</button>
    </form>
    <CollectionDisplay :collectionName="createdCollectionName" v-if="createdCollectionName"/>
  </div>
</template>

<style scoped></style>
