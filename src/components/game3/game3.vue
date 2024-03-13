<script setup>
import Option from './Option.vue'
import data from '../../../data/game3/data2.json'
import Setting from './Setting.vue'
import { computed, ref } from 'vue'

const answer = ref()
const randomQuiz = ref(0)
const showSetting = ref(false)
const userSellectedId = ref()
const pron = ref('')
// const showGame3=ref(true)

//pron
// const player = ref('')
// const musicControl = () => {
// player.value.play()
// }
const setButtonCorrect = () => {

}

const checkAnswer = (selectedOption) => {
  // console.log(answer.value)
  // console.log('selected option= ' + selectedOption.word)
  // pron.value = selectedOption.pronunciation
  // player.value.play()

  if (selectedOption.word === answer.value) {
    setTimeout(() => {
      randomQuiz.value++
      console.log('correct!')
    }, 3000)
  } else {
    setTimeout(() => {
      randomQuiz.value++
      console.log('Wrong!')
    }, 3000)
  }
}

const currentQuiz = computed(() => {
  answer.value = data.categories[0].units[0].items[randomQuiz.value].word
  // console.log(answer.value)

  return data.categories[0].units[0].items[randomQuiz.value].src
})

const toggleSetting = () => {
  showSetting.value = !showSetting.value
  // showGame3.value=!showGame3.value
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
</script>

<template>
  <div class="font-outfit">
    <div class="header flex justify-between p-16">
      <div class="category-name text-title text-4xl font-semibold">
        Category : Fruit
      </div>
      <div class="setting flex">
        <img
          src="/public/Vector.svg"
          alt="setting button"
          class="w-10 hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
          @click="toggleSetting"
        />
      </div>
    </div>
    <div>
      <div class="flex justify-center">
        <progress
          class="progress progress-success"
          value="100"
          max="100"
        ></progress>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="quiz flex flex-col items-center">
        <div class="text-title text-3xl font-semibold py-5">
          Select the correct meaning.
        </div>
        <div
          class="pic bg-white flex flex-col items-center rounded-lg drop-shadow-lg w-32 py-5"
        >
          <img :src="currentQuiz" class="w-20" />
          <h3>{{ answer }}</h3>
        </div>
        <div class="options py-12 w-3/4">
          <Option
            :options="data.categories[0].units[0].items"
            :class="setButtonCorrect()"
            @optionClicked="checkAnswer"
          />
        </div>
      </div>
    </div>
  </div>
  <Setting v-show="showSetting" />
</template>

<style scoped></style>
