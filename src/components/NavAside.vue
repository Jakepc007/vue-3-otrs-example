<template>
  <div class="absolute left-0 flex gap-4">
    <NavItem v-for="option in options" :option="option"  />
  </div>
</template>

<script lang="ts" setup>
import { Route } from '~/types';
import NavItem from './NavItem.vue';

const options: Route[] = [
  {
    path: "/",
    name: "Home",
    icon: "carbon-home",
  },
  {
    path: "/app",
    name: "Dashboard",
    icon: "carbon-dashboard",
  }
]
</script>