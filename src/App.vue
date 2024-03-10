<script setup>
import { ref } from 'vue'
import CRUD from './components/CRUD.vue'
import Flashcard from './components/Flashcard.vue'
import AddCollection from './components/AddCollection.vue'

const addNewCollection = ref(false)
const flashcard = ref(true)
</script>

<template>
  <div>
    <!-- test crud -->
    <CRUD></CRUD>
    <!-- flashcard page -->
    <!-- <Flashcard></Flashcard> -->

    <!-- add new collection page -->
    <!-- <AddCollection></AddCollection> -->
  </div>
</template>

<style scoped></style>
