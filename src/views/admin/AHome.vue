<template>
  <el-menu mode="horizontal" class="menu">
    <el-menu-item class="menu-item">笔记本管理</el-menu-item>
    <router-view />
  </el-menu>
</template>

<style scoped>
.menu {
  background-color: #24292a;
}
.menu-item {
  font-size: 18px;
}
.menu-item:hover {
  background-color: #24292a !important;
  color: #fff !important;
}
</style>
