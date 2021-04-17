<template>
  <div class="blog-edit">
    <input type="text" v-model="blogData.title" placeholder="请输入标题" />
    <input type="text" v-model="blogData.abstract" placeholder="请输入摘要" />
    <input type="text" v-model="blogData.author" placeholder="请输入作者" />
    <v-md-editor class="editor" v-model="blogData.content"></v-md-editor>
  </div>
  <button style="width: 250px" @click="handleNewBlog">提交</button>
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
        content: "",
        author: "",
      },
    };
  },
  methods: {
    handleNewBlog() {
      createNewBlog(this.blogData).then((result) => {
        const res = result.data;
        if (res.errNo === 0) {
          alert("发送成功");
        }
      });
    },
  },
};
</script>

<style scoped>
.editor {
  height: 600px;
}
</style>
