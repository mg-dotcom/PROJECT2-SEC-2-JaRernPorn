<script setup>
import { categories } from '../../../data/categories.json'
import { computed, ref } from 'vue'
import CheckButton from './CheckButton.vue'
import Setting from '../Setting.vue'

const currentIndexCate = ref(0)
const currentIndexUnit = ref(0)
const currentIndexItem = ref(0)
const currentIndexQuestion = ref(0)

// const correctAnswer = ref('')
const isCorrect = ref(false)

const userAnswer = ref([])

//Setting
const showSetting = ref(false)
const toggleSetting = () => {
  showSetting.value = !showSetting.value
}

//Sound
const player = ref('')
const isPlaying = ref(true)
// const soundControl = () => {
//   if (isPlaying.value) {
//     player.value.play()
//   } else {
//     player.value.pause()
//   }
// }
const soundControl = (path) => {
  if (!showSetting.value) {
    const sound = new Audio(path)
    sound.play()
  }
}

//Category
// const category = categories[currentIndexCate.value] ดิบๆไปก่อนนะ
const currentCategory = computed(() => {
  return categories[currentIndexCate.value].name
})

//Question
const setCurrentQuestionIndex = (index) => {
  currentIndexQuestion.value = index
}

const currentQuestion = computed(() => {
  // correctAnswer.value =
  //   categories[currentIndexCate.value].units[currentIndexUnit.value].items[
  //     currentIndexQuestion.value
  //   ].meaning

  // console.log(correctAnswer.value)

  return categories[currentIndexCate.value].units[currentIndexUnit.value].items[
    currentIndexQuestion.value
  ].meaning
})

//Choices
const threeChoices = computed(() => {
  return categories[currentIndexCate.value].units[currentIndexUnit.value].items
})

const currentItem = (itemIndex) => {
  currentIndexItem.value = itemIndex
}

//CheckAnswer
// const correctAnswer =
//   categories[currentIndexCate.value].units[currentIndexUnit.value].items[
//     currentIndexItem.value
//   ].meaning

const checkAnswer = (userAnswer) => {
  console.log(userAnswer)

  const correctAnswer =
    categories[currentIndexCate.value].units[currentIndexUnit.value].items[
      currentIndexQuestion.value
    ].meaning

  console.log('correctans ' + correctAnswer)
  console.log('user ans ' + userAnswer[0])

  currentIndexQuestion.value++

  if (currentIndexQuestion.value > 2) {
    currentIndexQuestion.value = 0
  }

  if (userAnswer[0] === correctAnswer) {
    console.log('nice')
    console.log(currentIndexQuestion.value)
    isCorrect.value = true
    console.log(isCorrect.value)
  } else {
    console.log('wrong dude')
    isCorrect.value = false
    console.log(isCorrect.value)
  }
}

//CollectAnswer
const selectedAnswer = (userSelect) => {
  console.log('โดนเรีัยก')
  userAnswer.value = []
  console.log('userSelect ' + userSelect)
  userAnswer.value.push(userSelect.trim())
  // console.log('answer ' + userAnswer.value)
}
</script>

<template>
  <div class="bg-main-bgColor min-h-screen w-full">
    <div class="flex justify-between pt-20">
      <h1
        class="text-3xl text-wrongPopup-size font-semibold font-outfit text-title pl-20"
      >
        Category: {{ currentCategory }}
      </h1>
      <img
        src="/Setting.svg"
        alt="Setting"
        class="pr-36"
        @click="toggleSetting"
      />
    </div>

    <div class="flex justify-center">
      <h2 class="text-title font-outfit font-semibold text-[48px] mt-24">
        Which one of these is {{ currentQuestion }}?
      </h2>
    </div>

    <!-- Cards -->
    <div class="flex flex-row gap-16 justify-center mt-10">
      <div
        class="h-[400px] w-[300px] rounded-3xl shadow-md bg-white cursor-pointer hover:border-8 border-slate-200"
        :class="{
          'bg-correct-option-green': true,
          'bg-wrong-option-red': false
        }"
        v-for="(item, itemIndex) in threeChoices"
        :key="itemIndex"
        @click="selectedAnswer(item.meaning)"
      >
        <div>
          <img
            :src="item.src"
            :alt="item.meaning"
            class="w-[220px] h-[225px] ml-10 mt-3"
            @click="soundControl(item.pronunciation)"
          />
        </div>
        <div class="absolute left-0 right-0 top-1/3" v-show="showSetting">
          <Setting
            @closeSetting="toggleSetting"
            @restartGame=""
            @resumeGame=""
            @goBackHome=""
          />
        </div>

        <div
          class="border-solid border-b-2 border-black w-[230px] ml-7 mt-10"
        ></div>
        <h1 class="text-[24px] ml-10 mt-3">
          <!-- {{ item.word }} <br /> -->
          <!-- {{ item }} -->
          <!-- {{ item.word.split(' ') }} -->
          {{ item.word.split(' ')[0] }} <br />
          <!-- {{ item.word.split(' ')[1] }} -->
          {{ item.word.split(' ').slice(1).join(' ') }}
          <!-- แบ่ง 
            葡萄 
            (pú 
            táo) -->

          <!-- [ "(pú", "táo)" ] -->

          <!-- (pú,táo)-->
        </h1>
        <img
          src="/SoundButton.svg"
          alt="SoundButton"
          class="absolute ml-52 -mt-12"
        />

        <!-- <audio controls ref="player">
          <source :src="item.pronunciation" type="audio/mp3" />
        </audio> -->

        <!-- <CheckButton /> -->
      </div>
    </div>
    <button
      class="rounded-full bg-[#B11717] text-white font-outfit font-medium text-resultButton-size w-40 h-14 absolute right-0 mr-28 bottom-0 mb-24"
      @click="checkAnswer(userAnswer)"
    >
      Check
    </button>
  </div>
</template>

<style scoped></style>
