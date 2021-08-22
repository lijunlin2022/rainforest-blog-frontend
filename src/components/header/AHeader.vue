<template>
  <header>
    <b-breadcrumb></b-breadcrumb>
    <div><slot></slot></div>
  </header>
</template>

<script>
import BBreadcrumb from "../breadcrumb/BBreadcrumb.vue";
export default {
  components: { BBreadcrumb },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;
}
</style>
