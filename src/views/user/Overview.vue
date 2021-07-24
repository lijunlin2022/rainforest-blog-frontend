<template>
  <div class="blog-content">
    <!------- 笔记本 ------->
    <div class="tips">
      <span>Popular Notebooks</span>
    </div>
    <div class="notebooks">
      <blog-directory
        v-for="item in notebookArray"
        :key="item.id"
        @click="$utils.changeRoute('/notebookDetail', item.id)"
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
      <blog-file v-for="item in articleArray" :key="item.id">
        <template v-slot:title>
          {{ item.title }}
        </template>
        <template v-slot:abstract>
          {{ item.abstract }}
        </template>
        <template v-slot:createdTime>
          {{ $utils.getYearMonthDay(item.created_time) }}
        </template>
        <template v-slot:updatedTime>
          {{ $utils.getYearMonthDay(item.updated_time) }}
        </template>
        <template v-slot:link>
          <a @click="$utils.changeRoute('/detail', item.id)">Read more ></a>
        </template>
      </blog-file>
    </div>

    <!------- 下一页 ------->
    <div class="paging">
      <a-button v-if="hasNext" @click="handleNextBtn">Next</a-button>
      <a-button v-else>No more...</a-button>
    </div>
  </div>
</template>

<script>
import { getBlogsList } from "@/api/blogs.js";
import { getNotebooksList } from "@/api/notebooks.js";
import BlogDirectory from "@/components/directory/BlogDirectory.vue";
import BlogFile from "@/components/file/BlogFile.vue";

export default {
  name: "Overview",
  components: {
    BlogDirectory,
    BlogFile,
  },
  data() {
    return {
      current: 0,
      size: 5,
      hasNext: true,
      notebookArray: [],
      articleArray: [],
    };
  },
  methods: {
    handleGetHotBlogList() {
      getNotebooksList(0, 6).then((result) => {
        let array = result.data.data.map((item) => {
          return this.$utils.htmlDecodeObject(item);
        });
        this.notebookArray = array;
      });
    },
    handleGetListByPage() {
      getBlogsList(null, this.current, this.size).then((result) => {
        let array = result.data.data.map((item) => {
          return this.$utils.htmlDecodeObject(item);
        });
        this.articleArray = array;
      });
    },
    handleNextBtn() {
      this.current++;
      getBlogsList(null, this.current, this.size).then((result) => {
        let array = result.data.data.map((item) => {
          return this.$utils.htmlDecodeObject(item);
        });

        this.articleArray.push(...array);
        if (result.data.data.length < this.size) {
          this.hasNext = false;
        }
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
