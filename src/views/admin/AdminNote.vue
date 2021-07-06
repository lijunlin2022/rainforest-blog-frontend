<template>
  <div class="admin-note">
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
        <a-button type="primary" @click="submit">提交</a-button>
        <a-button type="primary" @click="goBack">返回</a-button>
      </div>
    </main>
  </div>
</template>

<script>
import { newBlog, getBlogDetail, updateBlog } from "@/api/blogs.js";
export default {
  name: "AdminNote",
  data() {
    return {
      blogData: {
        pid: null,
        title: "",
        abstract: "",
        content: "",
      },
    };
  },
  methods: {
    submit() {
      if (
        this.blogData.content !== "" &&
        this.blogData.title !== "" &&
        this.blogData.abstract !== ""
      ) {
        // 有 id 证明是更新操作
        const id = this.$route.query.id;
        if (id) {
          updateBlog(id, this.blogData).then((result) => {
            if (result.data.code === 200) {
              alert("更新成功");
            }
          });
        } else {
          // 没有 id 证明是新增操作
          this.blogData.pid = this.$route.query.pid;
          newBlog(this.blogData).then((result) => {
            if (result.data.code === 200) {
              alert("新增成功");
            }
          });
        }
      }
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
    goBack() {
      this.$router.go(-1);
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
.admin-note {
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
