<template>
  <div class="profile">
    <div class="logo">
      <img src="https://gitee.com/Li-Jun-Lin/figure/raw/master/avater/tutu.png" />
    </div>
    <div>
      <markdown-previewer :content="content"></markdown-previewer>
    </div>
  </div>
</template>

<script>
import MarkdownPreviewer from './MarkdownPreviewer.vue'
export default {
  props: { content: { type: String, required: true } },
  components: {
    MarkdownPreviewer
  }
}
</script>

<style lang="less" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 100px;
    margin: 0 50px;
    height: 100px;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
@media screen and (min-width: 992px) {
  .profile {
    flex-direction: row;
  }
}
</style>
