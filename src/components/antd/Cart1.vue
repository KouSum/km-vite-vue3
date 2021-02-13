<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <button @click="sayName">按钮</button>
  </div>
</template>

<script lang="ts">
import { computed, reactive,toRefs } from "vue";

interface DataProps {
  name: string;
  now: number;
  birthYear: number;
  age: number;
  sayName: () => void;
}

export default {
  name: "App",
  setup() {


    const data: DataProps = reactive({
      name: "zhangsan",
      birthYear: 2000,
      now: 2020,
      sayName: () => {
        console.log(1111);
        console.log(data.name);

        data.name = "I am " + data.name;
        console.log(data.name);
      },
      age: computed(() => {
        return data.now - data.birthYear;
      }),
    });

    const refData = toRefs(data)
    return {
      ...refData,
    };
  },
};
</script>


<style scoped>

</style>