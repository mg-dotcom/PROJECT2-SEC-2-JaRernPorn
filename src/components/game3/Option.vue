<script setup>
const props = defineProps({
  options: Array,
  correctOption: String,
  isSelected: Boolean,
  userSelected: String,
});
const emits = defineEmits(["optionClicked"]);
// console.log('from option.vue = ' + props.isSelected)
</script>

<template>
  <div
    v-for="(option, index) in options"
    :key="index"
    @click="$emit('optionClicked', option)"
    class="bg-title mb-3 text-center text-white text-lg font-normal p-3 rounded-xl hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
    :class="{
      'bg-green-500': option.word === props.correctOption,
      'bg-blue-500': props.isSelected && option.word === props.userSelected,
    }"
  >
    {{ option.word }}
  </div>
</template>

<style scoped></style>
<!-- :class="{ 'bg-green': option.word === props.correctOption, 'bg-blue': props.isSelected && option.word===props.userSelected }" -->
