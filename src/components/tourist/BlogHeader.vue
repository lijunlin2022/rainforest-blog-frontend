<template>
  <div class="blog-header">
    <div class="logo">
      <a>Rainforest</a>
    </div>
    <div class="navbar">
      <input type="checkbox" id="nav" :checked="isActive" @click="toggle" />
      <label for="nav"></label>
      <ul>
        <li v-for="item in navItems" :key="item" @click="toggle">
          <router-link :to="item.path">{{ item.title }}</router-link>
        </li>
        <li @click="$router.push('/login')"><a>登录</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false,
      navItems: [
        { path: '/overview', title: '主页' }
      ]
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="less" scoped>
.blog-header {
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  z-index: 3;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background-color: #24292a;

  .logo {
    display: none;
    line-height: 60px;
    text-align: center;
    padding: 0 10px;
    a {
      text-decoration: none;
      font-style: italic;
      color: #1890ff;
      font-size: 21.28px;
    }
  }
  .navbar {
    position: relative;
    height: 60px;
    width: 100%;
    font-family: var(--text-font);
    font-size: 18px;

    input[type='checkbox'] {
      display: none;
    }

    label {
      position: absolute;
      right: 40px;
      top: 10px;
      width: 40px;
      height: 40px;

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 4px;
        right: 5px;
        background-color: #1890ff;
        transition: transform 0.3s ease-out, 0.3s top ease-out;
      }
      &::before {
        top: calc(50% - 8px);
      }
      &::after {
        top: calc(50% + 6px);
      }
    }

    input[type='checkbox']:checked + label::before {
      top: calc(50% - 2px);
      transform: rotate(-45deg);
      transition: top 0.3s ease-out, transform 0.3s ease-out;
    }

    input[type='checkbox']:checked + label::after {
      top: calc(50% - 2px);
      transform: rotate(45deg);
      transition: top 0.3s ease-out, transform 0.3s ease-out;
    }
  }
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
  li {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    list-style: none;
    background-color: #24292a;
    a {
      display: block;
      text-decoration: none;
      color: #a6adb4;
      &::hover {
        color: #fff;
      }
    }
  }
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
