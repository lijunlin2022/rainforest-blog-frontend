<template>
  <header>
    <div>
      <span class="iconfont icon-view"></span>
      <span>浏览量</span>
    </div>
    <div>
      <span class="iconfont icon-comment"></span>
      <span>评论</span>
    </div>
    <div>
      <span class="iconfont icon-time"></span>
      <span>{{ $utils.getYearMonthDay(createdTime) }}</span>
    </div>
    <div>
      <span class="iconfont icon-update"></span>
      <span>{{ $utils.getYearMonthDay(updatedTime) }}</span>
    </div>
    <div @click="$router.go(-1)">
      <span class="iconfont icon-back"></span>
      <span>go back</span>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    createdTime: Number,
    updatedTime: Number
  }
}
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
  color: #6a737d;
  font-size: 14px;
}
header > div {
  width: 100px;
  padding: 5px;
}
header > div > span {
  margin: 0 2px;
}
</style>
