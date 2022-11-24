<script setup lang="ts">
const { t } = useI18n();
const { shuffleLocale } = useLocale();
const { compact, toggleCompact } = useCompact()
</script>

<template>
  <div text-xl>
    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleCompact()">
      <div :i="compact ? 'carbon-split-screen' : 'carbon-maximize'" />
    </button>

    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="shuffleLocale()">
      <div i-carbon-language />
    </a>

    <RouterLink class="icon-btn mx-2" to="/documentation/about" :title="t('button.about')">
      <div i-carbon-dicom-overlay />
    </RouterLink>
  </div>
</template>
