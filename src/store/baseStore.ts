import { defineStore } from 'pinia';
import { Name } from './storeName';

export const useBaseStore = defineStore(Name.BASE, {
    state: () => {
        return {
            count: 0
        }
    }
})