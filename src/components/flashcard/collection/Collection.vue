<script setup>
const props=defineProps({
  collectionName:String
})
</script>
 
<template>
<div>
    <div class="collections">
      <div class="collection">
        <div class="bg-blue-300 w-1/6 h-32">{{ collectionName }}</div>
      </div>
    </div>
</div>
</template>
 
<style scoped>

</style>