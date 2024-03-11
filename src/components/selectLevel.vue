<script setup>
import categories from '../../data/demoData.json'
</script>

<template>
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
</template>

<style></style>
