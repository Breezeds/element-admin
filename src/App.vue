<template>
  <div id="app">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-openeds="['1']">
          <el-submenu index="1" router>
            <template slot="title"><i class="el-icon-message"></i>帖子</template>
            <el-menu-item index="/list">列表</el-menu-item>
            <el-menu-item index="/add">新增</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <!-- 组件容器 -->
          <router-view/> 
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>