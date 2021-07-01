<template>
  <div class="blog-article">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="abstract">
      <slot name="abstract"></slot>
    </div>
    <div class="label-more-link">
      <div class="label">
        <span class="icon-create"></span>
        <span> create </span>
        <slot name="createdTime"></slot>
      </div>
      <div class="label">
        <span class="icon-update"></span>
        <span> update </span>
        <slot name="updatedTime"></slot>
      </div>
      <div class="more-link">
        <slot name="link"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogArticle",
};
</script>

<style scoped>
.blog-article {
  box-sizing: border-box;
  max-width: 900px;
  padding: 16px;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
}

.title {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  font-family: var(--text-font);
  color: #0366d6;
  text-align: left;
  white-space: nowrap; /* 先强制一行内显示文本 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 文字用省略号代替超出的部分 */
  border-bottom: 1px solid var(--border-color);
}
.blog-article .abstract {
  margin: 12px 0;
  font-size: 12px;
  line-height: 2;
  color: var(--secondary-color);
}
.label-more-link {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: var(--third-color);
}
.icon-create,
.icon-update {
  position: relative;
  top: 1px;
  display: inline-block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
}
.icon-create {
  border: 1px solid #40c463;
  background-color: #40c463;
  color: #40c463;
}
.icon-update {
  border: 1px solid #e34c26;
  background-color: #e34c26;
  color: #e34c26;
}
.blog-article .label {
  margin: 8px 8px 0 0;
  font-size: 12px;
  font-family: var(--text-font);
  text-align: center;
}
.blog-article .more-link {
  margin: 8px 8px 0 0;
  font-size: 12px;
  font-family: var(--text-font);
  text-align: center;
}
.blog-article .more-link ::v-deep(a) {
  text-decoration: none;
  font-weight: bold;
  color: #0366d6;
  cursor: pointer;
}
</style>
