<template>
  <div class="blog-header">
    <div class="title">
      <div name="title">RAINFOREST</div>
    </div>
    <div class="label">
      <div name="label">一个极简的博客系统</div>
    </div>
    <!-- PC 端和平板端导航 -->
    <div class="navbar">
      <input type="checkbox" id="nav" />
      <label for="nav"></label>
      <ul>
        <li>
          <router-link to="/content">主页</router-link>
        </li>
        <li>
          <router-link to="/detail">详情</router-link>
        </li>
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
}
.blog-header .title {
  height: 70px;
  color: var(--main-color);
  font-size: 40px;
  font-family: var(--title-font);
  text-align: center;
}
.blog-header .label {
  height: 25px;
  margin: 0 0 20px;
  color: var(--border-color);
  font-size: 14px;
  font-family: var(--label-font);
  text-align: center;
}

/* 导航栏 */
.blog-header .navbar {
  position: relative;
  height: 60px;
  background-color: var(--main-color);
  font-family: var(--nav-font);
  font-size: 18px;
}
.blog-header .navbar input[type="checkbox"] {
  display: none;
}
.blog-header .navbar label {
  position: absolute;
  right: 40px;
  top: 10px;
  width: 40px;
  height: 40px;
  background-color: var(--label-color);
}
.blog-header .navbar label::before,
.blog-header .navbar label::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 2px;
  right: 5px;
  background-color: var(--assist-color);
  transition: transform 0.3s ease-out, 0.3s top ease-out;
}
.blog-header .navbar label::before {
  top: calc(50% - 8px);
}
.blog-header .navbar label::after {
  top: calc(50% + 6px);
}
.blog-header .navbar input[type="checkbox"]:checked + label::before {
  top: calc(50% - 2px);
  transform: rotate(-45deg);
  transition: top 0.3s ease-out, transform 0.3s ease-out;
}
.blog-header .navbar input[type="checkbox"]:checked + label::after {
  top: calc(50% - 2px);
  transform: rotate(45deg);
  transition: top 0.3s ease-out, transform 0.3s ease-out;
}
/* 移动端导航栏 */
.blog-header .navbar ul {
  position: relative;
  top: 60px;
  width: 100%;

  transform: scaleY(0);
  transform-origin: 50% 0;
  opacity: 0;
  transition: all 0.3s ease-out;
}
.blog-header .navbar ul li {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  list-style: none;
  background-color: var(--main-color);
  border-bottom: 1px solid var(--border-color);
}
.blog-header .navbar ul li:hover {
  background-color: var(--hover-color);
}
.blog-header .navbar ul li a {
  display: block;
  text-decoration: none;
  color: var(--assist-color);
}
.blog-header .navbar input:checked ~ ul {
  opacity: 1;
  transform: scaleY(1);
}
/* pc 端导航栏 */
@media screen and (min-width: 992px) {
  .blog-header .navbar {
    background-color: var(--bg-color);
  }
  .blog-header .navbar label {
    display: none;
  }
  .blog-header .navbar ul {
    position: static;
    display: flex;
    opacity: 1;
    transform: scaleY(1);
    justify-content: center;
    border-top: 1px solid var(--border-color);
  }
}
</style>
