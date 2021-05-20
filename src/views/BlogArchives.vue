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
  max-width: 560px;
  padding: 0 20px;
  margin: 0 auto;
  background-color: var(--white-color);
  min-height: calc(100vh - 60px);
}
.blog-archives .archives {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-left: 5px solid var(--assist-color);
  margin-bottom: 15px;
  transition: all 0.3s;
  cursor: pointer;
}
.blog-archives .archives:hover {
  border-left: 50px solid var(--assist-color);
}
.blog-archives .archives .time {
  margin: 5px 10px;
  font-family: var(--nav-font);
}
.blog-archives .archives .title {
  margin: 0 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: var(--link-color);
  font-family: var(--nav-font);
}
</style>
