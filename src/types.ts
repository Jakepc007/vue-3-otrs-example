import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface TreeItem {
    name: string
    path: string
    children: TreeItem[],
    assignedCustomers?: number[]
}

export interface Ticket {
    id: number
    title: string
    articles: Article[]
}

export interface Article {
    id: number
    title: string
    body: string
    ticket_id: number
}

export interface Customer {
    id: number
    name: string
    assignedTickets?: number[]
}