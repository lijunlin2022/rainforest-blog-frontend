<template>
  <div class="home">
    <header>
      <blog-header></blog-header>
    </header>
    <div class="main">
      <router-view />
    </div>
    <a-back-top />
  </div>
</template>

<script>
import BlogHeader from "@/components/header/BlogHeader.vue";
export default {
  components: {
    BlogHeader,
  },
  name: "Home",
};
</script>

<style scoped>
.home {
  width: 100%;
}
.main {
  width: 100%;
  margin-top: 60px;
  background-color: var(--main-color);
}
.sidebar {
  display: none;
}
</style>
