<script setup>
import { defineProps } from "vue";
import { ref } from "vue";
import close from "../flashpage-page/icons/iconClose.vue";
import iconDelete from "../flashpage-page/icons/iconDelete.vue";
import iconEdit from "../flashpage-page/icons/iconEdit.vue";

const props = defineProps({});
</script>

<template>
  <!-- Show All Collection section -->
  <div class="all-collection">
    <div
      v-if="computedCollections.length > 0"
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
            <div class="bg-white rounded-lg w-[580px] h-[350px] relative p-6">
              <close
                class="absolute top-3 right-4 cursor-pointer"
                @click="closeButton"
              />
              <div class="flex flex-col items-center justify-center">
                <div class="text-center text-3xl font-mono font-bold">
                  Rename collection
                </div>
                <div class="my-7 flex flex-col items-center justify-center">
                  <img
                    class="w-[178px]"
                    src="/img/flashcard-pic/collection.svg"
                    alt="collection-pic"
                  />
                  <div
                    class="w-[178px] overflow-hidden absolute flex items-center justify-center"
                  >
                    <div
                      class="text-2xl font-semibold font-outfit whitespace-normal break-all overflow-ellipsis max-h-[127px]"
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
          <div
            class="hover:shadow-lg rounded-3xl transition-all duration-[270ms]"
          >
            <img
              class="cursor-pointer"
              src="/img/flashcard-pic/collection.svg"
              alt="collection"
            />
            <img
              class="z-40 opacity-70 scale-[75%] hover:bg-gray-400 rounded-full w-10 h-10 p-2 cursor-pointer absolute top-[19px] right-[5px] transition-all duration-[270ms]"
              src="/img/flashcard-pic/option.svg"
              alt="option"
              @click="showOption(index)"
            />
            <div
              class="absolute inset-[16px] flex items-center justify-center overflow-hidden cursor-pointer"
            >
              <div
                class="w-[75%] text-3xl font-semibold whitespace-normal break-all overflow-ellipsis z-10"
              >
                {{ item.collectionName }}
              </div>
            </div>
          </div>

          <!-- Option Collection section -->
          <div
            class="max-w-[170px] p-3 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 w-full absolute z-40 left-[250px] top-[57px]"
            v-show="popup.optionCollection && SelectedIndex === index"
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
</template>

<style scoped></style>
