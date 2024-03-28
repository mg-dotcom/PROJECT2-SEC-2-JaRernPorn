<script setup>
import { ref, computed, onMounted, reactive } from "vue";
import Header from "../components/Header.vue";
import addEditCollection from "../components/collectionFlashcard/AddEditCollection.vue";
import Collection from "../components/collectionFlashcard/Collection.vue";
import { CollectionModal } from "../libs/flashcard-libs/CollectionModal.js";
import {
  getCollectionItem,
  addCollectionItem,
  deleteCollectionItem,
  editCollectionItem,
} from "../libs/flashcard-libs/FetchCollection";

const page = reactive({
  flashcard: true,
});

const popup = reactive({
  Setting: false,
  newCollection: false,
  addEditCollection: false,
  optionEditDelete: false,
});

const closeOption = () => {
  popup.optionCollection = false;
  SelectedIndex.value = undefined;
};

const collections = ref(new CollectionModal());

onMounted(async () => {
  const col = await getCollectionItem(import.meta.env.VITE_BASE_URL);
  collections.value.addAllCollection(col);
});

const handleEditCollection = async (index, newName, id) => {
  const editedCollection = await editCollectionItem(
    import.meta.env.VITE_BASE_URL,
    id,
    {
      name: newName.trim(),
    }
  );

  collections.value.editCollection(editedCollection.name, index);

  popup.renameCollection = false;
  closeOption();
};

const handleDeleteCollection = async (index, id) => {
  const statusCode = await deleteCollectionItem(
    import.meta.env.VITE_BASE_URL,
    id
  );
  if (statusCode === 200) {
    collections.value.removeCollection(index);
  }
  closeOption();
};

const handleAddNewCollection = async (name) => {
  const newColName = name.trim();
  //BACKEND add
  const newCollectionName = await addCollectionItem(
    import.meta.env.VITE_BASE_URL,
    {
      name: newColName,
      cards: [],
    }
  );

  collections.value.addCollection(
    newCollectionName.id,
    newCollectionName.name,
    newCollectionName.cards
  );
  popup.newCollection = false;
};

const SelectedIndex = ref(undefined);

const toggleOptionCollection = (index) => {
  popup.optionEditDelete = !popup.optionEditDelete;
  SelectedIndex.value = index;
};

const addNewCollectionName = () => {
  popup.addEditCollection = true;
  closeOption();
};
</script>

<template>
  <!-- Flashcard Page -->
  <section class="flashcard-page overflow-hidden" v-show="page.flashcard">
    <div
      class="min-h-screen w-screen bg-main-bgColor"
      @click.self="closeOption"
    >
      <Header :closeOption="closeOption">
        <template #title> Flashcard </template>
      </Header>

      <div class="w-8/12 mx-auto flex flex-col">
        <div class="text-start font-outfit text-base font-semibold pb-2">
          <div @click.self="closeOption">
            <h1
              class="cursor-pointer inline hover:bg-[#f4ead8] p-[4px] rounded-xl transition-all duration-[270ms]"
              @click="addNewCollectionName"
            >
              Add new +
            </h1>
          </div>
        </div>
        <hr class="border-gray-300" />

        <addEditCollection
          :popup="popup"
          @addNewCollections="handleAddNewCollection"
          :SelectedCollection="collections.getCollections()[SelectedIndex]"
          :SelectedIndex="SelectedIndex"
          @changeCollectionName="handleEditCollection"
        />

        <!-- All Collections -->
        <div
          v-if="collections.getCollections().length === 0"
          class="flex-grow flex justify-center items-center text-center h-[70vh]"
        >
          <div class="text-gray-300 text-sm">No collection added yet</div>
        </div>

        <div
          v-else-if="collections.getCollections().length > 0"
          class="grid grid-cols-1 gap-10 px-10 py-7 text-center lg:grid-cols-3 md:grid-cols-3 md:gap-17 sm:grid-cols-2 sm:gap-10"
          @click.self="closeOption"
        >
          <Collection
            v-for="(collection, index) in collections.getCollections()"
            :collectionId="collection.id"
            :key="index"
            :index="index"
            :popup="popup"
            :allCollections="collections.getCollections()"
            :closeOption="closeOption"
            :SelectedIndex="SelectedIndex"
            @changeCollectionName="handleEditCollection"
            @deleteCollection="handleDeleteCollection"
            @toggle-option-collection="toggleOptionCollection"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
