import { onBeforeUnmount, onMounted, ref } from "vue";



//与request文件夹下的网络请求例子差不多


//监听鼠标点击坐标
export default function () {
    const x = ref<number>(-1);
    const y = ref<number>(-1);

    const clickHandler = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY

    }

    onMounted(()=>{
        window.addEventListener('click', clickHandler)
    })

    onBeforeUnmount(()=>{
        window.removeEventListener('click', clickHandler)
    })


    return {
        x, y
    }
}