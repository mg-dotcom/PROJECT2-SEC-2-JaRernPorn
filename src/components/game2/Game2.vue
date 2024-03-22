<script setup>
import { ref, computed, defineProps } from 'vue'
import category from '../../../data/categories.json'
import Setting from '../Setting.vue'
import Answer_popup from './Answer_popup.vue'
import SoundControl from '../SoundControl.vue'

const answer = ref('')
const options = ref([])
const currentIndex = ref(0) //คำถามปัจจุบัน
const showSetting = ref(false)
const showPopup = ref(false)
const checkStatus = ref(false)

const props = defineProps({
  categoryIndex: {
    //เอาไว้ดึงข้อมูลของหมวดหมู่มาใช้
    type: Number,
    default: 0 //ให้เป็นที่ 0 ไว้ก่อน
  },
  unitIndex: {
    //รับมาเพื่อที่จะเอาไว้ดึงข้อมูลของ unit อันนั้นๆมาใช้
    type: Number,
    default: 0 //ให้เป็นที่ 0 ไว้ก่อน
  }
})

//const items = category.categories[0].units[0].items

const currentCategory = category.categories[props.categoryIndex]
const items = currentCategory.units[props.unitIndex].items

const audioOfOption = computed(() => {
  return category.categories[props.categoryIndex].units[props.unitIndex].items[
    currentIndex.value
  ].pronunciation
})

const currentQuiz = computed(() => {
  if (currentIndex.value === items.length - 1) {
    console.log('Game Over!')
  }
  answer.value = items[currentIndex.value].meaning // กำหนดคำตอบจากข้อปัจจุบัน
  options.value = generateOptions(answer.value)
  return items[currentIndex.value].word // แสดงคำปัจจุบันที่กำลังเล่น
})

const generateOptions = (answer) => {
  const optionsArray = []
  optionsArray.push({ id: 1, value: answer })
  while (optionsArray.length < 3) {
    const randomIndex = Math.floor(Math.random() * items.length)
    const randomWord = items[randomIndex].meaning
    if (!optionsArray.some((option) => option.value === randomWord)) {
      optionsArray.push({ id: optionsArray.length + 1, value: randomWord })
    }
  }
  return shuffle(optionsArray)
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const isSelected = ref(false)
const colorOption = ref(false)

const userSelected = ref('')
const userAnswer = (userSelectedOption) => {
  userSelected.value = userSelectedOption
  isSelected.value = true
}

const checkAnswer = () => {
  checkStatus.value = true

  if (userSelected.value === answer.value) {
    colorOption.value = true
    isSelected.value = false
    console.log('Correct!')

    setTimeout(() => {
      currentIndex.value++
      colorOption.value = false
      answer.value = ''
    }, 2000)
  } else {
    console.log('Wrong!')
    showPopup.value = true
  }
}

const closePopup = () => {
  showPopup.value = !showPopup.value
  currentIndex.value++
}

const toggleSetting = () => {
  showSetting.value = !showSetting.value
}
</script>

<template>
  <div class="bg-main-bgColor h-screen w-full">
    <div class="font-outfit">
      <div class="header flex justify-between p-12">
        <div class="text-5xl font-semibold font-outfit text-title">
          Category : {{ currentCategory.name }}
        </div>

        <div class="setting flex">
          <img
            src="/setting.svg"
            alt="setting button"
            class="w-10 hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            @click="toggleSetting"
          />
        </div>
      </div>

      <div class="flex justify-center">
        <div class="flex flex-col items-center">
          <div class="text-title text-4xl font-semibold py-5">
            Select this in English.
          </div>

          <div
            class="flex justify-between items-center bg-white rounded-lg drop-shadow-lg w-80 py-5 px-5"
          >
            <div class="flex flex-col text-2xl text-title font-semibold mx-3">
              <h3>{{ currentQuiz }}</h3>
            </div>
            <div
              class="flex flex-col hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <SoundControl :soundPath="audioOfOption">
                <img src="../../../SoundButton.svg" alt="SoundButton" />
              </SoundControl>
            </div>
          </div>

          <div class="py-12 w-3/4">
            <div class="grid grid-cols-1 gap-y-5 justify-center">
              <button
                v-for="(option, index) in options"
                :key="index"
                @click="userAnswer(option.value)"
                class="flex justify-center items-center bg-title text-white font-semiboldl text-2xl h-14 sm:h-20 rounded-lg hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
                :class="{
                  'bg-correct-option': option.value === answer && colorOption,
                  'bg-selected-option-blue':
                    option.value === userSelected && isSelected
                }"
              >
                {{ option.value }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          class="bg-title text-white p-2 rounded-lg hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
          @click="checkAnswer"
        >
          Check
        </button>
      </div>
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

  <div class="wrongAnswer" v-show="showPopup">
    <Answer_popup :answer="answer" @closePopup="closePopup" />
  </div>
</template>

<style scoped></style>
