import { defineStore } from 'pinia'

interface AppStore {
    title: string
    text: string
    categories: string[]
}

export const useApp = defineStore<'app', AppStore>('app', {
    state: () => {
        return {
            title: 'App Title',
            text: 'Lorem ipsum',
            categories: [
                '1', '2', '3'
            ]
        }
    },
    actions: {},
})