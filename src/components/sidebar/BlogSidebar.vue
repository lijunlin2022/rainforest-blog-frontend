<template>
  <div class="blog-sidebar">
    <div class="widget-title">CONNECT WITH ME</div>
    <div class="widget-pic clearfix">
      <div class="pic iconfont">&#xe7ae;</div>
      <div class="pic iconfont">&#xe638;</div>
      <div class="pic iconfont">&#xe648;</div>
      <div class="pic iconfont">&#xea8b;</div>
    </div>
    <div class="widget-title">FRIENDLY LINK</div>
  </div>
</template>

<script>
export default {
  name: "BlogSidebar",
};
</script>

<style>
@import url(../../assets/css/font.css);
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.sidebar .widget-title {
  font-size: 16px;
  font-family: Oswald, "Microsoft Yahei", Arial, Helvetica, sans-serif;
  text-align: center;
  padding-bottom: 20px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #333;
}
.sidebar .pic {
  float: left;
  color: #333;
  margin: 0 5px;
  font-size: 50px;
}
/* 清除浮动 */
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
</style>
