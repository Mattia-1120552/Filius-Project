<script setup lang="ts">
import MainNavbar from './components/MainNavbar.vue'
</script>

<template>
  <div class="flex justify-center">
    <MainNavbar />
  </div>
  <div class="pt-10 homepage">
    <Router-view v-slot="{ Component }">
      <Transition name="slide-right" mode="out-in">
        <component :is="Component" />
      </Transition>
    </Router-view>
  </div>
</template>

<style scoped>
.homepage {
  display: flex;
  justify-content: center;
  /* border: 1px red solid; */
}
</style>
