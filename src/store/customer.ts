import { defineStore } from 'pinia';
import { Customer } from './../types';

export const useCustomerStore = defineStore('customer', () => {
    const customers = ref<Customer[]>([
        {
            id: 1,
            name: 'Jon Doe',
            assignedTickets: [1, 2],
        },
        {
            id: 2,
            name: 'Jane Doe',
            assignedTickets: [2, 3],
        },
        {
            id: 3,
            name: 'Steve Smith',
            assignedTickets: [4],
        },
        {
            id: 4,
            name: 'Micheal Edwards',
            assignedTickets: [5, 6, 7],
        }
    ])

    const getCustomerById = (id: number) => {
        return customers.value.find(customer => customer.id === id);
    }

    const getCustomersByTicketId = (ticketId: number) => {
        return customers.value.filter(customer => customer.assignedTickets?.includes(ticketId));
    }

    return {
        customers,
        getCustomerById,
        getCustomersByTicketId
    }
})

