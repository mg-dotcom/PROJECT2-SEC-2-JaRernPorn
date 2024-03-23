<script setup>
import { defineProps, ref, computed, defineEmits } from "vue";
import newCollection from "../collectionFlashcard/popup/newCollection.vue";
import Collection from "../collectionFlashcard/Collection.vue";
// import { editCollection } from "../../libs/flashcard-libs/CollectionModal.js";
// import { deleteCollection } from "../../libs/flashcard-libs/CollectionModal.js";
import { addNewCollection, editCollection, deleteCollection } from "../../libs/flashcard-libs/CollectionModal.js";

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
  props.closeOption();
};

const handleAddNewCollection = (name) => {
  const newColName = name.trim();
  addNewCollection(newColName, collections.value);
  props.popup.newCollection = false;
};

const SelectedIndex = ref(0);

const toggleOptionCollection = (index) => {
  props.popup.optionCollection = !props.popup.optionCollection;
  SelectedIndex.value = index;
};
</script>

<template>
  <div class="w-8/12 mx-auto flex flex-col">
    <newCollection
      :closeOption="closeOption"
      :popup="popup"
      @addNewCollections="handleAddNewCollection"
    />

    <!-- All Collections -->
    <div
      v-if="computedCollections.length === 0"
      class="flex-grow flex justify-center items-center text-center h-[70vh]"
    >
      <div class="text-gray-300 text-sm">No collection added yet</div>
    </div>

    <div
      v-else-if="computedCollections.length > 0"
      class="grid grid-cols-1 gap-10 px-10 py-7 text-center lg:grid-cols-3 md:grid-cols-3 md:gap-17 sm:grid-cols-2 sm:gap-10"
      @click.self="closeOption"
    >
      <Collection
        v-for="(collection, index) in computedCollections"
        :key="index"
        :index="index"
        :popup="popup"
        :computedCollections="computedCollections"
        :closeOption="closeOption"
        :SelectedIndex="SelectedIndex"
        @changeCollectionName="handleEditCollection"
        @deleteCollection="handleDeleteCollection"
        @toggle-option-collection="toggleOptionCollection"
      >
      </Collection>
    </div>
  </div>
</template>

<style scoped></style>

