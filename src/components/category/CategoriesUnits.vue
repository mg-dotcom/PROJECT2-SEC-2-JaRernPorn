<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, reactive, computed } from 'vue'
import { categories } from '../../../data/categories.json'

const currentIndexCate = ref(0)
const currentIndexUnit = ref(0)

const categoryPage = ref(true)
const unitPage = ref(false)

const showUnit = (cateIndex) => {
  currentIndexCate.value = cateIndex
  currentIndexUnit.value = cateIndex

  console.log(cateIndex)
  console.log(categories[currentIndexCate.value].name)
  console.log(categories[currentIndexCate.value].units)
  console.log(categories[currentIndexCate.value].units[0])

  unitPage.value = true
  categoryPage.value = false
}

const currentCategory = computed(() => {
  return categories[currentIndexCate.value].name
})

const currentItem = computed(() => {
  const currentUnit = categories[currentIndexCate.value].units
  const firstItem = currentUnit.map((unit) => unit.items[0])
  return firstItem
})

const router = useRouter()
const goBack = () => {
  router.go(-1)
}
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
          @click="goBack"
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
              <router-link
                :to="{ name: 'Units', params: { units: cateIndex } }"
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
              </router-link>
              <p class="text-xl">{{ category.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
