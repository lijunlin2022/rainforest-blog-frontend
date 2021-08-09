<template>
  <div>
    <header>
      <b-header></b-header>
    </header>
    <main>
      <router-view />
    </main>
    <el-backtop />
  </div>
</template>

<script>
import BHeader from "@/components/header/BHeader.vue";
export default {
  components: {
    BHeader,
  },
};
</script>

<style scoped>
main {
  margin-top: 60px;
  padding: 10px 0;
}
</style>
