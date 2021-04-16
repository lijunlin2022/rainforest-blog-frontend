<template>
  <div class="blog-content">
    <blog-article>
      <template v-slot:title>
        <div>一个我想复杂了的问题</div>
      </template>
      <template v-slot:createtime>
        <div>2021-04-09 星期四</div>
      </template>
      <template v-slot:cover>
        <img
          src="https://static.timesofisrael.com/www/uploads/2020/12/iStock-1090872318.jpg"
        />
      </template>
      <template v-slot:abstract>
        <div>
          原本只需要一个插槽的方法，我却认为需要多个插槽。比较尴尬的是，在 scope
          中设置img 等标签外界是不生效的。所以需要使用 ::v-deep() 进行样式穿透
        </div>
      </template>
      <template v-slot:link>
        <router-link to="/detail">Reading More →</router-link>
      </template>
    </blog-article>
    <blog-article>
      <template v-slot:title>
        <div>一个我想复杂了的问题</div>
      </template>
      <template v-slot:createtime>
        <div>2021-04-09 星期四</div>
      </template>
      <template v-slot:cover>
        <img
          src="https://static.timesofisrael.com/www/uploads/2020/12/iStock-1090872318.jpg"
        />
      </template>
      <template v-slot:abstract>
        <div>
          原本只需要一个插槽的方法，我却认为需要多个插槽。比较尴尬的是，在 scope
          中设置img 等标签外界是不生效的。所以需要使用 ::v-deep() 进行样式穿透
        </div>
      </template>
      <template v-slot:link>
        <router-link to="/detail">Reading More →</router-link>
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
    handleBtnGetList() {
      getBlogList()
        .then((result) => {
          const res = result.data;
          this.tableData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
