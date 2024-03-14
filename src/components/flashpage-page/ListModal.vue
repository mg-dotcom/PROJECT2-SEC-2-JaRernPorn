<script setup>
import { computed, defineProps } from "vue";
import settingButton from "../flashpage-page/icons/setting-button.vue";

const props = defineProps({
  closeOption: {
    type: Function,
    required: true,
  },
  computedCollections: {
    type: Array, // Change the type to Array
    default: () => ref([]), // Use ref([]) to initialize an empty array
  },
});
</script>

<template>
  <div class="flex-grow flex justify-center items-center text-center h-[70vh]">
    <div
      v-if="props.computedCollections.length === 0"
      class="text-gray-300 text-sm"
    >
      No collection added yet
    </div>
  </div>

  <div
    v-if="props.computedCollections.length > 0"
    class="grid grid-cols-3 gap-9 px-10 py-7 text-center"
    @click.self="closeOption"
  >
    <slot
      v-for="(item, index) in props.computedCollections"
      :key="index"
      :item="item"
    >
    </slot>
  </div>
</template>

<style scoped></style>
