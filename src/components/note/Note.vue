<template>
  <section>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="abstract">
      <slot name="abstract"></slot>
    </div>
    <footer>
      <div class="container">
        <span class="dot-create"></span>
        <slot name="createdTime"></slot>
      </div>
      <div class="container">
        <span class="dot-update"></span>
        <slot name="updatedTime"></slot>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "BlogFile",
};
</script>

<style scoped>
section {
  display: block;
  box-sizing: border-box;
  width: 100%;
  max-width: 430px;
  margin: 20px 10px;
  padding: 16px;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
.title {
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: #0366d6;
  text-align: left;
  white-space: nowrap; /* 先强制一行内显示文本 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 文字用省略号代替超出的部分 */
  border-bottom: 1px solid var(--border-color);
}
.abstract {
  margin: 14px 0;
  font-size: 14px;
  line-height: 1.8;
  color: var(--secondary-color);
}
footer {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 12px;
}
.container {
  margin-right: 20px;
}
.dot-create,
.dot-update {
  display: inline-block;
  margin-right: 5px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
}
.dot-create {
  background-color: #98e9a8;
}
.dot-update {
  background-color: #40c463;
}
</style>
