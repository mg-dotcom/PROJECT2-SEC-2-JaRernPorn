<script setup>
import { defineProps, ref, defineEmits } from "vue";
import closeIcon from "../../icons/iconClose.vue";

const props = defineProps({
  closeOption: {
    type: Function,
    required: true,
  },
  popup: {
    type: Object,
    required: true,
  },
});

const closeButton = () => {
  props.popup.newCollection = false;
  newCollectionName.value = "";
};

const addNewCollectionName = () => {
  props.popup.newCollection = true;
  props.closeOption();
};

const emit = defineEmits(["addNewCollections"]);

const newCollectionName = ref("");
const emptyCollectionName = ref(false)

const passAndClear = (name) => {
  console.log(name, name.length);
  if (name.length === 0) {
    emptyCollectionName.value = true
    return
  } else {
    emit("addNewCollections", name);
    newCollectionName.value = "";
    props.popup.newCollection = false;
  }
};

const isEmpty = (name) => {
  return name === "";
};
</script>

<template>
  <!-- Add New Collection -->
  <div class="text-start font-outfit text-base font-semibold pb-2">
    <div @click.self="props.closeOption">
      <h1 class="cursor-pointer inline hover:bg-[#f4ead8] p-[4px] rounded-xl transition-all duration-[270ms]"
        @click="addNewCollectionName">
        Add new +
      </h1>
    </div>
  </div>
  <hr class="border-gray-300" />

  <!-- Popup -->
  <section class="popup-newCollection z-50 fixed top-0 left-0" v-show="props.popup.newCollection">
    <div class="bg-black bg-opacity-50 flex items-center justify-center min-h-screen w-screen">
      <div
        class="bg-white rounded-lg xl:scale-100 xl:w-[570px] xl:h-[350px] relative p-6 lg:w-[570px] lg:h-[350px] md:scale-[80%] sm:scale-[70%] mobile:scale-[73%] mobile:w-[500px]">
        <closeIcon class="absolute top-3 right-4 cursor-pointer" @click="closeButton" />
        <div class="flex flex-col items-center justify-center">
          <div class="text-center text-3xl font-mono font-semibold">
            Add new collection
          </div>
          <div class="my-7 flex flex-col items-center justify-center">
            <img class="w-[178px]" src="/img/flashcard-pic/collection.svg" alt="" />
            <div class="w-[160px] overflow-hidden absolute flex items-center justify-center">
              <div class="text-2xl font-outfit font-medium whitespace-normal break-all overflow-ellipsis max-h-[122px]">
                {{ newCollectionName }}
              </div>
            </div>
          </div>

          <div class="flex gap-3">
            <div class="flex flex-col items-end gap-1">
              <input type="text" v-model.trim="newCollectionName"
              class="border-2 border-[#4096ff] rounded-md p-2 w-[400px] focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-[270ms]"
              :class="{
                  'border-red-600': emptyCollectionName,
                  'focus:border-red-600': emptyCollectionName,
                  'border-[#4096ff]': !emptyCollectionName,
                }"
              placeholder="Collection name"
              @keydown.enter="passAndClear(newCollectionName)"
              @input="emptyCollectionName = isEmpty(newCollectionName)" />

            <div v-if="emptyCollectionName" class="text-xs text-red-600 mr-1">
              Please fill value in form
            </div>
            </div>


            <div>
              <button
                class="bg-[#4096ff] text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-[270ms]"
                @click="passAndClear(newCollectionName)">
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
