<script setup>
import { ref } from 'vue'
import CollectionDisplay from './CollectionDisplay.vue';
const newCollectionName = ref('')
const collections = ref([]);

const createCollection = () => {
  collections.value.push(newCollectionName.value);
  newCollectionName.value = ''; // Clear input field after adding collection
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Create a New Collection</h1>
    <form @submit.prevent="createCollection" class="mb-4">
      <label for="collectionName" class="block mb-2">Collection Name:</label>
      <input type="text" id="collectionName" v-model="newCollectionName" required class="border border-gray-300 rounded-md px-3 py-2 w-full">
      <button type="submit" class="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Create</button>
    </form>
    <div v-for="(collection, index) in collections" :key="index" class="bg-gray-100 rounded-md p-4 mb-4">
      <CollectionDisplay :collectionName="collection" />
    </div>
  </div>
</template>

<style scoped></style>
