<script setup>
import { ref } from 'vue'
const pron = ref('')
const player = ref('')
const musicControl = () => {
  player.value.play()
}
const props = defineProps({
  options: Array,
  pronunciation: String
})
const emits = defineEmits(['optionClicked'])
const selectOption = (option) => {
  musicControl()
  pron.value = option.pronunciation
  emits('optionClicked', option)
}
</script>

<template>
  <div
    v-for="(option, index) in options"
    :key="index"
    @click="selectOption(option)"
    class="bg-title mb-3 text-center text-white text-lg font-normal p-2 rounded-xl hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
  >
    {{ option.word }}
  </div>

  <audio controls class="" ref="player">
    <source :src="pron" type="audio/mp3" />
  </audio>
</template>

<style scoped></style>
