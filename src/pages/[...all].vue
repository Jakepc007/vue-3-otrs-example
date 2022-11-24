<script setup lang="ts">
const { t } = useI18n()
const route = useRoute();
const router = useRouter();
console.log("ok");

let lastRoute = router.options.history.state.back
</script>


<template>
  <div>
    {{ t('not-found') }}
    <div class="mt-2">
      <router-link class="text-blue-600" :to="lastRoute">{{ t('go-back') }}</router-link>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
