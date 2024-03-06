<script setup>
defineProps({
  collectionName: String
})

const deleteCollection=()=>{

}
</script>

<template>
  <div class="bg-red-400">{{ collectionName }}<button class="underline bg-blue-300" @click="deleteCollection">delete</button></div>
  
</template>

<style scoped></style>
