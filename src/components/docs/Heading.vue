<script setup lang="ts">
interface HeadingProps {
  value: string
  level: number
}

const { value, level = 1 } = defineProps<HeadingProps>()
</script>

<template>
  <h1 v-if="level === 1">
    {{ $t(value) }}
  </h1>
  <h2 v-else-if="level === 2">
    {{ $t(value) }}
  </h2>
  <h3 v-else-if="level === 3">
    {{ $t(value) }}
  </h3>
  <h4 v-else-if="level === 4">
    {{ $t(value) }}
  </h4>
</template>
