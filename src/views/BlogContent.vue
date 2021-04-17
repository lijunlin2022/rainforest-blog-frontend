<template>
  <div class="blog-content">
    <blog-article v-for="item in tableData" :key="item.id">
      <template v-slot:title>
        {{ item.title }}
      </template>
      <template v-slot:createtime>
        {{ item.createtime }}
      </template>
      <template v-slot:cover>
        <img
          src="https://static.timesofisrael.com/www/uploads/2020/12/iStock-1090872318.jpg"
        />
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
import { getBlogList } from "@/api/blogs";
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
  },
  created() {
    this.handleGetList();
  },
};
</script>
