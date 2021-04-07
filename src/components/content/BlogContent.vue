<template>
  <div class="blog-content">
    <blog-article></blog-article>
    <blog-article></blog-article>
    <blog-article></blog-article>
  </div>
</template>

<script>
import { getBlogList } from "@/api/blogs";
import BlogArticle from "./BlogArticle.vue";
export default {
  name: "BlogContent",
  components: { BlogArticle },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    handleBtnGetList() {
      getBlogList()
        .then((result) => {
          const res = result.data;
          this.tableData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
