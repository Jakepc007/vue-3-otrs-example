<script setup lang="ts">
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col w-80 mx-auto max-w-4/5 justify-center gap-4">
      <RouterLink to="/app"
        class="bg-white dark:bg-black shadow-xl rounded-md transition flex gap-4 p-4 text-left flex-col border-3 border-transparent hover:border-red-800 active:border-red-700">
        <div class="flex gap-3 items-center">
          <div class="rounded-md bg-red-800 flex justify-center items-center w-12 h-8">
            <div class="i-carbon-dashboard text-white" />
          </div>
          <div>{{ t('index.dashboard') }}</div>
        </div>
        <div>
          <div class="text-sm dark:text-neutral-400 text-neutral-500">{{ t('index.explore-dashboard') }}</div>
        </div>
      </RouterLink>

      <RouterLink to="/documentation"
        class="bg-white dark:bg-black shadow-xl rounded-md transition flex gap-4 p-4 text-left flex-col border-3 border-transparent hover:border-blue-800 active:border-blue-700">
        <div class="flex gap-3 items-center">
          <div class="rounded-md bg-blue-800 flex justify-center items-center w-12 h-8">
            <div class="i-carbon-book text-white" />
          </div>
          <div>{{ t('index.documentation') }}</div>
        </div>
        <div>
          <div class="text-sm dark:text-neutral-400 text-neutral-500">{{ t('index.explore-docs') }}</div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
