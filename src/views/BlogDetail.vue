<template>
  <div>
    <v-md-preview :text="text"></v-md-preview>
  </div>
</template>

<script>
import { getBlogDetail } from "@/api/blogs";
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleGetDetail(id) {
      getBlogDetail(id)
        .then((result) => {
          const res = result.data;
          this.text = res.data.content;
        })
        .catch((err) => {
          console.log(err);
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
