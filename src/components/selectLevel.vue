<script setup>
import { ref, reactive } from 'vue'
import categories from '../../data/categories.json'

const currentIndexItem = ref(0)
const currentIndexCate = ref(0)

const init = () => {
  currentIndexItem.value = 0
  currentIndexCate.value = 0
}

const allPage = reactive({
  homePage: true,
  categoryPage: false,
  playgamePage: false,
  wordListPage: false
})

const backToHome = () => {
  allPage.homePage = true
  allPage.categoryPage = false
  allPage.wordListPage = false
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

  <!-- <section class="unit" v-if="false">
    <div class="bg-main-bgColor h-screen w-full">
      <div class="flex justify-between">
        <img src="/Arrow-button.svg" alt="Arrow" class="pt-20 pl-20" />
        <div v-for="(category, categoriesIndex) in categories">
          <h1
            class="text-3xl text-wrongPopup-size font-semibold font-outfit text-title pt-28 pr-20"
          >
            {{ category[0].name }}
          </h1>
        </div>
        <img src="/Setting.svg" alt="Setting" class="pt-20 pr-20" />
      </div>

      <div v-for="(category, categoriesIndex) in categories">
        <div class="flex justify-center pt-20">
          <div class="flex flex-wrap justify-center gap-44 w-[800px] h-[500px]">
            <div>
              <div class="w-44 h-44 bg-[#F9D986] rounded-[50px]"></div>
              <img src="/3stars.svg" alt="" class="mt-4 -ml-1" />
            </div>

            <div>
              <div class="w-44 h-44 bg-[#F9D986] rounded-[50px]"></div>
              <img src="/2stars.svg" alt="" class="mt-4 -ml-1" />
            </div>

            <div>
              <div class="w-44 h-44 bg-[#D9D9D9] rounded-[50px] -mt-36"></div>
              <img src="/0star.svg" alt="" class="mt-4 -ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<style></style>
