<template>
  <div class="home">
    <blog-header></blog-header>
    <main>
      <router-view></router-view>
    </main>
    <el-backtop />
  </div>
</template>

<script>
import BlogHeader from './BlogHeader.vue'
export default {
  components: {
    BlogHeader
  }
}
</script>

<style lang="less" scoped>
.home {
  main {
    margin-top: 60px;
    min-height: calc(100vh - 60px);
    background: #f6f8fa;
  }
}
</style>
