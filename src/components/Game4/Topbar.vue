<script setup>
import data from '../../../data/categories.json'
const emits = defineEmits(['setting'])
</script>

<template>
  <div>
    <div class="flex flex-col gap-5 px-16 py-8">
      <div class="flex justify-between items-center">
        <h1 class="font-outfit text-title text-3xl font-semibold sm:text-4xl">
          Category: {{ data.categories[0].name }}
        </h1>
        <img
          src="/game4/setting vector.svg"
          alt="setting"
          class="w-8 cursor-pointer hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out sm:w-10"
          @click="$emit('setting', true)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
