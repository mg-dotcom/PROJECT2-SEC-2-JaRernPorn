<script setup>
import { reactive } from "vue";

const page = reactive({
  homePage: true,
});

const playButton = () => {
  // Add your logic here
};

const howToPlayButton = () => {
  // Add your logic here
};
</script>

<template>
  <section
    class="้HomePage"
    v-show="page.homePage"
    style="background-image: url('./assets/homePage/test2.png')"
  >
    <div class="h-screen w-full p-5">
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

        <div id="home-page-button">
          <!-- Play Button -->
          <div id="play-button" class="flex justify-center pt-12">
            <img
              class="w-72 relative hover:w-80 transition-all duration-300 ease-in-out cursor-pointer"
              src="./assets/homePage/play-button.svg"
              alt="play-button"
              @click="playButton"
            />
          </div>
          <!-- Flashcard Button -->
          <div id="HTP-button" class="flex justify-center pt-6">
            <img
              class="w-72 relative hover:w-80 transition-all duration-300 ease-in-out cursor-pointer"
              src="./assets/homePage/flashcard-button.svg"
              alt="HTP-button"
              @click="howToPlayButton"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
