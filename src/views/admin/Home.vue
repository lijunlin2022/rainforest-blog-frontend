<template>
  <el-menu mode="horizontal" class="menu">
    <el-menu-item class="menu-item">笔记本管理</el-menu-item>
    <el-menu-item class="menu-item" @click="logout">退出</el-menu-item>
  </el-menu>
  <router-view />
  <el-backtop />
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$utils.changeRoute("/overview");
    },
  },
};
</script>
<style scoped>
.menu {
  background-color: #24292a;
}
.menu-item {
  font-size: 18px;
  color: #aaa !important;
}
.menu-item:hover,
.menu-item:focus {
  background-color: #24292a !important;
  color: #fff !important;
}
</style>
