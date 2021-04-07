<template>
  <div class="blog-header">
    <div class="title">
      <div name="title">RAINFOREST</div>
    </div>
    <div class="label">
      <div name="label">一个极简的博客系统</div>
    </div>
    <!-- PC 端和平板端导航 -->
    <div class="menu-pc">
      <ul>
        <li>HOME</li>
        <li>/</li>
        <li>ARCHIVES</li>
        <li>/</li>
        <li>CATEGORIES</li>
        <li>/</li>
        <li>TAGS</li>
      </ul>
    </div>
    <!-- 手机端导航 -->
  </div>
</template>

<script>
export default {
  name: "BlogHeader",
};
</script>

<style scoped>
.blog-header {
  padding: 40px 0 20px;
  height: 170px;
}
.blog-header .title {
  height: 70px;
  color: #333;
  font-size: 48px;
  font-family: Oswald, "Microsoft Yahei", Arial, Helvetica, sans-serif;
}
.blog-header .label {
  height: 25px;
  margin: 0 0 20px;
  color: #a6a6a6;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.blog-header .menu-pc {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-family: Oswald, "方正姚体", Arial, Helvetica, sans-serif;
}
.blog-header .menu-pc ul {
  border: solid #333;
  border-width: 1px 0 3px;
}
.blog-header .menu-pc ul li {
  display: inline-block;
  padding: 0 20px;
}
</style>
