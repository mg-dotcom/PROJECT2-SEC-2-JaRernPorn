<script setup>
import { computed, ref } from 'vue'
import data from '../../data/categories.json'

// const emits = defineEmits(['wordClicked', 'meaningClicked'])

const clickedWordId = ref()
const clickedMeaningId = ref()
const currentIndexItem = ref(0)
const currentIndexCate = ref(0)
const options = ref(data.categories[0].units[0].items)
const correctOptionBg = ref(false)
const wrongOptionBg = ref(false)
const userClickedWordCorrect = ref([])
const userClickedMeaningCorrect = ref([])
const userClickedWordWrong = ref([])
const userClickedMeaningWrong = ref([])
const wordOption = ref()
const meaningOption = ref()

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const shuffleOption = shuffle(options.value)

const handleWordClick = (userSelected) => {
  wordOption.value = userSelected
  clickedWordId.value = userSelected.id
  console.log(clickedWordId.value)
  soundControl(userSelected.pronunciation)
}

const handleMeaningClick = (userSelected) => {
  meaningOption.value = userSelected
  clickedMeaningId.value = userSelected.id
  console.log(clickedMeaningId.value)
}

const soundControl = (path) => {
  const sound = new Audio(path)
  sound.play()
}

const checkMatch = () => {
  // correctOptionBg.value = false
  wrongOptionBg.value = false
  // Check if both a word and its meaning have been clicked
  if (!clickedWordId.value || !clickedMeaningId.value) {
    console.log('Please click both a word and its meaning.')
  }

  if (clickedWordId.value === clickedMeaningId.value) {
    userClickedWordCorrect.value.push(clickedWordId.value)
    userClickedMeaningCorrect.value.push(clickedMeaningId.value)
    correctOptionBg.value = true
    console.log('Matched!')
  } else {
    wrongOptionBg.value = true
    userClickedWordWrong.value.push(clickedWordId.value)
    userClickedMeaningWrong.value.push(clickedMeaningId.value)
    setTimeout(() => {
      wrongOptionBg.value = false
    }, 1500)
    console.log('Not match!')
  }
}
</script>

<template>
  <div>
    <div class="flex justify-center">
      <div class="grid grid-cols grid-rows-3 gap-y-7 p-8">
        <button
          v-for="(wordOption, index) in options"
          :key="index"
          @click="handleWordClick(wordOption)"
          :class="{
            'border-2 border-[#186cc7]':
              clickedWordId && clickedWordId === wordOption.id,
            'bg-[#D2FFAB]':
              correctOptionBg && userClickedWordCorrect.includes(wordOption.id),
            'bg-[#FF9E94]': wrongOptionBg && wordOption.id === clickedWordId
          }"
          class="bg-white text-black rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-20 md:w-96 md:text-2xl lg:rounded-2xl"
        >
          {{ wordOption.word }}
        </button>
      </div>

      <div class="grid grid-cols grid-rows-3 gap-y-7 p-8">
        <button
          v-for="(meaningOption, index) in options"
          :key="index"
          @click="handleMeaningClick(meaningOption)"
          :class="{
            'border-2 border-[#186cc7]':
              clickedMeaningId && meaningOption.id === clickedMeaningId,
            'bg-[#D2FFAB]':
              correctOptionBg &&
              userClickedMeaningCorrect.includes(meaningOption.id),
            'bg-[#FF9E94]':
              wrongOptionBg && meaningOption.id === clickedMeaningId
          }"
          class="bg-white text-black rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-20 md:w-96 md:text-2xl lg:rounded-2xl"
        >
          {{ meaningOption.meaning }}
        </button>
      </div>
    </div>
    <div class="flex justify-end px-6 lg:px-32">
      <button
        @click="checkMatch"
        class="bg-title rounded-2xl text-white font-outfit font-semibold w-20 h-8 sm:text-2xl sm:w-28 sm:h-14 sm:rounded-3xl hover:bg-button-bgColor lg:w-36 lg:h-12"
      >
        Check
      </button>
    </div>
  </div>
</template>

<style scoped></style>
