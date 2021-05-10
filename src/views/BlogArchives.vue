<template>
  <div class="blog-archives">
    <div
      class="archives"
      v-for="item in archiveData"
      :key="item.id"
      @click="handleReadMore(item.id)"
    >
      <div class="time">{{ correctTime(item.createtime) }}</div>
      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import { getBlogList } from "@/api/blogs.js";
import { timeDecode } from "@/utils/timeUtils.js";

export default {
  name: "BlogArchives",
  data() {
    return {
      archiveData: [],
    };
  },
  methods: {
    handleGetBlogList() {
      getBlogList().then((result) => {
        const res = result.data;
        this.archiveData = res.data;
      });
    },
    handleReadMore(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id,
        },
      });
    },
    correctTime(time) {
      return timeDecode(time);
    },
  },
  created() {
    this.handleGetBlogList();
  },
};
</script>

<style scoped>
.blog-archives {
  max-width: 600px;
  margin: 0 auto;
}
.blog-archives .archives {
  display: flex;
  justify-content: flex-start;
  border-left: 2px solid var(--assist-color);
  margin-bottom: 10px;
  color: var(--form-title-color);
  transition: all 0.3s;
  cursor: pointer;
}
.blog-archives .archives .time {
  margin: 0 10px;
}
.blog-archives .archives:hover {
  border-left: 50px solid var(--assist-color);
}
</style>
