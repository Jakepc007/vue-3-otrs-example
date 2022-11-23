<script setup lang="ts">
interface Item {
  title: string
  path: string
  children: Item[]
  parent: Item | null
}
const { items } = defineProps<{
  items: Item[]
}>()
</script>

<template>
  <div>
    <div v-for="item in items" :key="item.title">
      <span v-if="item.parent">&nbsp;&nbsp;&nbsp;&nbsp;</span>

      - <a :href="`/documentation/${item.path}`">
        {{ $t(item.title) }}
      </a>
      <template v-if="item.children">
        <Contents :items="item.children.map((i: Item) => ({ ...i, parent: item }))" />
      </template>
    </div>
  </div>
</template>
