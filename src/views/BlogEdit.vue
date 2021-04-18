<template>
  <div class="blog-edit">
    <input type="text" v-model="blogData.title" placeholder="请输入标题" />
    <input type="text" v-model="blogData.abstract" placeholder="请输入摘要" />
    <input type="text" v-model="blogData.cover" placeholder="请输入封面图片" />
    <input type="text" v-model="blogData.author" placeholder="请输入作者" />
    <v-md-editor class="editor" v-model="blogData.content"></v-md-editor>
    <div class="btn-container">
      <button @click="handleNewBlog">提交</button>
      <button @click="handleReturn">查看效果</button>
    </div>
  </div>
</template>

<script>
import { createNewBlog } from "@/api/blogs.js";
export default {
  name: "BlogEdit",
  data() {
    return {
      blogData: {
        title: "",
        abstract: "",
        cover: "",
        content: "",
        author: "",
      },
    };
  },
  methods: {
    handleNewBlog() {
      createNewBlog(this.blogData).then((result) => {
        const res = result.data;
        if (res.errno === 0) {
          alert("发送成功");
        }
      });
    },
    handleReturn() {
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
input[type="text"],
button {
  height: 50px;
  width: 250px;
  outline: none;
  border: 1px solid var(--border-color);
  margin: 5px;
}
.editor {
  min-height: 500px;
}
.btn-container {
  display: flex;
  justify-content: flex-end;
}
</style>
