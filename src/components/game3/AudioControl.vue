<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  source: String
})
</script>

<template>
  <div>
    <audio controls class="hidden">
      <source :src="source" type="audio/mp3" />
    </audio>
  </div>
</template>

<style scoped></style>
