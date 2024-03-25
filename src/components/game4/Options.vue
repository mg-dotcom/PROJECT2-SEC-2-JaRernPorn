<script setup>
import { ref, computed } from 'vue'
import data from '../../../data/data.json'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const paramCateIndex = route.params.cateIndex - 1
const paramUnitIndex = route.params.unit - 1
const currentIndexItem = ref(paramCateIndex)
const currentIndexUnit = ref(paramUnitIndex)

const clickedWordId = ref('')
const clickedMeaningId = ref('')
const options = ref(
  data.categories[currentIndexItem.value].units[currentIndexUnit.value].items
)

const wordArray = ref([])
const meaningArray = ref([])
const wrongWord = ref([])
const wrongMeaning = ref([])
const checkBtn = ref(true)
const continueBtn = ref(false)

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const shuffleOption = computed(() => {
  // const options =
  //   data.categories[currentIndexCate.value].units[currentIndexUnit.value].items
  return shuffle([...options.value]) // copy array
})

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
    return
  }

  // find() return first element
  const { id: wordId } = options.value.find(
    (option) => option.id === clickedWordId.value
  )
  const { id: meaningId } = options.value.find(
    (option) => option.id === clickedMeaningId.value
  )

  if (wordId === meaningId) {
    wordArray.value.push(wordId)
    meaningArray.value.push(meaningId)
    // ครบ 3 คู่
    if (
      wordArray.value.length === options.value.length &&
      meaningArray.value.length === options.value.length
    ) {
      checkBtn.value = false
      continueBtn.value = true
    }
  } else {
    wrongWord.value.push(wordId)
    wrongMeaning.value.push(meaningId)
    setTimeout(() => {
      wrongWord.value = []
      wrongMeaning.value = []
    }, 1000)
    console.log('wrong')
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
          v-for="(wordOption, index) in shuffleOption"
          :key="index"
          @click="handleWordClick(wordOption.id, wordOption.pronunciation)"
          :class="{
            'border border-bg-selected-option-blue':
              clickedWordId && clickedWordId === wordOption.id,
            'bg-correct-option-green border-green-border': wordArray.includes(
              wordOption.id
            ),
            'bg-wrong-option-red': wrongWord.includes(wordOption.id)
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
          @click="handleMeaningClick(meaningOption.id)"
          :class="{
            'border border-bg-selected-option-blue':
              clickedMeaningId && clickedMeaningId === meaningOption.id,
            'bg-correct-option-green border-green-border':
              meaningArray.includes(meaningOption.id),
            'bg-wrong-option-red': wrongMeaning.includes(meaningOption.id)
          }"
          class="bg-white text-black rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-20 md:w-96 md:text-2xl lg:rounded-2xl"
        >
          {{ meaningOption.meaning }}
        </button>
      </div>
    </div>
    <div class="flex justify-end px-6 lg:px-32">
      <button
        v-show="checkBtn"
        @click="isMatching"
        class="bg-title rounded-2xl text-white font-outfit font-semibold w-20 h-8 sm:text-2xl sm:w-28 sm:h-14 sm:rounded-3xl hover:bg-button-bgColor lg:w-36 lg:h-12"
      >
        Check
      </button>
      <button
        v-show="continueBtn"
        @click="router.push({ name: 'Result' })"
        class="bg-title rounded-2xl text-white font-outfit font-semibold w-20 h-8 sm:text-2xl sm:w-28 sm:h-14 sm:rounded-3xl hover:bg-button-bgColor lg:w-36 lg:h-12"
      >
        Continue
      </button>
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
  background-color: #186cc7;
}
.border-bg-selected-option-blue {
  border-color: #186cc7;
}
</style>
