<template>
    <div class="flex w-full gap-6" :class="compact ? 'flex-col' : ''">
        <TicketTable />
        <CustomerTable />
    </div>
</template>

<script setup lang="ts">
import { exampleKey } from '~/keys';

const { compact } = useCompact()

let value = ref('hello')

const updateValue = (newValue: string) => {
    value.value = newValue
}

provide(exampleKey, {
  value,
  setValue: updateValue
})
</script>

<route lang="yaml">
meta:
  layout: app
</route>