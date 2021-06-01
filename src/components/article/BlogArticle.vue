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
        <span class="iconfont icon-bianxie">&nbsp;</span>
        <slot name="createtime"></slot>
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
  margin-top: 40px;
  max-width: 871px;
  padding: 28px;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin: 30px auto;
}

.blog-article .title {
  height: 49px;
  line-height: 50px;
  font-size: 21.28px;
  font-family: var(--text-font);
  font-weight: bold;
  color: var(--secondary-color);
  text-align: left;
  /* 先强制一行内显示文本 */
  white-space: nowrap;
  /* 超出部分隐藏 */
  overflow: hidden;
  /* 文字用省略号代替超出的部分 */
  text-overflow: ellipsis;
  border-bottom: 1px solid var(--border-color);
}
.blog-article .abstract {
  margin: 15.2px 0;
  font-size: 15.2px;
  line-height: 2;
  color: var(--secondary-color);
}
.label-more-link {
  display: flex;
  justify-content: space-between;
  color: var(--third-color);
}
.blog-article .label {
  font-size: 13.398px;
  font-family: var(--text-font);
  text-align: center;
}
.blog-article .more-link {
  text-align: center;
  font-size: 13.398px;
}
.blog-article .more-link ::v-deep(a) {
  text-decoration: none;
  color: var(--accent-color);
  cursor: pointer;
}
</style>
