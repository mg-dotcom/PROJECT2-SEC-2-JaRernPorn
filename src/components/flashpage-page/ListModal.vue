<script setup>
const props = defineProps({
  popup: {
    type: Object,
    required: true,
  },
  SelectedIndex: {
    type: Number,
    required: true,
  },
  localCollections: {
    type: Array,
    required: true,
  },
  renameCollectionName: {
    type: String,
    required: true,
  },
  computedCollections: {
    type: Array,
    default: () => [],
    required: true,
  },
});
</script>

<template>
  <!-- Header -->
</template>

<style scoped></style>
