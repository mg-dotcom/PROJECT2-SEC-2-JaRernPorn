<script setup>
import { defineProps } from "vue";
import settingButton from "../flashpage-page/icons/setting-button.vue";

const props = defineProps({
  computedCollections: {
    type: Array,
    default: () => [],
    required: true,
  },
  closeOption: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="flex-grow flex justify-center items-center text-center h-[70vh]">
    <div v-if="computedCollections.length === 0" class="text-gray-300 text-sm">
      No collection added yet
    </div>
  </div>

  <div
    v-if="computedCollections.length > 0"
    class="grid grid-cols-3 gap-9 px-10 py-7 text-center"
    @click.self="closeOption"
  >
    <slot
      v-for="(collection, index) in computedCollections"
      :key="index"
      :collection="collection"
    ></slot>
  </div>
</template>

<style scoped></style>
