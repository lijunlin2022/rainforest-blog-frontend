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
  max-width: 871px;
  margin: 98px auto 38px;
  padding: 28px;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
.preview {
  min-height: calc(100vh - 90px);
}
::v-deep(a) {
  color: var(--accent-color);
}
::v-deep(h1),
::v-deep(h2),
::v-deep(h3),
::v-deep(h4),
::v-deep(h5),
::v-deep(h6),
::v-deep(strong),
::v-deep(p) {
  color: var(--secondary-color);
}
</style>
