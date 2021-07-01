<template>
  <div class="notebook">
    <div class="name">
      <slot name="name"></slot>
    </div>
    <div class="description">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogNotebook",
};
</script>

<style scoped>
.notebook {
  box-sizing: border-box;
  width: 280px;
  margin: 10px;
  padding: 16px;
  border: 1px solid var(--border-color);
  border-radius: 3px;

  height: 98px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  font-family: var(--text-font);
  cursor: pointer;
}

.notebook .name {
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-size: 14px;

  white-space: nowrap; /* 先强制一行内显示文本 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 文字用省略号代替超出的部分 */

  color: #0366d6;
}

.notebook .description {
  height: 40px;
  margin: 10px 0;
  font-size: 12px;
  overflow: hidden;

  color: #586069;
}
</style>
