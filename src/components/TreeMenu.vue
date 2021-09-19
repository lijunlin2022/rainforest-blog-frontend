<template>
  <template v-for="menu in menuList">
    <el-sub-menu
      v-if="menu.children && menu.children.length > 0"
      :key="menu._id"
      :index="menu.path"
    >
      <template #title>
        <i :class="menu.icon"></i>
        <span>{{ menu.menuName }}</span>
      </template>
      <tree-menu :menuList="menu.children"></tree-menu>
    </el-sub-menu>
    <el-menu-item v-else :index="menu.path" :key="menu._id">
      {{ menu.menuName }}
    </el-menu-item>
  </template>
</template>

<script>
export default {
  name: 'TreeMenu',
  props: {
    menuList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
