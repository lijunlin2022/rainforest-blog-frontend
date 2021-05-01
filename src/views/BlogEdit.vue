<template>
  <div class="blog-editor">
    <aside class="sidebar">
      <div class="toggleBtn">RAINFOREST</div>
      <ul>
        <li>
          <a href="javascrip:void(0);">文章管理</a>
        </li>
        <li>
          <a href="javascrip:void(0);">数据统计</a>
        </li>
        <li>
          <a href="javascrip:void(0);">数据库</a>
        </li>
      </ul>
    </aside>
    <main>
      <input type="text" v-model="blogData.title" placeholder="标题" />
      <input type="text" v-model="blogData.abstract" placeholder="摘要" />
      <input type="text" v-model="blogData.cover" placeholder="头图" />
      <input type="text" v-model="blogData.author" placeholder="作者" />
      <input type="checkbox" v-model="blogData.hot" />
      <v-md-editor class="md-editor" v-model="blogData.content"></v-md-editor>
      <div class="btn-container">
        <button @click="handleNewBlog">提交</button>
        <button @click="handleUpdateBlog">修改</button>
        <button @click="handleReturn">查看效果</button>
      </div>
    </main>
  </div>
</template>

<script>
import { createNewBlog, getBlogDetail, updateBlog } from "@/api/blogs.js";

export default {
  name: "BlogEdit",
  data() {
    return {
      id: this.$route.query.id,
      blogData: {
        title: "我看看",
        abstract: "",
        cover: "",
        content: "",
        author: "",
        hot: false,
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
      });
    }
  },
};
</script>

<style scoped>
.blog-editor {
  min-height: 100vh;
}
.blog-editor main {
  max-width: 1200px;
  margin-left: 200px;
}
.blog-editor .sidebar {
  position: fixed;
  float: left;
  min-width: 150px;
  height: 100vh;
  background-color: var(--main-color);
}
.blog-editor .sidebar .toggleBtn {
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: var(--title-font);
  font-weight: bold;
  color: var(--bg-color);
  background-color: var(--assist-color);
  transition: all 0.3s ease-out;
}
.blog-editor .sidebar ul {
  width: 100%;
  list-style: none;
  transition: all 0.3s ease-out;
}
.blog-editor .sidebar ul li {
  margin: 10px 0;
  height: 40px;
  padding: 5px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  font-family: var(--nav-font);
  background-color: var(--main-color);
}
.blog-editor .sidebar ul li:hover {
  background-color: var(--assist-color);
}
.blog-editor .sidebar ul li a {
  text-decoration: none;
  color: var(--bg-color);
}

input[type="text"],
button {
  height: 50px;
  outline: none;
  border: 1px solid var(--border-color);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 10px 10px 0 0;
  text-align: center;
}
input[type="text"] {
  min-width: 200px;
  max-width: 1000px;
}
button {
  min-width: 150px;
  max-width: 200px;
  color: var(--bg-color);
  background-color: var(--main-color);
}
button:hover {
  background-color: var(--assist-color);
}
.md-editor {
  min-width: 400px;
  min-height: 500px;
}
</style>
