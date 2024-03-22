<script setup>
import { reactive, ref } from 'vue'
import SettingHomepage from './SettingHomepage.vue'
import CategoriesUnits from '../category/CategoriesUnits.vue'

const page = reactive({
  homePage: true,
  categoryPage: false
})
const showSetting = ref(false)

const showCategoryPage = () => {
  page.homePage = false
  page.categoryPage = true
}

const toggleSetting = () => {
  showSetting.value = !showSetting.value
}

const backToHome = () => {
  page.homePage = true
  page.categoryPage = false
}
</script>

<template>
  <section class="HomePage" v-show="page.homePage">
    <div class="h-screen w-full bg-main-bgColor p-5">
      <div class="border-double border-8 border-title box-border h-full w-full">
        <div class="setting flex justify-end pr-5">
          <img
            src="/settingBtn/setting.svg"
            alt="setting button"
            class="w-10 hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
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
          <div id="play-button" class="flex justify-center pt-12">
            <img
              @click="showCategoryPage"
              class="w-72 relative hover:w-80 transition-all duration-300 ease-in-out cursor-pointer"
              src="/homePage-pic/play-button.svg"
              alt="play-button"
            />
          </div>
          <!-- Flashcard Button -->
          <div id="Flashcard-button" class="flex justify-center pt-6">
            <img
              class="w-72 relative hover:w-80 transition-all duration-300 ease-in-out cursor-pointer"
              src="/homePage-pic/flashcard-button.svg"
              alt="HTP-button"
            />
          </div>

          <!-- How To Play Button -->
          <div id="HTP-button" class="flex justify-center pt-6">
            <img
              class="absolute right-10 bottom-10 hover:scale-110 transition-transform duration-300"
              src="/homePage-pic/HTP-button.svg"
              alt="HTP-button"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="absolute left-0 right-0 top-1/3" v-show="showSetting">
      <SettingHomepage @closeSetting="toggleSetting" />
    </div>
  </section>
  <section>
    <CategoriesUnits
      v-if="page.categoryPage"
      :backToHome="backToHome"
    ></CategoriesUnits>
  </section>
</template>

<style scoped></style>
