<template>
  <div class="admin-note">
    <aside class="sidebar"></aside>
    <main>
      <input
        type="text"
        class="title"
        v-model="noteData.title"
        placeholder="请输入标题"
      />
      <v-md-editor class="md-editor" v-model="noteData.content"></v-md-editor>
      <input type="text" v-model="noteData.abstract" placeholder="请输入摘要" />
      <div class="btn-container">
        <a-button type="primary" @click="submit">提交</a-button>
        <a-button type="primary" @click="$router.go(-1)">返回</a-button>
      </div>
    </main>
  </div>
</template>

<script>
import { newNote, getNoteDetail, updateNote } from "@/api/notes.js";
export default {
  name: "AdminNote",
  data() {
    return {
      noteData: {
        pid: null,
        title: "",
        abstract: "",
        content: "",
      },
    };
  },
  methods: {
    submit() {
      if (
        this.noteData.content !== "" &&
        this.noteData.title !== "" &&
        this.noteData.abstract !== ""
      ) {
        // 有 id 证明是更新操作
        const id = this.$route.query.id;
        if (id) {
          updateNote(id, this.noteData).then((result) => {
            if (result.data.code === 200) {
              alert("更新成功");
            }
          });
        } else {
          // 没有 id 证明是新增操作
          this.noteData.pid = this.$route.query.pid;
          newNote(this.noteData).then((result) => {
            if (result.data.code === 200) {
              alert("新增成功");
            }
          });
        }
      }
    },
    handleUpdateNote() {
      if (this.noteData.content === "") {
        alert("输入为空, 不可以发送博客");
        return;
      }
      updateNote(this.id, this.noteData).then((result) => {
        const res = result.data;
        if (res.errno === 0) {
          alert("修改成功");
        } else {
          alert("修改失败");
        }
      });
    },
  },
  created() {
    const { id, pid } = this.$route.query;
    if (id) {
      getNoteDetail(id).then((result) => {
        this.noteData = this.$utils.htmlDecodeObject(result.data.data);
      });
    }
    if (pid) {
      this.noteData.content = "# 请输入博客内容\n";
    }
  },
};
</script>

<style scoped>
.admin-note {
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
