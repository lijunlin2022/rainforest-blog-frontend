<template>
  <div class="blog-detail">
    <!-- 工具栏 -->
    <header class="toolbar">
      <div @click="$utils.changeRoute('/admin/note', blogData.id)">
        <span class="iconfont icon-edit"></span>
        <span class>编辑文章</span>
      </div>
      <div>
        <span class="iconfont icon-view"></span>
        <span>浏览量</span>
      </div>
      <div>
        <span class="iconfont icon-comment"></span>
        <span>评论</span>
      </div>
      <div>
        <span class="iconfont icon-time"></span>
        <span>{{ $utils.getYearMonthDay(blogData.created_time) }}</span>
      </div>
      <div>
        <span class="iconfont icon-update"></span>
        <span>{{ $utils.getYearMonthDay(blogData.updated_time) }}</span>
      </div>
      <div @click="$router.go(-1)">
        <span class="iconfont icon-back"></span>
        <span>go back</span>
      </div>
    </header>

    <!-- 文章预览 -->
    <v-md-preview
      :text="blogData.content"
      @copy-code-success="copyCodeSuccess()"
    >
    </v-md-preview>
  </div>
</template>

<script>
import { getBlogDetail } from "@/api/blogs.js";

export default {
  data() {
    return {
      blogData: {
        id: null,
        pid: null,
        updated_time: null,
        created_time: null,
        content: "",
      },
    };
  },
  methods: {
    copyCodeSuccess() {
      alert("复制成功");
    },
  },
  async created() {
    const result = await getBlogDetail(this.$route.query.id);
    this.blogData = this.$utils.htmlDecodeObject(result.data.data);
  },
};
</script>

<style scoped>
.blog-detail {
  box-sizing: border-box;
  max-width: 900px;
  margin: 20px auto;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
.toolbar {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
  color: #6a737d;
  font-size: 14px;
}
.toolbar div {
  width: 100px;
  padding: 5px;
}
.toolbar div span {
  margin: 0 2px;
}
.toolbar .icon-edit {
  color: #fe898a;
}
.toolbar .icon-view {
  color: #2166d6;
}
.toolbar .icon-comment {
  color: #ffd33d;
}
.toolbar .icon-time {
  color: #d15704;
}
.toolbar .icon-update {
  color: #28a745;
}
.toolbar .icon-back {
  color: #e34c26;
}
</style>
