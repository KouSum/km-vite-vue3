<template>
  <a-descriptions title="User Info">
    <a-descriptions-item label="title">{{posts.postsData.title}}</a-descriptions-item>
    <a-descriptions-item label="body">{{posts.postsData.body}}</a-descriptions-item>
  </a-descriptions>
  <a-button @click="changePosts">获取请求数据</a-button>
  <a-button @click="profile">swr测试</a-button>
  <a-button @click="myReset">重置</a-button>
</template>

<script lang="ts" setup>

//数据请求
import {reactive, toRefs} from "vue";
import request from "../../request";
import { useSWR } from 'vueposu'

const p = {
  userId: 0,
  id: 0,
  title: "title",
  body: "body"
}
const posts = reactive({
  postsData: p
})

const myReset = ()=>{
  posts.postsData = p
}

const changePosts = () => {
  request("https://jsonplaceholder.typicode.com/posts/1").then(d => {
    console.log(d)
    posts.postsData = d
  }).catch(e => {
    console.log(e)
  })
}

const profile =()=> {
  const { data, error } = useSWR('/api/user', changePosts)
  console.log(data)
  console.log(error)
}

</script>

<style scoped>

</style>