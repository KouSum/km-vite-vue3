import {InjectionKey} from 'vue'
import {createStore, useStore as baseUseStore, Store} from 'vuex'
import RootStateTypes, {AllStateTypes} from "./interface";
// 这里的antdModules 要与 AllStateTypes 的 antdModules 名称一致
import antdModules from "./modules/antd";


// define injection key
export const key: InjectionKey<Store<RootStateTypes>> = Symbol()

export const store = createStore<RootStateTypes>({
    state: {
        test: ""
    },
    modules: {
        antdModules
    }
})

//简化使用 in a vue component 无需加key
// in a vue component 引入时需注意 import { useStore } from './store'

// define your own `useStore` composition function
export function useStore<T = AllStateTypes>() {
    return baseUseStore<T>(key)
}

