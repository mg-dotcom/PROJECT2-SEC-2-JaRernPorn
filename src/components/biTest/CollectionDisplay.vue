<script setup>

const props=defineProps({
    collectionName:String,
})

</script>

<template>
  <div>
    <h2>Created Collection:</h2>
    <p class="bg-blue-400 border border-black">{{ collectionName }}</p>
  </div>
</template>

<style scoped></style>
