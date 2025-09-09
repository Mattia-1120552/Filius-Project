<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const { width } = useWindowSize()

const menu = ref()
const items = ref([
  {
    label: 'Navigation',
    items: [
      { label: 'Home', icon: 'pi pi-home', to: '/' },
      { label: 'About', icon: 'pi pi-upload', to: '/about' },
    ],
  },
])

const toggle = (event: string) => {
  menu.value.toggle(event)
}
</script>

<template>
  <Menubar style="padding: 1rem 1rem 1rem 1.5rem; border: none" class="w-[100%]">
    <template #start> <Image src="/favicon.ico" /> </template>
    <template #end>
      <div v-if="width > 860">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/social">Social</RouterLink>
          <RouterLink to="/Guide">Guide</RouterLink>
        </nav>
      </div>
      <div v-else>
        <Button
          type="button"
          icon="pi pi-bars"
          @click="toggle"
          aria-haspopup="true"
          aria-controls="overlay_menu"
        />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" style="border: none">
          <template #item="{ item, props }">
            <RouterLink v-if="item.to" :to="item.to" v-slot="{ href, navigate, isActive }">
              <a
                v-bind="props.action"
                :href="href"
                @click="navigate"
                :class="[{ 'text-green-600 font-bold': isActive }]"
              >
                <span :class="item.icon"></span>
                <span class="ml-2">{{ item.label }}</span>
              </a>
            </RouterLink>
          </template>
        </Menu>
      </div>
    </template>
  </Menubar>
</template>

<style scoped>
nav a.router-link-exact-active {
  border-top: 3px solid rgb(115, 133, 75);
  color: rgb(115, 133, 75);
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
