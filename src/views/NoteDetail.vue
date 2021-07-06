<template>
  <div class="blog-detail">
    <header>
      <div class="title">
        <div @click="changeMenu('/admin/note')">
          <span class="iconfont icon-edit"></span>
          <span class>编辑文章</span>
        </div>
        <div class="div">
          <span class="iconfont icon-view"></span>
          <span>浏览量</span>
        </div>
        <div class="div">
          <span class="iconfont icon-comment"></span>
          <span>评论</span>
        </div>
        <div>
          <span class="iconfont icon-time"></span>
          <span>{{ correctTime(created_time) }}</span>
        </div>
        <div>
          <span class="iconfont icon-update"></span>
          <span>{{ correctTime(updated_time) }}</span>
        </div>
        <div @click="goBack">
          <span class="iconfont icon-back"></span>
          <span>go back</span>
        </div>
      </div>
    </header>
    <div class="preview">
      <v-md-preview :text="content" @copy-code-success="copyCodeSuccess()">
      </v-md-preview>
    </div>
  </div>
</template>

<script>
import { getBlogDetail } from "@/api/blogs.js";
import { htmlDecode } from "@/utils/htmlUtils.js";
import { getYearMonthDay } from "@/utils/timeUtils.js";

export default {
  data() {
    return {
      id: null,
      pid: null,
      updated_time: null,
      created_time: null,
      content: "",
    };
  },
  methods: {
    correctTime(time) {
      return getYearMonthDay(time);
    },
    copyCodeSuccess() {
      alert("复制成功");
    },
    changeMenu(path) {
      this.$router.push({
        path,
        query: {
          id: this.$route.query.id,
        },
      });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {
    getBlogDetail(this.$route.query.id).then((result) => {
      const res = result.data;
      this.id = res.data.id;
      this.pid = res.data.pid;
      this.updated_time = res.data.updated_time;
      this.created_time = res.data.created_time;
      this.content = htmlDecode(res.data.content);
    });
  },
};
</script>

<style scoped>
.blog-detail {
  box-sizing: border-box;
  max-width: 900px;
  margin: 100px auto 30px;
  padding: 10px;
  border: 1px solid var(--border-color);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
.title {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
  padding: 0 20px;
  color: #6a737d;
  font-size: 14px;
}
.title div {
  width: 100px;
  padding: 5px;
}
.title div span {
  margin: 0 2px;
}
.title .icon-edit {
  color: #fe898a;
}
.title .icon-view {
  color: #2166d6;
}
.title .icon-comment {
  color: #ffd33d;
}
.title .icon-time {
  color: #d15704;
}
.title .icon-update {
  color: #28a745;
}
.title .icon-back {
  color: #e34c26;
}
.preview {
  background-color: var(--main-color);
}
.paging {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  height: 40px;
}
</style>
