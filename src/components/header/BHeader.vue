<template>
  <div class="blog-header">
    <div class="logo">
      <router-link to="/login">Rainforest</router-link>
    </div>
    <div class="navbar">
      <input type="checkbox" id="nav" :checked="isActive" @click="toggle" />
      <label for="nav"></label>
      <ul>
        <li v-for="item in navItems" :key="item" @click="toggle">
          <router-link :to="item.path">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogHeader",
  data() {
    return {
      isActive: false,
      navItems: [
        { path: "/overview", title: "Overview", id: null },
        { path: "/nList", title: "Notebooks", id: null },
        { path: "/list", title: "Notes", id: null },
      ],
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.blog-header {
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  z-index: 3;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background-color: #24292a;
}
.blog-header .logo {
  display: none;
  line-height: 60px;
  text-align: center;
  padding: 0 10px;
}
.blog-header .logo a {
  text-decoration: none;
  font-style: italic;
  color: #1890ff;
  font-size: 21.28px;
}
/* 导航栏 */
.blog-header .navbar {
  position: relative;
  height: 60px;
  width: 100%;
  font-family: var(--text-font);
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
}
.blog-header .navbar label::before,
.blog-header .navbar label::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 4px;
  right: 5px;
  background-color: #1890ff;
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
  background-color: #24292a;
}
.blog-header .navbar ul li a {
  display: block;
  text-decoration: none;
  color: #a6adb4;
}
.blog-header .navbar ul li a:hover {
  color: #fff;
}
.blog-header .navbar input:checked ~ ul {
  opacity: 1;
  transform: scaleY(1);
}
/* pc 端导航栏 */
@media screen and (min-width: 992px) {
  .blog-header .logo {
    display: block;
    margin: 0 200px;
  }
  .blog-header .navbar label {
    display: none;
  }
  .blog-header .navbar ul {
    position: static;
    display: flex;
    opacity: 1;
    transform: scaleY(1);
    justify-content: flex-end;
  }
}
</style>
