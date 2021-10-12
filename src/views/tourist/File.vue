<template>
<header>
  <div class="tool-bar">
    <div class="tool-bar-item" @click="isUnfoldLeftRef = !isUnfoldLeftRef">
      <span class="iconfont icon-right-arrow"></span>
      <span>博客目录</span>
    </div>
    <div class="tool-bar-item" @click="$router.go(-1)">
      <span class="iconfont icon-back"></span>
      <span>回退</span>
    </div>
    <div class="tool-bar-item">
      <span class="iconfont icon-create"></span>
      <span>{{ fileData.createTime.substring(5, 10) }}</span>
    </div>
    <div class="tool-bar-item" @click="isUnfoldRightRef = !isUnfoldRightRef">
      <span class="iconfont icon-left-arrow"></span>
      <span>相关文章</span>
    </div>
  </div>
</header>
<main>
  <div :class="['left', isUnfoldLeftRef ? 'unfold' : '']">
    <ul>
      <li>博客目录</li>
      <li
        v-for="item in catalogueRef"
        :key="item.text"
        @click="handleJumpLocation(item.id)"
      >
      {{ item.text }}
      </li>
    </ul>
  </div>
  <div class="file-container">
    <markdown-previewer :content="fileData.content" @recvCatalogue="handleCatalogue"></markdown-previewer>
  </div>
  <div :class="['right', isUnfoldRightRef ? 'unfold' : '']">
    <ul>
      <li>相关文章</li>
      <li
        v-for="item in filesInSamePdirRef"
        :key="item._id"
        @click="handleAboutArticle(item._id)"
      >
      {{ item.filename }}
      </li>
    </ul>
  </div>
</main>
<footer>
  <div class="tool-bar">
    <div class="tool-bar-item" @click="isUnfoldLeftRef = !isUnfoldLeftRef">
      <span class="iconfont icon-right-arrow"></span>
      <span>博客目录</span>
    </div>
    <div class="tool-bar-item">
      <span class="iconfont icon-viewed"></span>
      <span>{{ fileData.viewed }}</span>
    </div>
    <div class="tool-bar-item">
      <span class="iconfont icon-update"></span>
      <span>{{ fileData.updateTime.substring(5, 10) }}</span>
    </div>
    <div class="tool-bar-item" @click="isUnfoldRightRef = !isUnfoldRightRef">
      <span class="iconfont icon-left-arrow"></span>
      <span>相关文章</span>
    </div>
  </div>
</footer>
</template>

<script>
import { getCurrentInstance, onMounted, reactive, ref, watch } from 'vue'
import MarkdownPreviewer from '@/components/tourist/MarkdownPreviewer.vue'

export default {
  components: {
    MarkdownPreviewer
  },
  setup () {
    const isUnfoldLeftRef = ref(false)
    const isUnfoldRightRef = ref(false)
    const fileIdRef = ref('')
    const { proxy } = getCurrentInstance()
    const catalogueRef = ref([])

    const fileData = reactive({
      pDirId: '',
      pDirName: '',
      content: '',
      viewed: 0,
      updateTime: '',
      createTime: ''
    })

    const filesInSamePdirRef = ref([])

    onMounted(() => {
      fileIdRef.value = proxy.$route.params.id
      getFileItem()
    })

    watch(fileIdRef, () => {
      getFileItem()
      window.scrollTo(0, 0)
    })

    const getFileItem = async () => {
      const res = await proxy.$api.fileItem({ _id: fileIdRef.value })
      Object.assign(fileData, res)
      getFilesInSamePdir()
      const clientWidth = document.body.clientWidth
      if (clientWidth >= 1500) {
        isUnfoldLeftRef.value = true
        isUnfoldRightRef.value = true
      }
    }

    const getFilesInSamePdir = async () => {
      const { list } = await proxy.$api.fileList({ pDirId: fileData.pDirId })
      filesInSamePdirRef.value = list
    }

    const handleCatalogue = async (arr) => {
      catalogueRef.value = arr
    }

    const handleJumpLocation = async (id) => {
      const y = document.getElementById(`data-id-${id}`).offsetTop - 150
      window.scrollTo(0, y)
      const clientWidth = document.body.clientWidth
      if (clientWidth < 1500) {
        isUnfoldLeftRef.value = false
        isUnfoldRightRef.value = false
      }
    }

    const handleAboutArticle = (id) => {
      fileIdRef.value = id
      const clientWidth = document.body.clientWidth
      if (clientWidth < 1500) {
        isUnfoldLeftRef.value = false
        isUnfoldRightRef.value = false
      }
    }

    return {
      isUnfoldRightRef,
      isUnfoldLeftRef,
      fileData,
      filesInSamePdirRef,
      catalogueRef,
      fileIdRef,
      handleCatalogue,
      handleJumpLocation,
      handleAboutArticle
    }
  }
}
</script>

<style lang="less" scoped>
header, footer {
  position: fixed;
  width: 100%;
  background-color: #fff;
  color: #000;
  .tool-bar {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    .tool-bar-item {
      width: 100px;
      font-size: 12px;
      .iconfont {
        padding-right: 3px;
      }
    }
  }
}
header {
  .tool-bar {
    border-bottom: 1px solid #ccc;
  }
}
footer {
  bottom: 0;
  .tool-bar {
    border-top: 1px solid #ccc;
  }
}
main {
  width: 100%;
  padding: 40px 0;
  .file-container {
    max-width: 900px;
    margin: 0 auto;
  }
  .left, .right {
    position: fixed;
    cursor: pointer;
    width: 300px;
    background-color: #f5f7f9;
    ::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    ul {
      height: calc(100vh - 100px);
      list-style-type: none;
      overflow-y: scroll;
      font-size: 12px;
      padding: 14px;
      li {
        margin: 10px;
        padding: 0 5px;
        line-height: 1.5;
        &:hover {
          color: #d73a49;
        }
        &:first-child {
          font-weight: bold;
          color: #d73a49;
        }
      }
    }
  }
  .left {
    transform: translateX(-100%);
    transition: transform .5s;
    &.unfold {
      transform: translateX(0);
    }
  }
  .right {
    top: 100px;
    right: -300px;
    transition: right .5s;
    &.unfold {
      right: 0;
    }
  }
}

</style>
