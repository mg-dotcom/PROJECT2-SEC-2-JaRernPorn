<script setup></script>

<template>
  <div class="bg-white w-full h-screen">
    <div
      class="flex justify-center items-center content-center absolute right-0 left-0 top-0 bottom-0"
    >
      <div class="flex flex-col gap-3">
        <div class="flex justify-center">
          <h1 class="text-title font-alkatra font-semibold text-7xl">404</h1>
        </div>
        <div class="flex justify-center">
          <h2 class="text-title font-alkatra font-semibold text-5xl">
            Page Not Found x_x
          </h2>
        </div>
        <div class="text-title font-outfit font-medium justify-center">
          We're sorry, the page you requested could not be found.
        </div>
        <div class="flex justify-center pt-6">
          <router-link :to="{ name: 'HomePage' }">
            <button
              class="bg-title text-white font-outfit font-medium rounded-lg shadow-md p-2 hover:bg-button-bgColor"
            >
              Go to homepage
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
