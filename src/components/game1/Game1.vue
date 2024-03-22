<script setup>
import { categories } from '../../../data/data.json'
import { computed, ref } from 'vue'
import Card from './Card.vue'
import CheckButton from './CheckButton.vue'
import Setting from '../Setting.vue'

const props = defineProps({
  currentIndexCate: Number,
  currentIndexUnit: Number
})

const { currentIndexCate, currentIndexUnit } = props
// const currentIndexCate = ref(0)
// const currentIndexUnit = ref(0)
const currentIndexItem = ref(0)
const currentIndexQuestion = ref(0)

const showColor = ref(false)
const checkStatus = ref(false)

const correctAnswer = computed(() => {
  return categories[props.currentIndexCate].units[props.currentIndexUnit].items[
    currentIndexQuestion.value
  ]
})

const isCorrect = ref(false)
const isWrong = ref(false)
const userAnswer = ref([])
const userAnswerId = ref(null)

// Setting
const showSetting = ref(false)
const toggleSetting = () => {
  showSetting.value = !showSetting.value
}

// Category
const currentCategory = computed(() => {
  return categories[props.currentIndexCate].name
})

// Question
const currentQuestion = computed(() => {
  return categories[props.currentIndexCate].units[props.currentIndexUnit].items[
    currentIndexQuestion.value
  ].meaning
})

// Choices
const threeChoices = computed(() => {
  const choices =
    categories[props.currentIndexCate].units[props.currentIndexUnit].items
  return shuffle([...choices])
})

// Shuffle
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

//CheckAnswer
const checkAnswer = (userAns) => {
  checkStatus.value = true

  correctAnswer.value =
    categories[currentIndexCate.value].units[currentIndexUnit.value].items[
      currentIndexQuestion.value
    ]

  if (userAns[0].id === correctAnswer.value.id) {
    // userAnswerId.value = userAnswer[0].id
    console.log('Correct!')
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
    console.log('Wrong!')
    userAnswerId.value = userAns[0].id
    isWrong.value = true
    isCorrect.value = true
    setTimeout(() => {
      showColor.value = true
      setTimeout(() => {
        showColor.value = false
        isWrong.value = false
        isCorrect.value = false
        currentIndexQuestion.value++
        if (currentIndexQuestion.value > 2) {
          currentIndexQuestion.value = 0
        }
      }, 1500)
    }, 0)
  }

  userAns.splice(0, 1)
  checkStatus.value = false
}

//CollectAnswer
const selectedAnswer = (item) => {
  userAnswer.value = []
  userAnswer.value.push(item)
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
        src="/settingBtn/setting.svg"
        alt="Setting"
        class="pr-36 cursor-pointer"
        @click="toggleSetting"
      />
    </div>

    <div class="flex justify-center">
      <h2 class="text-title font-outfit font-semibold text-[48px] mt-10">
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

    <CheckButton
      @click="checkAnswer(userAnswer)"
      :disabled="userAnswer.length === 0 || checkStatus"
    />
  </div>
</template>

<style scoped></style>
