<script setup>
import { reactive } from "vue";

const page = reactive({
  homePage: true,
});

const playButton = () => {
  // Add your logic here
};

const howToPlayButton = () => {
  // Add your logic here
};
</script>

<template>
  <div
    class="relative min-h-screen w-screen bg-center bg-no-repeat bg-cover bg-fixed bg-opacity-50"
    style="background: url('./assets/homePage/test.png')"
  >
    <!-- Your content here -->
  </div>
</template>

<style scoped></style>
