<script setup>
import { ref, reactive, computed } from 'vue'
import { categories } from '../../data/categories.json'

const currentIndexCate = ref(0)
const currentIndexUnit = ref(0)

const categoryPage = ref(true)
const unitPage = ref(false)

const showUnit = (cateIndex) => {
  currentIndexCate.value = cateIndex //เก็บ index category
  currentIndexUnit.value = cateIndex

  console.log(cateIndex)
  console.log(categories[currentIndexCate.value].name)
  console.log(categories[currentIndexCate.value].units)
  console.log(categories[currentIndexCate.value].units[0])

  unitPage.value = true
  categoryPage.value = false
}

const backToCategory = () => {
  unitPage.value = false
  categoryPage.value = true
}

const currentCategory = computed(() => {
  return categories[currentIndexCate.value].name
})

const currentItem = computed(() => {
  const currentUnit = categories[currentIndexCate.value].units
  const firstItem = currentUnit.map((unit) => unit.items[0]) //map อันแรกในแต่ละunit
  return firstItem
})
</script>

<template>
  <section class="category" v-if="categoryPage">
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
                  @click="showUnit(cateIndex)"
                />
              </div>

              <p class="text-xl">{{ category.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="unit" v-if="unitPage">
    <div class="bg-main-bgColor h-screen w-full">
      <div class="flex justify-between">
        <img
          src="/Arrow-button.svg"
          alt="Arrow"
          class="pt-20 pl-20 cursor-pointer"
          @click="backToCategory"
        />
        <h1
          class="text-3xl text-wrongPopup-size font-semibold font-outfit text-title pt-28 pr-20"
        >
          {{ currentCategory }}
        </h1>
        <img src="/Setting.svg" alt="Setting" class="pt-20 pr-20" />
      </div>

      <div class="flex justify-center pt-20">
        <div class="flex flex-wrap justify-center gap-44 w-[800px] h-[500px]">
          <div v-for="item in currentItem" :key="item.id">
            <div class="w-44 h-44 bg-[#F9D986] rounded-[50px]">
              <img :src="item.src" :alt="item.meaning" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
