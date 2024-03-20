<script setup>
import SoundControl from '../SoundControl.vue'
import SoundButton from './SoundButton.vue'

const props = defineProps({
  choices: Object,
  showColor: Boolean,
  checkStatus: Boolean,
  isCorrect: Boolean,
  isWrong: Boolean,
  userAnswer: Array,
  correctAnswer: Object,
  currentItem: String,
  userAnswerId: Number
})

const emits = defineEmits(['selected'])
</script>

<template>
  <div class="flex flex-row gap-16 justify-center mt-10">
    <div
      class="h-[400px] w-[300px] rounded-3xl shadow-md bg-white cursor-pointer hover:border-8 border-slate-200"
      :class="{
        'bg-[#d0ffa3]': showColor && item.id === correctAnswer.id && isCorrect,
        'bg-[#faa09b]': showColor && item.id === userAnswerId && isWrong
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
        <SoundButton />
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

<style scoped></style>
