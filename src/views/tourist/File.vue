<template>
<div class="file-container">
  <div class="tool-bar">
    <div class="tool-bar-item" @click="$router.go(-1)">
      <span class="iconfont icon-return"></span>
      <span>返回</span>
    </div>
    <div class="tool-bar-item">
      <span class="iconfont icon-viewed"></span>
      <span>{{ viewedRef }}</span>
    </div>
  </div>
  <markdown-previewer :content="contentRef"></markdown-previewer>
</div>
</template>

<script>
import { getCurrentInstance, onMounted, ref } from 'vue'
import MarkdownPreviewer from '@/components/tourist/MarkdownPreviewer.vue'

export default {
  components: {
    MarkdownPreviewer
  },
  setup () {
    const { proxy } = getCurrentInstance()
    const contentRef = ref('')
    const viewedRef = ref(0)

    onMounted(() => {
      getFileItem()
    })

    const getFileItem = async () => {
      const { content, viewed } = await proxy.$api.fileItem({ _id: proxy.$route.params.id })
      contentRef.value = content
      viewedRef.value = viewed
    }

    return {
      contentRef,
      viewedRef
    }
  }
}
</script>

<style lang="less" scoped>
.file-container {
  max-width: 900px;
  margin: 0 auto;
  .tool-bar {
    padding: 20px;
    display: flex;
    justify-content: space-around;
    .tool-bar-item {
      width: 70px;
      .iconfont {
        padding-right: 5px;
      }
    }
  }
}
</style>
