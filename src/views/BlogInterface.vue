<template>
  <div class="blog-interface">
    <div class="preview">
      <v-md-preview :text="content"></v-md-preview>
    </div>
  </div>
</template>

<script>
import { getBlogDetail } from "@/api/blogs.js";
import { htmlDecode } from "@/utils/htmlUtils.js";

export default {
  name: "BlogInterface",
  data() {
    return {
      id: this.$route.query.id,
      content: "",
    };
  },
  methods: {
    handleGetDetail() {
      getBlogDetail(this.id).then((result) => {
        const res = result.data;
        console.log(res);
        this.content = htmlDecode(res.data.content);
      });
    },
  },
  created() {
    this.handleGetDetail();
  },
};
</script>

<style scoped>
.blog-interface {
  max-width: 800px;
  margin: 0 auto;
}
.preview {
  min-height: calc(100vh - 60px);
  background-color: var(--white-color);
}
</style>
