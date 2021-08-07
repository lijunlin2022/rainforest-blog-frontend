<template>
  <a-breadcrumb class="b-breadcrumb">
    <a-breadcrumb-item v-for="item in list" :key="item.path">
      <router-link :to="item.path">{{ item.meta.title }}</router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
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
  margin: 20px 0;
  font-size: 18px;
}
</style>
