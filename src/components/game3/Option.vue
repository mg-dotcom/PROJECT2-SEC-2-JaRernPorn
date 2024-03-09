<script setup>
const props = defineProps({ options: Array })
const emits = defineEmits(['optionClicked'])
const selectOption = (option) => {
  emits('optionClicked', option)
}
</script>

<template>
  <div
    v-for="(option, index) in options"
    :key="index"
    @click="selectOption(option)"
    class="bg-title mb-3 text-center text-white text-lg font-normal p-2 rounded-xl hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
  >
    {{ option.word }}
  </div>
</template>

<style scoped></style>
