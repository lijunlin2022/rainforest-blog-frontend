<template>
  <div class="blog-editor">
    <div class="admin-navbar">编辑文章</div>
    <aside class="sidebar"></aside>
    <main>
      <input
        type="text"
        class="title"
        v-model="blogData.title"
        placeholder="请输入标题"
      />
      <v-md-editor class="md-editor" v-model="blogData.content"></v-md-editor>
      <input type="text" v-model="blogData.abstract" placeholder="摘要" />
      <input type="text" v-model="blogData.cover" placeholder="头图 URL" />
      <blog-switch>
        <template v-slot:title>
          <span>置顶</span>
        </template>
        <template v-slot:checkbox>
          <input type="checkbox" class="checkbox" v-model="blogData.ishot" />
        </template>
      </blog-switch>
      <blog-switch>
        <template v-slot:title>
          <span>设置为独立界面</span>
        </template>
        <template v-slot:checkbox>
          <input
            type="checkbox"
            class="checkbox"
            v-model="blogData.isinterface"
          />
        </template>
      </blog-switch>
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
import BlogSwitch from "@/components/switch/BlogSwitch.vue";
export default {
  name: "BlogEditor",
  components: {
    BlogSwitch,
  },
  data() {
    return {
      id: this.$route.query.id,
      blogData: {
        title: "",
        abstract: "",
        cover: "",
        content: "",
        ishot: false,
        isinterface: false,
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
  min-height: 100vh;
  overflow: hidden;
}
.blog-editor .admin-navbar {
  height: 60px;
  line-height: 60px;
  background-color: var(--assist-color);
  color: var(--main-color);
  font-family: var(--text-font);
  text-align: center;
  font-size: 21.28px;
  font-weight: bold;
}

input[type="text"] {
  width: 100vw;
  height: 120px;
  outline: none;
  border: 1px solid var(--border-color);
  text-align: center;
  font-size: 18px;
}
button {
  height: 50px;
  min-width: 150px;
  max-width: 200px;
  outline: none;
  border: 1px solid var(--border-color);
  color: var(--main-color);
  background-color: var(--assist-color);
}
button:hover {
  background-color: var(--accent-color);
}
.md-editor {
  max-width: 100vw;
  min-height: 500px;
}
.md-editor ::v-deep(.v-md-editor__toolbar) {
  display: none;
}
</style>
