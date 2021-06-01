<template>
  <div class="post">
    <span class="thumbtack iconfont icon-fix"></span>
    <div class="title">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
};
</script>

<style scoped>
.post {
  position: relative;
  width: 258px;
  height: 89px;
  margin: 0 10px;
  padding: 0 10px;
  line-height: 90px;
  background-color: var(--white-color);

  font-family: var(--text-font);
  font-size: 15.2px;
  text-align: center;
  /* 先强制一行内显示文本 */
  white-space: nowrap;
  /* 超出部分隐藏 */
  overflow: hidden;
  /* 文字用省略号代替超出的部分 */
  text-overflow: ellipsis;

  border: 1px solid var(--border-color);
  border-radius: 3px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

  cursor: pointer;
}
.post .thumbtack {
  position: absolute;
  bottom: 25px;
  right: 15.2px;
  color: var(--accent-color);
}
</style>
