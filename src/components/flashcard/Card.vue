<script setup>
import { defineProps } from "vue";

const props = defineProps;
</script>

<template>
  <div class="cards flex-col justify-center items-center">
    <div class="flex flex-wrap gap-10 justify-center">
      <div v-for="card in computedFlashcards" :key="card.id">
        <div
          class="flex flex-col justify-center h-[200px] w-[400px] rounded-3xl shadow-md bg-white"
        >
          <div class="flex flex-col items-center font-outfit text-lg">
            <div>{{ card.word }}</div>
            <div>{{ card.meaning }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
