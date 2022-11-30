<template>
    <div class="flex-1 rounded-md dark:bg-sky-800 bg-white overflow-hidden overflow-y-scroll shadow-2xl">
        <div class="flex items-center gap-3 px-4 py-2 border-b-2 dark:border-sky-900">
            <div i="carbon-person" />{{ $t('customers') }}
        </div>
        <table class="w-full text-left" v-auto-animate>
            <thead>
                <tr>
                    <th class="px-4 py-2">ID</th>
                    <th class="px-4 py-2">{{ $t('app.customer.heading.name') }}</th>
                    <th class="px-4 py-2">{{ $t('app.customer.heading.assigned_tickets') }}</th>
                    <!-- <th class="px-4 py-2"><div i="carbon-link"></div></th> -->
                </tr>
            </thead>
            <tbody class="dark:text-sky-200">
                <tr v-for="(customer, i) in customers" :key="i"
                    class="relative hover:brightness-90 transition active:brightness-80 active:shadow-inner"
                    :class="i % 2 === 0 ? 'bg-sky-100 dark:bg-sky-700' : 'bg-white dark:bg-sky-800'">

                    <td class="px-4 py-2">{{ customer.id }}</td>
                    <td class="px-4 py-2">{{ customer.name }}</td>
                    <td class="px-4 py-2">{{ customer.assignedTickets?.length }}</td>
                    
                    <td class="px-4 py-ˇ2 text-xs"><router-link :to="'/app/customer/' + customer.id"><div i="carbon-link" /></router-link></td>
                    <!-- <router-link :to="'/app/ticket/' + customer.id" class="absolute top-0 left-0 right-0 bottom-0 ">
                    </router-link> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { exampleKey } from '~/keys';

const { customers } = useCustomerStore()
const injectedValue = inject(exampleKey);

if (injectedValue) {
    watch(injectedValue.value, (value) => {
        console.log("value changed: ", value)
    })
} else {
    console.log("no example provided")
}
</script>
