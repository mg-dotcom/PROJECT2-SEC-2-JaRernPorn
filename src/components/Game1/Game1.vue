<script setup>
import { categories } from '../../../data/categories.json'
import { computed, ref } from 'vue'
import CheckButton from './CheckButton.vue'
import Setting from '../Setting.vue'

const currentIndexCate = ref(0)
const currentIndexUnit = ref(0)
const currentIndexItem = ref(2)

//Setting
const showSetting = ref(false)
const toggleSetting = () => {
  showSetting.value = !showSetting.value
}

//Sound
const player = ref('')
const isPlaying = ref(true)

// const category = categories[currentIndexCate.value] ดิบๆไปก่อนนะ

const currentCategory = computed(() => {
  return categories[currentIndexCate.value].name
})

const currentQuestion = computed(() => {
  return categories[currentIndexCate.value].units[currentIndexUnit.value].items[
    currentIndexItem.value
  ].meaning
})

const threeChoices = computed(() => {
  return categories[currentIndexCate.value].units[currentIndexUnit.value].items
})

// const soundControl = () => {
//   if (isPlaying.value) {
//     player.value.play()
//   } else {
//     player.value.pause()
//   }
// }

const soundControl2 = (path) => {
  const sound = new Audio(path)
  sound.play()
}

// const checkAnswer
</script>

<template>
  <div class="bg-main-bgColor h-screen w-full">
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
        @click="showSetting = true"
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
        :class="{ 'bg-green-400': true, 'bg-red-500': false }"
        v-for="(item, itemIndex) in threeChoices"
        :key="itemIndex"
        @click="soundControl2(item.pronunciation)"
      >
        <img
          :src="item.src"
          :alt="item.meaning"
          class="w-[220px] h-[225px] ml-10 mt-3"
        />
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
        </h1>
        <img
          src="/SoundButton.svg"
          alt="SoundButton"
          class="absolute ml-52 -mt-12"
        />
        <!-- <audio controls ref="player">
          <source :src="item.pronunciation" type="audio/mp3" />
        </audio> -->

        <CheckButton />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
