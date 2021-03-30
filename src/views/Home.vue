<template>
  <div class="home">
    <button @click="handleBtnGetList">获取博客列表</button>
    <div>
      <ul>
        <li v-for="(item, index) in tableData" :key="item + index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getBlogList } from "@/api/blogs";
export default {
  name: "Home",
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
