<template>
  <div class="overview">
    <div class="split-marker">Profile</div>
    <div class="profile">
      <profile :content="profileContent"></profile>
    </div>
    <div class="split-marker">Repository</div>
    <div class="repository">
      <dir-card
        v-for="item in repList"
        :key="item._id"
        :name="item.dirName"
        :description="item.description"
      />
      <i></i><i></i><i></i>
    </div>
    <div class="split-marker">Article</div>
    <div class="article">
      <file-card
        v-for="item in fileList"
        :key="item._id"
        :name="item.filename"
        :abstract="item.abstract"
        :createTime="item.createTime.substring(0, 10)"
        :updateTime="item.updateTime.substring(0, 10)"
      />
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, ref } from 'vue'
import Profile from '@/components/tourist/Profile.vue'
import DirCard from '@/components/tourist/DirCard.vue'
import FileCard from '@/components/tourist/FileCard.vue'

export default {
  name: 'Overview',
  components: {
    Profile,
    DirCard,
    FileCard
  },
  setup () {
    const { proxy } = getCurrentInstance()
    const profileContent = ref('')
    const filePager = { current: 1, size: 10 }
    const repList = ref([])
    const fileList = ref([])

    onMounted(() => {
      getProfile()
      getRepositoryList()
      getFileList()
    })

    const getProfile = async () => {
      const { content } = await proxy.$api.fileItem({ filename: 'profile' })
      profileContent.value = content
      console.log('profileContent => ', profileContent.value)
    }
    const getRepositoryList = async () => {
      const { list } = await proxy.$api.repositoryList()
      repList.value = list
    }

    const getFileList = async () => {
      const { list } = await proxy.$api.fileList(filePager)
      fileList.value = list
    }

    return {
      profileContent,
      repList,
      fileList
    }
  }
}
</script>

<style lang="less" scoped>
.overview {
  max-width: 900px;
  margin: 0 auto;
  background-color: #fff;
  .split-marker {
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
}
</style>
