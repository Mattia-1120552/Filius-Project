<script setup lang="ts">
import MainNavbar from './components/MainNavbar.vue'
</script>

<template>
  <div class="flex justify-center">
    <MainNavbar />
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>
