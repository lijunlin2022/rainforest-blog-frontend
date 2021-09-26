<template>
<div class="dir-container">
  <el-breadcrumb class="path-bread" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      v-for="(item, index) in pathRecordRef"
      :key="item._id"
      @click="handleBreadClick(index)"
    >
      {{ item.dirName }}
    </el-breadcrumb-item>
  </el-breadcrumb>
  <dir-and-file-table
    :dirListRef="dirListRef"
    :fileListRef="fileListRef"
    @dirClick="handleDirClick"
  >
  </dir-and-file-table>
  <hr />
  <markdown-previewer :content="readmeContentRef"></markdown-previewer>
</div>
</template>

<script>
import { getCurrentInstance, onMounted, ref, watch } from 'vue'
import DirAndFileTable from '@/components/tourist/DIrAndFileTable.vue'
import MarkdownPreviewer from '@/components/tourist/MarkdownPreviewer.vue'

export default {
  components: {
    DirAndFileTable,
    MarkdownPreviewer
  },
  setup () {
    const { proxy } = getCurrentInstance()
    const pDirIdRef = ref(proxy.$route.params.id)
    const pDirNameRef = ref(proxy.$route.params.name)

    onMounted(() => {
      getDirAndFileList()
      getReadmeContent()
    })

    watch(pDirIdRef, () => {
      getDirAndFileList()
      readmeContentRef.value = ''
      if (pathRecordRef.value[0]._id === pDirIdRef.value) {
        getReadmeContent()
      }
    })

    // 获取文件和文件夹列表
    const dirListRef = ref([])
    const fileListRef = ref([])

    const getDirAndFileList = async () => {
      const params = { pDirId: pDirIdRef.value || '', state: 0 }
      const dirRes = await proxy.$api.dirList(params)
      const fileRes = await proxy.$api.fileList(params)
      dirListRef.value = dirRes.list
      fileListRef.value = fileRes.list
    }

    const pathRecordRef = ref([{ _id: pDirIdRef.value, dirName: pDirNameRef.value }])

    const handleDirClick = async (item) => {
      pDirIdRef.value = item._id
      pDirNameRef.value = item.dirName
      pathRecordRef.value.push({ _id: item._id, dirName: item.dirName })
    }

    const handleBreadClick = async (index) => {
      pathRecordRef.value.splice(index + 1)
      pDirIdRef.value = pathRecordRef.value[index]._id
      pDirNameRef.value = pathRecordRef.value[index].dirName
      getDirAndFileList()
    }

    // 获取 README 内容
    const readmeContentRef = ref('')
    const getReadmeContent = async () => {
      const { content } = await proxy.$api.fileItem({ pDirId: pDirIdRef.value, filename: 'README' })
      readmeContentRef.value = content
    }

    return {
      pDirIdRef,
      dirListRef,
      fileListRef,
      pathRecordRef,
      handleBreadClick,
      handleDirClick,
      readmeContentRef
    }
  }
}
</script>

<style lang="less" scoped>
.dir-container {
  max-width: 900px;
  margin: 0 auto;
  background-color: #fff;
  .path-bread {
    padding: 20px 25px;
    font-size: 16px;
  }
  hr {
    border: 1px solid #f6f8fa;
  }
}
</style>
