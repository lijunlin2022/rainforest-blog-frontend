<template>
  <div class="dustbin">
    <div class="container">
      <!-- 文件夹 -->
      <div class="box" v-for="item in dirListRef" :key="item._id" @contextmenu.prevent="handleRightClick(item)">
        <el-tooltip
          :content="item.description ? item.description : '无描述信息'"
          placement="right-start"
          effect="light"
        >
          <el-image
            class="img"
            fit="contain"
            :src="dirImgUrl"
          />
        </el-tooltip>
        <div class="name">{{ item.dirName }}</div>
        <ul :class="[item.show ? 'show' : '']">
          <li @click="item.show = false">取消操作</li>
          <li @click="restoreDir(item)">还原到原始位置</li>
          <li @click="completelyDeleteDir(item)">彻底删除</li>
        </ul>
      </div>

      <!-- 文件 -->
      <div class="box" v-for="item in fileListRef" :key="item._id" @contextmenu.prevent="handleRightClick(item)">
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
        <ul :class="[item.show ? 'show' : '']">
          <li @click="item.show = false">取消操作</li>
          <li @click="restoreFile(item)">还原到原始位置</li>
          <li @click="completelyDeleteFile(item)">彻底删除</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from 'vue'

export default {
  name: 'User',
  setup () {
    const dirImgUrl = require('@/assets/img/dir.png')
    const fileImgUrl = require('@/assets/img/file.png')
    const fileListRef = ref([])
    const dirListRef = ref([])
    const { proxy } = getCurrentInstance()

    onMounted(() => {
      getDirAndFileList()
    })

    const getDirAndFileList = async () => {
      const params = { state: 1 }
      const dirRes = await proxy.$api.dirList(params)
      const fileRes = await proxy.$api.fileList(params)
      dirListRef.value = dirRes.list
      fileListRef.value = fileRes.list
    }

    const handleRightClick = async (item) => {
      item.show = true
    }

    const restoreDir = async (item) => {
      item.state = 0
      await proxy.$api.dirUpdate(item)
      getDirAndFileList()
      proxy.$message.success('还原成功')
    }

    const completelyDeleteDir = async (item) => {
      await proxy.$api.dirCompletelyDelete({ _id: item._id })
      getDirAndFileList()
      proxy.$message.success('删除成功')
    }

    const restoreFile = async (item) => {
      item.state = 0
      await proxy.$api.fileUpdate(item)
      getDirAndFileList()
      proxy.$message.success('还原成功')
    }

    const completelyDeleteFile = async (item) => {
      await proxy.$api.fileCompletelyDelete({ _id: item._id })
      getDirAndFileList()
      proxy.$message.success('删除成功')
    }

    return {
      dirImgUrl,
      fileImgUrl,
      dirListRef,
      fileListRef,
      handleRightClick,
      restoreDir,
      completelyDeleteDir,
      restoreFile,
      completelyDeleteFile
    }
  }
}
</script>

<style lang="less" scoped>
.dustbin {
  cursor: pointer;
  padding-top: 20px;
  background-color: #fff;
  .container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    padding-left: 20px;
    padding-bottom: 20px;
    .box {
      position: relative;
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
      ul {
        display: none;
        &.show {
          display: block;
        }
        position: absolute;
        top: 60px;
        left: 60px;
        width: 150px;
        list-style-type: none;
        background-color: #aaa;
        border: 1px solid #777;
        box-shadow: 2px 2px 2px rgba(5, 5, 5, 0.7);
        li {
          padding: 8px;
          font-size: 14px;
          background-color: #aaa;
          border-bottom: 1px solid #777;
          &:hover {
            background-color: #eee;
          }
        }
      }
    }
  }
}
</style>
