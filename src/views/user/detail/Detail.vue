<template>
  <div class="note-detail">
    <b-breadcrumb></b-breadcrumb>
    <tool-bar :createdTime="noteData.created_time" :updatedTime="noteData.updated_time"> </tool-bar>
    <v-md-preview class="preview" :text="noteData.content" @copy-code-success="copyCodeSuccess()"> </v-md-preview>
  </div>
</template>

<script>
import BBreadcrumb from '@/components/breadcrumb/BBreadcrumb.vue'
import ToolBar from './components/ToolBar.vue'
import { getNoteDetail } from '@/api/notes.js'

export default {
  components: {
    BBreadcrumb,
    ToolBar
  },
  data () {
    return {
      noteData: {}
    }
  },
  methods: {
    copyCodeSuccess () {
      alert('复制成功')
    }
  },
  async created () {
    const result = await getNoteDetail({ id: this.$route.params.id })
    this.noteData = this.$utils.htmlDecodeObject(result.data.data)
    console.log(this.$route)
  }
}
</script>

<style scoped>
.note-detail {
  box-sizing: border-box;
  max-width: 900px;
  margin: 20px auto;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
.b-breadcrumb {
  margin: 25px;
}
.preview {
  padding-top: 0px;
}
</style>
