<template>
  <div class="note-list">
    <header>
      <a-input-search
        placeholder="Find a article..."
        v-model:value="searchValue"
        @change="onChange"
      >
      </a-input-search>
      <a-button type="primary" @click="addNote">New</a-button>
    </header>
    <a-list item-layout="vertical" size="large" :data-source="listData">
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <a-list-item-meta :description="item.abstract">
            <template #title>
              <a>{{ item.title }}</a>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script>
import { getBlogsList } from "@/api/blogs.js";
export default {
  data() {
    return {
      searchValue: "",
      listData: [],
    };
  },
  created() {
    getBlogsList().then((result) => {
      const res = result.data;
      this.listData = res.data;
    });
  },
  methods: {
    onChange() {
      getBlogsList(null, null, null, null, this.searchValue).then((result) => {
        const res = result.data;
        this.listData = res.data;
      });
    },
  },
};
</script>

<style scoped>
.note-list {
  box-sizing: border-box;
  max-width: 600px;
  margin: 80px auto;
}
header {
  display: flex;
  flex-direction: row;
}
header > button {
  margin: 0 10px;
}
</style>
