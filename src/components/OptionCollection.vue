<script setup>
import iconDelete from "./icons/iconDelete.vue";
import iconEdit from "./icons/iconEdit.vue";
import { defineProps, defineEmits } from "vue";

</script>

<template>
  <div
    class="max-w-[270px] p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full"
  >
  <slot name="delete"></slot>
  <hr class="my-2 border-gray-200 dark:border-gray-700" />
  <slot name="edit"></slot>
  </div>
</template>
