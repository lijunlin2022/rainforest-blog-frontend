<template>
  <div class="post">
    <slot></slot>
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
.post::before {
  content: "hot";
  position: absolute;
  display: block;
  height: 20px;
  line-height: 20px;
  width: 20px;
  left: 10px;
  background-color: var(--accent-color);
  color: var(--white-color);
  font-size: 14px;
  /* 猫咪头挂件效果 */
  border-left: 5px solid var(--accent-color);
  border-right: 5px solid var(--accent-color);
  border-top: 5px solid var(--white-color);
  border-radius: 5px;
}
</style>
