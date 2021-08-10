<template>
  <el-menu mode="horizontal" class="menu">
    <el-menu-item class="menu-item">笔记本管理</el-menu-item>
  </el-menu>
  <router-view />
</template>

<style scoped>
.menu {
  background-color: #24292a;
}
.menu-item {
  font-size: 18px;
  color: #aaa !important;
}
.menu-item:hover {
  background-color: #24292a !important;
  color: #fff !important;
}
</style>
