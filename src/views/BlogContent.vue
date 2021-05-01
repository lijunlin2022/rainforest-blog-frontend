<template>
  <div class="blog-content">
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
    <div class="paging">
      <!-- 如果 current 为 0, 则没有上一页 -->
      <blog-button v-if="current !== 0" @click="handlePreBtn">
        <template v-slot:default>上一页</template>
      </blog-button>
      <!-- 如果 articleData 的长度小于 size, 则没有下一页 -->
      <blog-button v-if="articleData.length === size" @click="handleNextBtn">
        <template v-slot:default>下一页</template>
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
    handlePreBtn() {
      this.current--;
      this.handleGetListByPage();
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    },
    handleNextBtn() {
      this.current++;
      this.handleGetListByPage();
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
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
  margin-top: 80px;
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
