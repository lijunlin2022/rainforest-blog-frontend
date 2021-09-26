<template>
  <div class="user-manager">
    <div class="base-table">
      <div class="action">
        <el-button type="primary" size="small" @click="handleDirFormVisible">新建文件夹</el-button>
        <el-button type="danger" size="small" @click="handleFileFormVisible">新建文件</el-button>
      </div>

      <el-breadcrumb class="path-bread" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="(item, index) in pathRecordRef"
          :key="item._id"
          @click="handleBreadClick(index)"
        >
          {{ item.dirName }}
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="container">
        <!-- 文件夹 -->
        <div class="box" v-for="item in dirListRef" :key="item._id" @contextmenu.prevent="handleDirRightClick(item)">
          <el-tooltip
            :content="item.description ? item.description : '无描述信息'"
            placement="right-start"
            effect="light"
          >
            <el-image
              class="img"
              fit="contain"
              :src="dirImgUrl"
              @click.once="handleDirClick(item)"
            />
          </el-tooltip>
          <div class="name">{{ item.dirName }}</div>
        </div>

        <!-- 文件 -->
        <div class="box" v-for="item in fileListRef" :key="item._id" @contextmenu.prevent="handleFileRightClick(item)">
          <el-tooltip
            :content="item.abstract ? item.abstract : '无摘要信息'"
            placement="right-start"
            effect="light"
          >
            <el-image
              class="img"
              fit="contain"
              :src="fileImgUrl"
              @click="handleFileClick(item)"
            />
          </el-tooltip>
          <div class="name">{{ item.filename }}</div>
        </div>
      </div>
    </div>

    <!-- 更新和删除文件夹的表单 -->
    <el-drawer v-model="dirDrawerRef">
      <el-form :model="dirForm" class="m-lr10">
        <el-form-item label="名字" prop="dirName">
          <el-input type="text" v-model="dirForm.dirName" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input type="text" v-model="dirForm.description" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="handleDirUpdate">更新</el-button>
          <el-button type="danger" size="small" @click="handleDirDelete">删除</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>

    <!-- 更新和删除文件的表单 -->
    <el-drawer v-model="fileDrawerRef">
      <el-form :model="fileForm" class="m-lr10">
        <el-form-item label="名字" prop="filename">
          <el-input type="text" v-model="fileForm.filename" />
        </el-form-item>
        <el-form-item label="摘要" prop="abstract">
          <el-input type="text" v-model="fileForm.abstract" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="handleFileUpdate">更新</el-button>
          <el-button type="danger" size="small" @click="handleFileDelete">删除</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>

    <!-- 新建文件夹的表单 -->
    <el-dialog title="新建文件夹" v-model="dirFormVisibleRef">
      <el-form :model="dirForm">
        <el-form-item label="名字">
          <el-input v-model="dirForm.dirName" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="dirForm.description" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dirFormVisibleRef = false">取 消</el-button>
          <el-button type="primary" @click="handleDirAdd">确 定</el-button>
        </span>
      </template>
    </el-dialog>

    <el-dialog title="新建文件" v-model="fileFormVisibleRef">
      <el-form :model="fileForm">
        <el-form-item label="名字">
          <el-input v-model="fileForm.filename" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="fileForm.abstract" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="fileFormVisibleRef = false">取 消</el-button>
          <el-button type="primary" @click="handleFileAdd">确 定</el-button>
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
    const dirImgUrl = require('@/assets/img/dir.png')
    const fileImgUrl = require('@/assets/img/file.png')

    onMounted(() => {
      getRepositoryList()
    })

    // 文件夹和文件列表
    const dirListRef = ref([])
    const fileListRef = ref([])

    const getRepositoryList = async () => {
      const { list } = await proxy.$api.repositoryList()
      dirListRef.value = list
    }

    const getDirAndFileList = async (item) => {
      const params = { pDirId: item._id || '', state: 0 }
      const dirRes = await proxy.$api.dirList(params)
      const fileRes = await proxy.$api.fileList(params)
      dirListRef.value = dirRes.list
      fileListRef.value = fileRes.list
    }

    // 新建 | 更新 | 删除文件夹
    const dirForm = reactive({})
    const dirFormVisibleRef = ref(false)
    const dirDrawerRef = ref(false)

    const handleDirFormVisible = () => {
      Object.keys(dirForm).forEach(key => {
        dirForm[key] = ''
      })
      dirFormVisibleRef.value = true
    }

    const handleDirRightClick = async (item) => {
      dirDrawerRef.value = !dirDrawerRef.value
      Object.assign(dirForm, item)
    }

    const handleDirAdd = async () => {
      const pDir = pathRecordRef.value[pathRecordRef.value.length - 1]
      dirForm.pDirId = pDir._id
      dirForm.pDirName = pDir.dirName
      if (pDir._id !== '') {
        dirForm.dirType = 1
      }
      await proxy.$api.dirAdd(dirForm)
      getDirAndFileList(pDir)
      proxy.$message.success('新增成功')
      dirFormVisibleRef.value = false
    }

    const handleDirUpdate = async () => {
      await proxy.$api.dirUpdate(dirForm)
      getDirAndFileList(pathRecordRef.value[pathRecordRef.value.length - 1])
      proxy.$message.success('更新成功')
      dirDrawerRef.value = false
    }

    const handleDirDelete = async () => {
      await proxy.$api.dirDelete({ _ids: [dirForm._id] })
      getDirAndFileList(pathRecordRef.value[pathRecordRef.value.length - 1])
      proxy.$message.success('删除成功')
      dirDrawerRef.value = false
    }

    // 新建 | 更新 | 删除文件
    const fileFormVisibleRef = ref(false)
    const fileForm = reactive({})
    const fileDrawerRef = ref(false)

    const handleFileFormVisible = () => {
      Object.keys(fileForm).forEach(key => {
        fileForm[key] = ''
      })
      fileFormVisibleRef.value = true
    }

    const handleFileRightClick = async (item) => {
      fileDrawerRef.value = !fileDrawerRef.value
      Object.assign(fileForm, item)
    }

    const handleFileAdd = async () => {
      const pDir = pathRecordRef.value[pathRecordRef.value.length - 1]
      fileForm.pDirId = pDir._id
      fileForm.pDirName = pDir.dirName
      await proxy.$api.fileAdd(fileForm)
      getDirAndFileList(pathRecordRef.value[pathRecordRef.value.length - 1])
      proxy.$message.success('新增成功')
      fileFormVisibleRef.value = false
    }

    const handleFileUpdate = async () => {
      await proxy.$api.fileUpdate(fileForm)
      getDirAndFileList(pathRecordRef.value[pathRecordRef.value.length - 1])
      proxy.$message.success('更新成功')
      fileDrawerRef.value = false
    }

    const handleFileDelete = async () => {
      await proxy.$api.fileDelete({ _ids: [fileForm._id] })
      getDirAndFileList(pathRecordRef.value[pathRecordRef.value.length - 1])
      proxy.$message.success('删除成功')
      fileDrawerRef.value = false
    }

    // 文件 | 文件夹被鼠标左键点击
    const handleDirClick = async (item) => {
      pathRecordRef.value.push(item)
      getDirAndFileList(item)
    }

    const handleFileClick = async (item) => {
      const path = proxy.$router.resolve({
        path: `/admin/file/${item._id}`
      })
      window.open(path.href, '_blank')
    }

    // 路径的面包屑
    const pathRecordRef = ref([{ _id: '', dirName: 'repository', pDirId: '' }])

    const handleBreadClick = async (index) => {
      pathRecordRef.value.splice(index + 1)
      getDirAndFileList(pathRecordRef.value[index])
    }

    return {
      dirImgUrl,
      fileImgUrl,

      dirListRef,
      fileListRef,
      dirForm,
      dirFormVisibleRef,
      dirDrawerRef,
      handleDirFormVisible,
      handleDirRightClick,
      handleDirAdd,
      handleDirUpdate,
      handleDirDelete,

      fileForm,
      fileFormVisibleRef,
      fileDrawerRef,
      handleFileFormVisible,
      handleFileRightClick,
      handleFileAdd,
      handleFileUpdate,
      handleFileDelete,

      pathRecordRef,
      handleDirClick,
      handleFileClick,
      handleBreadClick
    }
  }
}
</script>

<style lang="less" scoped>
.base-table {
  cursor: pointer;
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
