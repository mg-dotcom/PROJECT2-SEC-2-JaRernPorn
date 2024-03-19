<script setup>
import { ref, computed } from 'vue'
import data from '../../data/categories.json'
import SoundControl from './SoundControl.vue'

const currentIndexItem = ref(0)
const currentIndexCate = ref(0)
const clickedWordId = ref('')
const clickedMeaningId = ref('')
const options = ref(data.categories[0].units[0].items)
const wordArray = ref([])
const meaningArray = ref([])
const wrongWord = ref([])
const wrongMeaning = ref([])
const checkBtn = ref(true)
const continueBtn = ref(false)

const shuffle = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

const shuffledWordOptions = computed(() =>
  shuffle(options.value.map((item) => item.word))
)
const shuffledMeaningOptions = computed(() =>
  shuffle(options.value.map((item) => item.meaning))
)

const handleWordClick = (id, pronunciation) => {
  clickedWordId.value = id
  soundControl(pronunciation)
}

const handleMeaningClick = (id) => {
  clickedMeaningId.value = id
}

const soundControl = (path) => {
  const sound = new Audio(path)
  sound.play()
}

const isMatching = () => {
  if (!clickedWordId.value || !clickedMeaningId.value) {
    console.log('Please click both a word and its meaning.')
    return
  }

  const clickedWord = options.value.find(
    (option) => option.id === clickedWordId.value
  )
  const clickedMeaning = options.value.find(
    (option) => option.id === clickedMeaningId.value
  )

  if (clickedWord && clickedMeaning && clickedWord.id === clickedMeaning.id) {
    wordArray.value.push(clickedWord.id)
    meaningArray.value.push(clickedMeaning.id)
    console.log('Matched!')

    if (
      wordArray.value.length === options.value.length &&
      meaningArray.value.length === options.value.length
    ) {
      checkBtn.value = false
      continueBtn.value = true
    }
  } else {
    console.log('Not Matched!')
    wrongWord.value = [clickedWordId.value]
    wrongMeaning.value = [clickedMeaningId.value]

    setTimeout(() => {
      wrongWord.value = []
      wrongMeaning.value = []
    }, 2000)
  }

  clickedWordId.value = ''
  clickedMeaningId.value = ''
}
</script>

<template>
  <div>
    <div class="flex justify-center">
      <div class="grid grid-cols grid-rows-3 gap-y-7 p-8">
        <button
          v-for="(word, index) in shuffledWordOptions"
          :key="index"
          @click="
            handleWordClick(options[index].id, options[index].pronunciation)
          "
          :class="{
            'border-2 border-[#186cc7]': clickedWordId === options[index].id,
            'bg-green-300 border-green-border': wordArray.includes(
              options[index].id
            ),
            'bg-wrong-option-red': wrongWord.includes(options[index].id)
          }"
          class="bg-white text-black rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-20 md:w-96 md:text-2xl lg:rounded-2xl"
        >
          {{ word }}
        </button>
      </div>

      <div class="grid grid-cols grid-rows-3 gap-y-7 p-8">
        <button
          v-for="(meaning, index) in shuffledMeaningOptions"
          :key="index"
          @click="handleMeaningClick(options[index].id)"
          :class="{
            'border border-blue-border': clickedMeaningId === options[index].id,
            'bg-green-300 border-green-border': meaningArray.includes(
              options[index].id
            ),
            'bg-wrong-option-red': wrongMeaning.includes(options[index].id)
          }"
          class="bg-white text-black rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-20 md:w-96 md:text-2xl lg:rounded-2xl"
        >
          {{ meaning }}
        </button>
      </div>
    </div>
    <div class="flex justify-end px-6 lg:px-32">
      <button
        @click="isMatching"
        v-show="checkBtn"
        class="bg-title rounded-2xl text-white font-outfit font-semibold w-20 h-8 sm:text-2xl sm:w-28 sm:h-14 sm:rounded-3xl hover:bg-button-bgColor lg:w-36 lg:h-12"
      >
        Check
      </button>
      <button
        @click=""
        v-show="continueBtn"
        class="bg-title rounded-2xl text-white font-outfit font-semibold w-20 h-8 sm:text-2xl sm:w-28 sm:h-14 sm:rounded-3xl hover:bg-button-bgColor lg:w-36 lg:h-12"
      >
        Continue
      </button>
    </div>
    <div class="flex justify-center text-2xl text-black">
      {{ wordArray }} {{ meaningArray }}
    </div>
    <div class="flex justify-center text-2xl text-black">
      {{ wrongWord }} {{ wrongMeaning }}
    </div>
    <div class="flex justify-center text-2xl text-black">
      {{ checkBtn }} {{ continueBtn }}
    </div>
  </div>
</template>
