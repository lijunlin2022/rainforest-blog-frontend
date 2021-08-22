<template>
  <a-header>
    <template #default>
      <el-button
        type="primary"
        size="small"
        @click="$utils.changeRoute(`/admin/list/${pid}`)"
      >
        上一页
      </el-button>
    </template>
  </a-header>
  <div class="admin-note">
    <main>
      <v-md-editor class="md-editor" v-model="noteData.content"></v-md-editor>
      <el-input type="text" class="title" v-model="noteData.title">
        <template #prepend>标题</template>
      </el-input>
      <el-input
        type="textarea"
        v-model="noteData.abstract"
        placeholder="请输入摘要"
      >
      </el-input>
      <div class="btn-container">
        <el-button type="danger" size="small" @click="submit">提交</el-button>
      </div>
    </main>
  </div>
</template>

<script>
import { newNote, getNoteDetail, updateNote } from "@/api/notes.js";
import AHeader from "@/components/header/AHeader.vue";

export default {
  components: { AHeader },
  data() {
    return {
      id: null,
      pid: null,
      noteData: {
        pid: null,
        title: "",
        abstract: "",
        content: "",
      },
    };
  },
  methods: {
    valid() {
      if (this.noteData.title.trim() === "") {
        this.$message.error("标题不能为空");
      } else if (this.noteData.content.trim() === "") {
        this.$message.error("内容不能为空");
      } else if (this.noteData.abstract.trim() === "") {
        this.$message.error("摘要不能为空");
      }
    },
    async submit() {
      this.valid();
      try {
        if (this.id !== "0") {
          // id !== "0" 证明是更新操作
          await updateNote(this.id, this.noteData);
        } else {
          // id === "0" 证明是新增操作
          const res = await newNote(this.noteData);
          this.id = res.data.data.id;
        }
        this.$message.success("提交成功");
      } catch (e) {
        this.$message.error("提交失败");
      }
    },
  },
  async created() {
    this.id = this.$route.params.id;
    this.pid = this.$route.params.pid;
    if (this.id !== "0") {
      const note = await getNoteDetail({ id: this.id });
      this.noteData = this.$utils.htmlDecodeObject(note.data.data);
    } else {
      this.noteData.pid = this.pid;
      this.noteData.content = "# 请输入内容\n";
    }
  },
};
</script>

<style scoped>
.btn-container {
  padding: 10px 100px;
  text-align: right;
}
.md-editor {
  width: 100%;
  box-shadow: none;
}
</style>
