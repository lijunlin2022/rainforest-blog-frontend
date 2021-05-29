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
  max-width: 899px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.2);
  margin: 30px auto;
  background-color: var(--white-color);
}

.blog-article .title {
  height: 49px;
  line-height: 50px;
  padding: 0 20px;
  font-size: 23px;
  font-family: var(--title-font);
  text-align: center;
  /* 先强制一行内显示文本 */
  white-space: nowrap;
  /* 超出部分隐藏 */
  overflow: hidden;
  /* 文字用省略号代替超出的部分 */
  text-overflow: ellipsis;
  border-bottom: 1px solid var(--border-color);
}
.blog-article .abstract {
  padding: 10px;
  font-size: 14px;
  line-height: 25px;
  color: var(--secondary-color);
}
.label-more-link {
  height: 30px;
  display: flex;
  justify-content: flex-end;
}
.blog-article .label {
  width: 150px;
  font-size: 13px;
  font-family: var(--label-font);
  text-align: center;
  color: var(--secondary-color);
}
.blog-article .more-link {
  width: 100px;
  text-align: center;
  font-size: 13px;
}
.blog-article .more-link ::v-deep(a) {
  text-decoration: none;
  color: var(--accent-color);
  cursor: pointer;
}
</style>
