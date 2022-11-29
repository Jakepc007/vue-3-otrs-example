<template>
  <main class="px-4 text-center text-gray-700 dark:text-gray-200 h-screen bg-sky-100 dark:bg-sky-900">
    <Topbar class="mb-4 pt-4" />
    <div class="relative flex items-center container mx-auto mb-8">
      <search-bar class="relative" />
      <nav-aside />
    </div>
    <router-view v-slot="{ Component, route }">
      <transition mode="out-in" name="drop">
        <component class="container mx-auto" :is="Component" :key="route" />
      </transition>
    </router-view>
  </main>
</template>

<style>
.drop-enter-active,
.drop-leave-active {
  transition: all 0.2s ease;
}

.drop-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.drop-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>

