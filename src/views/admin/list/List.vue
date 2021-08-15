<template>
  <el-table :data="noteArray" style="font-size: 16px" stripe>
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
</template>

<script>
import { getNoteList } from "@/api/notes.js";
import columns from "./components/columns.js";
export default {
  name: "Overview",
  data() {
    return {
      columns,
      noteArray: [],
    };
  },
  async created() {
    const queryData = {};
    queryData.pid = this.$route.params.id;
    queryData.current = null;
    queryData.size = null;
    const notes = await getNoteList(queryData);
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
