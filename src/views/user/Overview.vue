<template>
  <div class="blog-content">
    <div class="center">
      <!-- 简介 -->
      <div class="title">
        <span>Brief Introduction</span>
      </div>

      <div class="profile">
        <img
          src="https://gitee.com/Li-Jun-Lin/figure/raw/master/avater/trees.png"
        />
        <div>
          <v-md-preview :text="profileContent"></v-md-preview>
        </div>
      </div>

      <!------- 笔记本 ------->
      <div class="title">
        <span>Popular Notebooks</span>
      </div>
      <div class="notebooks">
        <notebook
          v-for="item in notebookArray"
          :key="item.id"
          @click="$utils.changeRoute('/nDetail', item.id)"
        >
          <template v-slot:name>
            {{ item.name }}
          </template>
          <template v-slot:description>
            {{ item.description }}
          </template>
        </notebook>
      </div>

      <!------- 文章列表 ------->
      <div class="title">
        <span>Recent Articles</span>
      </div>
      <div class="articles">
        <note v-for="item in articleArray" :key="item.id">
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
        </note>
      </div>

      <!------- 下一页 ------->
      <div class="paging">
        <a-button v-if="hasNext" @click="handleNextBtn">Next</a-button>
        <a-button v-else>No more...</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getBlogsList, getBlogDetail } from "@/api/blogs.js";
import { getNotebooksList } from "@/api/notebooks.js";
import Notebook from "@/components/notebook/Notebook.vue";
import Note from "@/components/note/Note.vue";

export default {
  name: "Overview",
  components: {
    Notebook,
    Note,
  },
  data() {
    return {
      current: 0,
      size: 5,
      hasNext: true,
      profileContent: "",
      notebookArray: [],
      articleArray: [],
    };
  },
  methods: {
    async handleNextBtn() {
      this.current++;
      const res = await getBlogsList(null, this.current, this.size);
      let array = res.data.data.map((item) => {
        return this.$utils.htmlDecodeObject(item);
      });
      this.articleArray.push(...array);
      if (res.data.data.length < this.size) {
        this.hasNext = false;
      }
    },
  },
  async created() {
    try {
      const profile = await getBlogDetail(null, 1, "PROFILE");
      const notebooks = await getNotebooksList(0, 6);
      const articles = await getBlogsList(null, this.current, this.size);
      this.profileContent = this.$utils.htmlDecode(profile.data.data.content);
      this.notebookArray = notebooks.data.data.map((item) => {
        return this.$utils.htmlDecodeObject(item);
      });
      this.articleArray = articles.data.data.map((item) => {
        return this.$utils.htmlDecodeObject(item);
      });
    } catch (error) {
      console.error("网络请求失败");
    }
  },
};
</script>

<style scoped>
.blog-content {
  box-sizing: border-box;
  min-height: calc(100vh - 60px);
}
.center {
  max-width: 900px;
  margin: auto;
}
.title {
  margin: 30px 0;
  padding: 0 16px;
  color: var(--secondary-color);
}
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--secondary-color);
}
.profile > img {
  width: 100px;
}
@media screen and (min-width: 992px) {
  .profile {
    flex-direction: row;
  }
  .profile > img {
    width: 200px;
  }
}
.notebooks {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 14px;
}
.paging {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
</style>
