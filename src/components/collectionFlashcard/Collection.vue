<script setup>
import { defineProps, defineEmits } from "vue";

import optionEditDelete from "../optionEditDelete.vue";

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  popup: {
    type: Object,
    required: true,
  },
  allCollections: {
    required: true,
  },
  SelectedIndex: {
    type: Number,
  },
  collectionId: {
    type: String,
    required: true,
  },
});

const showOption = (index) => {
  emit("toggle-option-collection", index);
};

const emit = defineEmits([
  "deleteCollection",
  "toggle-option-collection",
]);

const deleteCollection = (index, id) => {
  emit("deleteCollection", index, id);
};
</script>

<template>
  <!-- Each Folder Collection -->
  <div class="relative flex flex-col items-center font-outfit">
    <img
      class="z-40 opacity-70 hover:bg-gray-400 rounded-full w-10 h-10 lg:p-2 md:scale-[60%] md:p-2 lg:scale-[75%] cursor-pointer absolute transition-all duration-[270ms] lg:top-[19px] lg:right-[5px] md:top-[1px] md:right-[-11px] sm:top-[8px] sm:right-[-9px] mobile:scale-[70%] mobile:p-2 mobile:top-[7px] mobile:right-[-5px]"
      src="/img/flashcard-pic/option.svg"
      alt="option"
      @click="showOption(props.index)"
    /><router-link
      :to="{
        name: 'FlashCard',
        params: {
          name: props.allCollections[props.index].name,
          id: collectionId,
        },
      }"
    >
      <div
        class="collection hover:shadow-lg rounded-3xl transition-all duration-[270ms] hover:scale-105"
      >
        <img
          class="cursor-pointer scale-[105%] sm:scale-[110%] md:scale-[117%] lg:scale-100"
          src="/img/flashcard-pic/collection.svg"
          alt="collection"
        />

        <div
          class="absolute inset-[16px] flex items-center justify-center overflow-hidden cursor-pointer text-3xl font-medium font-outfit whitespace-normal break-all overflow-ellipsis z-10 md:text-2xl lg:text-4xl"
        >
          {{ props.allCollections[props.index].name }}
        </div>
      </div></router-link
    >

    <optionEditDelete
      v-show="props.popup.optionEditDelete && SelectedIndex === props.index"
      :index="index"
      :popup="popup"
      :SelectedIndex="SelectedIndex"
      :collection-id="collectionId"
      @optionDelete="deleteCollection"
    ></optionEditDelete>
  </div>
</template>

<style scoped></style>
