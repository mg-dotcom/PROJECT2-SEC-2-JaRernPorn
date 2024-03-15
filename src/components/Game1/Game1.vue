<script setup>
import { categories } from '../../../data/categories.json'
import { computed, ref } from 'vue'

const currentIndexCate = ref(0)
const currentIndexUnit = ref(0)
const currentIndexItem = ref(0)

// const category = categories[currentIndexCate.value] ดิบๆไปก่อนนะ

const currentCategory = computed(() => {
  return categories[currentIndexCate.value].name
})

const currentQuestion = computed(() => {
  return categories[currentIndexCate.value].units[currentIndexUnit.value].items[
    currentIndexItem.value
  ].meaning
})

const threeChoices = computed(() => {
  return categories[currentIndexCate.value].units[currentIndexUnit.value].items
})
</script>

<template>
  <div class="bg-main-bgColor h-screen w-full">
    <div class="flex justify-between pt-20">
      <h1
        class="text-3xl text-wrongPopup-size font-semibold font-outfit text-title pl-20"
      >
        Category: {{ currentCategory }}
      </h1>
      <img src="/Setting.svg" alt="Setting" class="pr-36" />
    </div>

    <div class="flex justify-center">
      <h2 class="text-title font-outfit font-semibold text-[48px] mt-24">
        Which one of these is {{ currentQuestion }}?
      </h2>
    </div>

    <!-- Cards -->
    <div
      class="flex flex-row gap-16 justify-center mt-10"
      v-for="(item, itemIndex) in threeChoices"
    >
      <div
        class="h-[400px] w-[300px] rounded-3xl shadow-md bg-white cursor-pointer"
      >
        <img
          src="/Apple.svg"
          alt="Apple"
          class="w-[220px] h-[225px] ml-10 mt-3"
        />
        <div
          class="border-solid border-b-2 border-black w-[230px] ml-7 mt-10"
        ></div>
        <h1 class="text-[24px] ml-10 mt-3">
          苹果 <br />
          {{ item }}
          píngguǒ
        </h1>
        <img
          src="/SoundButton.svg"
          alt="SoundButton"
          class="absolute ml-52 -mt-12"
        />
      </div>
      <!-- <div class="h-[400px] w-[300px] rounded-3xl shadow-md bg-white">
        <img
          src="/Apple.svg"
          alt="Apple"
          class="w-[220px] h-[225px] ml-10 mt-3"
        />
        <div
          class="border-solid border-b-2 border-black w-[230px] ml-7 mt-10"
        ></div>
        <h1 class="text-[24px] ml-10 mt-3">
          苹果 <br />
          píngguǒ
        </h1>
        <img
          src="/SoundButton.svg"
          alt="SoundButton"
          class="absolute ml-52 -mt-12"
        />
      </div>
      <div class="h-[400px] w-[300px] rounded-3xl shadow-md bg-white">
        <img
          src="/Apple.svg"
          alt="Apple"
          class="w-[220px] h-[225px] ml-10 mt-3"
        />
        <div
          class="border-solid border-b-2 border-black w-[230px] ml-7 mt-10"
        ></div>
        <h1 class="text-[24px] ml-10 mt-3">
          苹果 <br />
          píngguǒ
        </h1>
        <img
          src="/SoundButton.svg"
          alt="SoundButton"
          class="absolute ml-52 -mt-12"
        />
      </div>
      <div class="h-[400px] w-[300px] rounded-3xl shadow-md bg-white">
        <img
          src="/Apple.svg"
          alt="Apple"
          class="w-[220px] h-[225px] ml-10 mt-3"
        />
        <div
          class="border-solid border-b-2 border-black w-[230px] ml-7 mt-10"
        ></div>
        <h1 class="text-[24px] ml-10 mt-3">
          苹果 <br />
          píngguǒ
        </h1>
        <img
          src="/SoundButton.svg"
          alt="SoundButton"
          class="absolute ml-52 -mt-12"
        />
      </div> -->
    </div>
  </div>
</template>

<style scoped></style>
