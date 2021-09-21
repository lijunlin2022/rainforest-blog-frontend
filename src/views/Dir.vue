<template>
  <div class="user-manager">
    <div class="base-table">
      <div class="action">
        <el-button type="primary" size="small" @click="dirFormVisible = true">新建文件夹</el-button>
        <el-button type="danger" size="small">新建文件</el-button>
      </div>

      <el-breadcrumb class="path-bread" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="(item, index) in pathRecord"
          :key="item._id"
          @click="handleBreadClick(index)"
        >
          {{ item.dirName }}
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="container">
        <div class="box" v-for="item in dirList" :key="item._id" @contextmenu.prevent="handleDirRightClick(item)">
          <el-tooltip
            :content="item.description ? item.description : '无描述信息'"
            placement="right-start"
            effect="light"
          >
            <el-image
              class="img"
              fit="contain"
              :src="dirImgUrl"
              @click="handleDirClick(item)"
            />
          </el-tooltip>
          <div class="name">{{ item.dirName }}</div>
        </div>
        <div class="box" v-for="item in fileList" :key="item._id">
          <el-tooltip
            :content="item.abstract ? item.abstract : '无摘要信息'"
            placement="right-start"
            effect="light"
          >
            <el-image
              class="img"
              fit="contain"
              :src="fileImgUrl"
              @click="handleFileClick(item._id)"
            />
          </el-tooltip>
          <div class="name">{{ item.filename }}</div>
        </div>
      </div>
    </div>

    <el-drawer v-model="dirDrawer">
      <el-form :model="currentDirForm" class="m-lr10">
        <el-form-item label="名字" prop="dirName">
          <el-input type="text" v-model="currentDirForm.dirName" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input type="text" v-model="currentDirForm.description" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="handleDirUpdate">更新</el-button>
          <el-button type="danger" size="small" @click="handleDirDelete">删除</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>

    <el-dialog title="新建文件夹" v-model="dirFormVisible">
      <el-form :model="currentDirForm">
        <el-form-item label="名字">
          <el-input v-model="currentDirForm.dirName" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="currentDirForm.description" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dirFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleDirAdd">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance, reactive } from 'vue'

export default {
  name: 'User',
  setup () {
    const { proxy } = getCurrentInstance()
    const dirImgUrl = ref(require('../assets/img/dir.png'))
    const fileImgUrl = ref(require('../assets/img/file.png'))
    const dirList = ref([])
    const fileList = ref([])
    const dirDrawer = ref(false)
    const dirFormVisible = ref(false)
    const pathRecord = ref([{ _id: '', dirName: 'repository', pDirId: '' }])
    const currentDirForm = reactive({})

    onMounted(() => {
      getRepositoryList()
    })

    const getRepositoryList = async () => {
      try {
        const { list } = await proxy.$api.repositoryList()
        dirList.value = list
      } catch (e) {
        console.error(e)
      }
    }

    const getDirAndFileList = async (item) => {
      try {
        const params = { pDirId: item._id || '', state: 0 }
        const dirRes = await proxy.$api.dirList(params)
        const fileRes = await proxy.$api.fileList(params)
        dirList.value = dirRes.list
        fileList.value = fileRes.list
      } catch (e) {
        console.error(e)
      }
    }

    // 处理文件夹被点击的事件
    const handleDirClick = async (item) => {
      pathRecord.value.push(item)
      getDirAndFileList(item)
    }

    // 文件被点击
    const handleFileClick = async (_id) => {

    }

    // 文件夹的面包屑被点击
    const handleBreadClick = async (index) => {
      pathRecord.value.splice(index + 1)
      getDirAndFileList(pathRecord.value[index])
    }

    // 文件夹被鼠标右键点击
    const handleDirRightClick = async (item) => {
      dirDrawer.value = !dirDrawer.value
      Object.assign(currentDirForm, item)
    }

    // 文件夹更新按钮
    const handleDirUpdate = async () => {
      try {
        await proxy.$api.dirUpdate(currentDirForm)
        getDirAndFileList(pathRecord.value[pathRecord.value.length - 1])
        proxy.$message.success('更新成功')
        dirDrawer.value = false
      } catch (e) {
        console.error(e)
      }
    }

    // 文件夹删除按钮
    const handleDirDelete = async () => {
      try {
        await proxy.$api.dirDelete({ _ids: [currentDirForm._id] })
        getDirAndFileList(pathRecord.value[pathRecord.value.length - 1])
        proxy.$message.success('删除成功')
        dirDrawer.value = false
      } catch (e) {
        console.error(e)
      }
    }

    // 新建文件夹
    const handleDirAdd = async () => {
      const pDirId = pathRecord.value[pathRecord.value.length - 1]._id
      currentDirForm.pDirId = pDirId
      if (pDirId !== '') {
        currentDirForm.state = 1
      }
      try {
        await proxy.$api.dirAdd(currentDirForm)
        getDirAndFileList(pathRecord.value[pathRecord.value.length - 1])
        proxy.$message.success('新增成功')
        dirFormVisible.value = false
      } catch (e) {
        console.error(e)
      }
    }

    return {
      dirList,
      fileList,
      dirImgUrl,
      fileImgUrl,
      pathRecord,
      dirDrawer,
      dirFormVisible,
      currentDirForm,
      handleDirClick,
      handleDirRightClick,
      handleDirUpdate,
      handleDirDelete,
      handleDirAdd,
      handleFileClick,
      handleBreadClick
    }
  }
}
</script>

<style lang="less">
.base-table {
  .path-bread {
    margin: 20px;
  }
  .container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    padding-left: 20px;
    padding-bottom: 20px;
    cursor: pointer;
    .box {
      width: 80px;
      margin-right: 20px;
      text-align: center;
      .img {
        width: 50px;
        height: 50px;
      }
      .name {
        padding: 5px 0;
        font-size: 12px;
      }
    }
  }
}
.drawer {
  .form {
    margin: 20px;
  }
}
</style>
