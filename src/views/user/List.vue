<template>
  <div class="note-list">
    <header>
      <a-input-search
        placeholder="Find a article..."
        v-model:value="searchValue"
        @change="onChange"
      >
      </a-input-search>
    </header>
    <a-list item-layout="vertical" :data-source="listArray">
      <template #renderItem="{ item }">
        <a-list-item
          key="item.title"
          @click="$utils.changeRoute('/detail', item.id)"
        >
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
import { getNoteList } from "@/api/notes.js";
export default {
  data() {
    return {
      searchValue: "",
      listArray: [],
    };
  },
  async created() {
    let result = await getNoteList();
    this.listArray = result.data.data.map((item) => {
      return this.$utils.htmlDecodeObject(item);
    });
  },
  methods: {
    async onChange() {
      const queryBody = {};
      queryBody.keyword = this.searchValue;
      let result = await getNoteList(queryBody);
      this.listArray = result.data.data.map((item) => {
        return this.$utils.htmlDecodeObject(item);
      });
    },
  },
};
</script>

<style scoped>
.note-list {
  box-sizing: border-box;
  max-width: 600px;
  margin: 20px auto;
  padding: 0 20px;
}
</style>
