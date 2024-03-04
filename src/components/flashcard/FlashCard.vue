<script setup>
import AddNewCollection from './collection/AddNewCollection.vue';
import Collection from './collection/Collection.vue';
</script>

<template>
  <div>
    <div class="header">
      <h1 class="text-2xl font-bold ">Flashcard</h1>
    </div>
    <div class="addNew mt-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add new +</button>
      <hr class="my-4"/>
    </div>
    <div>
        <Collection/>
    </div>
    <div>
        <AddNewCollection/>
    </div>
  </div>
</template>

<style scoped></style>
