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
        @showOption="setSelectedIndex(index, popup.optionCollection)"
      >
        <template #collectionName>
          {{ collection.name }}
        </template>

        <!-- Option Collection section -->
        <div
          class="max-w-[170px] p-3 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 w-full absolute z-40 left-[250px] top-[57px]"
          v-show="handleShowOption"
        >
          <div
            id="deleteCollection"
            class="flex gap-3 hover:bg-gray-100 transition duration-[270ms] ease-in-out p-1 rounded-lg"
            @click="handleDeleteCollection(props.index)"
          >
            <iconDelete>
              <template #content> Delete </template>
            </iconDelete>
          </div>
          <hr class="my-2 border-gray-200 dark:border-gray-700" />
          <div
            id="editCollection"
            class="flex gap-3 hover:bg-gray-100 transition duration-[270ms] ease-in-out p-1 rounded-lg"
            @click="showRenameCollection(props.index)"
          >
            <iconEdit>
              <template #content> Rename </template>
            </iconEdit>
          </div>
        </div>
      </Collection>
    </div>
  </div>
</template>

<style scoped></style>
