<script setup>
import { ref, computed, defineProps } from "vue";
import { useRoute } from "vue-router";
const route = useRoute(); // using useRoute() hook to access the current route object
import { categories } from "../../data/data.json";

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
    <div class="bg-main-bgColor min-h-screen w-full">
      <div class="flex justify-between">
        <!-- Back to category -->
        <router-link :to="{ name: 'Categories' }">
          <img
            src="/categories/icon/left-arrow.png"
            alt="Arrow"
            class="pt-20 pl-20 cursor-pointer size-40"
          />
        </router-link>
        <h1
          class="text-3xl text-wrongPopup-size font-semibold font-outfit text-title pt-28 pr-20"
        >
          {{ currentCategory }}
        </h1>
        <img src="/settingBtn/setting.svg" alt="Setting" class="pt-20 pr-20" />
      </div>

      <div class="flex justify-center pt-20">
        <div class="flex flex-wrap justify-center gap-44 w-[800px] h-[500px]">
          <div
            class="w-44 h-44 bg-[#F9D986] rounded-[50px] transition-all duration-300 ease-in-out transform hover:scale-110"
            v-for="(item, index) in currentItem"
            :key="item.id"
          >
            <router-link :to="{ name: 'Game1', params: { unit: index + 1 } }">
              <img :src="item.src" :alt="item.meaning" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
