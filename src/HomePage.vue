<script setup>
import { reactive } from "vue";
import settingButton from "./components/setting-button.vue";
const page = reactive({
  homePage: true,
});
</script>

<template>
  <section class="้HomePage" v-show="page.homePage">
    <div class="h-screen w-full bg-main-bgColor p-5">
      <!-- Setting Button -->
      <settingButton />

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
            <img
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
  </section>
</template>

<style scoped></style>
