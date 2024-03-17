<script setup>
import {
  defineProps,
  computed,
  defineEmits,
  onMounted,
  onUnmounted,
  watch,
  ref,
} from "vue";

import renameCollection from "./popup/renameCollection.vue";
import optionCollection from "./popup/optionCollection.vue";

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  popup: {
    type: Object,
    required: true,
  },
  computedCollections: {
    required: true,
  },
  closeOption: {
    type: Function,
    required: true,
  },
});
const SelectedIndex = ref(null);
const showOption = (index, event) => {
  props.popup.optionCollection = !props.popup.optionCollection;
  SelectedIndex.value = index;

  if (props.popup.optionCollection === false) {
    SelectedIndex.value = null;
  }
  event.stopPropagation();
};

const toClearSelectedIndex = () => {
  SelectedIndex.value = null;
};

const emit = defineEmits(["changeCollectionName", "deleteCollection"]);

const passDeleteCollection = (index) => {
  emit("deleteCollection", index);
};

const passNewName = (newName, index) => {
  emit("changeCollectionName", newName, index);
};
</script>

<template>
  <!-- Each Folder Collection -->
  <div class="relative flex flex-col items-center font-outfit">
    <div
      class="collection hover:shadow-lg rounded-3xl transition-all duration-[270ms]"
    >
      <img
        class="cursor-pointer"
        src="/img/flashcard-pic/collection.svg"
        alt="collection"
      />
      <img
        class="z-40 opacity-70 scale-[75%] hover:bg-gray-400 rounded-full w-10 h-10 p-2 cursor-pointer absolute top-[19px] right-[5px] transition-all duration-[270ms]"
        src="/img/flashcard-pic/option.svg"
        alt="option"
        :id="`option-${props.index}`"
        @click="showOption(props.index, $event)"
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
    {{ SelectedIndex === props.index }}
    {{ props.popup.optionCollection }}
    <optionCollection
      v-show="props.popup.optionCollection && SelectedIndex === props.index"
      :index="index"
      :popup="popup"
      @deleteCollection="passDeleteCollection"
    ></optionCollection>

    <renameCollection
      v-show="props.popup.renameCollection && SelectedIndex === props.index"
      :index="index"
      :popup="popup"
      :computedCollections="computedCollections"
      :closeOption="closeOption"
      @changeCollectionName="passNewName"
      @toClearSelectedIndex="toClearSelectedIndex"
    ></renameCollection>
  </div>
</template>

<style scoped></style>
