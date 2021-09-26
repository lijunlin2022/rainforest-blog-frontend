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
</div>
</template>

<script>
import { getCurrentInstance, onMounted, ref, watch } from 'vue'
import DirAndFileTable from '@/components/tourist/DIrAndFileTable.vue'

export default {
  components: {
    DirAndFileTable
  },
  setup () {
    const { proxy } = getCurrentInstance()
    const oldPdirRef = ref('')
    const pDirIdRef = ref(proxy.$route.params.id)
    const pDirNameRef = ref(proxy.$route.params.name)

    onMounted(() => {
      getDirAndFileList()
    })

    watch(pDirIdRef, () => {
      oldPdirRef.value = pDirIdRef
      getDirAndFileList()
    })

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

    return {
      oldPdirRef,
      pDirIdRef,
      dirListRef,
      fileListRef,
      pathRecordRef,
      handleBreadClick,
      handleDirClick
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
}
</style>
