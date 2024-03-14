<script setup>
import { ref, reactive, computed } from "vue";
import close from "./components/icons/iconClose.vue";
import iconDelete from "./components/icons/iconDelete.vue";
import iconEdit from "./components/icons/iconEdit.vue";
import settingButton from "./components/icons/setting-button.vue";
import { addNewCollection } from "./libs/CollectionModal";
import { deleteCollection } from "./libs/CollectionModal";
import { editCollection } from "./libs/CollectionModal";

const page = reactive({
  flashcard: true,
});

const popup = reactive({
  newCollection: false,
  optionCollection: false,
  editCollection: false,
  renameCollection: false,
});

const addNewCollectionName = () => {
  popup.newCollection = true;
};

const closeButton = () => {
  popup.newCollection = false;
  popup.renameCollection = false;
  newCollectionName.value = "";
};

const showOption = (item) => {
  popup.optionCollection = !popup.optionCollection;
  SelectedIndex.value = item;
  console.log(item);
};

const closeOption = () => {
  popup.optionCollection = false;
  renameCollectionName.value = "";
};

const showOptionInLeft = (index) => {
  return (index + 1) % 3 === 0;
};

const SelectedIndex = ref(null);
const collections = ref([]);
const newCollectionName = ref("");
const localCollections = JSON.parse(localStorage.getItem("collections")) || [];

// Loop to populate collections with localCollections
localCollections.forEach((collection) => {
  collections.value.push(collection);
});

const computedCollections = computed(() => {
  return collections.value;
});
const renameCollectionName = ref("");

const showRenameCollection = () => {
  popup.renameCollection = true;
  closeOption();
};

// CRUD
const handleAddNewCollection = () => {
  addNewCollection(newCollectionName.value, collections.value);
  newCollectionName.value = "";
  popup.newCollection = false;
};

const handleDeleteCollection = (index) => {
  collections.value = deleteCollection(index, collections.value);
  closeOption();
};

const handleEditCollection = (index) => {
  const newName = renameCollectionName.value.trim(); // Trimmed to remove whitespace
  collections.value = editCollection(index, newName, collections.value);
  popup.renameCollection = false;
  closeOption();
};
</script>

<template>
  <!-- Flashcard Page -->
  <section class="flashcard-page overflow-hidden" v-show="page.flashcard">
    <section class="flashcard-home">
      <div
        class="min-h-screen w-screen bg-main-bgColor"
        @click.self="closeOption"
      >
        <!-- Header Flashcard -->
        <div
          class="flex justify-between items-center p-2 md:p-4 lg:px-10 lg:py-7"
          @click.self="closeOption"
        >
          <div class="hover:scale-110 transition-transform duration-300">
            <img
              src="/img/flashcard/back-button.svg"
              alt="back button"
              class="w-16 cursor-pointer lg:w-20"
            />
          </div>
          <div>
            <h1
              class="text-4xl font-alkatra text-title font-semibold md:text-5xl lg:text-6xl"
            >
              FLASHCARD
            </h1>
          </div>
          <div>
            <settingButton />
          </div>
        </div>

        <!-- Body Flashcard -->
        <div class="w-8/12 mx-auto">
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
          <div
            v-if="localCollections === null"
            class="text-gray-300 text-sm flex-grow flex justify-center items-center"
          >
            No collection added yet
          </div>

          <!-- Show All Collection section -->
          <div class="all-collection">
            <div
              v-if="localCollections !== null"
              class="grid grid-cols-3 gap-9 px-10 py-7 text-center"
              @click.self="closeOption"
            >
              <div v-for="(item, index) in computedCollections" :key="item">
                <!-- Rename Collection Popup  -->
                <section
                  class="popup-renameCollection z-50 fixed top-0 left-0"
                  v-show="popup.renameCollection && SelectedIndex === index"
                >
                  <div
                    class="bg-black bg-opacity-50 flex items-center justify-center min-h-screen w-screen relative z-0"
                    @click.self="closeButton"
                  >
                    <div
                      class="bg-white rounded-lg w-[580px] h-[350px] relative p-6"
                    >
                      <close
                        class="absolute top-3 right-4 cursor-pointer"
                        @click="closeButton"
                      />
                      <div class="flex flex-col items-center justify-center">
                        <div class="text-center text-3xl font-mono font-bold">
                          Rename collection
                        </div>
                        <div
                          class="my-7 flex flex-col items-center justify-center"
                        >
                          <img
                            class="w-[178px]"
                            src="./assets/collection.svg"
                            alt=""
                          />
                          <div
                            class="w-[178px] overflow-hidden absolute flex items-center justify-center"
                          >
                            <div
                              class="text-2xl font-semibold whitespace-normal break-all overflow-ellipsis max-h-[127px]"
                            >
                              {{
                                renameCollectionName !== ""
                                  ? renameCollectionName
                                  : item.collectionName
                              }}
                            </div>
                          </div>
                        </div>
                        <div class="flex gap-3">
                          <input
                            type="text"
                            v-model="renameCollectionName"
                            class="border-2 border-[#4096ff] rounded-md p-2 w-[400px] focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-[270ms]"
                            :placeholder="item.collectionName"
                            @keydown.enter="handleEditCollection(index)"
                          />
                          <div>
                            <button
                              class="bg-[#4096ff] text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-[270ms]"
                              @click="handleEditCollection(index)"
                            >
                              OK
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Each Folder Collection -->
                <div class="relative flex flex-col items-center font-outfit">
                  <img
                    class="cursor-pointer"
                    src="./assets/collection.svg"
                    alt="collection"
                  />
                  <img
                    class="z-10 opacity-70 scale-[75%] hover:bg-gray-400 rounded-full w-10 h-10 p-2 cursor-pointer absolute top-[19px] right-[4px] transition-all duration-[270ms]"
                    src="./assets/option.svg"
                    alt="option"
                    @click="showOption(index)"
                  />

                  <div
                    class="absolute inset-0 flex items-center justify-center overflow-hidden cursor-pointer hover:shadow-lg rounded-3xl transition-all duration-[170ms] hover:inset-2"
                  >
                    <div
                      class="text-3xl font-semibold whitespace-normal break-all overflow-ellipsis z-10"
                    >
                      {{ item.collectionName }}
                    </div>
                  </div>

                  <!-- Option Collection section -->
                  <div
                    class="max-w-[170px] p-3 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 w-full absolute z-40"
                    v-show="popup.optionCollection && SelectedIndex === index"
                    :class="[
                      showOptionInLeft(index) ? 'right-[40px]' : 'left-[264px]',
                    ]"
                  >
                    <div
                      id="deleteCollection"
                      class="flex gap-3 hover:bg-gray-100 transition duration-[270ms] ease-in-out p-1 rounded-lg"
                      @click="handleDeleteCollection(index)"
                    >
                      <iconDelete>
                        <template #content> Delete </template>
                      </iconDelete>
                    </div>
                    <hr class="my-2 border-gray-200 dark:border-gray-700" />
                    <div
                      id="editCollection"
                      class="flex gap-3 hover:bg-gray-100 transition duration-[270ms] ease-in-out p-1 rounded-lg"
                      @click="showRenameCollection(index)"
                    >
                      <iconEdit>
                        <template #content> Rename </template>
                      </iconEdit>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Add New Collection Popup -->

      <section
        class="popup-newCollection z-50 fixed top-0 left-0"
        v-show="popup.newCollection"
      >
        <div
          class="bg-black bg-opacity-50 flex items-center justify-center min-h-screen w-screen"
          @click.self="closeButton"
        >
          <div class="bg-white rounded-lg w-[580px] h-[350px] relative p-6">
            <close
              class="absolute top-3 right-4 cursor-pointer"
              @click="closeButton"
            />
            <div class="flex flex-col items-center justify-center">
              <div class="text-center text-3xl font-mono font-bold">
                Add new collection
              </div>
              <div class="my-7 flex flex-col items-center justify-center">
                <img class="w-[178px]" src="./assets/collection.svg" alt="" />
                <div
                  class="w-[178px] overflow-hidden absolute flex items-center justify-center"
                >
                  <div
                    class="text-2xl font-semibold whitespace-normal break-all overflow-ellipsis max-h-[127px]"
                  >
                    {{ newCollectionName }}
                  </div>
                </div>
              </div>
              <div class="flex gap-3">
                <input
                  type="text"
                  v-model="newCollectionName"
                  class="border-2 border-[#4096ff] rounded-md p-2 w-[400px] focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-[270ms]"
                  placeholder="Collection name"
                  @keydown.enter="addNewCollection"
                />
                <div>
                  <button
                    class="bg-[#4096ff] text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-[270ms]"
                    @click="handleAddNewCollection"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<style scoped></style>
./libs/CollectionModal./libs/CollectionModal./libs/CollectionModal
