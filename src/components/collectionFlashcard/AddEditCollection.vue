<script setup>
import { defineProps, ref, defineEmits, watch } from "vue";
import closeIcon from "../icons/iconClose.vue";

const props = defineProps({
  popup: {
    type: Object,
    required: true,
  },
  // ถ้าเป็นการเพิ่ม collection ใหม่ SelectedCollection default จะเป็น object ว่าง
  // ถ้าเป็นการเเก้ไข collection จะเป็น object ที่มีข้อมูลของ collection ที่เลือกมา
  SelectedCollection: {
    type: Object,
    default: { id: undefined, name: undefined, cards: [] },
  },
  // เป็น index ของ collection ที่เลือกมา
  // ถ้าเป็นการเพิ่ม collection ใหม่ SelectedIndex จะเป็น undefined
  // ถ้าเป็นการเเก้ไข collection จะเป็น index ของ collection ที่เลือกมา
  SelectedIndex: {
    type: Number,
    default: undefined,
  },
});

const closeButton = () => {
  props.popup.addEditCollection = false;
};

const newCollectionName = ref("New Collection");
const emptyCollectionName = ref(false);

const passAndClear = (name) => {
  console.log(name);
  if (name.length === 0) {
    emptyCollectionName.value = true;
    return;
  } else {
    emit("addNewCollections", name);
    newCollectionName.value = "New Collection";
    emptyCollectionName.value = false;
    props.popup.addEditCollection = false;
  }
};

const emit = defineEmits([
  "addNewCollections",
  "toUpdateName",
  "changeCollectionName",
]);

const isEmpty = (name) => {
  return name === "";
};

const renameCollectionName = ref(props.SelectedCollection.name);

// เมื่อ SelectedCollection มีการเปลี่ยนแปลงให้เปลี่ยนค่าใน renameCollectionName ด้วย
watch(
  () => props.SelectedCollection,
  () => {
    renameCollectionName.value = props.SelectedCollection.name;
  }
);

const toUpdateName = (name) => {
  if (name.length === 0) {
    emptyCollectionName.value = true;
    return;
  } else {
    emit(
      "changeCollectionName",
      props.SelectedIndex,
      name,
      props.SelectedCollection.id
    );
    emptyCollectionName.value = false;
    props.popup.addEditCollection = false;
  }
};
</script>

<template>
  <section
    class="popup-newCollection z-50 fixed top-0 left-0"
    v-show="props.popup.addEditCollection"
  >
    <div
      class="bg-black bg-opacity-50 flex items-center justify-center min-h-screen w-screen"
    >
      <div
        class="bg-white rounded-lg xl:scale-100 xl:w-[570px] xl:h-[350px] relative p-6 lg:w-[570px] lg:h-[350px] md:scale-[80%] sm:scale-[70%] mobile:scale-[73%] mobile:w-[500px]"
      >
        <closeIcon
          class="absolute top-3 right-4 cursor-pointer"
          @click="closeButton"
        />
        <div class="flex flex-col items-center justify-center">
          <div class="text-center text-3xl font-mono font-semibold">
            {{ props.SelectedCollection.id === undefined ? "Add new" : "Edit" }}
            collection
          </div>
          <div class="my-7 flex flex-col items-center justify-center">
            <img
              class="w-[178px]"
              src="/img/flashcard-pic/collection.svg"
              alt=""
            />
            <div
              class="w-[160px] overflow-hidden absolute flex items-center justify-center"
            >
              <div
                class="text-2xl font-outfit font-medium whitespace-normal break-all overflow-ellipsis max-h-[122px]"
              >
                {{
                  props.SelectedCollection.id === undefined
                    ? newCollectionName
                    : renameCollectionName
                }}
              </div>
            </div>
          </div>

          <div class="flex gap-3">
            <div class="flex flex-col items-end gap-1">
              <input
                v-if="props.SelectedCollection.id === undefined"
                type="text"
                v-model.trim="newCollectionName"
                class="border-2 border-[#4096ff] rounded-md p-2 w-[400px] focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-[270ms]"
                :class="{
                  'border-red-600': emptyCollectionName,
                  'focus:border-red-600': emptyCollectionName,
                  'border-[#4096ff]': !emptyCollectionName,
                }"
                placeholder="Collection name"
                @keydown.enter="passAndClear(newCollectionName)"
                @input="emptyCollectionName = isEmpty(newCollectionName)"
                @focus="$event.target.select()"
              />

              <input
                v-else="props.SelectedCollection.id !== undefined"
                type="text"
                v-model.trim="renameCollectionName"
                class="border-2 border-[#4096ff] rounded-md p-2 w-[400px] focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-[270ms]"
                :class="{
                  'border-red-600': emptyCollectionName,
                  'focus:border-red-600': emptyCollectionName,
                  'border-[#4096ff]': !emptyCollectionName,
                }"
                :placeholder="props.SelectedCollection.name"
                @keydown.enter="toUpdateName(renameCollectionName)"
                @input="emptyCollectionName = isEmpty(renameCollectionName)"
                @focus="$event.target.select()"
              />

              <div v-if="emptyCollectionName" class="text-xs text-red-600 mr-1">
                Please fill value in form
              </div>
            </div>

            <div>
              <button
                v-if="props.SelectedCollection.id === undefined"
                class="bg-[#4096ff] text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-[270ms]"
                @click="passAndClear(newCollectionName)"
              >
                ADD
              </button>

              <button
                v-else="props.SelectedCollection.id !== undefined"
                class="bg-[#4096ff] text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:border-transparent transition-all duration-[270ms]"
                @click="toUpdateName(renameCollectionName)"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
