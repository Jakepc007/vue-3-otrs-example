<template>
    <div class="text-left">
        <div v-if="ticket">
            <div class="flex justify-between">
                <div>
                    <div class="text-sm">Ticket</div>
                    <div class="text-2xl">{{ ticket.title }}</div>
                </div>
                <div>
                    <div class="text-sm">Customers</div>
                    <router-link :to="'/app/customer/' + customer.id" v-for="customer in customers">
                        <div class="flex gap-2 items-center transition group hover:brightness-90 active:brightness-80 text-lg">
                            <div i="carbon-arrow-right" class="text-xs group-hover:translate-x-1 transform transition" />
                            {{ customer.name }}
                        </div>
                    </router-link>
                </div>
            </div>


            <div class="text-sm mt-8 mb-2">Articles</div>
            <div class="flex flex-col gap-2">
                <div v-for="article in ticket.articles" class="flex-col bg-white dark:bg-sky-800 rounded-md shadow-md">
                    <div class="px-4 py-2 border-b-2 text-xl">{{ article.title }}</div>
                    <div class="px-4 py-2 text-sm">{{ article.body }}</div>
                </div>
            </div>

        </div>
        <div v-else>
            Ticket not found
        </div>
    </div>
</template>

<script setup lang="ts">
const { getTicketById } = useTicketStore();
const { getCustomersByTicketId } = useCustomerStore()

const { params } = useRoute()

const id: number | undefined = params.id
    ? parseInt(params.id.toString())
    : undefined

const ticket = computed(() => id
    ? getTicketById(id)
    : undefined)

const customers = computed(() => ticket.value
    ? getCustomersByTicketId(ticket.value.id)
    : [])
</script>

<route lang="yaml">
meta:
  layout: app
</route>