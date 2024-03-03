<script setup>
import { reactive } from "vue"; // Add the import statement for reactive
import close from "./components/icons/Close.vue";
const addNewCollection = () => {
  popup.newCollection = true;
};

const page = reactive({
  flashcard: true,
});

const popup = reactive({
  newCollection: false,
});
</script>

<template>
  <section class="flashcard-home" v-show="page.flashcard">
    <div
      class="flex items-center justify-center min-h-screen w-screen"
      :class="{ absolute: popup.newCollection }"
    >
      <div
        class="bg-[#fff7e6] text-[#4096ff] rounded-lg border w-[500px] h-[550px] p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-center flex flex-col"
      >
        <div class="text-3xl font-mono font-bold">Flash Card</div>
        <div class="text-start text-[#1d39c4] text-sm font-semibold mt-3 mb-2">
          <div>
            <h1
              class="cursor-pointer inline hover:bg-gray-200 p-[4px] rounded-xl transition-all duration-200"
              @click="addNewCollection()"
            >
              Add new +
            </h1>
          </div>
        </div>
        <hr class="border-gray-300" />
        <div
          class="text-[#d0d8fd] text-sm font-semibold flex-grow flex justify-center items-center"
        >
          No collection added yet
        </div>
      </div>
      <section
        class="popup-newCollection absolute"
        v-show="popup.newCollection"
      >
        <div
          class="bg-black bg-opacity-50 flex items-center justify-center min-h-screen w-screen"
        >
          <div class="bg-white rounded-lg w-[580px] h-[350px]">
            <close />
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped></style>
