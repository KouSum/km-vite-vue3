<template>
  <a-spin :spinning="loading">
    <div>
      <div>{{ loading }}</div>
      <div>x:{{ x }}</div>
      <div>x:{{ y }}</div>
    </div>
    <h3 v-if="loading">正在加载中</h3>
    <h3 v-else-if="errorMsg">错误信息：{{ errorMsg }}</h3>
    <ul v-else></ul>

    <!-- 这里的 :key 是必须的 -->
    <ul v-for="item in data" :key="item.id">
      <li>
        <span> id: {{ item.id }} </span>
        <span> name: {{ item.name }} </span>
      </li>
    </ul>
  </a-spin>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useMousePosition from "../../myhooks/useMousePosition";
import useGetRequestData from "../../myhooks/useGetRequestData";


// ts 类型接口
interface Data1 {
  name: string;
  id: number;
}


export default defineComponent({
  setup() {
    const { x, y } = useMousePosition();

    //注意：<Data1[]>
    const { loading, data, errorMsg } = useGetRequestData<Data1[]>();

    return {
      x,
      y,
      loading,
      data,
      errorMsg,
    };
  },
});
</script>