<script setup>
import { defineProps, ref, computed, defineEmits } from "vue";
import newCollection from "./popup/newCollection.vue";
import Collection from "./Collection.vue";
import { editCollection } from "../../libs/flashcard-libs/CollectionModal.js";
import { deleteCollection } from "../../libs/flashcard-libs/CollectionModal.js";
import iconDelete from "./icons/iconDelete.vue";
import iconEdit from "./icons/iconEdit.vue";
import optionCollection from "./popup/optionCollection.vue";

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

const emit = defineEmits(["clearName", "toClearName"]);

const collections = ref([]);
const localCollections = JSON.parse(localStorage.getItem("collections")) || [];

localCollections.forEach((collection) => {
  collections.value.push(collection);
});

const computedCollections = computed(() => {
  return collections.value;
});

const handleEditCollection = (index, newName) => {
  const newNameTrim = newName.trim(); // Trimmed to remove whitespace
  collections.value = editCollection(index, newNameTrim, collections.value);
  props.popup.renameCollection = false;
  props.closeOption();
};

const handleDeleteCollection = (index) => {
  collections.value = deleteCollection(index, collections.value);
  console.log(index);
  props.closeOption();
};

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
    >
      <Collection
        v-for="(collection, index) in computedCollections"
        :key="index"
        :index="index"
        :popup="popup"
        :computedCollections="computedCollections"
        :closeOption="closeOption"
        @changeCollectionName="handleEditCollection"
        @deleteCollection="handleDeleteCollection"
      >
        <template #collectionName>
          {{ collection.name }}
        </template>
      </Collection>
    </div>
  </div>
</template>

<style scoped></style>
