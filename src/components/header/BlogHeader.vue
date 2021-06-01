<template>
  <div class="blog-header">
    <div class="logo">
      <span class="iconfont icon-huo-copy">&nbsp;</span>
      <router-link to="/login">
        <span>Rainforest</span>
      </router-link>
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
  display: none;
  line-height: 60px;
  text-align: center;
  padding: 0 10px;
  background-color: var(--white-color);
}
.blog-header .logo .iconfont {
  color: var(--assist-color);
  font-size: 21.28px;
}
.blog-header .logo a {
  text-decoration: none;
  font-family: var(--text-font);
  font-weight: bold;
  color: var(--assist-color);
  font-size: 21.28px;
}
/* 导航栏 */
.blog-header .navbar {
  position: relative;
  height: 60px;
  width: 100%;
  background-color: var(--white-color);
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
  height: 58px;
  border-bottom: 2px solid var(--border-color);
  line-height: 60px;
  text-align: center;
  list-style: none;
  background-color: var(--main-color);
}
.blog-header .navbar ul li:hover {
  border-bottom: 2px solid var(--accent-color);
}
.blog-header .navbar ul li a {
  display: block;
  text-decoration: none;
  color: var(--secondary-color);
}
.blog-header .navbar input:checked ~ ul {
  opacity: 1;
  transform: scaleY(1);
}
/* pc 端导航栏 */
@media screen and (min-width: 992px) {
  .blog-header .logo {
    display: block;
    margin-left: 200px;
  }
  .blog-header .navbar {
    margin-right: 200px;
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
  .blog-header .navbar ul li {
    width: 100px;
  }
}
</style>
