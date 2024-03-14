<script setup>
import { defineProps, defineEmits } from "vue";
import { ref } from "vue";
import iconDelete from "../flashpage-page/icons/iconDelete.vue";
import iconEdit from "../flashpage-page/icons/iconEdit.vue";
import renameCollection from "./popup/renameCollection.vue";

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  closeOption: {
    type: Function,
    required: true,
  },
  popup: {
    type: Object,
    required: true,
  },
  computedCollections: {
    required: true,
  },
});
</script>

<template>
  <renameCollection
    :index="index"
    :popup="popup"
    :closeOption="closeOption"
    :computedCollections="computedCollections"
  />

  <!-- Each Folder Collection -->

  <div class="relative flex flex-col items-center font-outfit">
    <div class="hover:shadow-lg rounded-3xl transition-all duration-[270ms]">
      <img
        class="cursor-pointer"
        src="/img/flashcard-pic/collection.svg"
        alt="collection"
      />
      <img
        class="z-40 opacity-70 scale-[75%] hover:bg-gray-400 rounded-full w-10 h-10 p-2 cursor-pointer absolute top-[19px] right-[5px] transition-all duration-[270ms]"
        src="/img/flashcard-pic/option.svg"
        alt="option"
        @click="showOption(props.index)"
      />
      <div
        class="absolute inset-[16px] flex items-center justify-center overflow-hidden cursor-pointer"
      >
        <div
          class="w-[75%] text-3xl font-semibold whitespace-normal break-all overflow-ellipsis z-10"
        >
          <slot name="collectionName">Empty Name</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
