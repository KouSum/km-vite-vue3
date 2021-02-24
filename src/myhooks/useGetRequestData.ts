import { onBeforeUnmount, onMounted, ref } from "vue";
import { Request1 } from '../request'

//注意：<T>
export default function <T>() {

    const loading = ref<boolean>(true)

    //注意：<T | null>
    const data = ref<T | null>(null)

    const errorMsg = ref<string>("")

    Request1("/data/d1.json").then(d => {
        data.value = d
    }).catch(e => {
        errorMsg.value = e.message || '未知错误'
    }).finally(() => {
        loading.value = false
    })

    return {
        loading,
        data,
        errorMsg
    }


}