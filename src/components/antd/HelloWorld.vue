<template>
  <h1>{{ msg }}</h1>
  <label>
    <input type="checkbox" v-model="useScriptSetup"/> Use
    <code>&lt;script setup&gt;</code>
  </label>
  <label>
    <input type="checkbox" v-model="useTsPlugin"/> Provide types for
    <code>*.vue</code> imports
  </label>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <template v-if="!useScriptSetup">
      <a
          href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
          target="_blank"
      >Vetur</a>
      +
      <a
          href="https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features"
          target="_blank"
      >Vue DX</a>
    </template>
    <template v-else>
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </template>
  </p>
  <p v-if="useTsPlugin">
    tsconfig setup:
    <br/>1. Install and add
    <code>@vuedx/typescript-plugin-vue</code> to tsconfig plugins
    <br/>2. Delete shims-vue.d.ts
    <br/>3. Open
    <code>src/main.ts</code> in VSCode
    <br/>4. Open VSCode command input
    <br/>5. Search and run "Select TypeScript version" -> "Use workspace version"
  </p>
  <a-button type="primary" @click="refState.count++" size="small">refState count is: {{ refState.count }}</a-button>
  <a-button type="primary" @click="state.count++" size="small">count is: {{ state.count }}</a-button>
  <el-button @click="changeStateCount" size="mini">changeStateCount</el-button>
  <a-input v-model:value.number="count" placeholder="Basic usage"/>
  <br/>
  countState：{{ stateName }}
  <br/>
  <el-button type="primary" @click="count++" size="mini">count is: {{ count }}</el-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>
</template>

<script lang="ts">
import {defineComponent, defineProps, reactive, onMounted, PropType, ref, computed, toRefs} from 'vue'
import {useStore} from "../../store";
import request from "../../request";


interface State {
  count: number,
}
interface Posts{
  userId: number,
  id: number,
  title: string,
  body: string,
}

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
    }
  },
  setup(props, context) {
    const store = useStore(); // 使用useStore方法
    const useScriptSetup = ref(false);
    const useTsPlugin = ref(false);
    const refState = ref({count: 0});


    onMounted(() => {
      console.log('Component is mounted!')
    })

    //reactive
    const state = reactive<State>({count: 0})

    const changeStateCount = (): void => {
      state.count = 0
      store.commit('antdModules/cg')
    }

    //ref
    let count = ref(0)
    //ref
    const year = ref<string | number>('2020') // year's type: Ref<string | number>
    year.value = 2020 // ok!

    // computed 只读
    const doubleCount = computed(() => count.value * 2)
    //store 放这里，数据更新后，页面才会响应
    const stateName = computed<string>(() => store.state.antdModules.name);

    //数据请求
    const posts = reactive<Posts>({
      userId: 0,
      id: 0,
      title: "title",
      body:"body"
    })
    request("https://jsonplaceholder.typicode.com/posts/1").then(d=>{
      console.log(d)
    }).catch(e=>{
      console.log(e)
    })



    return {posts, stateName, count, refState, state, useScriptSetup, useTsPlugin, changeStateCount}
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
