<template>
  <div class="file-container">
    <div class="tool-bar">
      <el-button size="small" type="danger" @click="handleFileSave">保存</el-button>
    </div>
    <markdown-editor
      v-model:content="fileForm.content"
      @updateParent="updateFormContent"
    >
    </markdown-editor>
    <el-dialog
      v-model="dialogVisibleRef"
      title="保存成功"
      center
      :show-close="false"
      :close-on-click-modal="false"
    >
      <span>{{ timerRef }} 秒后自动关闭窗口</span>
    </el-dialog>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/admin/MarkdownEditor.vue'
import { ref, reactive, onMounted, getCurrentInstance } from 'vue'
export default {
  components: {
    MarkdownEditor
  },
  setup () {
    const { proxy } = getCurrentInstance()

    const fileForm = reactive({
      content: '# Please enter the file content'
    })

    onMounted(async () => {
      const res = await proxy.$api.fileItem({ _id: proxy.$route.params._id })
      Object.assign(fileForm, res)
    })

    const timerRef = ref(3)
    const dialogVisibleRef = ref(false)
    const handleFileSave = async () => {
      await proxy.$api.fileUpdate(fileForm)
      dialogVisibleRef.value = true
      setInterval(() => {
        timerRef.value -= 1
        if (timerRef.value === 0) {
          window.close()
        }
      }, 1000)
    }

    const updateFormContent = (val) => {
      fileForm.content = val
    }

    return {
      fileForm,
      handleFileSave,
      updateFormContent,
      timerRef,
      dialogVisibleRef
    }
  }
}
</script>

<style lang="less" scoped>
.file-container {
  padding: 20px 0;
  .tool-bar {
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    padding: 0 10px;
    background-color: #fff;
  }
  .dialog {
    span {
      text-align: center;
    }
  }
}

</style>
