<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="add1()"> 修改num1</button>
    <button @click="add2()"> 修改num2</button>
    <button @click="add3()"> 修改num3</button>
    <div>
      <p>num1: {{num1}}</p>
      <p>num2: {{num2}}</p>
      <p>num3: {{num3}}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, reactive } from 'vue';
export default {
  setup() {
    let num1 = 2;
    const num2 = ref(2);
    let num3 = reactive({a:2});

    console.log(num1)
    console.log(num2)
    console.log(num3)
    function add1() {
      num1 ++
      console.log(num1)
    }
    function add2() {
      num2.value ++
      console.log(num2.value)
    }
    function add3() {
      num3.a ++
      console.log(num3)
    }
    return {
      num1,
      num2,
      num3,
      add1,
      add2,
      add3
    }
  }
}
function addNum(num: number) {
  num++
}
</script>