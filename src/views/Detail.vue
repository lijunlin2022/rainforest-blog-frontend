<template>
  <div class="detail">
    <button @click="handleBtnGetDetail">获取博客详情</button>
    <div>
      {{ tableData }}
    </div>
  </div>
</template>

<script>
import { getBlogDetail } from "../api/blogs";

export default {
  name: "Detail",
  data() {
    return {
      tableData: {},
    };
  },
  methods: {
    handleBtnGetDetail() {
      getBlogDetail(1)
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
