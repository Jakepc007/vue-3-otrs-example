<template>
    <div class="relative w-50 ml-auto items-center flex">
        <div class="absolute left-2 i-carbon-search"></div>
        <input ref="searchBar" class="rounded-md overflow-hidden pr-2 py-2 dark:bg-sky-700 pl-8" v-model="input" />
        <transition name="slide">
            <div @click="search" v-auto-animate v-if="results.length"
                class="z-1 absolute top-12 px-2 py-2 border-0 border-white rounded-md text-white w-50 text-left overflow-hidden transition-all gap-1 flex flex-col"
                :class="input ? 'shadow-2xl bg-white' : 'bg-transparent'">
                <div v-for="(result, index) in results" :key="index" class="cursor-pointer transition-all text-black pl-3 hover:bg-sky-100 rounded-md py-1" @click="goToLink(result)">
                    {{ formatResult(result) }}
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { MaybeComputedRef, onKeyPressed } from '@vueuse/core';
import { Customer, Ticket } from '~/types';

const searchBar: MaybeComputedRef<EventTarget> = ref(null);
console.log(searchBar)
const { input } = useSearch(searchBar, { autofocus: true })
const { push } = useRouter()


onKeyPressed('Enter', () => {
    // search()
}, {
    target: searchBar
})

// const search = () => {
//     if (input.value)
//         push(`/app/search?input=${encodeURIComponent(input.value)}`)
// }

const { tickets } = useTicketStore();
const { customers } = useCustomerStore();

const results = computed(() => {
    if (!input.value) return []
    const ticketsResults = tickets.filter(ticket => ticket.title.toLowerCase().includes(input.value.toLowerCase()))
    const customersResults = customers.filter(customer => customer.name.toLowerCase().includes(input.value.toLowerCase()))
    return [...ticketsResults, ...customersResults].slice(0, 5)
})

const formatResult = (result: Ticket | Customer) => {
    if (isTicket(result)) {
        return `Ticket ${result.id}: ${result.title}`
    } else {
        return `Customer ${result.id}: ${result.name}`
    }
}

const isTicket = (result: Ticket | Customer): result is Ticket => {
    return (result as Ticket).articles !== undefined
}

const goToLink = (result: Ticket | Customer) => {
    if (isTicket(result)) {
        push(`/app/ticket/${result.id}`)
    } else {
        push(`/app/customer/${result.id}`)
    }
    input.value = ''
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from {
    transform: translateY(-5px);
    opacity: 0;
}

.slide-leave-to {
    transform: translateY(-5px);
    opacity: 0;
}
</style>