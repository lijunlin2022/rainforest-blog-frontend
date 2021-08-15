<template>
  <el-table
    :data="noteArray"
    style="font-size: 16px"
    stripe
    border
    height="500"
  >
    <el-table-column
      v-for="item in columns"
      :label="item.label"
      :key="item"
      :prop="item.prop"
    >
    </el-table-column>
    <el-table-column label="操作" width="150">
      <template #default="scope">
        <el-button
          type="primary"
          size="small"
          @click="
            $utils.changeRoute(
              `/admin/detail/${scope.row.notebook_id}/${scope.row.id}`
            )
          "
        >
          查看
        </el-button>
        <el-button type="danger" size="small" @click="del(scope)">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <div class="btn-container">
    <button @click="$utils.changeRoute(`/admin/detail/${id}/${0}`)">
      新建
    </button>
  </div>
</template>

<script>
import { getNoteList } from "@/api/notes.js";
import columns from "./components/columns.js";
export default {
  name: "Overview",
  data() {
    return {
      id: null,
      columns,
      noteArray: [],
    };
  },
  async created() {
    this.id = this.$route.params.id;
    const notes = await getNoteList({
      pid: this.id,
      current: null,
      size: null,
    });
    this.noteArray = notes.data.data.map((item) => {
      return this.$utils.htmlDecodeObject(item);
    });
  },
  methods: {
    del(scope) {
      console.log(scope.row);
    },
  },
};
</script>

<style scoped>
.btn-container {
  padding: 10px;
}
.btn-container button {
  width: 200px;
  height: 40px;
  outline: none;
  border: none;
}
</style>
