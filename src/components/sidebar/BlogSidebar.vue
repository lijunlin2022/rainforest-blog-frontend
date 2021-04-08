<template>
  <div class="blog-sidebar">
    <div class="widget-title">联系我</div>
    <div class="widget-pic clearfix">
      <div class="pic iconfont">&#xe7ae;</div>
      <div class="pic iconfont">&#xe638;</div>
      <div class="pic iconfont">&#xe648;</div>
      <div class="pic iconfont">&#xea8b;</div>
      <div class="pic iconfont">&#xea8b;</div>
      <div class="pic iconfont">&#xe648;</div>
      <div class="pic iconfont">&#xea8b;</div>
      <div class="pic iconfont">&#xea8b;</div>
    </div>
    <div class="widget-title">置顶文章</div>
    <div class="widget-item">
      <ul>
        <li><a href="https://www.baidu.com">测试文章 1</a></li>
        <li><a>测试文章 2</a></li>
        <li><a>测试文章 3</a></li>
      </ul>
    </div>
    <div class="widget-title">友情链接</div>
    <div>
      <ul>
        <li><a>小云姐</a></li>
        <li><a>可达鸭</a></li>
        <li><a>王梓丞</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogSidebar",
};
</script>

<style scoped>
@import url(../../assets/css/font.css);
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.sidebar {
  text-align: center;
}
.sidebar .widget-title {
  font-size: 16px;
  font-family: Oswald, "Microsoft Yahei", Arial, Helvetica, sans-serif;
  padding-bottom: 20px;
  margin: 40px 0 15px;
  border-bottom: 1px solid #333;
}
.sidebar .pic {
  float: left;
  color: #fff;
  width: 40px;
  height: 40px;
  margin: 5px;
  font-size: 35px;
  background: #333;
}
.sidebar .pic:hover {
  background: #1fa0ae;
}
::v-deep(ul) {
  padding: 5px !important;
}
::v-deep(li) {
  list-style: none;
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
