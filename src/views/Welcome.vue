<template>
  <div class="welcome">
    <div class="content">
      <div class="sub-title">欢迎体验</div>
      <div class="title">Rainforest Blog 管理界面</div>
      <div class="desc">
        Vue3.0 + ElementPlus + Node + MySQL 打造的博客系统
      </div>
    </div>
    <div class="img"></div>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style lang="less" scoped>
.welcome {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  background-color: #fff;
  .content {
    .sub-title {
      font-size: 30px;
      line-height: 42px;
      color: #333;
    }
    .title {
      font-size: 40px;
      line-height: 62px;
      color: #409eff;
    }
    .desc {
      font-size: 14px;
      text-align: center;
      color: #999;
    }
  }
}
</style>
