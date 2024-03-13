<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  source: String
})
</script>

<template>
  <audio controls class="hidden">
    <source :src="source" type="audio/mp3" />
  </audio>
</template>

<style scoped></style>
