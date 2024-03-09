<script setup></script>

<template>
  <div>
    <div class="setting bg-white w-1/4 border border-black">
      <div class="closebtn">
        <img src="/public/close.svg" alt="close setting btn" class="" />
      </div>
      <div
        class="header text-center text-2xl font-alkatra text-title font-semibold"
      >
        <h1>Setting</h1>
      </div>
      <div class="musicToggle flex justify-between bg-red-200">
        <div class="font-alkatra text-xl">Music</div>
        <div class="form-control w-52">
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <input type="checkbox" class="toggle toggle-primary" checked />
          </label>
        </div>
      </div>
      <div class="btn">
        <div class="restart"></div>
        <div class="play"></div>
        <div class="home"></div>
      </div>
      <button class="btn btn-primary">Button</button>
    </div>
  </div>
</template>

<style scoped></style>
