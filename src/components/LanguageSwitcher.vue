<script setup lang='ts'>
const { locale: selectedLocale, availableLocales } = useI18n()
</script>

<template>
  <select v-model="selectedLocale">
    <option v-for="locale in availableLocales" :key="locale" :value="locale">
      {{ locale }}
    </option>
  </select>
</template>
