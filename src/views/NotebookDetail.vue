<template>
  <div class="blog-notebook">
    <!-- 笔记本中的所有文章 -->
    <div class="notebook">
      <div class="name">{{ notebookData.name }}</div>
      <div class="description">{{ notebookData.description }}</div>
    </div>
    <header>
      <div class="row-head">
        <div class="name">
          <span>NAME</span>
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
        <div class="name">
          <span
            class="iconfont icon-file"
            style="padding-right: 5px; color: #00a1e3"
            v-if="item.title !== 'README'"
          >
          </span>
          <span
            class="iconfont icon-file"
            style="padding-right: 5px; color: #fe898a"
            v-else
          >
          </span>
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
        <div @click="addBlog">
          <span class="iconfont icon-add"></span>
          <span>新增文章</span>
        </div>
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
import { getNotebookDetail } from "@/api/notebooks.js";
import { getYearMonthDay } from "@/utils/timeUtils.js";
import { htmlDecode } from "@/utils/htmlUtils.js";
export default {
  name: "NotebookDetail",
  data() {
    return {
      notebookData: {},
      fileData: [],
      content: "There is no README.md",
    };
  },
  created() {
    const id = this.$route.query.id;
    getNotebookDetail(id).then((result) => {
      this.notebookData = result.data.data;
    });
    getBlogsList(id).then((result) => {
      const res = result.data;
      this.fileData = res.data;
    });
    getBlogDetail(null, id, "README").then((result) => {
      const res = result.data;
      this.content = htmlDecode(res.data.content);
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
    addBlog() {
      this.$router.push({
        path: "/admin/edit",
        query: {
          pid: this.$route.query.id,
        },
      });
    },
  },
};
</script>

<style scoped>
.blog-notebook {
  max-width: 900px;
  margin: 60px auto 30px;
  min-height: calc(100vh - 130px - 60px);
  padding: 20px;
}
.notebook .name {
  margin-bottom: 5px;
  font-size: 20px;
  color: #000;
  font-weight: bold;
}
.notebook .description {
  margin-bottom: 25px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
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
section .title {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #ebedef;
  color: #6a737d;
}
section .title div {
  width: 100px;
  padding: 5px;
}
section .title div span {
  margin: 0 2px;
}
section .icon-add {
  color: #ffa500;
}
</style>
