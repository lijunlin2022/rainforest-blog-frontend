<template>
  <div class="blog-archives">
    <div
      class="archives"
      v-for="item in archiveData"
      :key="item.id"
      @click="handleReadMore(item.id)"
    >
      <div class="title">{{ item.title }}</div>
      <div class="time">
        <span>{{ correctTime(item.createtime) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getBlogsList } from "@/api/blogs.js";
import { getMonthDay } from "@/utils/timeUtils.js";

export default {
  name: "BlogArchives",
  data() {
    return {
      archiveData: [],
    };
  },
  methods: {
    handleGetBlogList() {
      getBlogsList().then((result) => {
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
      return getMonthDay(time);
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
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-bottom: 15.2px;
  cursor: pointer;
  font-family: var(--text-font);
  color: var(--secondary-color);
}
.blog-archives .archives:hover {
  color: var(--accent-color);
}
.blog-archives .archives .title {
  margin: 0 15.2px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.blog-archives .archives .time {
  min-width: 50px;
}
</style>
