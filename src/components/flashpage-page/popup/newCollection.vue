<script setup>
import { defineProps, ref, defineEmits, computed } from "vue";
import { addNewCollection } from "../../../libs/flashcard-libs/CollectionModal.js";
import closeIcon from "../../flashpage-page/icons/iconClose.vue";

const props = defineProps({
  closeOption: {
    type: Function,
    required: true,
  },
  popup: {
    type: Object,
    required: true,
  },
});

const newCollectionName = ref("");

const closeButton = () => {
  props.popup.newCollection = false;
  newCollectionName.value = "";
};

const handleAddNewCollection = () => {
  const newColName = newCollectionName.value.trim();
  addNewCollection(newColName, collections.value);
  newCollectionName.value = "";
  props.popup.newCollection = false;
  sendCollectionsToParent();
};

const addNewCollectionName = () => {
  props.popup.newCollection = true;
};

const collections = ref([]);
const localCollections = JSON.parse(localStorage.getItem("collections")) || [];

// Loop to populate collections with localCollections
localCollections.forEach((collection) => {
  collections.value.push(collection);
});

const emits = defineEmits(["sendCollections"]);

// Function to send collections.value to the parent component
const sendCollectionsToParent = () => {
  emits("sendCollections", collections.value);
};
</script>

<template>
  <!-- Add New Collection -->
  <div class="text-start font-outfit text-base font-semibold pb-2">
    <div @click.self="props.closeOption">
      <h1
        class="cursor-pointer inline hover:bg-[#f4ead8] p-[4px] rounded-xl transition-all duration-[270ms]"
        @click="addNewCollectionName"
      >
        Add new +
      </h1>
    </div>
  </div>
  <hr class="border-gray-300" />

  <!-- Popup -->
  <section
    class="popup-newCollection z-50 fixed top-0 left-0"
    v-show="props.popup.newCollection"
  >
    <div
      class="bg-black bg-opacity-50 flex items-center justify-center min-h-screen w-screen"
      @click.self="closeButton"
    >
      <div class="bg-white rounded-lg w-[580px] h-[350px] relative p-6">
        <closeIcon
          class="absolute top-3 right-4 cursor-pointer"
          @click="closeButton"
        />
        <div class="flex flex-col items-center justify-center">
          <div class="text-center text-3xl font-mono font-semibold">
            Add new collection
          </div>
          <div class="my-7 flex flex-col items-center justify-center">
            <img
              class="w-[178px]"
              src="/img/flashcard-pic/collection.svg"
              alt=""
            />
            <div
              class="w-[160px] overflow-hidden absolute flex items-center justify-center"
            >
              <div
                class="text-2xl font-outfit font-medium whitespace-normal break-all overflow-ellipsis max-h-[122px]"
              >
                {{ newCollectionName }}
              </div>
            </div>
          </div>
          <div class="flex gap-3">
            <input
              type="text"
              v-model="newCollectionName"
              class="border-2 border-[#4096ff] rounded-md p-2 w-[400px] focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-[270ms]"
              placeholder="Collection name"
              @keydown.enter="handleAddNewCollection"
            />
            <div>
              <button
                class="bg-[#4096ff] text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-[270ms]"
                @click="handleAddNewCollection"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
