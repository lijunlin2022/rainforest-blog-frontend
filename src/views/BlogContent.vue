<template>
  <div class="blog-content">
    <!------- 热点文章 ------->
    <div class="top-posts">
      <blog-post
        v-for="item in postData"
        :key="item.id"
        @click="handleReadMore(item.id)"
      >
        <template v-slot:default>
          {{ item.title }}
        </template>
      </blog-post>
    </div>

    <!------- 文章列表 ------->
    <blog-article v-for="item in articleData" :key="item.id">
      <template v-slot:title>
        {{ item.title }}
      </template>
      <template v-slot:createtime>
        {{ correctTime(item.createtime) }}
        | {{ item.author }}
      </template>
      <template v-slot:cover>
        <img :src="item.cover" />
      </template>
      <template v-slot:abstract>
        {{ item.abstract }}
      </template>
      <template v-slot:link>
        <a @click="handleReadMore(item.id)">点击阅读</a>
      </template>
    </blog-article>

    <!------- 下一页 ------->
    <div class="paging">
      <blog-button v-if="hasNext" @click="handleNextBtn">
        <template v-slot:default>更多</template>
      </blog-button>
      <blog-button v-else>
        <template v-slot:default>很高兴你看到这里，但是真的没有了...</template>
      </blog-button>
    </div>
  </div>
</template>

<script>
import { getHotBlogList, getBlogListByPage } from "@/api/blogs.js";
import { timeDecode } from "@/utils/timeUtils.js";
import BlogArticle from "@/components/article/BlogArticle.vue";
import BlogButton from "@/components/button/BlogButton.vue";
import BlogPost from "@/components/post/BlogPost.vue";

export default {
  name: "BlogContent",
  components: {
    BlogArticle,
    BlogButton,
    BlogPost,
  },
  data() {
    return {
      current: 0,
      size: 5,
      hasNext: true,
      postData: [],
      articleData: [],
    };
  },
  methods: {
    handleGetHotBlogList() {
      getHotBlogList().then((result) => {
        const res = result.data;
        this.postData = res.data;
      });
    },
    handleGetListByPage() {
      getBlogListByPage(this.current, this.size).then((result) => {
        const res = result.data;
        this.articleData = res.data;
      });
    },
    handleNextBtn() {
      this.current++;
      getBlogListByPage(this.current, this.size).then((result) => {
        const res = result.data;
        this.articleData.push(...res.data);
        if (res.data.length < this.size) {
          this.hasNext = false;
        }
      });
    },
    correctTime(time) {
      return timeDecode(time);
    },
    handleReadMore(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id,
        },
      });
    },
  },
  created() {
    this.handleGetHotBlogList();
    this.handleGetListByPage();
  },
};
</script>

<style scoped>
.blog-content {
  min-height: calc(100vh - 60px);
}
.top-posts {
  margin: 20px auto;
  max-width: 900px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.paging {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
</style>
