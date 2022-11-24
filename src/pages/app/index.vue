<template>
    <div class="flex w-full gap-6" :class="compact ? 'flex-col' : ''">
        <TicketTable />
        <CustomerTable />
    </div>
</template>

<script setup lang="ts">
const { compact } = useCompact()
</script>

<route lang="yaml">
meta:
  layout: app
</route>