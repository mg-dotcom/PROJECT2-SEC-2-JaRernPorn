<script setup>
import { defineProps, defineEmits } from "vue";
import iconDelete from "../../flashpage/icons/iconDelete.vue";
import iconEdit from "../../flashpage/icons/iconEdit.vue";

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  popup: {
    type: Object,
    required: true,
  },
});

const showRenameCollection = () => {
  props.popup.renameCollection = true;
  props.popup.optionCollection = false;
};

const emit = defineEmits(["deleteCollection"]);
</script>

<template>
  <!-- Option Collection Section -->
  <div
    class="sm:block mobile:flex xl:max-w-[170px] xl:scale-105 p-3 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 xl:w-full absolute z-40 xl:left-[240px] xl:top-[60px] lg:left-[130px] lg:top-[46px] md:left-[79px] md:top-[18px] md:w-[180px] md:scale-[70%] sm:left-[240px] sm:top-[60px] mobile:left-[143px] mobile:top-[44px] transition-all duration-[270ms] ease-in-out"
  >
    <div
      id="deleteCollection"
      class="flex gap-3 hover:bg-gray-100 transition duration-[270ms] ease-in-out p-1 rounded-lg"
      @click="$emit('deleteCollection', props.index)"
    >
      <iconDelete>
        <template #content>
          <div class="sm:block mobile:hidden">Delete</div>
        </template>
      </iconDelete>
    </div>
    <hr class="my-2 border-gray-200 dark:border-gray-700" />
    <div class="mx-2 border-[1px] border-gray-400 sm:hidden mobile:block" />
    <div
      id="editCollection"
      class="flex gap-3 hover:bg-gray-100 transition duration-[270ms] ease-in-out p-1 rounded-lg"
      @click="showRenameCollection"
    >
      <iconEdit>
        <template #content>
          <div class="sm:block mobile:hidden">Rename</div>
        </template>
      </iconEdit>
    </div>
  </div>

  <!-- Rename Collection Section -->
</template>

<style scoped></style>
