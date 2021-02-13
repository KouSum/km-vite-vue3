import AntdModulesTypes from "./modules/antd/interface";


export default interface RootStateTypes {
    test: string
}


export interface AllStateTypes extends RootStateTypes {
    antdModules: AntdModulesTypes
}