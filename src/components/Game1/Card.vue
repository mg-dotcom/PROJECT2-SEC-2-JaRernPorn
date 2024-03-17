<script setup>
import SoundControl from '../SoundControl.vue'

const props = defineProps({
  choices: Object,
  checkStatus: Boolean,
  isCorrect: String,
  userAnswer: Array,
  correctAnswer: String,
  currentItem: String
})

const emits = defineEmits(['selected'])
</script>

<template>
  <div class="flex flex-row gap-16 justify-center mt-10">
    <div
      class="h-[400px] w-[300px] rounded-3xl shadow-md bg-white cursor-pointer hover:border-8 border-slate-200"
      :class="{
        'bg-[#D2FFAD]':
          checkStatus &&
          isCorrect === 'correct' &&
          userAnswer[0] === currentItem[0],
        'bg-[#FF9E95]':
          checkStatus &&
          isCorrect === 'wrong' &&
          userAnswer[0] !== currentItem[0]

        // 'bg-[#FF9E94]':
        //   !isCorrect &&
        //   checkingStatus &&
        //   !userAnswer[0].includes(item.meaning)
      }"
      v-for="(item, itemIndex) in choices"
      :key="itemIndex"
      @click="$emit('selected', item, item.meaning, itemIndex)"
    >
      <!-- Sound-Part -->
      <SoundControl :soundPath="item.pronunciation">
        <img
          :src="item.src"
          :alt="item.meaning"
          class="w-[220px] h-[225px] ml-10 mt-3"
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

<style scoped></style>
