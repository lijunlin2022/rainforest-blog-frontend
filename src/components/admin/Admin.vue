<template>
  <div class="basic-layout">
    <div :class="['nav-side', isCollapse ? 'fold' : 'unfold']">
      <!-- 导航菜单 -->
      <el-menu
        class="nav-menu"
        :default-active="activeMenu"
        background-color="#001529"
        text-color="#fff"
        router
        :collapse="isCollapse"
      >
        <tree-menu :menuList="menuList"></tree-menu>
      </el-menu>
    </div>
    <div :class="['content-right', isCollapse ? 'fold' : 'unfold']">
      <div class="nav-top">
        <div class="nav-left">
          <div class="menu-fold" @click="toggle"><i class="el-icon-s-fold"></i></div>
          <bread-crumb></bread-crumb>
        </div>
        <div class="nav-right">
          <el-button @click="logout" size="small">退出</el-button>
        </div>
      </div>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TreeMenu from './TreeMenu.vue'
import BreadCrumb from './BreadCrumb.vue'
export default {
  name: 'Home',
  components: {
    TreeMenu,
    BreadCrumb
  },
  data () {
    return {
      isCollapse: true,
      userInfo: this.$store.state.userInfo,
      noticeCount: 0,
      menuList: [
        {
          _id: 1,
          menuName: '笔记本',
          pMenuId: null,
          path: '/',
          icon: 'el-icon-folder',
          children: [
            {
              _id: 2,
              menuName: '文件管理',
              pMenuId: 1,
              path: '/admin/dir',
              children: []
            },
            {
              _id: 3,
              menuName: '回收站',
              pMenuId: 1,
              path: '/admin/dustbin',
              children: []
            }
          ]
        }
      ],
      activeMenu: location.pathname
    }
  },
  methods: {
    toggle () {
      this.isCollapse = !this.isCollapse
    },
    logout () {
      this.$store.commit('reomveUserInfo')
      this.$router.replace('/login')
      this.$messgae.success('退出成功')
    }
  }
}
</script>

<style lang="less">
.basic-layout {
  position: relative;
  .nav-side {
    &.fold {
      width: 0;
    }
    &.unfold {
      width: 200px;
    }
    position: fixed;
    min-height: 100vh;
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
    transition: margin-left .5s;
    &.fold {
      margin-left: 0;
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
    }
    .wrapper {
      background: #eef0f3;
      padding: 20px;
      min-height: calc(100vh - 50px);
    }
  }
}
</style>
