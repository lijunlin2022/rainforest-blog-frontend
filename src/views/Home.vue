<template>
  <div class="basic-layout">
    <div :class="['nav-side', isCollapse ? 'fold' : 'unfold']">
      <!-- 系统 Logo -->
      <div class="logo">
        <img src="https://gitee.com/Li-Jun-Lin/figure/raw/master/avater/tutu.png" />
        <span v-show="!isCollapse">Admin</span>
      </div>
      <!-- 导航菜单 -->
      <el-menu
        class="nav-menu"
        default-active="1"
        background-color="#001529"
        text-color="#fff"
        router
        :collapse="isCollapse"
      >
        <el-sub-menu index="1">
          <template #title>
            <i class="el-icon-setting"></i>
            <span>笔记管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">笔记本</el-menu-item>
            <el-menu-item index="1-2">笔记</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <i class="el-icon-setting"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">用户名密码</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </div>
    <div :class="['content-right', isCollapse ? 'fold' : 'unfold']">
      <div class="nav-top">
        <div class="nav-left">
          <div class="menu-fold" @click="toggle"><i class="el-icon-s-fold"></i></div>
          <div class="bread">面包屑</div>
        </div>
        <div class="user-info">
          <el-badge :is-dot="true" class="notice">
            <i class="el-icon-bell"></i>
          </el-badge>
          <el-dropdown>
            <span class="user-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="email">邮箱</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="wrapper">
        <div class="main-page">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isCollapse: true,
      userInfo: {
        username: 'Jack',
        userEmail: '1808150553@qq.com'
      }
    }
  },
  methods: {
    toggle () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.basic-layout {
  position: relative;
  .nav-side {
    &.fold {
      width: 64px;
    }
    &.unfold {
      width: 200px;
    }
    position: fixed;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow: auto;
    transition: width .5s;
    .logo {
      display: flex;
      align-items: center;
      font-size: 18px;
      height: 50px;
      img {
        margin: 0 16px;
        width: 32px;
        height: 32px;
      }
    }
    .nav-menu {
      height: calc(100vh - 50px);
      border-right: none;
    }
  }
  .content-right {
    &.fold {
      margin-left: 64px;
    }
    &.unfold {
      margin-left: 200px;
    }
    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
      .nav-left {
        display: flex;
        align-items: center;
        .menu-fold {
          margin-right: 15px;
          font-size: 18px;
        }
      }
      .user-info {
        .notice {
          line-height: 30px;
          margin-right: 15px;
        }
        .user-link {
          cursor: pointer;
          color: #409eff;
        }
      }
    }
    .wrapper {
      background: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);
      .main-page {
        background-color: #fff;
        height: 100%;
      }
    }
  }
}
</style>
