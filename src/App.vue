<template>
  <!-- <div>
    <p>欢迎访问 layfolk 的博客</p>
    <p>博客目前尚在编写</p>
    <p>目前先部署测试</p>
    <p>你可以访问 https://a-layfolk.github.io/blog/ 查看 layfolk 的备用博客</p>
  </div> -->
  <!-- <div id="nav"> -->
  <!-- <router-link to="/">Home</router-link> | -->
  <!-- <router-link to="/detail">Detail</router-link> | -->
  <!-- <router-link to="/about">About</router-link> -->
  <!-- </div> -->
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
