<script setup>
import { categories } from '../../../data/categories.json'
import { computed, ref } from 'vue'
import Card from './Card.vue'
import CheckButton from './CheckButton.vue'
import Setting from '../Setting.vue'

const currentIndexCate = ref(0)
const currentIndexUnit = ref(0)
const currentIndexItem = ref(0)
const currentIndexQuestion = ref(0)

const checkingStatus = ref(false)

const correctAnswer = ref(
  categories[currentIndexCate.value].units[currentIndexUnit.value].items[
    currentIndexQuestion.value
  ].meaning
)

// const correctAnswer = ref('')
const isCorrect = ref('')
const userAnswer = ref([])

//Setting
const showSetting = ref(false)
const toggleSetting = () => {
  showSetting.value = !showSetting.value
}

//Category
const currentCategory = computed(() => {
  return categories[currentIndexCate.value].name
})

//Question
const currentQuestion = computed(() => {
  return categories[currentIndexCate.value].units[currentIndexUnit.value].items[
    currentIndexQuestion.value
  ].meaning
})

//Choices
const threeChoices = computed(() => {
  return categories[currentIndexCate.value].units[currentIndexUnit.value].items
})

//CheckAnswer
const checkAnswer = (userAnswer) => {
  console.log(userAnswer)
  checkingStatus.value = true

  console.log('correctans ' + correctAnswer.value)
  console.log('user ans ' + userAnswer[0])

  // if (userAnswer[0] === correctAnswer.value) {
  //   isCorrect.value = correctAnswer.value
  //   setTimeout(() => {
  //     currentIndexQuestion.value++
  //     if (currentIndexQuestion.value > 2) {
  //       currentIndexQuestion.value = 0
  //     }
  //   }, 2000)

  //   console.log('nice')
  //   console.log(currentIndexQuestion.value)
  //   console.log(isCorrect.value)
  // } else {
  //   setTimeout(() => {
  //     isCorrect.value = false
  //     setTimeout(() => {
  //       currentIndexQuestion.value++
  //       if (currentIndexQuestion.value > 2) {
  //         currentIndexQuestion.value = 0
  //       }
  //     }, 2000)
  //   }, 0)
  //   console.log('wrong dude')
  //   isCorrect.value = false
  //   console.log(isCorrect.value)
  // }

  // if (userAnswer[0] === correctAnswer.value) {
  //   isCorrect.value = 'correct'
  //   setTimeout(() => {
  //     currentIndexQuestion.value++
  //     if (currentIndexQuestion.value > 2) {
  //       currentIndexQuestion.value = 0
  //     }
  //     isCorrect.value = ''
  //   }, 2000)
  // }
  // if (userAnswer[0] !== correctAnswer.value) {
  //   isCorrect.value = 'wrong'
  //   setTimeout(() => {
  //     currentIndexQuestion.value++
  //     if (currentIndexQuestion.value > 2) {
  //       currentIndexQuestion.value = 0
  //     }
  //     isCorrect.value = ''
  //   }, 2000)
  // }

  if (userAnswer[0] === correctAnswer.value) {
    isCorrect.value = 'correct'
  }
  if (userAnswer[0] !== correctAnswer.value) {
    isCorrect.value = 'wrong'
  }

  setTimeout(() => {
    currentIndexQuestion.value++
    if (currentIndexQuestion.value > 2) {
      currentIndexQuestion.value = 0
    }
    isCorrect.value = ''
  }, 2000)

  console.log(userAnswer[0])

  console.log(userAnswer[0])
}

//CollectAnswer
const selectedAnswer = (userSelect, itemIndex) => {
  console.log('โดนเรีัยก')
  userAnswer.value = []
  console.log('userSelect ' + userSelect)
  userAnswer.value.push(userSelect.trim())
  // console.log('answer ' + userAnswer.value)

  currentIndexItem.value = itemIndex
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

    <!-- Setting Part -->
    <div class="absolute left-0 right-0 top-1/3" v-show="showSetting">
      <Setting
        @closeSetting="toggleSetting"
        @restartGame=""
        @resumeGame=""
        @goBackHome=""
      />
    </div>

    <div class="flex flex-row gap-16 justify-center mt-10">
      <Card
        :choices="threeChoices"
        :checkStatus="checkingStatus"
        :isCorrect="isCorrect"
        :userAnswer="userAnswer"
        :correctAnswer="correctAnswer"
        @selected="selectedAnswer"
      ></Card>
    </div>

    <CheckButton @click="checkAnswer(userAnswer)" />
  </div>
</template>

<style scoped></style>
