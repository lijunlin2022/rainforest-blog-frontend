<template>
  <section>
    <header>
      <div class="name">名字</div>
      <div class="update-time">更新时间</div>
    </header>
    <!-- 文件夹 -->
    <div class="row" v-for="item in dirListRef" :key="item._id" @click="sendClickToParent(item)">
      <div class="title">
        <span class="iconfont icon-dir"></span>
        <span class="name">{{ item.dirName }}</span>
      </div>
      <div class="update-time">
        {{ item.updateTime.substring(0, 10) }}
      </div>
    </div>
    <!-- 文件 -->
    <div class="row" v-for="item in fileListRef" :key="item._id" @click="$router.push(`/file/${item._id}`)">
      <div class="title">
        <span class="iconfont icon-file"></span>
        <span class="name">{{ item.filename }}</span>
      </div>
      <div class="update-time">
        {{ item.updateTime.substring(0, 10) }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    dirListRef: {
      type: Array
    },
    fileListRef: {
      type: Array
    }
  },
  methods: {
    sendClickToParent (item) {
      this.$emit('dirClick', item)
    }
  }
}
</script>

<style lang="less" scoped>
section {
  min-height: 200px;
  text-align: center;
  color: #eb3941;
  padding: 16px;
  header, .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    cursor: pointer;
    padding: 10px;
    .title {
      padding-right: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .name {
        padding-left: 5px;
      }
    }
    .update-time {
      width: 100px;
    }
  }
  header {
    font-size: 16px;
    color: #000;
    font-weight: bold;
  }
  .row {
    color: #888;
    &:hover {
      background-color: #fafafa;
    }
  }
}
</style>
