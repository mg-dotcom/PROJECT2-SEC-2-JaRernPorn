<script setup>
import { reactive, ref } from 'vue'
import SettingHomepage from './SettingHomepage.vue'
import CategoriesUnits from '../category/CategoriesUnits.vue'
import HowToPlay from './HowToPlay.vue'

const page = reactive({
  homePage: true,
  categoryPage: false,
  howToPlay: false
})
const showSetting = ref(false)

const showCategoryPage = () => {
  page.homePage = false
  page.categoryPage = true
  page.howToPlay = false
}
const showHowtoplay = () => {
  page.homePage = true
  page.categoryPage = false
  page.howToPlay = true
}

const toggleSetting = () => {
  showSetting.value = !showSetting.value
}
</script>

<template>
  <section class="้HomePage" v-show="page.homePage">
    <div class="h-screen w-full bg-main-bgColor p-5">
      <div class="border-double border-8 border-title box-border h-full w-full">
        <div class="setting flex justify-end pr-5">
          <img
            src="/settingHomepage/Vector.svg"
            alt="setting button"
            class="w-10 cursor-pointer hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            @click="toggleSetting"
          />
        </div>
        <div
          class="logo-title text-center text-title pt-title sm:text-title-size mobile:text-mobile-title-size"
        >
          <div class="font-alkatra font-medium leading-title">HELLO !</div>
          <div class="font-alkatra font-medium leading-title">CHINESE</div>
        </div>
        <div class="text-black text-center">
          <p
            class="font-outfit font-medium tracking-sub-title sm:text-sub-title-size"
          >
            LET'S PRACTICE YOUR CHINESE VOCABULARY
          </p>
        </div>
        <!-- Play Button -->

        <div id="home-page-button">
          <router-link :to="{ name: 'CategoriesUnits' }">
            <div id="play-button" class="flex justify-center pt-12">
              <img
                @click="showCategoryPage"
                class="w-72 relative hover:w-80 transition-all duration-300 ease-in-out cursor-pointer"
                src="/homePage-pic/play-button.svg"
                alt="play-button"
              /></div
          ></router-link>
          <!-- Flashcard Button -->
          <router-link :to="{ name: 'CollectionFlashCard' }">
            <div id="Flashcard-button" class="flex justify-center pt-6">
              <img
                class="w-72 relative hover:w-80 transition-all duration-300 ease-in-out cursor-pointer"
                src="/homePage-pic/flashcard-button.svg"
                alt="HTP-button"
              /></div
          ></router-link>
          <!-- How To Play Button -->
          <div id="HTP-button" class="flex justify-center pt-6">
            <img
              @click="showHowtoplay"
              class="cursor-pointer absolute right-10 bottom-10 hover:scale-110 transition-transform duration-300"
              src="/homePage-pic/HTP-button.svg"
              alt="HTP-button"
            />
          </div>
          <section id="howToPlay">
            <HowToPlay
              v-show="page.howToPlay"
              @closeHowtoplay="page.howToPlay = false"
            ></HowToPlay>
          </section>
        </div>
      </div>
    </div>
    <div class="absolute left-0 right-0 top-1/3" v-show="showSetting">
      <SettingHomepage @closeSetting="toggleSetting" />
    </div>
  </section>
  <!-- <section>
    <CategoriesUnits v-show="page.categoryPage"></CategoriesUnits>
  </section> -->
</template>

<style scoped></style>
