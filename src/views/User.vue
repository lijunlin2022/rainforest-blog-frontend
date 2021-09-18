<template>
  <div class="user-manager">
    <div class="query-form">
      <el-form inline>
        <el-form-item>
          <el-input placeholder="请输入用户 ID"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入用户名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select>
            <el-option :value="0" label="所有"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small">查询</el-button>
          <el-button size="small">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="base-table">
      <div class="action">
        <el-button type="primary" size="small">新增</el-button>
        <el-button type="danger" size="small">批量删除</el-button>
      </div>
      <el-table :data="userList">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column
          v-for="item in columns"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
        >
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button @click="handleEdit(scope.row)" size="small" type="text">编辑</el-button>
            <el-button @click="handleDelete(scope.row)" size="small" type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'User',
  setup () {
    const user = reactive({})
    const userList = ref([
      {
        userId: 1,
        username: '宋江',
        userEmail: 'liangshan@qq.com',
        state: '在线'
      },
      {
        userId: 2,
        username: '卢俊义',
        userEmail: 'liangshan@qq.com',
        state: '在线'
      }
    ])

    const columns = reactive([
      { label: '用户 ID', prop: 'userId' },
      { label: '用户名', prop: 'username' },
      { label: '用户邮箱', prop: 'userEmail' },
      { label: '用户状态', prop: 'state' }
    ])

    return {
      user,
      userList,
      columns
    }
  }
}
</script>

<style lang="less" scoped>
</style>
