<script setup lang='ts'>
const { locale: selectedLocale, shuffleLocale } = useLocale()
</script>

<template>
  <div
    class="flex gap-2 items-center pa-2 border-2 rounded-md transition hover:bg-gray-200 cursor-pointer active:!bg-gray-300"
    @click="shuffleLocale">
    <div class="i-carbon-language"></div>
    <div>{{ selectedLocale }}</div>
  </div>
</template>
