<script setup>
import { ref, reactive, computed } from "vue";
import close from "./components/icons/iconClose.vue";
import iconDelete from "./components/icons/iconDelete.vue";
import iconEdit from "./components/icons/iconEdit.vue";

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

// show option on the left of last folder

const SelectedIndex = ref(null);
const collections = ref([]);
const newCollectionName = ref("");
const localCollections = JSON.parse(localStorage.getItem("collections")) || [];

// Loop to populate collections with localCollections
localCollections.forEach((collection) => {
  collections.value.push(collection);
});

const addNewCollection = () => {
  popup.newCollection = false;

  if (newCollectionName.value === "") {
    return alert("Please enter a collection name");
  } else {
    collections.value.push({
      collectionName: newCollectionName.value,
    });
    localStorage.setItem("collections", JSON.stringify(collections.value));
    newCollectionName.value = "";
  }
};

const computedCollections = computed(() => {
  return collections.value;
});

// Add the deleteCollection method
const deleteCollection = (collectionId) => {
  const updatedCollections = collections.value.filter(
    (item, index) => index !== collectionId
  );

  localStorage.setItem("collections", JSON.stringify(updatedCollections));

  collections.value = updatedCollections;

  closeOption();
};

const renameCollectionName = ref("");

const showRenameCollection = () => {
  console.log(localCollections);
  popup.renameCollection = true;
  closeOption();
};

const editCollection = (collectionId) => {
  const editName = { collectionName: renameCollectionName.value };

  const indexCollection = collections.value.findIndex(
    (item, index) => index === collectionId
  );

  const updateCollectionName = {
    ...localCollections[indexCollection],
    ...editName,
  };

  if (renameCollectionName.value === "") {
    return alert("Please enter a new collection name");
  } else {
    // Remove 1 element at collectionId index, and insert {collectionName: updateCollectionName}
    collections.value.splice(collectionId, 1, updateCollectionName);
    localStorage.setItem("collections", JSON.stringify(collections.value));
    popup.renameCollection = false;
    renameCollectionName.value = "";
  }
};
</script>

<template>
  <!-- Flashcard Page -->
  <section class="flashcard-page" v-show="page.flashcard">
    <div
      class="flex items-center justify-center min-h-screen w-screen"
      :class="{ absolute: popup.newCollection }"
    >
      <div
        class="z-0 bg-[#fff7e6] rounded-lg border w-[500px] h-[550px] p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-center flex flex-col overflow-auto"
        @click.self="closeOption"
      >
        <div class="text-3xl font-mono font-bold text-[#4096ff]">
          Flash Card
        </div>
        <div class="text-start text-sm font-semibold mt-3 mb-2">
          <div>
            <h1
              class="cursor-pointer inline hover:bg-[#f4ead8] p-[4px] rounded-xl transition-all duration-[270ms]"
              @click="addNewCollectionName"
              @click.self="closeOption"
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
            class="grid grid-cols-3 gap-2 p-2 text-center"
            @click.self="closeOption"
          >
            <div v-for="(item, index) in computedCollections" :key="item">
              <!-- Rename Collection Popup  -->
              <section
                class="popup-renameCollection absolute top-0 left-0 w-screen h-screen z-50"
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
                          @keydown.enter="editCollection(index)"
                        />
                        <div>
                          <button
                            class="bg-[#4096ff] text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-[270ms]"
                            @click="editCollection(index)"
                          >
                            OK
                          </button>
                          <!-- Cancel Button -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <!-- Each Folder Collection -->
              <div class="relative flex flex-col items-center">
                <img class="w-[130px]" src="./assets/collection.svg" alt="" />

                <img
                  class="z-10 opacity-70 scale-[55%] hover:bg-gray-400 rounded-full w-10 h-10 p-2 cursor-pointer absolute top-2 right-[1.2px] transition-all duration-[270ms]"
                  src="./assets/option.svg"
                  alt="option"
                  @click="showOption(index)"
                />

                <div
                  class="absolute w-[145px] inset-0 flex items-center justify-center overflow-hidden p-2 cursor-pointer"
                >
                  <div
                    class="text-xl font-semibold whitespace-normal break-all overflow-ellipsis max-h-[27px]"
                  >
                    {{ item.collectionName }}
                  </div>
                </div>

                <!-- Option Collection section -->
                <div
                  class="max-w-[270px] p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full absolute left-[140px] z-40"
                  v-show="popup.optionCollection && SelectedIndex === index"
                  :class="{
                    'top-0': index === computedCollections.length ,
                  }"
                >
                  <div
                    id="deleteCollection"
                    class="flex gap-3 hover:bg-gray-100 transition duration-[270ms] ease-in-out p-1 rounded-lg"
                    @click="deleteCollection(index)"
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

      <!-- Add New Collection Popup -->
      <section
        class="popup-newCollection absolute"
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
                    @click="addNewCollection"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped></style>
