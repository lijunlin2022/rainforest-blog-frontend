<template>
  <div class="blog-content">
    <!------- 笔记本 ------->
    <div class="tips">
      <span>Popular Notebooks</span>
    </div>
    <div class="notebooks">
      <blog-notebook
        v-for="item in notebooksData"
        :key="item.id"
        @click="handleReadMore(item.id)"
      >
        <template v-slot:name>
          {{ item.name }}
        </template>
        <template v-slot:description>
          {{ item.description }}
        </template>
      </blog-notebook>
    </div>

    <!------- 文章列表 ------->
    <div class="tips">
      <span>Recent Articles</span>
    </div>
    <div class="articles">
      <blog-article v-for="item in articleData" :key="item.id">
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
          <a @click="handleReadMore(item.id)">Read more ></a>
        </template>
      </blog-article>
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
import { getLatestUpdatedBlogsList } from "@/api/blogs.js";
import { getLatestUpdatedNotebooksList } from "@/api/notebooks.js";
import { getYearMonthDay } from "@/utils/timeUtils.js";
import BlogNotebook from "@/components/notebook/BlogNotebook.vue";
import BlogArticle from "@/components/article/BlogArticle.vue";
import BlogButton from "@/components/button/BlogButton.vue";

export default {
  name: "BlogContent",
  components: {
    BlogNotebook,
    BlogArticle,
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
    handleGetHotBlogList() {
      getLatestUpdatedNotebooksList(0, 6).then((result) => {
        const res = result.data;
        this.notebooksData = res.data;
      });
    },
    handleGetListByPage() {
      getLatestUpdatedBlogsList(this.current, this.size).then((result) => {
        const res = result.data;
        this.articleData = res.data;
      });
    },
    handleNextBtn() {
      this.current++;
      getLatestUpdatedBlogsList(this.current, this.size).then((result) => {
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
