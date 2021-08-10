<template>
  <section v-show="hasNote">
    <header>
      <div class="title">标题</div>
      <div class="update">更新时间</div>
    </header>
    <div
      class="row"
      v-for="item in noteArray"
      v-bind:key="item.id"
      @click="$utils.changeRoute(`/detail/${item.id}`)"
    >
      <div class="title">
        <span class="iconfont icon-file"></span>
        <span>{{ item.title }}</span>
      </div>
      <div class="update">
        {{ $utils.getYearMonthDay(item.updated_time) }}
      </div>
    </div>
  </section>
</template>

<script>
import { getNoteList } from "@/api/notes.js";

export default {
  data() {
    return {
      hasNote: true,
      id: null,
      noteArray: [],
    };
  },
  async created() {
    this.id = this.$route.params.id;
    try {
      const queryNoteData = {};
      queryNoteData.pid = this.id;
      const notes = await getNoteList(queryNoteData);
      this.noteArray = notes.data.data.map((item) => {
        return this.$utils.htmlDecodeObject(item);
      });
      if (this.noteArray.length === 0) {
        throw new Error("没有笔记");
      }
    } catch {
      this.hasNote = false;
      console.error("获取笔记本详情和笔记列表失败");
    }
  },
};
</script>

<style scoped>
section {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
header,
.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  cursor: pointer;
  font-size: 16px;
  color: #000;
  font-weight: bold;
  padding: 10px;
}
.row {
  font-weight: normal;
  color: #888;
}
.row:hover {
  background-color: #fafafa;
}
.title {
  padding-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title > .iconfont {
  padding-right: 7px;
}
.update {
  width: 100px;
}
</style>
