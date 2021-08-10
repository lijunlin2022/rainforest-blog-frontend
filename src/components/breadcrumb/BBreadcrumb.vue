<template>
  <el-breadcrumb class="b-breadcrumb" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="item in list" :key="item.path" :to="item.path">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$route.matched;
    },
  },
};
</script>

<style scoped>
.b-breadcrumb {
  margin: 30px 0;
  font-size: 16px;
}
</style>
