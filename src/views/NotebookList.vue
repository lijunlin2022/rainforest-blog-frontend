<template>
  <div class="notebook-list">
    <header>
      <a-input-search
        placeholder="Find a notebook..."
        v-model:value="searchValue"
        @change="onChange"
      >
      </a-input-search>
      <a-button type="primary" @click="addNotebook">New</a-button>
    </header>
    <a-list item-layout="vertical" size="large" :data-source="listData">
      <template #renderItem="{ item }">
        <a-list-item key="item.name">
          <a-list-item-meta :description="item.description">
            <template #title>
              <a>{{ item.name }}</a>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script>
import { getNotebooksList } from "@/api/notebooks.js";
export default {
  data() {
    return {
      searchValue: "",
      listData: [],
    };
  },
  created() {
    getNotebooksList().then((result) => {
      const res = result.data;
      this.listData = res.data;
    });
  },
  methods: {
    onChange() {
      getNotebooksList(null, null, this.searchValue).then((result) => {
        const res = result.data;
        this.listData = res.data;
      });
    },
  },
};
</script>

<style scoped>
.notebook-list {
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
