<template>
  <div class="blog-notebook">
    <!-- 笔记本中的所有文章 -->
    <header>
      <div class="row-head">
        <div class="title">
          <span>TITLE</span>
        </div>
        <div class="time">
          <div class="created-time">
            <span>CREATED</span>
          </div>
          <div class="updated-time">
            <span>UPDATED</span>
          </div>
        </div>
      </div>
      <div
        class="row-body"
        v-for="item in fileData"
        v-bind:key="item.id"
        @click="openBlog(item.id)"
      >
        <div class="title">
          <span class="iconfont icon-file"></span>
          <span>&nbsp;</span>
          <span>{{ item.title }}</span>
        </div>
        <div class="time">
          <div class="created-time">
            <span>{{ correctTime(item.created_time) }}</span>
          </div>
          <div class="updated-time">
            <span>{{ correctTime(item.updated_time) }}</span>
          </div>
        </div>
      </div>
    </header>

    <!-- README 文档 -->
    <section>
      <div class="title">
        <span class="iconfont icon-edit"></span>
        <span>&nbsp;</span>
        <span>README.md</span>
      </div>
      <div class="preview">
        <v-md-preview :text="content" @copy-code-success="copyCodeSuccess()">
        </v-md-preview>
      </div>
    </section>
  </div>
</template>

<script>
import { getBlogsList, getBlogDetail } from "@/api/blogs.js";
import { getYearMonthDay } from "@/utils/timeUtils.js";
export default {
  name: "BlogNotebook",
  data() {
    return {
      fileData: [],
      content: "There is no README.md",
    };
  },
  created() {
    getBlogsList(this.$route.query.id).then((result) => {
      const res = result.data;
      this.fileData = res.data;
    });
    getBlogDetail(null, this.$route.query.id, "README").then((result) => {
      const res = result.data;
      this.content = res.data.content;
    });
  },
  methods: {
    correctTime(time) {
      return getYearMonthDay(time);
    },
    openBlog(id) {
      this.$router.push({
        path: "/detail",
        query: { id },
      });
    },
  },
};
</script>

<style scoped>
.blog-notebook {
  max-width: 900px;
  margin: 100px auto 30px;
  min-height: calc(100vh - 130px - 60px);
  padding: 20px;
}
header {
  margin-top: 10px;
  border: 1px solid #d1d5da;
}
header .row-head,
header .row-body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  cursor: pointer;
  font-size: 14px;
  font-family: var(--text-font);
  color: #6a737d;
  border-bottom: 1px solid #f6f8fa;
  padding: 10px;
}
header .row-head {
  background-color: #f1f8ff;
}
header .row-body:hover {
  background-color: #fafafa;
}

/* 标题 */
.title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  min-width: 150px;
}
.icon-file {
  color: #79b8ff;
}
/* 时间 */
.time {
  display: flex;
}
.created-time,
.updated-time {
  width: 100px;
}
.created-time {
  display: none;
}
@media screen and (min-width: 992px) {
  .created-time {
    display: block;
  }
}
/* README */
section {
  margin-top: 30px;
  border: 1px solid #d1d5da;
}
section .icon-edit {
  color: #fe898a;
}
section .title {
  padding: 20px;
  border-bottom: 1px solid #ebedef;
  color: #6a737d;
}
</style>
