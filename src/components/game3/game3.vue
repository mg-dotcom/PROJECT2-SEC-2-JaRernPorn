<script setup>
import Option from './Option.vue'
import data from '../../../data/game3/data.json'
import Setting from './Setting.vue'
import { computed, ref } from 'vue'

const answer = ref()
const randomQuiz = ref(0)

const checkAnswer = (selectedOption) => {
  console.log(answer.value)
  console.log('selected option= ' + selectedOption.word)

  if (selectedOption.word === answer.value) {
    console.log('correct!')
  } else {
    console.log('Wrong!')
  }
  randomQuiz.value++
}

const currentQuiz = computed(() => {
  answer.value = data.categories[0].units[0].vocabularies[randomQuiz.value].word
  console.log(answer.value)

  return data.categories[0].units[0].vocabularies[randomQuiz.value].image
})

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
          @click="Setting"
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
            :options="data.categories[0].units[0].vocabularies"
            @optionClicked="checkAnswer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
