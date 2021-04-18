<template>
  <div>
    <v-md-preview :text="content"></v-md-preview>
  </div>
</template>

<script>
import { getBlogDetail } from "@/api/blogs.js";
import { htmlDecode } from "@/utils/htmlUtils.js";

export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    handleGetDetail(id) {
      getBlogDetail(id).then((result) => {
        const res = result.data;
        this.content = htmlDecode(res.data.content);
      });
    },
  },
  created() {
    this.handleGetDetail(this.$route.query.id);
  },
};
</script>

<style scoped>
::v-deep(h1),
::v-deep(h2),
::v-deep(h3),
::v-deep(h4),
::v-deep(h5),
::v-deep(h6) {
  font-weight: normal !important;
  font-family: var(--title-font) !important;
}
::v-deep(p) {
  text-align: justify !important;
}
</style>
