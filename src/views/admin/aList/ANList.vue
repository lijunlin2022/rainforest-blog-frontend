<template>
  <el-table :data="notebooksArray" style="font-size: 16px" stripe>
    <el-table-column type="index" label="序号"></el-table-column>
    <el-table-column
      v-for="item in columns"
      :label="item.label"
      :key="item"
      :prop="item.prop"
    >
    </el-table-column>
    <el-table-column label="操作" width="150 ">
      <template #default="scope">
        <el-button type="danger" @click="openDialog(scope)" size="small">
          编辑
        </el-button>
        <el-button type="primary" size="small">查看</el-button>
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
      <el-button type="primary" @click="handleUpdate">提交</el-button>
    </div>
  </el-drawer>
</template>

<script>
import { getNotebookList, updateNotebook } from "@/api/notebooks.js";
import columns from "./components/columns.js";
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
    async handleUpdate() {
      try {
        await updateNotebook(this.form.id, this.form);
        this.$message.success("更新成功");
        this.dialog = false;
      } catch (e) {
        this.$message.error("更新失败");
      }
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
