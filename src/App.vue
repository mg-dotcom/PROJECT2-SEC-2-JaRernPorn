<script setup>
import { reactive, ref, computed } from "vue"; // Add the import statement for reactive
import close from "./components/icons/iconClose.vue";
const page = reactive({
  flashcard: true,
});

const popup = reactive({
  newCollection: false,
});

const addNewCollectionName = () => {
  popup.newCollection = true;
};

const closeButton = () => {
  popup.newCollection = false;
};

const collections = ref([]);
const newCollectionName = ref("");
const localCollections = JSON.parse(localStorage.getItem("collections")) || [];

// Loop to populate collections with localCollections
localCollections.forEach((collection) => {
  collections.value.push(collection);
});

const addNewCollection = () => {
  popup.newCollection = false;

  if (newCollectionName.value === "") {
    return alert("Please enter a collection name");
  } else {
    collections.value.push(newCollectionName.value);
    localStorage.setItem("collections", JSON.stringify(collections.value));
    newCollectionName.value = "";
  }
};

const computedCollections = computed(() => {
  return collections.value;
});

document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("truncateText");
  const maxCharacters = 27; // Adjust the maximum number of characters as needed

  if (element.textContent.length > maxCharacters) {
    element.classList.add("custom-truncate");
  }
});
</script>
<template>
  <section class="flashcard-home" v-show="page.flashcard">
    <div
      class="flex items-center justify-center min-h-screen w-screen"
      :class="{ absolute: popup.newCollection }"
    >
      <div
        class="bg-[#fff7e6] rounded-lg border w-[500px] h-[550px] p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-center flex flex-col overflow-auto"
      >
        <div class="text-3xl font-mono font-bold text-[#4096ff]">
          Flash Card
        </div>
        <div class="text-start text-sm font-semibold mt-3 mb-2">
          <div>
            <h1
              class="cursor-pointer inline hover:bg-[#f4ead8] p-[4px] rounded-xl transition-all duration-200"
              @click="addNewCollectionName"
            >
              Add new +
            </h1>
          </div>
        </div>
        <hr class="border-gray-300" />
        <div
          v-if="localCollections === null"
          class="text-gray-300 text-sm flex-grow flex justify-center items-center"
        >
          No collection added yet
        </div>
        <div v-else class="grid grid-cols-3 gap-2 p-2 text-center">
          <div v-for="(item, index) in computedCollections" :key="item">
            <div class="relative">
              <img class="w-[130px]" src="./assets/collection.svg" alt="" />
              <img
                class=" z-10 opacity-70 scale-[55%] hover:bg-gray-400 rounded-full w-10 h-10 p-2 cursor-pointer absolute top-2 right-[7.5px]"
                src="./assets/option.svg"
                alt="option"
              />

              <div
                class="absolute w-[130px] inset-0 flex items-center justify-center overflow-hidden p-2"
              >
                <div
                  class="text-xl font-semibold whitespace-normal break-all overflow-ellipsis max-h-[27px]"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        class="popup-newCollection absolute z-20"
        v-show="popup.newCollection"
      >
        <div
          class="bg-black bg-opacity-50 flex items-center justify-center min-h-screen w-screen"
        >
          <div class="bg-white rounded-lg w-[580px] h-[350px] relative p-6">
            <close
              class="absolute top-3 right-4 cursor-pointer"
              @click="closeButton"
            />
            <div class="flex flex-col items-center justify-center">
              <div class="text-center text-3xl font-mono font-bold">
                Add new collection
              </div>
              <div class="my-7 flex flex-col items-center justify-center">
                <img class="w-[178px]" src="./assets/collection.svg" alt="" />
                <div
                  class="w-[178px] overflow-hidden absolute flex items-center justify-center"
                >
                  <div
                    class="text-2xl font-semibold whitespace-normal break-all overflow-ellipsis max-h-[127px]"
                  >
                    {{ newCollectionName }}
                  </div>
                </div>
              </div>
              <div class="flex gap-3">
                <input
                  type="text"
                  v-model="newCollectionName"
                  class="border-2 border-[#4096ff] rounded-md p-2 w-[400px] focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-200"
                  placeholder="Collection name"
                  @keydown.enter="addNewCollection"
                />
                <div>
                  <button
                    class="bg-[#4096ff] text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-200"
                    @click="addNewCollection"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped></style>
