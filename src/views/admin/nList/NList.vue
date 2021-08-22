<template>
  <a-header>
    <template #default>
      <el-button @click="dialog = true" type="success" size="small">
        新增
      </el-button>
    </template>
  </a-header>
  <el-table :data="notebooksArray" stripe border height="500">
    <el-table-column
      v-for="item in columns"
      :label="item.label"
      :key="item"
      :prop="item.prop"
    >
    </el-table-column>
    <el-table-column label="操作" width="150 ">
      <template #default="scope">
        <el-button
          type="primary"
          size="small"
          @click="$utils.changeRoute(`/admin/list/${scope.row.id}`)"
        >
          查看
        </el-button>
        <el-button type="danger" @click="openDialog(scope)" size="small">
          编辑
        </el-button>
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
      <el-button @click="dialog = false" size="small">取消</el-button>
      <el-button type="primary" @click="submit" size="small">提交</el-button>
    </div>
  </el-drawer>
</template>

<script>
import {
  getNotebookList,
  updateNotebook,
  newNotebook,
} from "@/api/notebooks.js";
import columns from "./components/columns.js";
import AHeader from "@/components/header/AHeader.vue";

export default {
  components: {
    AHeader,
  },
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
    const notebooks = await getNotebookList({ current: null, size: null });
    this.notebooksArray = notebooks.data.data.map((item) => {
      return this.$utils.htmlDecodeObject(item);
    });
  },
  methods: {
    openDialog(scope) {
      const { id, name, description } = scope.row;
      this.form = { id, name, description };
      this.dialog = true;
    },
    submit() {
      if (this.form.id === null) {
        this.handleAdd();
      } else {
        this.handleUpdate();
      }
    },
    async handleAdd() {
      try {
        await newNotebook(this.form);
        // 新增成功后重新调用获取表格的接口
        const notebooks = await getNotebookList({ current: null, size: null });
        this.notebooksArray = notebooks.data.data.map((item) => {
          return this.$utils.htmlDecodeObject(item);
        });
        this.dialog = false;
        this.$message.success("新增成功");
      } catch (e) {
        this.$message.error("新增失败");
      }
    },
    async handleUpdate() {
      try {
        await updateNotebook(this.form.id, this.form);
        // 更新成功后重新调用获取表格的接口
        const notebooks = await getNotebookList({ current: null, size: null });
        this.notebooksArray = notebooks.data.data.map((item) => {
          return this.$utils.htmlDecodeObject(item);
        });
        this.dialog = false;
        this.$message.success("更新成功");
      } catch (e) {
        this.$message.error("更新失败");
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  padding: 10px;
}
.form-container .description {
  margin: 20px 0;
}
.btn-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
}
</style>
