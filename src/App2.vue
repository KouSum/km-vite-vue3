<!--这是elementPlus 布局-->
<template>
  <el-container>
    <el-aside width="200px" class="el-aside-demo">
      <div  class="logo-div">
        <div class="logo"/>
      </div>
      <el-menu
          :uniqueOpened="true"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="/">hello world</el-menu-item>
            <el-menu-item index="/cart1">cart1</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="/test2">test2</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>数据接口请求</template>
            <el-menu-item index="/posts">umi-request 测试</el-menu-item>
          </el-submenu>
          <!--<el-menu-item-group title="分组4">
            <el-menu-item index="/">单元测试</el-menu-item>
          </el-menu-item-group>-->
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "App2",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- <style scoped>  局部-->
<style>
body, html {
  height: 100%;
  margin: 0;
}

#app, .el-container {
  height: 100%;
}


.el-menu-vertical-demo{
  height: calc(100% - 60px);
}
.el-aside-demo{
  background-color: #545c64!important;
}
.logo-div{
  overflow: auto;
  border-right: solid 1px #e6e6e6;
}
.logo {
  height: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 15px;
}

.el-header, .el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-footer {
  height: 30px!important;
  line-height: 30px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>