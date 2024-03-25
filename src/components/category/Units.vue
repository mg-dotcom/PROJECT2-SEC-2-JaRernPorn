<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { categories } from '../../../data/categories.json'

const currentIndexCate = ref(0)
const currentIndexUnit = ref(0)

const categoryPage = ref(true)

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
  <section class="unit">
    <div class="bg-main-bgColor min-h-screen w-full">
      <div class="flex justify-between items-center px-7 py-10">
        <img
          class="w-16 hover:w-catePage-20 transition-all duration-300 ease-in-out cursor-pointer"
          src="/categories/icon/left-arrow.png"
          alt="left-arrow"
          @click="goBack"
        />
        <h1
          class="text-3xl text-wrongPopup-size font-semibold font-outfit text-title"
        >
          {{ currentCategory }}
        </h1>
        <img
          src="/Setting.svg"
          alt="Setting"
          class="w-12 hover:w-catePage-14 transition-all duration-300 ease-in-out cursor-pointer"
        />
      </div>

      <div class="flex justify-center pt-20">
        <div class="flex flex-wrap justify-center gap-44 w-[800px] h-[500px]">
          <div
            class="w-44 h-44 bg-[#F9D986] rounded-[50px] transition-all duration-300 ease-in-out transform hover:scale-110"
            v-for="item in currentItem"
            :key="item.id"
          >
            <img :src="item.src" :alt="item.meaning" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
