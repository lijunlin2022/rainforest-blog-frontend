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
    <hr class="footer-hr" />
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
}
.blog-article .title {
  padding: 10px;
  font-size: 23px;
  font-family: Oswald, "Microsoft Yahei", Arial, Helvetica, sans-serif;
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
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: center;
}
.blog-article .cover {
  text-align: center;
}
::v-deep(img) {
  width: 80%;
}
.blog-article .abstract {
  width: 80%;
  margin: 0 auto;
  padding: 0 5px;
  font-size: 14px;
  line-height: 1.8;
  text-align: justify;
}
.blog-article .more-link {
  margin: 23px 0;
  color: #1fa0ae;
  font-size: 13px;
  text-align: center;
}
.blog-article .footer-hr {
  border: 2px solid #ccc;
}
</style>
