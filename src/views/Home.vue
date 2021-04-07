<template>
  <div class="home">
    <header>
      <blog-header></blog-header>
    </header>
    <div class="sidebar">
      <blog-sidebar></blog-sidebar>
    </div>
    <div class="content">
      <blog-content></blog-content>
    </div>
  </div>
</template>

<script>
import BlogHeader from "@/components/header/BlogHeader.vue";
import BlogContent from "@/components/content/BlogContent.vue";
import BlogSidebar from "@/components/sidebar/BlogSidebar.vue";
export default {
  components: {
    BlogHeader,
    BlogContent,
    BlogSidebar,
  },
  name: "Home",
};
</script>

<style scoped>
.home {
  width: 100%;
}
.content {
  width: 100%;
}
.sidebar {
  display: none;
}
/* 手机时全屏显示 */
@media screen and (max-width: 768px) {
}

/* 平板时居中显示 */
@media screen and (min-width: 992px) {
  .home {
    width: 800px;
    margin: 0 auto;
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
  .sidebar {
    display: block;
    float: right;
  }
}
</style>
