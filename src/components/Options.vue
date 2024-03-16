<script setup>
import { ref, computed } from 'vue'
import data from '../../data/categories.json'

const emits = defineEmits(['wordClicked', 'meaningClicked'])

const clickedWordId = ref(null)
const clickedMeaningId = ref(null)

const handleWordClick = (id) => {
  clickedWordId.value = id
  emits('wordClicked', id)
}

const handleMeaningClick = (id) => {
  clickedMeaningId.value = id
  emits('meaningClicked', id)
}

const checkMatch = () => {
  // Check if both a word and its meaning have been clicked
  if (!clickedWordId.value || !clickedMeaningId.value) {
    console.log('Please click both a word and its meaning.')
    return
  }

  // ดึงข้อมูลจาก data มา
  const { meaning: word } = data.categories[0].units[0].items.find(
    ({ id }) => id === clickedWordId.value
  )
  const { meaning: meaning } = data.categories[0].units[0].items.find(
    ({ id }) => id === clickedMeaningId.value
  )

  // เทียบค่า and log
  if (word === meaning) {
    console.log('Matched!')
  } else {
    console.log('Not matched.')
  }
}
</script>

<template>
  <div>
    <div class="flex justify-center">
      <div class="grid grid-cols grid-rows-3 gap-y-7 p-8">
        <button
          v-for="(wordOption, index) in data.categories[0].units[0].items"
          :key="index"
          @click="handleWordClick(wordOption.id)"
          class="bg-white rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-20 md:w-96 md:text-2xl lg:rounded-2xl"
        >
          {{ wordOption.word }}
        </button>
      </div>

      <div class="grid grid-cols grid-rows-3 gap-y-7 p-8">
        <button
          v-for="(meaningOption, index) in data.categories[0].units[0].items"
          :key="index"
          class="bg-white rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-20 md:w-96 md:text-2xl lg:rounded-2xl"
          @click="handleMeaningClick(meaningOption.id)"
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
