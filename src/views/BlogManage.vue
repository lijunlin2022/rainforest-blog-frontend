<template>
  <div class="blog-manage">
    <a-layout>
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
      >
        <div class="logo" />
        <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
          <a-menu-item key="1">
            <folder-open-outlined />
            <span class="nav-text">笔记本</span>
          </a-menu-item>
          <a-menu-item key="2">
            <upload-outlined />
            <span class="nav-text">新建博客</span>
          </a-menu-item>
          <a-menu-item key="3">
            <video-camera-outlined />
            <span class="nav-text">nav 2</span>
          </a-menu-item>
          <a-menu-item key="4">
            <user-outlined />
            <span class="nav-text">nav 4</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content :style="{ margin: '24px 16px 0' }">
          <div
            :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
          >
            <router-view />
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import {
  FolderOpenOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    FolderOpenOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  },

  setup() {
    const onCollapse = (collapsed, type) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = (broken) => {
      console.log(broken);
    };

    return {
      selectedKeys: ref(["4"]),
      onCollapse,
      onBreakpoint,
    };
  },
});
</script>
<style>
.ant-layout {
  min-height: 100vh;
}
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout-sub-header-background {
  background: #141414;
}
</style>
