<template>
  <div class="note-content">
    <div class="center">
      <!-- 简介 -->
      <div class="title">
        <span>Brief Introduction</span>
      </div>

      <div class="profile">
        <div class="logo">霖</div>
        <div>
          <v-md-preview :text="profileContent"></v-md-preview>
        </div>
      </div>

      <!------- 笔记本 ------->
      <div class="title">
        <span>Popular Notebooks</span>
      </div>
      <div class="notebooks">
        <notebook
          v-for="item in notebookArray"
          :key="item.id"
          @click="$utils.changeRoute(`/nDetail/${item.id}`)"
        >
          <template v-slot:name>
            {{ item.name }}
          </template>
          <template v-slot:description>
            {{ item.description }}
          </template>
        </notebook>
      </div>

      <!------- 文章列表 ------->
      <div class="title">
        <span>Recent Notes</span>
      </div>
      <div class="articles">
        <note v-for="item in noteArray" :key="item.id">
          <template v-slot:title>
            {{ item.title }}
          </template>
          <template v-slot:abstract>
            {{ item.abstract }}
          </template>
          <template v-slot:createdTime>
            {{ $utils.getYearMonthDay(item.created_time) }}
          </template>
          <template v-slot:updatedTime>
            {{ $utils.getYearMonthDay(item.updated_time) }}
          </template>
          <template v-slot:link>
            <a @click="$utils.changeRoute(`/detail/${item.id}`)">Read more ></a>
          </template>
        </note>
      </div>

      <!------- 下一页 ------->
      <div class="paging">
        <a-button v-if="hasNext" @click="handleNextBtn">Next</a-button>
        <a-button v-else>No more...</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getNoteList, getNoteDetail } from "@/api/notes.js";
import { getNotebookList } from "@/api/notebooks.js";
import Notebook from "@/components/notebook/Notebook.vue";
import Note from "@/components/note/Note.vue";

export default {
  name: "Overview",
  components: {
    Notebook,
    Note,
  },
  data() {
    return {
      current: 0,
      size: 5,
      hasNext: true,
      profileContent: "",
      notebookArray: [],
      noteArray: [],
    };
  },
  methods: {
    async handleNextBtn() {
      this.current++;
      const res = await getNoteList(null, this.current, this.size);
      let array = res.data.data.map((item) => {
        return this.$utils.htmlDecodeObject(item);
      });
      this.noteArray.push(...array);
      if (res.data.data.length < this.size) {
        this.hasNext = false;
      }
    },
  },
  async created() {
    try {
      const profile = await getNoteDetail(1);
      const notebooks = await getNotebookList({});
      const queryNoteData = {};
      queryNoteData.current = this.current;
      queryNoteData.size = this.size;
      const notes = await getNoteList(queryNoteData);
      this.profileContent = this.$utils.htmlDecode(profile.data.data.content);
      this.notebookArray = notebooks.data.data.map((item) => {
        return this.$utils.htmlDecodeObject(item);
      });
      this.noteArray = notes.data.data.map((item) => {
        return this.$utils.htmlDecodeObject(item);
      });
    } catch (error) {
      console.error("网络请求失败");
    }
  },
};
</script>

<style scoped>
.note-content {
  box-sizing: border-box;
  min-height: calc(100vh - 60px);
}
.center {
  max-width: 900px;
  margin: auto;
}
.title {
  margin: 30px 0;
  padding: 0 16px;
  color: var(--secondary-color);
}
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--secondary-color);
}
.profile .logo {
  width: 100px;
  margin: 0 50px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #fec41c;
  border-radius: 50%;
  font-size: 50px;
  color: #fff;
}
@media screen and (min-width: 992px) {
  .profile {
    flex-direction: row;
  }
}
.notebooks {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 14px;
}
.paging {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
</style>
