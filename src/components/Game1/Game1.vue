<script setup>
import categories from '../../../data/categories.json'
</script>

<template>
  <div class="bg-main-bgColor h-screen w-full">
    <div
      class="flex justify-between pt-20"
      v-for="(category, categoriesIndex) in categories"
      :key="categoriesIndex"
    >
      <h1
        class="text-3xl text-wrongPopup-size font-semibold font-outfit text-title pl-20"
      >
        Category: {{ category[0].name }}
      </h1>
      <img src="/Setting.svg" alt="Setting" class="pr-36" />
    </div>

    <div class="flex justify-center">
      <h2 class="text-title font-outfit font-semibold text-[48px] mt-24">
        Which one of these is Apple?
      </h2>
    </div>

    <div class="flex flex-row gap-16 justify-center mt-10">
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
