import { createApp } from 'vue'
import App from './App2.vue'
import { Button, Menu, Layout, Input, Descriptions,  } from 'ant-design-vue';
import { store, key } from "./store"

import { ElButton, ElSelect, ElHeader, ElMain, ElContainer, ElFooter, ElAside,
ElMenu, ElMenuItem, ElMenuItemGroup, ElSubmenu} from 'element-plus';
import 'element-plus/lib/theme-chalk/el-icon.css'

import router from './router'

import RequestMethod from 'umi-request'


// ui
const antd = [
    Button, Menu, Layout,Input,Descriptions
]
const elementPlus = [
    ElButton,
    ElSelect, ElHeader, ElMain, ElContainer, ElFooter, ElAside, ElMenu, ElMenuItem, ElMenuItemGroup, ElSubmenu
]


const app = createApp(App);

elementPlus.forEach(plugin => {
    app.use(plugin)
})

antd.forEach(plugin => {
    app.use(plugin)
})

app.use(router)
app.use(store, key)
app.mount('#app')

