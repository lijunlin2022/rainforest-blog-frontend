<template>
  <div class="blog-content">
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
      if (author === "undefined") {
        return "佚名";
      }
    },
  },
  created() {
    this.handleGetList();
  },
};
</script>
