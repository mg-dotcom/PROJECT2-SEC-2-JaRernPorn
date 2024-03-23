<script setup>
import Options from "../components/game4/Options.vue";
import Setting from "../components/Setting.vue";
import Topbar from "../components/Topbar.vue";
import { ref } from "vue";

const settingPopup = ref(false);

const closeSetting = (flag) => {
  settingPopup.value = flag; //false
};
</script>

<template>
  <!-- Game 4 page -->
  <div class="w-full h-screen bg-main-bgColor">
    <div class="flex justify-center py-8">
      <p
        class="font-outfit text-title text-2xl font-semibold sm:text-3xl lg:text-4xl"
      >
        Select the matching pairs
      </p>
    </div>

    <Options />
    <!-- <ShuffleOptions /> -->

    <Teleport to="#setting">
      <div class="absolute left-0 right-0 top-0 m-auto" v-show="settingPopup">
        <Setting @close="closeSetting" />
      </div>
    </Teleport>
  </div>
</template>

<style scoped></style>
