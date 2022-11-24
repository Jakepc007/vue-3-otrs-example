import { defineStore } from 'pinia';
import { Ticket } from './../types';

export const useTicketStore = defineStore('ticket', () => {
    const tickets = ref<Ticket[]>([
        {
            id: 1,
            title: 'Ticket 1',
            articles: [
                {
                    id: 1,
                    title: 'Article 1',
                    body: 'Article 1 body',
                    ticket_id: 1,
                },
                {
                    id: 2,
                    title: 'Article 2',
                    body: 'Article 2 body',
                    ticket_id: 1,
                },
            ],
        },
        {
            id: 2,
            title: 'Ticket 2',
            articles: [
                {
                    id: 3,
                    title: 'Article 3',
                    body: 'Article 3 body',
                    ticket_id: 2,
                },
            ]
        },
        {
            id: 3,
            title: 'Ticket 3',
            articles: [
                {
                    id: 4,
                    title: 'Article 4',
                    body: 'Article 4 body',
                    ticket_id: 3,
                },
                {
                    id: 5,
                    title: 'Article 5',
                    body: 'Article 5 body',
                    ticket_id: 3,
                },
                {
                    id: 6,
                    title: 'Article 6',
                    body: 'Article 6 body',
                    ticket_id: 3,
                },
            ]
        },
        {
            id: 4,
            title: 'Ticket 4',
            articles: [
                {
                    id: 7,
                    title: 'Article 7',
                    body: 'Article 7 body',
                    ticket_id: 4,
                },
            ]
        },
        {
            id: 5,
            title: 'Ticket 5',
            articles: [
                {
                    id: 8,
                    title: 'Article 8',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    ticket_id: 5,
                },
            ]
        },
        {
            id: 6,
            title: 'Ticket 6',
            articles: []
        },
        {
            id: 7,
            title: 'Ticket 7',
            articles: []
        },
    ])

    const addTicket = (ticket: Exclude<Ticket, 'id'>) => {
        tickets.value.push({ ...ticket, id: tickets.value.length + 1 })
    }

    const getTicketById = (id: number) => {
        return tickets.value.find(ticket => ticket.id === id)
    }

    return {
        tickets,
        addTicket,
        getTicketById
    }
})

