<script setup>
import { defineProps } from "vue";
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

const SelectedIndex = ref(null);

const showOption = (item) => {
  props.popup.optionCollection = !props.popup.optionCollection;
  SelectedIndex.value = item;
};

const handleDeleteCollection = (index) => {
  props.computedCollections.splice(index, 1);
  localStorage.setItem("collections", JSON.stringify(props.computedCollections));
};

const showRenameCollection = (index) => {
  props.popup.renameCollection = !props.popup.renameCollection;
  SelectedIndex.value = index;
};


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

  <!-- Option Collection section -->
  <div
    class="max-w-[170px] p-3 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 w-full absolute z-40 left-[250px] top-[57px]"
    v-show="showOption(props.index)"
  >
    <div
      id="deleteCollection"
      class="flex gap-3 hover:bg-gray-100 transition duration-[270ms] ease-in-out p-1 rounded-lg"
      @click="handleDeleteCollection(props.index)"
    >
      <iconDelete>
        <template #content> Delete </template>
      </iconDelete>
    </div>
    <hr class="my-2 border-gray-200 dark:border-gray-700" />
    <div
      id="editCollection"
      class="flex gap-3 hover:bg-gray-100 transition duration-[270ms] ease-in-out p-1 rounded-lg"
      @click="showRenameCollection(props.index)"
    >
      <iconEdit>
        <template #content> Rename </template>
      </iconEdit>
    </div>
  </div>
</template>

<style scoped></style>
