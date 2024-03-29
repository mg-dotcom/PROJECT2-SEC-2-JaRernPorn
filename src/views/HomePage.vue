<script setup>
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

import HowToPlay from '../components/HowToPlay.vue'

const page = reactive({
  homePage: true,
  categoryPage: false,
  howToPlay: false
})

const toggleHowToPlay = () => {
  page.howToPlay = !page.howToPlay
}

const showHowtoplay = () => {
  page.howToPlay = true
}
</script>

<template>
  <section class="HomePage" v-show="page.homePage">
    <div class="h-screen w-full bg-main-bgColor p-5">
      <div class="border-double border-8 border-title box-border h-full w-full">
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
            <router-link :to="{ name: 'Categories' }">
              <img
                class="w-72 relative hover:w-80 transition-all duration-300 ease-in-out cursor-pointer"
                src="/homePage-pic/play-button.svg"
                alt="play-button"
              />
            </router-link>
          </div>
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
              class="absolute right-10 bottom-10 hover:scale-110 transition-transform duration-300 cursor-pointer"
              src="/homePage-pic/HTP-button.svg"
              alt="HTP-button"
            />
          </div>
          <section id="howToPlay">
            <HowToPlay
              v-show="page.howToPlay"
              @click.self="toggleHowToPlay"
              @closeHowtoplay="page.howToPlay = false"
              class="flex justify-center bg-black bg-opacity-50 absolute"
            ></HowToPlay>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
