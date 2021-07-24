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
        v-for="item in fileArray"
        v-bind:key="item.id"
        @click="$utils.changeRoute('/detail', item.id)"
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
            <span>{{ $utils.getYearMonthDay(item.created_time) }}</span>
          </div>
          <div class="updated-time">
            <span>{{ $utils.getYearMonthDay(item.updated_time) }}</span>
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
        <div @click="$utils.changeRoute('/admin/notebook', id)">
          <span class="iconfont icon-edit"></span>
          <span class>编辑仓库</span>
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
export default {
  name: "NotebookDetail",
  data() {
    return {
      id: null,
      notebookData: {},
      fileArray: [],
      content: "# There is No README.md\n",
    };
  },
  created() {
    this.id = this.$route.query.id;
    getNotebookDetail(this.id).then((result) => {
      this.notebookData = this.$utils.htmlDecodeObject(result.data.data);
    });
    getBlogsList(this.id).then((result) => {
      let array = result.data.data.map((item) => {
        return this.$utils.htmlDecodeObject(item);
      });
      this.fileArray = array;
    });
    getBlogDetail(null, this.id, "README").then((result) => {
      this.content = this.$utils.htmlDecode(result.data.data.content);
    });
  },
  methods: {
    addBlog() {
      this.$router.push({
        path: "/admin/note",
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
  border-radius: 20px;
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

header .name {
  min-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  border: 1px solid #d9d9d9;
  border-radius: 10px;
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
section .icon-edit {
  color: #fe898a;
}
</style>
