<template>
  <div class="notebook-list">
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
    <a-list item-layout="vertical" :data-source="listArray">
      <template #renderItem="{ item }">
        <a-list-item
          key="item.name"
          @click="$utils.changeRoute('/notebookDetail', item.id)"
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
import { getNotebooksList } from "@/api/notebooks.js";
export default {
  data() {
    return {
      searchValue: "",
      listArray: [],
    };
  },
  created() {
    getNotebooksList().then((result) => {
      let array = result.data.data.map((item) => {
        return this.$utils.htmlDecodeObject(item);
      });
      this.listArray = array;
    });
  },
  methods: {
    onChange() {
      getNotebooksList(null, null, this.searchValue).then((result) => {
        let array = result.data.data.map((item) => {
          return this.$utils.htmlDecodeObject(item);
        });
        this.listArray = array;
      });
    },
  },
};
</script>

<style scoped>
.notebook-list {
  box-sizing: border-box;
  max-width: 500px;
  margin: 80px auto;
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
