<template>
  <div class="blog-detail">
    <v-md-preview :text="content"></v-md-preview>
    <div class="paging">
      <!-- 如果 id 为 1, 则没有上一篇 -->
      <blog-button @click="handlePreBtn">
        <template v-slot:default>上一篇</template>
      </blog-button>
      <!-- 如果 content 为 "", 则没有下一篇 -->
      <blog-button @click="handleNextBtn">
        <template v-slot:default>下一篇</template>
      </blog-button>
    </div>
  </div>
</template>

<script>
import { getBlogDetail } from "@/api/blogs.js";
import { htmlDecode } from "@/utils/htmlUtils.js";
import BlogButton from "@/components/button/BlogButton.vue";

export default {
  components: {
    BlogButton,
  },
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
    handlePreBtn() {
      this.$router.push({
        path: "/detail",
        query: {
          id: --this.id,
        },
      });
      this.handleGetDetail();
    },
    handleNextBtn() {
      this.$router.push({
        path: "/detail",
        query: {
          id: ++this.id,
        },
      });
      this.handleGetDetail();
    },
  },
  created() {
    this.handleGetDetail();
  },
};
</script>

<style scoped>
.blog-detail {
  max-width: 800px;
  margin: 60px auto;
}
.paging {
  display: flex;
  justify-content: space-around;
}
</style>
