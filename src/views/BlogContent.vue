<template>
  <div class="blog-content">
    <div class="top-posts">
      <div class="post">热门文章 1</div>
      <div class="post">热门文章 2</div>
      <div class="post">热门文章 3</div>
      <div class="post">热门文章 4</div>
      <div class="post">热门文章 5</div>
      <div class="post">热门文章 6</div>
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
        <router-link :to="{ path: '/detail', query: { id: item.id } }">
          点击阅读
        </router-link>
      </template>
    </blog-article>
    <div class="paging">
      <!-- 如果 current 为 0, 则没有上一页 -->
      <span v-if="current !== 0" @click="handlePreBtn">上一页</span>
      <span @click="handleNextBtn">下一页</span>
    </div>
  </div>
</template>

<script>
import { getBlogListByPage } from "@/api/blogs.js";
import { timeDecode } from "@/utils/timeUtils.js";
import BlogArticle from "@/components/article/BlogArticle.vue";
export default {
  name: "BlogContent",
  components: {
    BlogArticle,
  },
  data() {
    return {
      current: 0,
      size: 5,
      articleData: [],
    };
  },
  methods: {
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
  },
  created() {
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
.top-posts .post {
  position: relative;
  width: 258px;
  height: 49px;
  margin: 5px 20px;
  line-height: 50px;
  text-align: center;
  border: 1px solid var(--assist-color);
}
.top-posts .post::before {
  content: "hot";
  position: absolute;
  display: block;
  height: 30px;
  line-height: 30px;
  width: 25px;
  left: 20px;
  background-color: var(--assist-color);
  font-size: 5px;
}
.paging {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
.paging span {
  padding: 5px 10px;
  margin: 0 20px;

  font-size: 14px;
  font-family: var(--nav-font);
  color: var(--bg-color);
  background-color: var(--assist-color);

  cursor: pointer;
}
.paging span:hover {
  background-color: var(--border-color);
}
</style>
