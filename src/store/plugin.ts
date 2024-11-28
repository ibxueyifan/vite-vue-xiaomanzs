import { PiniaPluginContext } from 'pinia'


const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}

type optType = {
    key: string
}
const defaultOpt = {
    key: 'pinia'
}
export const piniaPlugin = (opt?: optType) => {
    const options = Object.assign({}, defaultOpt, opt)
    return (context: PiniaPluginContext) => {
        console.log(context.store);
        const { store } = context;
        const _key = `${options.key}-${store.$id}`;
        store.$subscribe(() => {
            setStorage(_key, toRaw(store.$state))
        })
        const data = getStorage(_key);
        return {
            ...data
        }
    }
}
