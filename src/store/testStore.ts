import { defineStore } from 'pinia';
import { Name } from './storeName';

const nameApi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('newxiaoman-----zs')
        }, 2000)
    })
}

export const useTestStore = defineStore(Name.TEST, {
    state: () => {
        return {
            count: 0,
            msg: '你好 pinia',
            name: 'xiaoman'
        }
    },
    getters: {
        newMsg(): string {
            return `${this.msg}---getters`
        }
    },
    actions: {
        handleCount(num: number = 12) {
            // this.count+= 2
            // this.count++
            // this.count = this.count + 3
            this.count += num
        },
        async requestName() {
            let res = await nameApi();
            this.name = res;
            this.handleCount()
        }
    }
})