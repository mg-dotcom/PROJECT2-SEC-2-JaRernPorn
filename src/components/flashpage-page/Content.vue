<script setup>
import { defineProps, ref, computed } from "vue";
import newCollection from "./popup/newCollection.vue";
import ListModal from "./ListModal.vue";
import Collection from "./Collection.vue";

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

const collections = ref([]);
const localCollections = JSON.parse(localStorage.getItem("collections")) || [];
console.log(localCollections);
const computedCollections = computed(() => {
  return collections.value;
});
</script>

<template>
  <!-- Body Flashcard -->
  <div class="w-8/12 mx-auto flex flex-col">
    <!-- Add New Collection Popup -->
    <newCollection
      :closeOption="closeOption"
      :popup="popup"
      @sendCollections="collections = $event"
    />
    <!-- All Collection -->
    <ListModal
      :computedCollections="computedCollections"
      :closeOption="closeOption"
      :collections="localCollections"
    >
  
  </ListModal>
  </div>
</template>

<style scoped></style>
