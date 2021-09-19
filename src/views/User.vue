<template>
  <div class="user-manager">
    <div class="query-form">
      <el-form inline :model="options" ref="searchForm">
        <el-form-item label="用户 ID" prop="_id">
          <el-input placeholder="请输入用户 ID" v-model="options._id"></el-input>
        </el-form-item>
        <el-form-item label="用户名称" prop="username">
          <el-input placeholder="请输入用户名称" v-model="options.username"></el-input>
        </el-form-item>
        <el-form-item label="用户状态" prop="state">
          <el-select v-model="options.state">
            <el-option :value="0" label="所有"></el-option>
            <el-option :value="1" label="在职"></el-option>
            <el-option :value="2" label="离职"></el-option>
            <el-option :value="3" label="试用期"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="handleQuery">查询</el-button>
          <el-button size="small" @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="base-table">
      <div class="action">
        <el-button type="primary" size="small">新增</el-button>
        <el-button type="danger" size="small" @click="handleDeleteMany">批量删除</el-button>
      </div>
      <el-table :data="userList" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column
          v-for="item in columns"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :formatter="item.formatter"
        >
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button @click="handleEdit(scope.row)" size="small" type="text">编辑</el-button>
            <el-button @click="handleDeleteOne(scope.row)" size="small" type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :total="pager.total"
        :page-count="pager.current"
        :page-size="pager.size"
        @current-change="handleCurrentChange"
      />

      <el-dialog :model="userForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="userForm.sername" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userForm.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="userForm.phone" placeholder="请输入手机号码" />
        </el-form-item>
        <el-form-item label="用户角色" prop="roleList">
          <el-select v-model="userForm.roleList">
            <el-option></el-option>
          </el-select>
        </el-form-item>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, getCurrentInstance } from 'vue'

export default {
  name: 'User',
  setup () {
    const { proxy } = getCurrentInstance()

    // 搜索的选项
    const options = reactive({
      _id: '',
      username: '',
      state: 0
    })

    const userList = ref([])

    // 分页的选项
    const pager = reactive({
      current: 1,
      size: 10
    })

    const columns = reactive([
      { label: '用户 ID', prop: '_id' },
      { label: '用户名', prop: 'username' },
      { label: '用户邮箱', prop: 'email' },
      {
        label: '用户角色',
        prop: 'roleId',
        formatter (row, column, value) {
          return {
            0: '管理员',
            1: '普通用户',
            2: '其他'
          }[value]
        }
      }
    ])

    // 批量删除时选中的用户
    const checkedUserIds = ref([])

    onMounted(() => {
      getUserList()
    })

    // 表格多选
    const handleSelectionChange = (list) => {
      const arr = []
      list.forEach(item => {
        arr.push(item._id)
      })
      checkedUserIds.value = arr
    }

    const getUserList = async () => {
      const params = { ...options, pager }
      try {
        const { list, page } = await proxy.$api.userList(params)
        userList.value = list
        pager.total = page.total
      } catch (e) {
        console.error(e)
      }
    }

    const handleQuery = () => {
      getUserList()
    }

    const handleReset = () => {
      proxy.$refs.searchForm.resetFields()
    }

    const handleCurrentChange = (current) => {
      pager.current = current
      getUserList()
    }

    const handleDeleteOne = async (row) => {
      try {
        await proxy.$api.userDelete({
          userIds: [
            row._id
          ]
        })
        proxy.$message.success('删除成功')
        getUserList()
      } catch (e) {
        console.error(e)
      }
    }

    const handleDeleteMany = async () => {
      if (checkedUserIds.value.length === 0) {
        proxy.$message.error('请选择要删除的用户')
        return
      }
      try {
        await proxy.$api.userDelete({
          userIds: checkedUserIds.value
        })
        proxy.$message.success('删除成功')
        getUserList()
      } catch (e) {
        console.error(e)
      }
    }

    return {
      userList,
      columns,
      options,
      pager,
      checkedUserIds,
      handleQuery,
      handleReset,
      handleCurrentChange,
      handleDeleteOne,
      handleDeleteMany,
      handleSelectionChange
    }
  }
}
</script>
