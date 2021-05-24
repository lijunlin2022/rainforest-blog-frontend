<template>
  <div class="blog-header">
    <div class="logo">
      <router-link to="/login">RainForest</router-link>
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
import { getIdSetOfInterfaces } from "@/api/blogs.js";

export default {
  name: "BlogHeader",
  data() {
    return {
      isActive: false,
      navItems: [
        { path: "/content", title: "首页", id: null },
        { path: "/archives", title: "归档", id: null },
      ],
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
  created() {
    getIdSetOfInterfaces().then((result) => {
      const res = result.data;
      let newItems = res.data;
      for (let item of newItems) {
        item.path = "/interface?id=" + item.id;
      }
      this.navItems.push(...newItems);
    });
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
}
.blog-header .logo {
  background-color: var(--assist-color);
  line-height: 60px;
  text-align: center;
  padding: 0 10px;
}
.blog-header .logo a {
  text-decoration: none;
  font-family: var(--title-font);
  font-weight: bold;
  color: var(--bg-color);
}
/* 导航栏 */
.blog-header .navbar {
  position: relative;
  height: 60px;
  width: 100%;
  background-color: var(--bg-color);
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
  height: 4px;
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
  background-color: var(--main-color);

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
}
.blog-header .navbar ul li:hover {
  background-color: var(--assist-color);
}
.blog-header .navbar ul li a {
  display: block;
  text-decoration: none;
  color: var(--bg-color);
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
  }
  .blog-header .navbar ul li {
    width: 100px;
  }
}
</style>
