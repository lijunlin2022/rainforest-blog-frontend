<template>
  <div class="blog-article">
    <div class="title">Being Outside in Fresh Air & How Your Body Loves It</div>
    <div class="label">NOVEMBER 20, 2016 FESTYLE, MARKUP</div>
    <div class="cover-img">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVeeHOzOayQnxmBUV2amkVRbc9CzFxr4c7vA&usqp=CAU"
      />
    </div>
    <div class="abstract">
      Amor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia
    </div>
    <div class="more-link">Continue Reading →</div>
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
.blog-article .cover-img {
  text-align: center;
}
.blog-article .cover-img > img {
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
}
.blog-article .footer-hr {
  border: 2px solid #ccc;
}
</style>
