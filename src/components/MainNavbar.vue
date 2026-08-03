<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'


const { width } = useWindowSize()



</script>

<template>
  <Menubar
    style="
      border-color: #f3e5c4;
      border-width: 3px;
      /* border-top: none; */
      border-left: none;
      border-right: none;
    "
    class="w-[100%]"
  >
    <template #start> <Image src="/favicon.ico" class="w-[10rem]" /> </template>
    <template #end>
      <div v-if="width > 860">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/social">Social</RouterLink>
          <RouterLink to="/Guide">Guide</RouterLink>
        </nav>
      </div>

    </template>
  </Menubar>
</template>

<style scoped>
nav a.router-link-exact-active {
  border-top: 3px solid #f3e5c4;
  color: var(--p-primary-color);
  cursor: default;
}

@media (hover: hover) {
  a:hover {
    border-top: 3px solid black;
  }
  @media only screen and (max-width: 860px) {
    a:hover {
      border-top: none;
    }
    nav a.router-link-exact-active {
      border: none;
    }
  }
}

nav a {
  display: inline-block;
  margin: 0 0.3rem;

  padding: 0 1.3rem;
  font-size: medium;
  font-weight: 500;
}
</style>
