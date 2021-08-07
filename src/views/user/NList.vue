<template>
  <div class="notebook-list">
    <!-- 搜索栏 -->
    <header>
      <a-input-search
        placeholder="Find a notebook..."
        v-model:value="searchValue"
        @change="onChange"
      >
      </a-input-search>
      <router-link :to="{ path: '/admin/notebook' }">
        <a-button type="primary">New</a-button>
      </router-link>
    </header>

    <!-- 列表栏 -->
    <a-list item-layout="vertical" :data-source="listArray">
      <template #renderItem="{ item }">
        <a-list-item
          key="item.name"
          @click="$utils.changeRoute('/nDetail', item.id)"
        >
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
import { getNotebookList } from "@/api/notebooks.js";
export default {
  data() {
    return {
      searchValue: "",
      listArray: [],
    };
  },
  async created() {
    let result = await getNotebookList();
    this.listArray = result.data.data.map((item) => {
      return this.$utils.htmlDecodeObject(item);
    });
  },
  methods: {
    onChange() {
      let result = getNotebookList(null, null, this.searchValue);
      this.listArray = result.data.data.map((item) => {
        return this.$utils.htmlDecodeObject(item);
      });
    },
  },
};
</script>

<style scoped>
.notebook-list {
  box-sizing: border-box;
  max-width: 500px;
  margin: 20px auto;
  padding: 0 20px;
}
header {
  display: flex;
  flex-direction: row;
}
header button {
  margin: 0 10px;
}
</style>
