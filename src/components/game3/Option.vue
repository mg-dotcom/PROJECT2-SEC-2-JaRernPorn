<script setup>
import { computed, ref } from 'vue'
// const pron = ref('')
const playerApple = ref('')
const playerBanana = ref('')
const playerMango = ref('')

const props = defineProps({
  options: Array,
  setCorrect:String
})
const emits = defineEmits(['optionClicked'])
// const audioSrc = computed(() => pron.value)
const selectOption = (option) => {
  emits('optionClicked', option)
  console.log(option.id);
  // pron.value = option.pronunciation
  if (option.id === 1) {
    playerApple.value.play()
  } else if (option.id === 2) {
    playerBanana.value.play()
  } else if (option.id === 3) {
    playerMango.value.play()
  }
  // console.log(option.pronunciation)
}
</script>

<template>
  <div
    v-for="(option,index) in options"
    :key="index"
    @click="selectOption(option)"
    class="bg-title mb-3 text-center text-white text-lg font-normal p-2 rounded-xl hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
    :class="setCorrect()"
  >
    {{ option.word }}
  </div>

  <audio controls class="hidden" ref="playerApple">
    <source src="../../assets/pronunciation/apple.mp3" type="audio/mp3" />
  </audio>
  <audio controls class="hidden" ref="playerBanana">
    <source src="../../assets/pronunciation/banana.mp3" type="audio/mp3" />
  </audio>
  <audio controls class="hidden" ref="playerMango">
    <source src="../../assets/pronunciation/mango.mp3" type="audio/mp3" />
  </audio>
</template>

<style scoped></style>
