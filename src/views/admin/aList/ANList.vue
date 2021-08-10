<template>
  <el-table :data="notebooksArray" style="font-size: 16px" stripe>
    <el-table-column
      v-for="item in columns"
      :label="item.label"
      :key="item"
      :prop="item.prop"
    >
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button type="text" @click="openDialog(scope)">编辑</el-button>
        <el-button type="text">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-drawer v-model="dialog" size="70%" :show-close="false">
    <div class="form-container">
      <el-input
        class="name"
        placeholder="请输入 Notebook 的名字"
        v-model="form.name"
      />
      <el-input
        class="description"
        placeholder="请输入 Notebook 的描述"
        v-model="form.description"
        type="textarea"
        autosize
      />
      <el-button @click="dialog = false">取消</el-button>
      <el-button type="primary">提交</el-button>
    </div>
  </el-drawer>
</template>

<script>
import { getNotebookList } from "@/api/notebooks.js";
const columns = [
  {
    label: "名字",
    prop: "name",
  },
  {
    label: "描述",
    prop: "description",
  },
];
export default {
  name: "Overview",
  data() {
    return {
      columns,
      notebooksArray: [],
      dialog: false,
      form: {
        id: null,
        name: "",
        description: "",
      },
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
  methods: {
    openDialog(scope) {
      const { id, name, description } = scope.row;
      this.form.id = id;
      this.form.name = name;
      this.form.description = description;
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
.form-container {
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
}
.description {
  margin: 40px 0;
}
</style>
