<script setup>

const props=defineProps({
    collectionName:String,
})

</script>

<template>
  <div>
    <h2 class="text-lg font-semibold mb-2">Created Collection:</h2>
    <p class="text-gray-800">{{ collectionName }}</p>
  </div>
</template>

<style scoped></style>
