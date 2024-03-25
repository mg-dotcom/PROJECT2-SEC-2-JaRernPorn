<script setup>
const props = defineProps({
  options: Array,
  correctOption: String,
  isSelected: Boolean,
  userSelected: String
})
const emits = defineEmits(['optionClicked'])
// console.log('from option.vue = ' + props.isSelected)
</script>

<template>
  <div
    v-for="(option, index) in options"
    :key="index"
    @click="$emit('optionClicked', option)"
    class="bg-title mb-3 text-center text-white text-lg font-normal p-3 rounded-xl hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
    :class="{
      'bg-correct-option-green': option.word === props.correctOption,
      'bg-selected-option-blue':
        props.isSelected && option.word === props.userSelected
    }"
  >
    {{ option.word }}
  </div>
</template>

<style scoped>
.bg-correct-option-green {
  background-color: #42d134;
}
.bg-selected-option-blue {
  background-color: #186cc7;
}
</style>
