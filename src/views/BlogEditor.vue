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
      </div>
    </main>
  </div>
</template>

<script>
import { createNewBlog, getBlogDetail, updateBlog } from "@/api/blogs.js";
export default {
  name: "BlogEditor",
  data() {
    return {
      id: this.$route.query.id,
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
    handleReturn() {
      this.$router.replace("/");
    },
  },
  created() {
    if (this.id) {
      getBlogDetail(this.id).then((result) => {
        const res = result.data;
        this.blogData = res.data;
        if (this.blogData.ishot === 1) {
          this.blogData.ishot = true;
        }
        if (this.blogData.isinterface === 1) {
          this.blogData.isinterface = true;
        }
      });
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
