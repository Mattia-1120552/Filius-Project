<script setup lang="ts"></script>

<template>
  <Menubar
    style="
      background: none;
      border: none;
    "
    class="w-[100%]"
  >
    <template #start> <Image src="/logo.png" class="w-[10rem]" /> </template>
    <template #end>
      <div >
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
  color: var(--p-accent-color);
  cursor: default;
}

@media (hover: hover) {
  a:hover {
    color: var(--p-accent-color);
  }
}

nav a {
  display: inline-block;
  margin: 0 0.3rem;

  padding: 0 1.3rem;
  font-size: medium;
  font-weight: 500;


  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
</style>
