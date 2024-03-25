<script setup>
import { ref, defineProps } from 'vue'
import category from '../../data/data.json'
import SoundControl from '../components/SoundControl.vue'
import SettingHomePage from '../components/SettingHomePage.vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const playAgain = () => {
  router.push({
    name: 'Game1',
    params: { cateIndex: route.params.cateIndex, unit: route.params.unit }
  })
}

const mainMenu = () => {
  router.push({ name: 'Categories' })
}

console.log()

const paramCateIndex = route.params.cateIndex - 1
const paramUnitIndex = route.params.unit - 1

const unitIndex = ref(paramUnitIndex)
const categoryIndex = ref(paramCateIndex)

const showSetting = ref(false)
const toggleSetting = () => {
  showSetting.value = !showSetting.value
}

const currentCategory = category.categories[categoryIndex.value]
const items = currentCategory.units[unitIndex.value].items
</script>

<template>
  <div class="bg-main-bgColor h-screen w-full p-5">
    <div class="fixed left-0 right-0 top-0 bottom-0 z-40" v-show="showSetting">
      <SettingHomePage
        @closeSetting="toggleSetting"
        @restartGame=""
        @resumeGame=""
        @goBackHome=""
      />
    </div>

    <div class="border-double border-8 border-title box-border h-full w-full">
      <div class="">
        <div class="setting flex">
          <img
            src="/settingBtn/setting.svg"
            alt="setting button"
            class="w-10 cursor-pointer absolute right-14 top-10 hover:scale-105 transition-all duration-300 ease-in-out"
            @click="toggleSetting"
          />
        </div>
        <div class="font-semibold font-outfit text-title">
          <router-link to="/">
            <img
              src="/settingBtn/home.svg"
              alt="home button"
              class="cursor-pointer size-14 absolute left-14 top-10 hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </router-link>
        </div>
      </div>

      <div class="flex justify-center mt-5">
        <h1 class="text-title text-7xl font-alkatra font-semibold">
          Review Vocabulary
        </h1>
      </div>

      <div class="flex flex-row gap-16 justify-center mt-5 scale-75">
        <div
          class="h-[400px] w-[300px] rounded-3xl shadow-md bg-white cursor-pointer hover:border-8 border-slate-200"
          v-for="(item, index) in items"
          :key="index"
        >
          <!-- Sound-Part -->
          <SoundControl :soundPath="item.pronunciation">
            <img
              :src="item.src"
              :alt="item.meaning"
              class="w-[220px] h-[225px] ml-10 mt-3"
            />
            <img
              src="/SoundButton.svg"
              alt="SoundButton"
              class="absolute ml-52 mt-20"
            />
          </SoundControl>

          <div
            class="border-solid border-b-2 border-black w-[230px] ml-7 mt-10"
          ></div>
          <h1 class="text-[24px] ml-10 mt-3">
            {{ item.word.split(' ')[0] }} <br />
            {{ item.word.split(' ').slice(1).join(' ') }}
          </h1>
        </div>
      </div>

      <div class="flex flex-wrap justify-center mt-1">
        <div class="flex justify-center gap-6">
          <div
            class="flex justify-center items-center font-outfit bg-title rounded-lg font-Outfit font-semibold text-lg p-2 text-white text-center hover:bg-button-bgColor sm:text-lg sm:p-3 sm:w-40 h-14"
          >
            <button class="uppercase" @click="playAgain">Play Again</button>
          </div>

          <div
            class="flex justify-center items-center font-outfit bg-title rounded-lg font-Outfit font-semibold text-lg p-4 text-white text-center hover:bg-button-bgColor sm:text-lg sm:p-3 sm:w-40 h-14"
          >
            <button class="uppercase" @click="mainMenu">Main Menu</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
