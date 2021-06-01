<template>
  <div class="blog-detail">
    <div class="preview">
      <v-md-preview :text="content" @copy-code-success="copyCodeSuccess()">
      </v-md-preview>
    </div>
    <div class="paging">
      <!-- 如果 id 为 1, 则没有上一篇 -->
      <blog-button @click="handlePreBtn" v-if="hasPrev">
        <template v-slot:default>Prev</template>
      </blog-button>
      <!-- 如果 content 为 "", 则没有下一篇 -->
      <blog-button @click="handleNextBtn" v-if="hasNext">
        <template v-slot:default>Next</template>
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
      hasPrev: true,
      hasNext: true,
    };
  },
  methods: {
    copyCodeSuccess() {
      alert("复制成功");
    },
    handleGetDetail() {
      getBlogDetail(this.id).then((result) => {
        const res = result.data;
        console.log(res);
        this.content = htmlDecode(res.data.content);
        if (res.data.id === 1) {
          this.hasPrev = false;
        }
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
  max-width: 900px;
  margin: 98px auto 38px;
  padding: 10px;
  border: 1px solid var(--border-color);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
.preview {
  min-height: calc(100vh - 120px);
  background-color: var(--main-color);
}
.paging {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  height: 40px;
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
