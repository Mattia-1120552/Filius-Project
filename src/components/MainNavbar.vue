<template>
  <Toolbar style="padding: 1rem 1rem 1rem 1.5rem; border: none" class="w-[100%]">
    <template #start> <Image src="/favicon.ico" /> </template>
    <template #end>
      <nav class="">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/social">Social</RouterLink>
        <RouterLink to="/Guide">Guide</RouterLink>
      </nav>
    </template>
  </Toolbar>
</template>

<style scoped>
nav a.router-link-exact-active {
  border-top: 3px solid rgb(115, 133, 75);
  color: rgb(115, 133, 75);
  cursor: default;
}

nav a {
  display: inline-block;
  margin: 0 0.3rem;

  padding: 0 1.3rem;
  font-size: medium;
  font-weight: 500;
}
</style>
