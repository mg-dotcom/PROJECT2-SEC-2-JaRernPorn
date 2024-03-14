<script setup>
import { defineProps, ref, computed } from "vue";
import newCollection from "./popup/newCollection.vue";
import ListModal from "./ListModal.vue";

const props = defineProps({
  popup: {
    type: Object,
    required: true,
  },
  closeOption: {
    type: Function,
    required: true,
  },
});


</script>

<template>
  <!-- Body Flashcard -->
  <div class="w-8/12 mx-auto flex flex-col">
    <!-- Add New Collection Popup -->
    <newCollection :closeOption="closeOption" :popup="popup" />
    <!-- All Collection -->
    <ListModal @computedCollections=""> </ListModal>
  </div>
</template>

<style scoped></style>
