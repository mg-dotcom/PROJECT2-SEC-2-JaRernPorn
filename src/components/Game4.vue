<script setup>
import { ref, computed } from 'vue'
import categories from '../../data/categories.json'

const options = ref([])
const currentIndexItem = ref(0)
const currentIndexCate = ref(0)
const selectedAnswer = ref('')

const currentCategory = computed(() => {
  return categories[0].name
})

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const generateOptions = () => {
  const optionsArray = []
  // optionsArray.push({ id: 1, word: answer, meaning: meaning })
  const units = categories[0].units[0].items
  for (const word in units) {
    if (word) {
      optionsArray.push({
        id: optionsArray.length + 1,
        word: word,
        meaning: meaning
      })
    }
  }
  return shuffle(optionsArray)
}

const currentQuiz = computed(() => {
  options.value = categories[0].units[0].items.length.word
  generateOptions(options.value)
  return categories[0].units[0].items.length.word
})
</script>

<template>
  <div class="w-full h-screen bg-main-bgColor">
    <div class="flex flex-col gap-5 px-16 py-14">
      <div class="flex justify-between items-center">
        <h1 class="font-outfit text-title text-3xl font-semibold sm:text-4xl">
          Category: Fruits
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
          v-for="(n, index) in 3"
          :key="index"
          class="bg-white rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-20 md:w-96 md:text-2xl lg:rounded-2xl"
        >
          {{ n }}
        </button>
      </div>

      <div class="grid grid-cols grid-rows-3 gap-y-7 p-8">
        <button
          class="bg-white rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-20 md:w-96 md:text-2xl lg:rounded-2xl"
          v-for="(n, index) in 3"
          :key="index"
        >
          {{ n }}
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
