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
    class="max-w-[170px] p-3 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 w-full absolute z-40 left-[240px] top-[60px]"
    
  >
    <div
      id="deleteCollection"
      class="flex gap-3 hover:bg-gray-100 transition duration-[270ms] ease-in-out p-1 rounded-lg"
      @click="$emit('deleteCollection', props.index)"
    >
      <iconDelete>
        <template #content> Delete </template>
      </iconDelete>
    </div>
    <hr class="my-2 border-gray-200 dark:border-gray-700" />
    <div
      id="editCollection"
      class="flex gap-3 hover:bg-gray-100 transition duration-[270ms] ease-in-out p-1 rounded-lg"
      @click="showRenameCollection"
    >
      <iconEdit>
        <template #content> Rename </template>
      </iconEdit>
    </div>
  </div>

  <!-- Rename Collection Section -->
</template>

<style scoped></style>
