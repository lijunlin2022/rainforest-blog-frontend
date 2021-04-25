<template>
  <div class="blog-content">
    <!-- <div class="top-posts">
      <button>热门文章 1</button>
      <button>热门文章 2</button>
      <button>热门文章 3</button>
      <button>热门文章 4</button>
      <button>热门文章 5</button>
      <button>热门文章 6</button>
    </div> -->
    <blog-article v-for="item in tableData" :key="item.id">
      <template v-slot:title>
        {{ item.title }}
      </template>
      <template v-slot:createtime>
        {{ correctTime(item.createtime) }}
        | {{ correctAuthor(item.author) }}
      </template>
      <template v-slot:cover>
        <img :src="item.cover" />
      </template>
      <template v-slot:abstract>
        {{ item.abstract }}
      </template>
      <template v-slot:link>
        <router-link :to="{ path: '/detail', query: { id: item.id } }">
          Reading More →
        </router-link>
      </template>
    </blog-article>
    <div class="top-posts">
      <button>上一页 👈</button>
      <button>下一页 👉</button>
    </div>
  </div>
</template>

<script>
import { getBlogList } from "@/api/blogs.js";
import { timeDecode } from "@/utils/timeUtils.js";
import BlogArticle from "@/components/article/BlogArticle.vue";
export default {
  name: "BlogContent",
  components: {
    BlogArticle,
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    handleGetList() {
      getBlogList().then((result) => {
        const res = result.data;
        this.tableData = res.data;
      });
    },
    correctTime(time) {
      return timeDecode(time);
    },
    correctAuthor(author) {
      if (author === "") {
        return "佚名";
      }
    },
  },
  created() {
    this.handleGetList();
  },
};
</script>

<style scoped>
.blog-content {
  margin-top: 60px;
}
.top-posts {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 20px auto;
}
button {
  width: 260px;
  height: 50px;
  margin: 10px;
}
</style>
