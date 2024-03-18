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

const showColor = ref(false)
const checkStatus = ref(false)

const correctAnswer = ref(
  categories[currentIndexCate.value].units[currentIndexUnit.value].items[
    currentIndexQuestion.value
  ]
)

// const currentItem = ref([])

// const correctAnswer = ref('')
const isCorrect = ref(false)
const isWrong = ref(false)
// const isCorrect = ref('')
const userAnswer = ref([])
const idAnswer = ref([])
const userAnswerId = ref(null)

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

//Item
const currentItem = computed(() => {
  return categories[currentIndexCate.value].units[currentIndexUnit.value].items[
    currentIndexQuestion.value
  ]
})

//Choices
const threeChoices = computed(() => {
  return categories[currentIndexCate.value].units[currentIndexUnit.value].items
})

//CheckAnswer
const checkAnswer = (userAnswer) => {
  // setTimeout(() => {
  //   checkingStatus.value = true
  //   setTimeout(() => {
  //     checkingStatus.value = false
  //   }, 2000)
  // }, 0)

  checkStatus.value = true

  correctAnswer.value =
    categories[currentIndexCate.value].units[currentIndexUnit.value].items[
      currentIndexQuestion.value
    ]

  console.log(showColor.value)
  console.log(userAnswer)
  console.log(userAnswer.meaning)
  console.log(userAnswer[0])
  // console.log(userAnswer[0].meaning)
  console.log(correctAnswer.value)

  console.log(userAnswer[0].id)
  console.log(correctAnswer.value.id)

  if (userAnswer[0].id === correctAnswer.value.id) {
    // userAnswerId.value = userAnswer[0].id
    console.log('nice')
    isCorrect.value = true

    setTimeout(() => {
      showColor.value = true
      setTimeout(() => {
        showColor.value = false
        isCorrect.value = false
        currentIndexQuestion.value++
        if (currentIndexQuestion.value > 2) {
          currentIndexQuestion.value = 0
        }
      }, 1500)
    }, 0)
  } else {
    console.log('Sorry mommy')
    userAnswerId.value = userAnswer[0].id
    isWrong.value = true
    isCorrect.value = true
    setTimeout(() => {
      showColor.value = true
      setTimeout(() => {
        showColor.value = false
        isWrong.value = false
        currentIndexQuestion.value++
        if (currentIndexQuestion.value > 2) {
          currentIndexQuestion.value = 0
        }
      }, 1500)
    }, 0)
  }

  if (userAnswer[0].id !== correctAnswer.value.id) {
  }

  if (userAnswer[0].id) {
  }

  userAnswer.value = []
  checkStatus.value = false

  // checkingStatus.value = false
}

//CollectAnswer
const selectedAnswer = (item) => {
  console.log(item)
  console.log(userAnswer.value)
  userAnswer.value = []
  console.log(userAnswer.value)
  userAnswer.value.push(item)
  // userAnswer.value.push(item)
  console.log(userAnswer.value)
  console.log(checkStatus.value)
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
        :showColor="showColor"
        :isCorrect="isCorrect"
        :isWrong="isWrong"
        :userAnswer="userAnswer"
        :correctAnswer="correctAnswer"
        :userAnswerId="userAnswerId"
        :checkStatus="checkStatus"
        @selected="selectedAnswer"
      ></Card>
    </div>

    <CheckButton @click="checkAnswer(userAnswer)" />
  </div>
</template>

<style scoped></style>
