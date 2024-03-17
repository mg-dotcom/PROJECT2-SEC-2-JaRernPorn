<script setup>
import { ref } from 'vue'
import data from '../../data/categories.json'

const emits = defineEmits(['wordClicked', 'meaningClicked'])

const clickedWordId = ref(null)
const clickedMeaningId = ref(null)
const audioOfOption = ref(data.categories[0].units[0].items[0].pronunciation)

const handleWordClick = (id, pronunciation) => {
  clickedWordId.value = id
  soundControl(pronunciation)
  emits('wordClicked', id)
}

const handleMeaningClick = (id) => {
  clickedMeaningId.value = id
  emits('meaningClicked', id)
}

const soundControl = (path) => {
  // console.log(audioOfOption.value)
  const sound = new Audio(path)
  sound.play()
}

const checkMatch = () => {
  // Check if both a word and its meaning have been clicked
  if (!clickedWordId.value || !clickedMeaningId.value) {
    console.log('Please click both a word and its meaning.')
    return
  }

  // destructure id property then find clickedWordId.value
  const { id: wordId } =
    data.categories[0].units[0].items.find(
      ({ id }) => id === clickedWordId.value
    ) || {}
  const { id: meaningId } =
    data.categories[0].units[0].items.find(
      ({ id }) => id === clickedMeaningId.value
    ) || {}

  if (wordId === meaningId) {
    console.log('Matched!')
    console.log('word id: ' + clickedWordId.value)
    console.log('meaning id: ' + clickedMeaningId.value)
  } else {
    console.log(
      'Not matched because ' +
        'wordId = ' +
        clickedWordId.value +
        ' ' +
        'but meaningId = ' +
        clickedMeaningId.value
    )
    // setTimeout(() => {
    //   wrongButton()
    // }, 2000)
  }

  clickedWordId.value = ''
  clickedMeaningId.value = ''
}

// const wrongButton = () => {
//   if (clickedWordId.value && clickedMeaningId.value) {
//     return 'bg-red-600'
//   }
//   return ''
// }
</script>

<template>
  <div>
    <div class="flex justify-center">
      <div class="grid grid-cols grid-rows-3 gap-y-7 p-8">
        <button
          v-for="(wordOption, index) in data.categories[0].units[0].items"
          :key="index"
          @click="handleWordClick(wordOption.id, wordOption.pronunciation)"
          class="bg-white rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-20 md:w-96 md:text-2xl lg:rounded-2xl"
        >
          {{ wordOption.word }}
        </button>
      </div>

      <div class="grid grid-cols grid-rows-3 gap-y-7 p-8">
        <button
          v-for="(meaningOption, index) in data.categories[0].units[0].items"
          :key="index"
          @click="handleMeaningClick(meaningOption.id)"
          class="bg-white rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-20 md:w-96 md:text-2xl lg:rounded-2xl"
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
