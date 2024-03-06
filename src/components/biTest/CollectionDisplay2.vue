<script setup>
defineProps({
  collectionName: String,
  deleteCollection:Function,
  collectionIndex:Number
})

</script>

<template>
  <div class="bg-red-400">{{ collectionName }}<button class="underline bg-blue-300" @click="deleteCollection(collectionIndex)">delete</button></div>
  
</template>

<style scoped></style>
