<script setup>
import SoundControl from '../SoundControl.vue'

const props = defineProps({
  choices: Object,
  showColor: Boolean,
  checkStatus: Boolean,
  isCorrect: Boolean,
  isWrong: Boolean,
  userAnswer: Array,
  correctAnswer: Object,
  userAnswerId: Number,
  clickedChoice: Boolean
})

const emits = defineEmits(['selected'])
</script>

<template>
  <div class="flex flex-row gap-16 justify-center items-center">
    <div
      class="h-[400px] w-[300px] rounded-3xl shadow-md bg-white cursor-pointer hover:border-8 border-slate-200"
      :class="{
        'bg-correct-option-green':
          showColor && item.id === correctAnswer.id && isCorrect,
        'bg-wrong-option-red': showColor && item.id === userAnswerId && isWrong,
        'bg-selected-option-blue': clickedChoice && item.id === userAnswer[0].id
      }"
      v-for="(item, itemIndex) in choices"
      :key="itemIndex"
      @click="$emit('selected', item)"
    >
      <!-- Sound-Part -->
      <SoundControl :soundPath="item.pronunciation">
        <img
          :src="item.src"
          :alt="item.meaning"
          class="w-[220px] h-[225px] ml-10 mt-3"
        />
        <img
          src="/SoundButton.svg"
          alt="SoundButton"
          class="absolute ml-52 mt-20"
        />
      </SoundControl>

      <div
        class="border-solid border-b-2 border-black w-[230px] ml-7 mt-10"
      ></div>
      <h1 class="text-[24px] ml-10 mt-3">
        {{ item.word.split(' ')[0] }} <br />
        {{ item.word.split(' ').slice(1).join(' ') }}
      </h1>
    </div>
  </div>
</template>

<style scoped>
.bg-correct-option-green {
  background-color: #d2ffab;
}
.bg-wrong-option-red {
  background-color: #ff9e94;
}
.bg-selected-option-blue {
  background-color: #a8cef6;
}
</style>
