<template>
  <div class="blog-manage">
    <a-layout>
      <a-layout-sider breakpoint="lg" collapsed-width="0">
        <div class="logo" />
        <a-menu theme="dark" mode="inline">
          <a-menu-item key="1" @click="changeMenu('/admin/notebook')">
            <folder-open-outlined />
            <span class="nav-text">新建笔记本</span>
          </a-menu-item>
          <a-menu-item key="2" @click="changeMenu('/admin/edit')">
            <upload-outlined />
            <span class="nav-text">新建博客</span>
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
import { FolderOpenOutlined, UploadOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    FolderOpenOutlined,
    UploadOutlined,
  },
  methods: {
    changeMenu(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
  },
};
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
