import { Module } from "vuex";
import RootStateTypes from "../../interface";
import AntdModulesTypes from "./interface";


//注意这里interface的顺序 AntdModulesTypes, RootStateTypes
const AntdModule: Module<AntdModulesTypes, RootStateTypes> = {
    namespaced: true,
    state: () => ({
        name: '名字',
        count: 25,
    }),
    mutations: {
        cg(state){
            console.log(state)
            state.name = "名字2"
        }
    },
    actions: {

    },
    getters: {

    }
}

export default AntdModule

