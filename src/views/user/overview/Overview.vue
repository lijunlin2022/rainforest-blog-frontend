<template>
  <div class="note-content">
    <div class="center">
      <!-- 简介 -->
      <div class="title">
        <span>Brief Introduction</span>
      </div>
      <profile></profile>

      <!------- 笔记本 ------->
      <div class="title">
        <span>Popular Notebooks</span>
      </div>
      <n-list></n-list>
      <!------- 文章列表 ------->
      <div class="title">
        <span>Recent Notes</span>
      </div>
      <list></list>
    </div>
  </div>
</template>

<script>
import Profile from "./components/Profile.vue";
import NList from "./components/NList.vue";
import List from "./components/List.vue";

export default {
  name: "Overview",
  components: {
    Profile,
    NList,
    List,
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
</style>
