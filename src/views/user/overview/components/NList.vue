<template>
  <section class="notebooks">
    <notebook
      v-for="item in notebookArray"
      :key="item.id"
      @click="$utils.changeRoute(`/nDetail/${item.id}`)"
      :name="item.name"
      :description="item.description"
    >
    </notebook>
  </section>
</template>

<script>
import { getNotebookList } from '@/api/notebooks.js'
import Notebook from '@/components/notebook/Notebook.vue'
export default {
  components: {
    Notebook
  },
  data () {
    return {
      notebookArray: []
    }
  },
  async created () {
    try {
      const notebooks = await getNotebookList({})
      this.notebookArray = notebooks.data.data.map((item) => {
        return this.$utils.htmlDecodeObject(item)
      })
    } catch (e) {
      console.error('获取 notebooks 失败', e)
    }
  }
}
</script>

<style scoped>
.notebooks {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
</style>
