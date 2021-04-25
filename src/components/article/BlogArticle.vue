<template>
  <div class="blog-article">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="label">
      <slot name="createtime"></slot>
    </div>
    <div class="cover">
      <slot name="cover"></slot>
    </div>
    <div class="abstract">
      <slot name="abstract"></slot>
    </div>
    <div class="more-link">
      <slot name="link"></slot>
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
  max-width: 600px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
  margin: 30px auto;
}
.blog-article .title {
  padding: 10px;
  font-size: 23px;
  font-family: var(--title-font);
  text-align: center;
  /* 先强制一行内显示文本 */
  white-space: nowrap;
  /* 超出部分隐藏 */
  overflow: hidden;
  /* 文字用省略号代替超出的部分 */
  text-overflow: ellipsis;
}
.blog-article .label {
  margin: 7px 0 10px;
  font-size: 13px;
  font-family: var(--label-font);
  text-align: center;
}
.blog-article .abstract {
  width: 80%;
  margin: 0 auto;
  padding: 0 5px;
  font-size: 14px;
  line-height: 1.8;
  text-align: center;
}
.blog-article .cover {
  text-align: center;
  height: 200px;
}
.blog-article .cover ::v-deep(img) {
  max-height: 200px;
  max-width: 280px;
}
.blog-article .more-link {
  margin: 23px 0;
  text-align: center;
  font-size: 13px;
}
.blog-article .more-link ::v-deep(a) {
  text-decoration: none;
  color: var(--assist-color);
}
</style>
