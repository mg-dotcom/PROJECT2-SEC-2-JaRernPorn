<script setup>
import { ref, computed, defineProps } from "vue";
import { useRoute, RouterLink } from "vue-router";
const route = useRoute();
import { categories } from "../../../BE/data.json";

const unitPage = ref(true);

const paramCateIndex = route.params.cateIndex - 1;

const currentIndexCate = ref(paramCateIndex);

const currentCategory = computed(() => {
  return categories[currentIndexCate.value].name;
});

const currentItem = computed(() => {
  const currentUnit = categories[currentIndexCate.value].units;
  const firstItem = currentUnit.map((unit) => unit.items[0]);
  return firstItem;
});
</script>

<template>
  <section class="unit" v-if="unitPage">
    <div class="bg-main-bgColor min-h-screen w-full flex flex-col">
      <!-- Back to category -->
      <header class="py-7 px-7">
        <!-- Back to home Button -->
        <router-link to="/categories">
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
            {{ currentCategory }}
          </div>
        </div>
      </header>

      <div
        class="absolute left-0 right-0 xl:top-[33%] flex justify-center items-center xl:space-y-0 xl:flex-grow lg:top-1/3 gap-x-24 flex-wrap md:top-[15%] md:scale-75 md:space-y-8 sm:top-1/3 mobile:top-1/4"
      >
        <div
          class="w-56 h-56 bg-[#F9D986] rounded-[50px] flex justify-center items-center transition-all duration-300 ease-in-out transform hover:scale-110"
          v-for="(item, index) in currentItem"
          :key="item.id"
        >
          <router-link :to="{ name: 'Game1', params: { unit: index + 1 } }">
            <img class="w-52 h-52" :src="item.src" :alt="item.meaning" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
