<template>
  <div class="blog-content">
    <!------- 笔记本 ------->
    <div class="tips">
      <span>Popular Notebooks</span>
    </div>
    <div class="notebooks">
      <blog-directory
        v-for="item in notebooksData"
        :key="item.id"
        @click="openNotebook(item.id)"
      >
        <template v-slot:name>
          {{ item.name }}
        </template>
        <template v-slot:description>
          {{ item.description }}
        </template>
      </blog-directory>
    </div>

    <!------- 文章列表 ------->
    <div class="tips">
      <span>Recent Articles</span>
    </div>
    <div class="articles">
      <blog-file v-for="item in articleData" :key="item.id">
        <template v-slot:title>
          {{ item.title }}
        </template>
        <template v-slot:abstract>
          {{ item.abstract }}
        </template>
        <template v-slot:createdTime>
          {{ correctTime(item.created_time) }}
        </template>
        <template v-slot:updatedTime>
          {{ correctTime(item.updated_time) }}
        </template>
        <template v-slot:link>
          <a @click="openBlog(item.id)">Read more ></a>
        </template>
      </blog-file>
    </div>

    <!------- 下一页 ------->
    <div class="paging">
      <blog-button v-if="hasNext" @click="handleNextBtn">
        <template v-slot:default>Next</template>
      </blog-button>
      <blog-button v-else>
        <template v-slot:default>No more...</template>
      </blog-button>
    </div>
  </div>
</template>

<script>
import { getBlogsList } from "@/api/blogs.js";
import { getNotebooksList } from "@/api/notebooks.js";
import { getYearMonthDay } from "@/utils/timeUtils.js";
import BlogDirectory from "@/components/directory/BlogDirectory.vue";
import BlogFile from "@/components/file/BlogFile.vue";
import BlogButton from "@/components/button/BlogButton.vue";

export default {
  name: "BlogOverview",
  components: {
    BlogDirectory,
    BlogFile,
    BlogButton,
  },
  data() {
    return {
      current: 0,
      size: 5,
      hasNext: true,
      notebooksData: [],
      articleData: [],
    };
  },
  methods: {
    openNotebook(id) {
      this.$router.push({
        path: "/notebook",
        query: { id },
      });
    },
    openBlog(id) {
      this.$router.push({
        path: "/detail",
        query: { id },
      });
    },
    handleGetHotBlogList() {
      getNotebooksList(0, 6).then((result) => {
        const res = result.data;
        this.notebooksData = res.data;
      });
    },
    handleGetListByPage() {
      getBlogsList(null, this.current, this.size).then((result) => {
        const res = result.data;
        this.articleData = res.data;
      });
    },
    handleNextBtn() {
      this.current++;
      getBlogsList(null, this.current, this.size).then((result) => {
        const res = result.data;
        this.articleData.push(...res.data);
        if (res.data.length < this.size) {
          this.hasNext = false;
        }
      });
    },
    correctTime(time) {
      return getYearMonthDay(time);
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
  box-sizing: border-box;
  min-height: calc(100vh - 60px);
}
.tips {
  margin: 78px auto 18px;
  max-width: 900px;
  padding: 0 16px;
  color: var(--secondary-color);
}
.notebooks {
  margin: 30px auto 8px;
  max-width: 900px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 14px;
}
.articles {
  margin: 30px auto;
  max-width: 900px;
  /* display: flex;
  flex-direction: column; */
}
.paging {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
</style>
