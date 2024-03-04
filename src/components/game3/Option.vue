<script setup>
    const props=defineProps(
        {options:Array}
    )
</script>
 
<template>
 <div v-for="(option, index) in options" :key="index" class="bg-title mb-3 text-center text-white text-lg font-normal p-2 rounded-xl">
      {{ option }}
    </div>
</template>
 
<style scoped>

</style>