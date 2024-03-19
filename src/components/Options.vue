<script setup>
import { ref, computed } from 'vue'
import data from '../../data/categories.json'
import SoundControl from './SoundControl.vue'

const currentIndexItem = ref(0)
const currentIndexUnit = ref(0)
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
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// const shuffleOption = shuffle(options.value)

const shuffleOption = computed(() => {
  // const options =
  //   data.categories[currentIndexCate.value].units[currentIndexUnit.value].items
  return shuffle([...options.value])
})

const handleWordClick = (id, pronunciation) => {
  // รับ wordOption.id มา
  // assing ค่า clickedWordId.value = id (wordOption.id)
  clickedWordId.value = id
  console.log(clickedWordId.value)
  soundControl(pronunciation)
}

const handleMeaningClick = (id) => {
  clickedMeaningId.value = id
  console.log(clickedMeaningId.value)
}

const soundControl = (path) => {
  // console.log(audioOfOption.value)
  const sound = new Audio(path)
  sound.play()
}

const isMatching = () => {
  // Check if both a word and its meaning have been clicked
  if (!clickedWordId.value || !clickedMeaningId.value) {
    console.log('Please click both a word and its meaning.')
    return
  }

  // destructure id property then find clickedWordId.value
  // สร้างตัวแปรโดย destructure มาแค่ id ใน object = ใช้ find เพื่อหาว่าปุ่มที่เราคลิก ตรงกับ id ไหนใน object ถ้าไม่เจอก็จะเป็น {}
  // find() return first element
  const { id: wordId } = options.value.find(
    (option) => option.id === clickedWordId.value
  )
  const { id: meaningId } = options.value.find(
    (option) => option.id === clickedMeaningId.value
  )

  // เอา wordId มาเทียบ meaningId ว่ามี id ตรงกันมั้ย
  if (wordId === meaningId) {
    wordArray.value.push(wordId)
    meaningArray.value.push(meaningId)
    console.log(wordArray.value + ' & ' + meaningArray.value)
    console.log('Matched!')
    console.log('word length ' + wordArray.value.length)
    console.log('options length ' + options.value.length)
    console.log('meaning length ' + meaningArray.value.length)
    console.log('options length ' + options.value.length)
    if (
      wordArray.value.length === options.value.length &&
      meaningArray.value.length === options.value.length
    ) {
      console.log('Complete!!!')
      checkBtn.value = false
      continueBtn.value = true
      // console.log(continueBtn.value)
    }
  } else {
    wrongWord.value.push(wordId)
    wrongMeaning.value.push(meaningId)
    console.log(wrongWord.value + ' & ' + wrongMeaning.value)
    console.log('Not Matched!')
    setTimeout(() => {
      wrongWord.value = []
      wrongMeaning.value = []
    }, 1000)
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
            'border-2 border-[#186cc7]':
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
            'border border-blue-border':
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

<style scoped></style>
