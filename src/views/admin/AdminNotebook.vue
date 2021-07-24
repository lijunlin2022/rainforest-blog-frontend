<template>
  <div class="admin-notebook">
    <main>
      <input
        type="text"
        v-model="notebookData.name"
        placeholder="请输入笔记本标题"
      />
      <input
        type="text"
        v-model="notebookData.description"
        placeholder="请输入笔记本介绍"
      />
      <div class="btn-container">
        <a-button type="primary" @click="submit">提交</a-button>
        <a-button type="primary" @click="$router.go(-1)">返回</a-button>
      </div>
    </main>
  </div>
</template>

<script>
import {
  newNotebook,
  getNotebookDetail,
  updateNotebook,
} from "@/api/notebooks.js";
export default {
  name: "AdminNotebook",
  data() {
    return {
      notebookData: {
        id: null,
        name: "",
        description: "",
      },
    };
  },
  methods: {
    submit() {
      if (
        this.notebookData.name !== "" &&
        this.notebookData.description !== ""
      ) {
        // 有 id 证明是更新操作
        if (this.id) {
          updateNotebook(this.id, this.notebookData).then((result) => {
            if (result.data.code === 200) {
              alert("更新成功");
            }
          });
        } else {
          // 没有 id 证明是新增操作
          newNotebook(this.notebookData).then((result) => {
            if (result.data.code === 200) {
              alert("新增成功");
            }
          });
        }
      }
    },
  },
  created() {
    this.id = this.$route.query.id;
    if (this.id) {
      getNotebookDetail(this.id).then((result) => {
        this.notebookData = this.$utils.htmlDecodeObject(result.data.data);
      });
    }
  },
};
</script>

<style scoped>
.admin-notebook {
  box-sizing: border-box;
}
input[type="text"] {
  height: 30px;
  width: 100%;
  padding: 20px;
  border: 1px solid #d1d5da;
  outline: none;
  text-align: left;
  font-size: 14px;
}
.btn-container {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}
.btn-container > button {
  margin: 5px;
}
.md-editor {
  width: 100%;
  min-height: 500px;
  box-shadow: none;
  border: 1px solid #d1d5da;
}
.md-editor ::v-deep(.v-md-editor__toolbar) {
  display: none;
}
</style>
