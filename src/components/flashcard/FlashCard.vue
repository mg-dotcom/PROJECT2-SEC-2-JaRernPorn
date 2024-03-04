<script setup>
import { ref } from 'vue';
import AddNewCollection from './collection/AddNewCollection.vue';
import Collection from './collection/Collection.vue';

const showAddNewCollection = ref(false);
const collectionName = ref('');
const toggleAddNewCollection=()=>{
  showAddNewCollection.value=!showAddNewCollection.value
}

const handleCollectionAdded = (name) => {
  collectionName.value = name;
};

</script>

<template>
  <div>
    <div class="header">
      <h1 class="text-2xl font-bold ">Flashcard</h1>
    </div>

    <div class="addNew mt-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="toggleAddNewCollection">Add new +</button>
      <hr class="my-4"/>
    </div>

    <div>
        <Collection :collectionName="collectionName"/>
    </div>

    <div v-if="showAddNewCollection">
        <AddNewCollection @collectionAdded="handleCollectionAdded"/>
    </div>

  </div>
</template>

<style scoped></style>
