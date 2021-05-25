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
  height: 49px;
  margin: 5px 20px;
  line-height: 50px;
  background-color: var(--white-color);

  font-family: var(--label-font);
  font-size: 13px;
  text-align: center;
  /* 先强制一行内显示文本 */
  white-space: nowrap;
  /* 超出部分隐藏 */
  overflow: hidden;
  /* 文字用省略号代替超出的部分 */
  text-overflow: ellipsis;

  border: 1px solid var(--assist-color);
}
.post::before {
  content: "hot";
  position: absolute;
  display: block;
  height: 15px;
  line-height: 15px;
  width: 25px;
  left: 10px;
  background-color: var(--assist-color);
  font-size: 12px;
}
</style>
