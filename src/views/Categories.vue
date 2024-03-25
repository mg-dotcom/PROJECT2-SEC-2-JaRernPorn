<script setup>
import { ref } from "vue";

import { categories } from "../../data/data.json";
import SettingHomePage from "../components/SettingHomePage.vue";

const categoryPage = ref(true);

const showSetting = ref(false);

const toggleSetting = () => {
  showSetting.value = !showSetting.value;
};
</script>

<template>
  <section class="category" v-if="categoryPage">
    <div class="bg-main-bgColor min-h-screen overflow-hidden">
      <div class="absolute left-0 right-0 z-40" v-show="showSetting">
        <SettingHomePage @closeSetting="toggleSetting" />
      </div>
      <header class="py-7 px-7">
        <!-- Back to home Button -->
        <router-link to="/">
          <img
            class="w-16 absolute hover:w-catePage-20 transition-all duration-300 ease-in-out cursor-pointer"
            src="/categories/icon/left-arrow.png"
            alt="left-arrow"
          />
        </router-link>

        <div class="header flex justify-center items-center">
          <div
            class="categories text-title font-semibold font-outfit text-5xl flex items-center justify-center w-full px-17"
          >
            Categories
          </div>
        </div>
        <div class="setting">
          <img
            src="/settingBtn/setting.svg"
            alt="setting button"
            class="w-10 absolute right-10 top-10 hover:scale-105 transition-all duration-300 ease-in-out"
            @click="toggleSetting"
          />
        </div>
      </header>

      <div class="flex content-center justify-center scale-90 flex-grow">
        <div
          class="font-semibold text-black font-outfit md:flex md:justify-center"
        >
          <div
            class="md:flex md:space-x-32 md:flex-wrap md:w-3/4 md:justify-center md:items-center"
          >
            <div
              v-for="(category, cateIndex) in categories"
              :key="category.name"
              class="category-item flex flex-col items-center md:mb-9 cursor-pointer"
            >
              <div
                class="pic w-52 pb-2 hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <router-link
                  :to="{
                    name: 'CategoriesUnits',
                    params: {
                      category: category.name.toLowerCase(),
                      cateIndex: cateIndex + 1,
                    },
                  }"
                >
                  <img
                    :src="category.image"
                    :alt="category.name"
                    class="hover:drop-shadow-lg"
                  />
                </router-link>
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
