<template>
  <div class="overview">
    <div class="split-marker">Profile</div>
    <div class="profile">
      <profile :content="profileContent"></profile>
    </div>
    <div class="split-marker">Repository</div>
    <div class="repository">
      <dir-card
        v-for="item in repListRef"
        :key="item._id"
        :name="item.dirName"
        :description="item.description"
        @click="$router.push(`/dir/${item._id}/${item.dirName}`)"
      />
      <i></i><i></i><i></i>
    </div>
    <div class="split-marker">Article</div>
    <div class="article">
      <file-card
        v-for="item in fileListRef"
        :key="item._id"
        :name="item.filename"
        :abstract="item.abstract"
        :createTime="item.createTime.substring(0, 10)"
        :updateTime="item.updateTime.substring(0, 10)"
        @click="$router.push(`/file/${item._id}`)"
      />
    </div>
    <button @click="readMore">阅读更多</button>
  </div>
  <blog-footer></blog-footer>
</template>

<script>
import { getCurrentInstance, onMounted, ref } from 'vue'
import Profile from '@/components/tourist/Profile.vue'
import DirCard from '@/components/tourist/DirCard.vue'
import FileCard from '@/components/tourist/FileCard.vue'
import BlogFooter from '@/components/tourist/BlogFooter.vue'

export default {
  name: 'Overview',
  components: {
    Profile,
    DirCard,
    FileCard,
    BlogFooter
  },
  setup () {
    const { proxy } = getCurrentInstance()
    const profileContent = ref('')
    const filePager = { current: 1, size: 10 }
    const repListRef = ref([])
    const fileListRef = ref([])

    onMounted(() => {
      getProfile()
      getRepositoryList()
      getFileList()
    })

    const getProfile = async () => {
      const res = await proxy.$api.fileItem({ pDirName: 'RainforestBlog', filename: 'Profile' })
      if (res) {
        profileContent.value = res.content
      }
    }
    const getRepositoryList = async () => {
      const { list } = await proxy.$api.repositoryList()
      repListRef.value = list
    }

    const getFileList = async () => {
      filePager.sortMode = '-updateTime'
      const { list } = await proxy.$api.fileList(filePager)
      fileListRef.value = list
    }

    const readMore = async () => {
      filePager.current += 1
      const { list } = await proxy.$api.fileList(filePager)
      fileListRef.value.push(...list)
    }

    return {
      profileContent,
      repListRef,
      fileListRef,
      readMore
    }
  }
}
</script>

<style lang="less" scoped>
.overview {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  background-color: #fff;
  .split-marker {
    width: 100%;
    text-align: left;
    padding: 16px;
    color: #24292f;
    font-size: 16px;
  }
  .repository {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    i {
      width: 300px;
    }
  }
  .article {
    display: flex;
    flex-wrap: wrap;
  }
  button {
    width: 250px;
    padding: 10px;
    margin: 10px;
    border: none;
    border: 1px solid #ddd;
    background-color: #fff;
  }
}
</style>
