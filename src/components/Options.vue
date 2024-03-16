<script setup>
import { ref, computed } from 'vue'
import data from '../../data/categories.json'

// console.log(data.categories[0].name)
// console.log(data.categories[0].units[0].items)
// console.log(options.value)

// const wordSelectedId = ref(0)
// const meaningSelectedId = ref(0)
// const matchedPairs = ref([])

// const isMatching = (wordId, meaningId) => {
//   matchedPairs.push({
//     wordId: wordSelectedId.value,
//     meaningId: meaningSelectedId.value
//   })
//   if ((wordSelectedId.value = meaningSelectedId.value)) {

//   }
// }
</script>

<template>
  <div>
    <div class="flex justify-center">
      <div class="grid grid-cols grid-rows-3 gap-y-7 p-8">
        <button
          v-for="(wordOption, index) in data.categories[0].units[0].items"
          :key="index"
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
        >
          {{ meaningOption.meaning }}
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
