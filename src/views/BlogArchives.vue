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
  max-width: 871px;
  margin: 98px auto 39px;
  padding: 28px;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  min-height: calc(100vh - 98px);
}
.blog-archives .archives {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 15.2px;
  cursor: pointer;
  font-family: var(--text-font);
  color: var(--secondary-color);
}
.blog-archives .archives .title {
  margin: 0 15.2px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.blog-archives .archives .title:hover {
  color: var(--accent-color);
}
</style>
