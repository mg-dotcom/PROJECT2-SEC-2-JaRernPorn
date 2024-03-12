<script setup>
import { reactive, ref, computed } from 'vue'
import categories from '../data/categories'

const answer = ref('')
const isChecking = ref(false)
const selectedAnswer = ref('')
const options = ref([])
const currentIndexItem = ref(0)
const currentIndexCate = ref(0)
const settingButton = ref(false)
const userAnswer = ref([])

const init = () => {
  settingButton.value = false
  currentIndexItem.value = 0
  currentIndexCate.value = 0
  userAnswer.value = []
  selectedAnswer.value = ''
  options.value = []
  answer.value = ''
}

const allPage = reactive({
  homePage: true,
  categoryPage: false,
  playgamePage: false,
  wordListPage: false
})

const popup = reactive({
  showHowToPlayPage: false,
  showAnswer: false,
  showEndgame: false
})

const playButton = () => {
  allPage.homePage = false
  allPage.categoryPage = true
}

const howToPlayButton = () => {
  allPage.homePage = true
  popup.showHowToPlayPage = true
}

const closeHowToPlay = () => {
  allPage.homePage = true
  popup.showHowToPlayPage = false
}

const backToHome = () => {
  allPage.homePage = true
  allPage.categoryPage = false
  allPage.wordListPage = false
  init()
}

const showPlaygame = (index) => {
  currentIndexCate.value = index
  allPage.playgamePage = true
  allPage.categoryPage = false
}

const showWordListPage = () => {
  popup.showEndgame = false
  allPage.wordListPage = true
}

const openSetting = () => {
  settingButton.value = true
}

const closeSetting = () => {
  settingButton.value = false
}

const restartButton = () => {
  allPage.playgamePage = true
  allPage.wordListPage = false
  userAnswer.value = []
  currentIndexItem.value = 0
  closeSetting()
}

const mainMenuButton = () => {
  allPage.wordListPage = false
  allPage.categoryPage = true
  init()
}

const homeButton = () => {
  allPage.playgamePage = false
  allPage.categoryPage = false
  allPage.homePage = true
  init()
}
</script>

<template>
  <!-- Home Page -->
  <section class="homePage" v-if="allPage.homePage">
    <div
      class="h-screen w-full bg-main-bgColor p-5"
      :class="{ absolute: popup.showHowToPlayPage }"
    >
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
              src="/home-page/play-button.svg"
              alt="play-button"
              @click="playButton"
            />
          </div>
          <!-- How to Play Button -->
          <div id="HTP-button" class="flex justify-center pt-6">
            <img
              class="w-72 relative hover:w-80 transition-all duration-300 ease-in-out cursor-pointer"
              src="/home-page/HTP-button.svg"
              alt="HTP-button"
              @click="howToPlayButton"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- How To Play Page -->
    <div
      class="flex justify-center items-center h-screen bg-black bg-opacity-50 absolute"
      v-if="popup.showHowToPlayPage"
      @click.self="closeHowToPlay"
    >
      <div
        class="overflow-y-scroll h-4/5 bg-white rounded-2xl drop-shadow-2xl relative md:w-5/12 sm:w-6/12 mobile:w-11/12"
      >
        <!-- Close Button -->
        <div
          class="sticky top-3 float-right cursor-pointer w-10"
          @click="closeHowToPlay"
        >
          <img
            class="w-6 sticky right-3"
            title="close"
            src="/HowToPlay-page/close-vector.png"
            alt="close-vector"
          />
        </div>
        <div class="flex justify-center items-center">
          <div class="w-3/4">
            <h1
              class="text-5xl pt-4 font-bold text-center mb-6 font-alkatra text-title"
            >
              HOW TO PLAY
            </h1>
            <div class="content">
              <div class="HTP-1">
                <p class="text-lg mb-4 font-outfit">1. Select the category.</p>
                <img class="mb-9" src="/HowToPlay-page/HTP-1.png" alt="HTP-1" />
              </div>

              <div class="HTP-2">
                <p class="text-lg mb-4 font-outfit">
                  2. Choose the word that matches the picture.
                </p>
                <img class="mb-9" src="/HowToPlay-page/HTP-2.png" alt="HTP-2" />
              </div>

              <div class="HTP-3">
                <p class="text-lg mb-4 font-outfit">
                  3. If you answer
                  <span class="text-red-500">incorrectly</span>, a pop-up will
                  appear with the correct answer before moving on to the next
                  question.
                </p>
                <img
                  class="mb-9 w-screen rounded-lg"
                  src="/HowToPlay-page/HTP-3.png"
                  alt="HTP-3"
                />
              </div>

              <div class="HTP-4">
                <p class="text-lg mb-4 font-outfit">
                  4. Game end: List displays your choice and correct answer.
                  Correct is normal, incorrect is red.
                </p>
                <img class="mb-9" src="/HowToPlay-page/HTP-4.png" alt="HTP-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Category Page -->
  <section class="category" v-else-if="allPage.categoryPage">
    <div class="p-7 bg-main-bgColor min-h-screen">
      <header>
        <!-- Back to home Button -->
        <img
          class="w-16 absolute hover:w-catePage-20 transition-all duration-300 ease-in-out cursor-pointer"
          src="/categories/icon/left-arrow.png"
          alt="left-arrow"
          @click="backToHome"
        />

        <div class="header flex justify-center items-center">
          <div
            class="categories text-title font-semibold font-outfit text-5xl flex items-center justify-center w-full px-17"
          >
            Categories
          </div>
        </div>
      </header>

      <div class="flex content-center justify-center mt-14">
        <div
          class="font-semibold text-black font-outfit md:flex md:justify-center"
        >
          <div
            class="md:flex md:space-x-32 md:flex-wrap md:w-3/4 md:justify-center"
          >
            <div
              v-for="(category, cateIndex) in categories"
              :key="category.name"
              class="category-item flex flex-col items-center md:mb-9 cursor-pointer"
              @click="showPlaygame(cateIndex)"
            >
              <div
                class="pic w-52 pb-2 hover:w-56 transition-all duration-300 ease-in-out"
              >
                <img
                  :src="category.image"
                  :alt="category.name"
                  class="hover:drop-shadow-lg"
                />
              </div>

              <p class="text-xl">{{ category.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
./assets/data/categories
