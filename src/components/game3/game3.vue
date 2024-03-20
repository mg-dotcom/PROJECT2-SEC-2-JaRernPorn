<script setup>
import Option from './Option.vue'
import data from '../../../data/data.json'
import Setting from '../Setting.vue'
import Answer_popup from './Answer_popup.vue'
import { computed, ref } from 'vue'
import SoundControl from '../SoundControl.vue'

const currentIndexCate = ref(0)
const currentIndexUnit = ref(0)

const answer = ref()
const meaning = ref()
const randomQuiz = ref(0)
const showSetting = ref(false)
const userSelected = ref()
const showAudio = ref(false)
const showPopup = ref(false)
const checkStatus = ref(false)
const audioOfOption = ref(
  data.categories[currentIndexCate.value].units[currentIndexUnit.value].items[
    randomQuiz.value
  ].pronunciation
)
const setColorOption = ref('')
const isSelected = ref(false)
const answerOfQuiz = ref('')

const currentCategory = computed(() => {
  return data.categories[currentIndexCate.value].name
})

const currentQuiz = computed(() => {
  answerOfQuiz.value =
    data.categories[currentIndexCate.value].units[currentIndexUnit.value].items[
      randomQuiz.value
    ].word
  meaning.value =
    data.categories[currentIndexCate.value].units[currentIndexUnit.value].items[
      randomQuiz.value
    ].meaning

  return data.categories[currentIndexCate.value].units[currentIndexUnit.value]
    .items[randomQuiz.value].src
})
//Shuffle
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const generateOption = computed(() => {
  const options =
    data.categories[currentIndexCate.value].units[currentIndexUnit.value].items
  return shuffle([...options])
})

const checkAnswer = (selectedOption) => {
  userSelected.value = selectedOption.word
  showAudio.value = true
  audioOfOption.value = selectedOption.pronunciation
  isSelected.value = true
}

const toggleSetting = () => {
  showSetting.value = !showSetting.value
}

const closePopup = () => {
  showPopup.value = !showPopup.value
  setColorOption.value = ''
  // answer.value=''
  // userSelected.value=''
  isSelected.value = false
  randomQuiz.value++
}
const turnOnCheckStatus = () => {
  answer.value =
    data.categories[currentIndexCate.value].units[currentIndexUnit.value].items[
      randomQuiz.value
    ].word
  checkStatus.value = true
  if (userSelected.value === answer.value && checkStatus.value) {
    setColorOption.value = answer.value
    userSelected.value = ''
    setTimeout(() => {
      answer.value = ''
      setColorOption.value = ''
      isSelected.value = false
      randomQuiz.value++
      console.log('correct!')
    }, 2000)
  } else {
    answer.value = ''
    userSelected.value = ''
    showPopup.value = true
  }
}

const soundControl2 = (path) => {
  // console.log(audioOfOption.value)
  const sound = new Audio(path)
  sound.play()
}
</script>

<template>
  <div class="font-outfit bg-main-bgColor min-h-screen">
    <div class="header flex justify-between p-16">
      <div class="category-name text-title text-4xl font-semibold">
        Category : {{ currentCategory }}
      </div>
      <div class="setting flex">
        <img
          src="/Vector.svg"
          alt="setting button"
          class="w-10 hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
          @click="toggleSetting"
        />
      </div>
    </div>
    <div></div>
    <div class="flex justify-center">
      <div class="quiz flex flex-col items-center">
        <div class="text-title text-3xl font-semibold py-5">
          Select the correct meaning.
        </div>
        <div
          class="pic bg-white flex flex-col items-center rounded-lg drop-shadow-lg w-32 py-5"
        >
          <img :src="currentQuiz" class="w-20" />
          <h3>{{ meaning }}</h3>
        </div>

        <div class="options py-12 w-3/4">
          <SoundControl :soundPath="audioOfOption">
            <Option
              :options="generateOption"
              :correctOption="answer"
              :isSelected="isSelected"
              :userSelected="userSelected"
              @optionClicked="checkAnswer"
            />
          </SoundControl>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <button
        class="bg-title text-white p-2 rounded-lg hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
        @click="turnOnCheckStatus"
      >
        Check
      </button>
    </div>
  </div>
  <div class="absolute left-0 right-0 top-1/3" v-show="showSetting">
    <Setting
      @closeSetting="toggleSetting"
      @restartGame=""
      @resumeGame=""
      @goBackHome=""
    />
  </div>
  <div class="" v-show="showPopup">
    <Answer_popup :answer="answerOfQuiz" @closePopup="closePopup" />
  </div>
</template>

<style scoped></style>
./SoundControl.vue
