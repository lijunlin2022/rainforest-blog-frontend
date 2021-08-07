<template>
  <a-table :columns="columns" :data-source="notebooksArray">
    <template #action>
      <a>Delete</a>
    </template>
  </a-table>
</template>
<script>
import { getNotebookList } from "@/api/notebooks.js";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "operation",
    dataIndex: "operation",
    slots: {
      customRender: "operation",
    },
  },
];
export default {
  name: "Overview",
  data() {
    return {
      columns,
      notebooksArray: [],
    };
  },
  async created() {
    const queryData = {};
    queryData.current = null;
    queryData.size = null;
    const notebooks = await getNotebookList(queryData);
    this.notebooksArray = notebooks.data.data.map((item) => {
      return this.$utils.htmlDecodeObject(item);
    });
  },
};
</script>
