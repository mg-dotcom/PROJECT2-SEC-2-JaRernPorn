<script setup>
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";
import closeIcon from "../../flashpage-page/icons/iconClose.vue";
import { editCollection } from "../../../libs/flashcard-libs/CollectionModal.js";
const props = defineProps({
  popup: {
    type: Object,
    required: true,
  },
  closeOption: {
    type: Function,
    required: true,
  },
  computedCollections: {
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits([
  "toClearName",
  "toClearSelectedIndex",
  "toUpdateName",
  "changeCollectionName",
]);
const renameCollectionName = ref("");

const SelectedIndex = ref(null);

const closeButton = () => {
  props.popup.renameCollection = false;
  renameCollectionName.value = "";
  emit("toClearSelectedIndex");
};

const toClearName = () => {
  renameCollectionName.value = "";
};

const toUpdateName = () => {
  emit("changeCollectionName", props.index, renameCollectionName.value);
  emit("toClearSelectedIndex");
};
</script>

<template>
  <!-- Rename Collection Popup  -->
  <section
    class="popup-renameCollection z-50 fixed top-0 left-0"
    v-show="props.popup.renameCollection && SelectedIndex === props.index"
  >
    <div
      class="bg-black bg-opacity-50 flex items-center justify-center min-h-screen w-screen relative z-0"
      @click.self="closeButton"
    >
      <div class="bg-white rounded-lg w-[580px] h-[350px] relative p-6">
        <closeIcon
          class="absolute top-3 right-4 cursor-pointer"
          @click="closeButton"
        />
        <div class="flex flex-col items-center justify-center">
          <div class="text-center text-3xl font-mono font-bold">
            Rename collection
          </div>
          <div class="my-7 flex flex-col items-center justify-center">
            <img
              class="w-[178px]"
              src="/img/flashcard-pic/collection.svg"
              alt="collection-pic"
            />
            <div
              class="w-[178px] overflow-hidden absolute flex items-center justify-center"
            >
              <div
                class="text-2xl font-semibold font-outfit whitespace-normal break-all overflow-ellipsis max-h-[127px]"
              >
                {{
                  renameCollectionName !== ""
                    ? renameCollectionName
                    : props.computedCollections[props.index].name
                }}
              </div>
            </div>
          </div>
          <div class="flex gap-3">
            <input
              type="text"
              v-model="renameCollectionName"
              @change="toClearName"
              class="border-2 border-[#4096ff] rounded-md p-2 w-[400px] focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-[270ms]"
              :placeholder="props.computedCollections[props.index].name"
              @keydown.enter="toUpdateName"
            />
            <div>
              <button
                class="bg-[#4096ff] text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-[270ms]"
                @click="toUpdateName"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
