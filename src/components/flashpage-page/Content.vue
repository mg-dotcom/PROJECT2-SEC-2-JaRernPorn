<script setup>
import { defineProps, ref, computed } from "vue";
import newCollection from "./popup/newCollection.vue";
import Collection from "./Collection.vue";
import iconDelete from "./icons/iconDelete.vue";
import iconEdit from "./icons/iconEdit.vue";

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

const SelectedIndex = ref(null);
const collections = ref([]);
const localCollections = JSON.parse(localStorage.getItem("collections")) || [];

localCollections.forEach((collection) => {
  collections.value.push(collection);
});
const computedCollections = computed(() => {
  return collections.value;
});

const handleShowOption = (index) => {
  if (SelectedIndex.value === index) {
    return true;
  }
  return false;
};

// Listen for the showOption event emitted from the child component
</script>

<template>
  <div class="w-8/12 mx-auto flex flex-col">
    <newCollection
      :closeOption="closeOption"
      :popup="popup"
      @sendCollections="collections = $event"
    />

    <!-- All Collections -->
    <div
      v-if="computedCollections.length === 0"
      class="flex-grow flex justify-center items-center text-center h-[70vh]"
    >
      <div class="text-gray-300 text-sm">No collection added yet</div>
    </div>

    <div
      v-if="computedCollections.length > 0"
      class="grid grid-cols-3 gap-9 px-10 py-7 text-center"
      @click.self="closeOption"
    >
      <Collection
        v-for="(collection, index) in computedCollections"
        :key="index"
        :index="index"
        :popup="popup"
        :closeOption="closeOption"
        :computedCollections="computedCollections"
      >
        <template #collectionName>
          {{ collection.name }}
        </template>
      </Collection>
    </div>
  </div>
</template>

<style scoped></style>
