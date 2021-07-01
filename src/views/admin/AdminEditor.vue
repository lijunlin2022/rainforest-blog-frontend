<template>
  <div class="blog-editor">
    <aside class="sidebar"></aside>
    <main>
      <input
        type="text"
        class="title"
        v-model="blogData.title"
        placeholder="请输入标题"
      />
      <v-md-editor class="md-editor" v-model="blogData.content"></v-md-editor>
      <input type="text" v-model="blogData.abstract" placeholder="请输入摘要" />
      <div class="btn-container">
        <a-button type="primary" @click="handleNewBlog">提交</a-button>
        <a-button type="primary" @click="goBackNotebook">回到笔记本</a-button>
      </div>
    </main>
  </div>
</template>

<script>
import { createNewBlog, getBlogDetail, updateBlog } from "@/api/blogs.js";
export default {
  name: "AdminEditor",
  data() {
    return {
      id: null,
      pid: null,
      blogData: {
        title: "",
        abstract: "",
        cover: "",
        content: "",
      },
    };
  },
  methods: {
    handleNewBlog() {
      if (this.blogData.content === "") {
        alert("输入为空, 不可以发送博客");
        return;
      }
      if (this.id) {
        alert("只允许修改博客, 不允许新建博客");
        return;
      }
      createNewBlog(this.blogData).then((result) => {
        const res = result.data;
        if (res.errno === 0) {
          alert("发送成功");
        } else {
          alert("发送失败");
        }
      });
    },
    handleUpdateBlog() {
      if (this.blogData.content === "") {
        alert("输入为空, 不可以发送博客");
        return;
      }
      updateBlog(this.id, this.blogData).then((result) => {
        const res = result.data;
        if (res.errno === 0) {
          alert("修改成功");
        } else {
          alert("修改失败");
        }
      });
    },
    goBackNotebook() {
      this.$router.push({
        path: "/notebook",
        query: {
          id: this.$route.query.pid,
        },
      });
    },
  },
  created() {
    const { id, pid } = this.$route.query;
    if (id) {
      getBlogDetail(id).then((result) => {
        const res = result.data;
        this.blogData = res.data;
      });
    }
    if (pid) {
      this.blogData.content = "# 请输入博客内容\n";
    }
  },
};
</script>

<style scoped>
.blog-editor {
  box-sizing: border-box;
}
input[type="text"] {
  height: 30px;
  width: 100%;
  padding: 20px;
  border: 1px solid #d1d5da;
  outline: none;
  text-align: left;
  font-size: 14px;
}
.btn-container {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}
.btn-container > button {
  margin: 5px;
}
.md-editor {
  width: 100%;
  min-height: 500px;
  box-shadow: none;
  border: 1px solid #d1d5da;
}
.md-editor ::v-deep(.v-md-editor__toolbar) {
  display: none;
}
</style>
