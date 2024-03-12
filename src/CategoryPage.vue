<script setup>
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
  <section class="category">
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

<style scoped></style>
