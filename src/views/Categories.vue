<script setup></script>

<template>
  <section class="category" v-if="categoryPage">
    <div class="bg-main-bgColor min-h-screen overflow-hidden">
      <header class="py-7 px-7">
        <!-- Back to home Button -->
        <RouterLink to="/">
          <img
            class="w-16 absolute hover:w-catePage-20 transition-all duration-300 ease-in-out cursor-pointer"
            src="/categories/icon/left-arrow.png"
            alt="left-arrow"
          />
        </RouterLink>

        <div class="header flex justify-center items-center">
          <div
            class="categories text-title font-semibold font-outfit text-5xl flex items-center justify-center w-full px-17"
          >
            Categories
          </div>
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
</template>

<style scoped></style>
