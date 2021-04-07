<template>
  <div class="home">
    <header>
      <blog-header></blog-header>
    </header>
    <div class="sidebar"></div>
    <div class="content">
      <blog-content></blog-content>
    </div>
  </div>
</template>

<script>
import BlogHeader from "@/components/header/BlogHeader.vue";
import BlogContent from "@/components/content/BlogContent.vue";
export default {
  components: {
    BlogHeader,
    BlogContent,
  },
  name: "Home",
};
</script>

<style scoped>
/* 手机时全屏显示 */
@media screen and (max-width: 768px) {
  .home {
    width: 100%;
  }
  .content {
    width: 100%;
  }
}

/* 平板时居中显示 */
@media screen and (min-width: 992px) {
  .home {
    width: 800px;
    margin: 0 auto;
  }
  .content {
    width: 600px;
  }
}

/* 电脑时居中显示 */
@media screen and (min-width: 1200px) {
  .home {
    width: 1150px;
  }
  .content {
    width: 800px;
  }
}
</style>
