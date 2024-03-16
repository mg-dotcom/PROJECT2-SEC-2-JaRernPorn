<script setup>
import { ref, computed } from 'vue'
import data from '../../data/categories.json'

// console.log(data.categories[0].name)
// console.log(data.categories[0].units[0].items)
// console.log(options.value)

const options = ref([])
const wordSelected = ref('')
const meaningSelected = ref('')
const matchedPairs = ref([])

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// const shuffleOption = () => {
//   const optionsArray = []
//   for (let i = 1; i < data.categories[0].units[0].items.length; i++) {
//     const generateWord = data.categories[0].units[0].items[i].word
//     const generateMeaning = data.categories[0].units[0].items[i].meaning
//     if (optionsArray) {
//       optionsArray.push({
//         id: optionsArray.length + 1,
//         word: generateWord,
//         meaning: generateMeaning
//       })
//     }
//   }
//   return shuffle(optionsArray)
// }

const checkAnswer = (wordOrMeaning) => {
  if (!wordSelected.value) {
    wordSelected.value = wordOrMeaning
    console.log('Correct')
  } else if (!meaningSelected.value) {
    meaningSelected.value = wordOrMeaning
    // Check if the selected word and meaning match
    if (wordSelected.value !== '' && meaningSelected.value !== '') {
      const pair = { word: wordSelected.value, meaning: meaningSelected.value }
      matchedPairs.value.push(pair)
      console.log('Not correct')
      // Reset selections after checking
      wordSelected.value = ''
      meaningSelected.value = ''
    }
  }
}
const isCorrectPair = (word, meaning) => {
  return matchedPairs.value.some(
    (pair) => pair.word === word && pair.meaning === meaning
  )
}
</script>

<template>
  <div class="w-full h-screen bg-main-bgColor">
    <div class="flex flex-col gap-5 px-16 py-8">
      <div class="flex justify-between items-center">
        <h1 class="font-outfit text-title text-3xl font-semibold sm:text-4xl">
          Category: {{ data.categories[0].name }}
        </h1>
        <img
          src="/game4/setting vector.svg"
          alt="setting"
          class="w-8 cursor-pointer hover:w-11 transition-all duration-300 ease-in-out sm:w-10"
        />
      </div>
      <div class="flex justify-center">
        <progress
          class="progress progress-success"
          value="100"
          max="100"
        ></progress>
      </div>
    </div>

    <div class="flex justify-center py-8">
      <p
        class="font-outfit text-title text-2xl font-semibold sm:text-3xl lg:text-4xl"
      >
        Select the matching pairs
      </p>
    </div>

    <div class="flex justify-center">
      <div class="grid grid-cols grid-rows-3 gap-y-7 p-8">
        <button
          v-for="(option, index) in data.categories[0].units[0].items"
          :key="index"
          @click="checkAnswer(option.word)"
          :class="{
            'bg-green-500': isCorrectPair(option.word, option.meaning)
          }"
          class="bg-white rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-20 md:w-96 md:text-2xl lg:rounded-2xl"
        >
          {{ option.word }}
        </button>
      </div>

      <div class="grid grid-cols grid-rows-3 gap-y-7 p-8">
        <button
          v-for="(option, index) in data.categories[0].units[0].items"
          :key="index"
          @click="checkAnswer(option.meaning)"
          :class="{
            'bg-green-500': isCorrectPair(option.word, option.meaning)
          }"
          class="bg-white rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-20 md:w-96 md:text-2xl lg:rounded-2xl"
        >
          {{ option.meaning }}
        </button>
      </div>
    </div>

    <div class="flex justify-end px-6 lg:px-32">
      <button
        class="bg-title rounded-2xl text-white font-outfit font-semibold w-20 h-8 sm:text-2xl sm:w-28 sm:h-14 sm:rounded-3xl hover:bg-button-bgColor lg:w-36 lg:h-12"
      >
        Check
      </button>
    </div>
  </div>
</template>

<style scoped></style>
